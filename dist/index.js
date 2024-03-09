"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDate = exports.TruncateText = exports.handleImageLinkDrage = exports.formatPrice = exports.handleScrollTop = exports.referenceGenerator = exports.decodeHtmlTags = exports.encodeHtmlTags = exports.isEven = exports.randomKeyGenerator = exports.transformCartData = exports.transformData = void 0;
const react_1 = __importDefault(require("react"));
const axios_1 = __importDefault(require("axios"));
const transformData = async (data) => {
    const transformedData = data.map((item, index) => {
        const { product, variant, isvariant, itemtype, ...rest } = item;
        const transformedItem = {
            ...(itemtype === 'product' ? { product: `api/products/${product}` } : {}),
            ...(isvariant && variant ? { variant: `api/variants/${variant}` } : {}),
            ...(itemtype === 'pack' ? { pack: `api/packs/${product}` } : {}),
            ...(isvariant ? { isvariant: true } : { isvariant: false }),
            ...rest,
        };
        return transformedItem;
    });
    return transformedData;
};
exports.transformData = transformData;
const transformCartData = async (data) => {
    const packIdsArray = await Promise.all(data.map(async (item) => {
        const { product, pack, ...rest } = item;
        let uniqId = typeof product === 'string' ? product : null;
        if (uniqId !== null) {
            const response = await axios_1.default.get(`pack-id/uniq_id/${product}`);
            if (response.status === 200) {
                return response.data.packId;
            }
        }
        return null;
    }));
    const transformedData = data.map((item, index) => {
        const { product, variant, isvariant, ...rest } = item;
        const packId = typeof product === 'string' ? packIdsArray[index] : null;
        const transformedItem = {
            ...(typeof product === 'number' ? { product: `api/products/${product}` } : {}),
            ...(isvariant && variant ? { variant: `api/variants/${variant}` } : {}),
            ...(typeof product === 'string' && packId !== null ? { pack: `api/packs/${packId}` } : {}),
            ...(isvariant ? { isvariant: true } : { isvariant: false }),
            ...rest,
        };
        return transformedItem;
    });
    return transformedData;
};
exports.transformCartData = transformCartData;
const randomKeyGenerator = (length) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz';
    let randomKey = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomKey += characters.charAt(randomIndex);
    }
    return randomKey;
};
exports.randomKeyGenerator = randomKeyGenerator;
function isEven(number) {
    return number % 2 === 0;
}
exports.isEven = isEven;
const encodeHtmlAssociations = {
    ["<"]: "@lt",
    [">"]: "@gt",
};
const decodeHtmlAssociations = {
    ["@lt"]: "<",
    ["@gt"]: ">",
};
function encodeHtmlTags(html) {
    Object.keys(encodeHtmlAssociations).forEach((key) => {
        html = html.replace(new RegExp(key, "g"), encodeHtmlAssociations[key]);
    });
    return html;
}
exports.encodeHtmlTags = encodeHtmlTags;
function decodeHtmlTags(html) {
    Object.keys(decodeHtmlAssociations).forEach((key) => {
        html = html.replace(new RegExp(key, "g"), decodeHtmlAssociations[key]);
    });
    return html;
}
exports.decodeHtmlTags = decodeHtmlTags;
const referenceGenerator = (...elements) => {
    const currentDate = new Date();
    const dateElements = {
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
exports.referenceGenerator = referenceGenerator;
const handleScrollTop = () => {
    document.documentElement.scrollTop = 0;
};
exports.handleScrollTop = handleScrollTop;
function formatPrice(price) {
    const numericPrice = parseFloat(price);
    if (isNaN(numericPrice)) {
        return price;
    }
    return numericPrice.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).replace(',', ' ');
}
exports.formatPrice = formatPrice;
const handleImageLinkDrage = (e) => {
    e.preventDefault();
};
exports.handleImageLinkDrage = handleImageLinkDrage;
function TruncateText({ text, maxLength }) {
    if (text.length <= maxLength) {
        return react_1.default.createElement("span", null, text);
    }
    const truncatedText = text.slice(0, maxLength) + '...';
    return react_1.default.createElement("span", null, truncatedText);
}
exports.TruncateText = TruncateText;
function formatDate(dateInput, template) {
    const datePart = dateInput.includes('T') ? dateInput.slice(0, 10) : dateInput;
    const [year, month, day] = datePart.split('-');
    const dateFormat = { year, month, day };
    return template(dateFormat);
}
exports.formatDate = formatDate;
