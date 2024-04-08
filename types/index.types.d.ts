export interface TruncateTextProps {
    text: string;
    maxLength: number;
}
export type DateElement = 'year' | 'month' | 'day' | 'hours' | 'minutes' | 'seconds' | 'randomNumber';
export type DateFormatElement = 'year' | 'month' | 'day';
export type DateFormatTemplate = (dateFormat: Record<DateFormatElement, string>) => string;
