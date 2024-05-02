import React from "react";
import slugify from 'slugify';
import { toast } from 'react-toastify';
import { DateElement, DateFormatElement, TruncateTextProps } from './index.types'
export type DateFormatTemplate = (dateFormat: Record<DateFormatElement, string>) => string;


export function formDataGenerator(object: any, prefix = "", formData: FormData) {
    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            const propKey = prefix
                ? `${prefix}[${key === "file" ? "value" : key}]`
                : key;
            const value = object[key];
            if (value != null) {
                if (value instanceof Blob) {
                    formData.append(propKey, value);
                } else if (typeof value === "object" && value !== null) {
                    if (value.hasOwnProperty('uri')) {
                        formData.append(propKey, value)
                    } else {
                        formDataGenerator(value, propKey, formData);
                    }
                } else {
                    formData.append(propKey, value);
                }
            }
        }
    }
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

export const referenceGenerator = (randomLength: number = 2, ...elements: DateElement[]): string => {
    const currentDate = new Date();
    const dateElements: Record<DateElement, string> = {
        year: String(currentDate.getFullYear()).slice(-2),
        month: String(currentDate.getMonth() + 1).padStart(2, "0"),
        day: String(currentDate.getDate()).padStart(2, "0"),
        hours: String(currentDate.getHours()).padStart(2, "0"),
        minutes: String(currentDate.getMinutes()).padStart(2, "0"),
        seconds: String(currentDate.getSeconds()).padStart(2, "0"),
        randomNumber: Math.floor(Math.random() * Math.pow(10, randomLength)).toString().padStart(randomLength, "0"),
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

export function enCustomeErrorNotify() {
    toast.error('Something wrong, try again');
};

export function frCustomeErrorNotify() {
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
    enCustomeErrorNotify,
    frCustomeErrorNotify
};