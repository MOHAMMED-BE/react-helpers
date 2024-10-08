import React from "react";
import { DateElement, DateFormatElement, TruncateTextProps } from './index.types';
export type DateFormatTemplate = (dateFormat: Record<DateFormatElement, string>) => string;
export declare function formDataGenerator(object: any, formData: FormData, prefix?: String): void;
export declare const randomKeyGenerator: (length: number) => string;
export declare const referenceGenerator: (randomLength?: number, ...elements: DateElement[]) => string;
export declare function slugGenerator(inputString: string): string;
export declare function arabicSlugGenerator(inputString: string): string;
export declare const exportDataToExcel: (data: any, fileName: string) => Promise<void>;
export declare const getFirstWord: (inputString: string) => string;
export declare function isEven(number: number): boolean;
export declare function encodeHtmlTags(html: string): string;
export declare function decodeHtmlTags(html: any): any;
export declare const handleScrollTop: () => void;
export declare function formatPrice(price: string): string;
export declare function TruncateText({ text, maxLength }: TruncateTextProps): string | React.JSX.Element;
export declare function formatDate(dateInput: string, template?: DateFormatTemplate, asInputValue?: boolean): string;
export declare const getTodayDate: (dateElements?: DateFormatElement[]) => string;
export declare function removeHtmlTags(input: any): any;
export declare function useDebounce<T>(value: T, delay: number): T;
export declare function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void];
export declare function postNotify(entity: string, delay?: number): void;
export declare function updateNotify(entity: string, delay?: number): void;
export declare function deleteNotify(entity: string, delay?: number): void;
export declare function successNotify(text: string, delay?: number): void;
export declare function errorNotify(text: string, delay?: number): void;
export declare function infoNotify(text: string, delay?: number): void;
export declare function warningNotify(text: string, delay?: number): void;
export declare function enCustomeErrorNotify(delay?: number): void;
export declare function frCustomeErrorNotify(delay?: number): void;
export declare const notify: {
    postNotify: typeof postNotify;
    updateNotify: typeof updateNotify;
    deleteNotify: typeof deleteNotify;
    successNotify: typeof successNotify;
    errorNotify: typeof errorNotify;
    infoNotify: typeof infoNotify;
    warningNotify: typeof warningNotify;
    enCustomeErrorNotify: typeof enCustomeErrorNotify;
    frCustomeErrorNotify: typeof frCustomeErrorNotify;
};
