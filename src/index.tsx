import React from "react";
import axios from 'axios'

interface TruncateTextProps {
    text: string
    maxLength: number;
}

type DateElement = 'year' | 'month' | 'day' | 'hours' | 'minutes' | 'seconds' | 'randomNumber';
type DateFormatElement = 'year' | 'month' | 'day';
type DateFormatTemplate = (dateFormat: Record<DateFormatElement, string>) => string;


export const transformData = async (data: any[]) => {
    const transformedData = data.map((item, index) => {
        const { product, variant, isvariant, itemtype, ...rest } = item

        const transformedItem: any = {
            ...(itemtype === 'product' ? { product: `api/products/${product}` } : {}),
            ...(isvariant && variant ? { variant: `api/variants/${variant}` } : {}),
            ...(itemtype === 'pack' ? { pack: `api/packs/${product}` } : {}),
            ...(isvariant ? { isvariant: true } : { isvariant: false }),
            ...rest,
        }

        return transformedItem
    })

    return transformedData
}

export const transformCartData = async (data: any[]) => {
    const packIdsArray = await Promise.all(
        data.map(async (item) => {
            const { product, pack, ...rest } = item
            let uniqId = typeof product === 'string' ? product : null

            if (uniqId !== null) {
                const response = await axios.get(`pack-id/uniq_id/${product}`);

                if (response.status === 200) {
                    return response.data.packId
                }
            }

            return null
        })
    )

    const transformedData = data.map((item, index) => {
        const { product, variant, isvariant, ...rest } = item
        const packId = typeof product === 'string' ? packIdsArray[index] : null

        const transformedItem: any = {
            ...(typeof product === 'number' ? { product: `api/products/${product}` } : {}),
            ...(isvariant && variant ? { variant: `api/variants/${variant}` } : {}),
            ...(typeof product === 'string' && packId !== null ? { pack: `api/packs/${packId}` } : {}),
            ...(isvariant ? { isvariant: true } : { isvariant: false }),
            ...rest,
        }

        return transformedItem
    })

    return transformedData
}

export const randomKeyGenerator = (length: number): string => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz';
    let randomKey = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomKey += characters.charAt(randomIndex);
    }

    return randomKey;
}

export function isEven(number: number): boolean {
    return number % 2 === 0;
}



const encodeHtmlAssociations: { [key: string]: string } = {
    ["<"]: "@lt",
    [">"]: "@gt",
}
const decodeHtmlAssociations: { [key: string]: string } = {
    ["@lt"]: "<",
    ["@gt"]: ">",
}

export function encodeHtmlTags(html: string): string {
    Object.keys(encodeHtmlAssociations).forEach((key: string) => {
        html = html.replace(new RegExp(key, "g"), encodeHtmlAssociations[key]);
    });
    return html
}

export function decodeHtmlTags(html: any): any {
    Object.keys(decodeHtmlAssociations).forEach((key: string) => {
        html = html.replace(new RegExp(key, "g"), decodeHtmlAssociations[key]);
    });
    return html
}


export const referenceGenerator = (...elements: DateElement[]): string => {
    const currentDate = new Date();
    const dateElements: Record<DateElement, string> = {
        year: String(currentDate.getFullYear()).slice(-2),
        month: String(currentDate.getMonth() + 1).padStart(2, "0"),
        day: String(currentDate.getDate()).padStart(2, "0"),
        hours: String(currentDate.getHours()).padStart(2, "0"),
        minutes: String(currentDate.getMinutes()).padStart(2, "0"),
        seconds: String(currentDate.getSeconds()).padStart(2, "0"),
        randomNumber: Math.floor(Math.random() * 99).toString().padStart(2, "0"),
    };

    return elements.map(element => dateElements[element]).join('');
};


export const handleScrollTop = () => {
    document.documentElement.scrollTop = 0;
};


export function formatPrice(price: string): string {
    const numericPrice = parseFloat(price);

    if (isNaN(numericPrice)) {
        return price;
    }

    return numericPrice.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).replace(',', ' ');
}


export const handleImageLinkDrage = (e: any) => {
    e.preventDefault();
};


export function TruncateText({ text, maxLength }: TruncateTextProps) {
    if (text.length <= maxLength) {
        return <span>{text}</span>;
    }

    const truncatedText = text.slice(0, maxLength) + '...';

    return <span>{truncatedText}</span>;
}


export function formatDate(dateInput: string, template: DateFormatTemplate): string {
    const datePart = dateInput.includes('T') ? dateInput.slice(0, 10) : dateInput;
    const [year, month, day] = datePart.split('-');

    const dateFormat: Record<DateFormatElement, string> = { year, month, day };

    return template(dateFormat);
}