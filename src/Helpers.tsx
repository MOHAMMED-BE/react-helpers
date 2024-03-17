import React from "react";
import axios from 'axios'
import slugify from 'slugify';
import { toast } from 'react-toastify';
import { DateElement, DateFormatElement, DateFormatTemplate, TruncateTextProps, labelProps } from './index.types'

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
            const { product } = item
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

export function slugGenerator(inputString: string): string {
    let string = inputString.replace(/&/g, 'et').replace(/'|’/g, '-').replace('$', '');

    const transliterated = slugify(string, {
        lower: true,
        remove: /[^a-zA-Z0-9 -]/g,
    });

    const slug = transliterated.replace(/ /g, '-').replace(/-+/g, '-').replace(/^-+|-+$/g, '');

    return slug;
}

export function arabicSlugGenerator(inputString: string): string {
    let string = inputString
        .replace(/&/g, 'et')
        .replace(/'|’/g, '-')
        .replace(/\$/g, '');

    const slug = string
        .replace(/ /g, '-')
        .replace(/-+/g, '-')
        .replace(/^-+|-+$/g, '');

    return slug;
}

export const getFirstWord = (inputString: string): string => {
    const words = inputString.split(' ');
    if (words.length === 1) {
        return words[0];
    }
    const initials = words.map((word) => word.charAt(0));
    return initials.join('').replace('&', '').replace('-', '');
};

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

    return truncatedText;
}


export function formatDate(
    dateInput: string,
    template: DateFormatTemplate = ({ day, month, year }) => `${day}-${month}-${year}`,
    asInputValue: boolean = false
): string {
    const datePart = dateInput.includes('T') ? dateInput.slice(0, 10) : dateInput;
    const [year, month, day] = datePart.split('-');

    const dateFormat: Record<DateFormatElement, string> = { year, month, day };

    if (asInputValue) {
        const date = new Date(dateInput);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = String(date.getFullYear());

        return `${year}-${month}-${day}`;
    }

    return template(dateFormat);
}

export const getTodayDate = (dateElements: DateFormatElement[] = ['day', 'month', 'year']): string => {
    const today = new Date();
    const dateFormat: Record<DateFormatElement, string> = {
        year: String(today.getFullYear()),
        month: String(today.getMonth() + 1).padStart(2, '0'),
        day: String(today.getDate()).padStart(2, '0'),
    };

    const formattedDate = dateElements.map((element) => dateFormat[element]).join('-');
    return formattedDate;
};

export function removeHtmlTags(input: any) {
    return input.replace(/<[^>]*>/g, '');
}

export const FormLabel = ({ value, isRequired = true, className }: labelProps) => {
    return <label className={`col-lg-6 col-md-6 col-form-label fw-bold fs-6 ${isRequired ? 'required' : ''} ${className}`}>{value}</label>
}



// -----------------------------
// Notify
// -----------------------------

export function postNotify(entity: string) {
    toast.success(`${entity} ajouté avec succès`);
};

export function updateNotify(entity: string) {
    toast.success(`${entity} modifié avec succès`);
};

export function deleteNotify(entity: string) {
    toast.success(`${entity} supprimé avec succès`);
};

export function successNotify(text: string) {
    toast.success(`${text}`);
};

export function errorNotify(text: string) {
    toast.error(`${text}`);
};

export function infoNotify(text: string) {
    toast.info(`${text}`);
};

export function warningNotify(text: string) {
    toast.warning(`${text}`);
};

export function enCustomeErrorNorify() {
    toast.error('Something wrong, try again');
};

export function frCustomeErrorNorify() {
    toast.error('Une erreur est survenue, réessayez');
};


export const notify = {
    postNotify,
    updateNotify,
    deleteNotify,
    successNotify,
    errorNotify,
    infoNotify,
    warningNotify,
    enCustomeErrorNorify,
    frCustomeErrorNorify
};