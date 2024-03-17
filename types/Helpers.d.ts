import React from "react";
import { DateElement, DateFormatElement, DateFormatTemplate, TruncateTextProps, labelProps } from './index.types';
export declare const transformData: (data: any[]) => Promise<any[]>;
export declare const transformCartData: (data: any[]) => Promise<any[]>;
export declare const randomKeyGenerator: (length: number) => string;
export declare const referenceGenerator: (...elements: DateElement[]) => string;
export declare function slugGenerator(inputString: string): string;
export declare function arabicSlugGenerator(inputString: string): string;
export declare const getFirstWord: (inputString: string) => string;
export declare function isEven(number: number): boolean;
export declare function encodeHtmlTags(html: string): string;
export declare function decodeHtmlTags(html: any): any;
export declare const handleScrollTop: () => void;
export declare function formatPrice(price: string): string;
export declare const handleImageLinkDrage: (e: any) => void;
export declare function TruncateText({ text, maxLength }: TruncateTextProps): string | React.JSX.Element;
export declare function formatDate(dateInput: string, template?: DateFormatTemplate, asInputValue?: boolean): string;
export declare const getTodayDate: (dateElements?: DateFormatElement[]) => string;
export declare function removeHtmlTags(input: any): any;
export declare const FormLabel: ({ value, isRequired, className }: labelProps) => React.JSX.Element;
export declare function postNotify(entity: string): void;
export declare function updateNotify(entity: string): void;
export declare function deleteNotify(entity: string): void;
export declare function successNotify(text: string): void;
export declare function errorNotify(text: string): void;
export declare function infoNotify(text: string): void;
export declare function warningNotify(text: string): void;
export declare function enCustomeErrorNorify(): void;
export declare function frCustomeErrorNorify(): void;
export declare const notify: {
    postNotify: typeof postNotify;
    updateNotify: typeof updateNotify;
    deleteNotify: typeof deleteNotify;
    successNotify: typeof successNotify;
    errorNotify: typeof errorNotify;
    infoNotify: typeof infoNotify;
    warningNotify: typeof warningNotify;
    enCustomeErrorNorify: typeof enCustomeErrorNorify;
    frCustomeErrorNorify: typeof frCustomeErrorNorify;
};
