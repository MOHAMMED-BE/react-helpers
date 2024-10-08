"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.notify = exports.frCustomeErrorNotify = exports.enCustomeErrorNotify = exports.warningNotify = exports.infoNotify = exports.errorNotify = exports.successNotify = exports.deleteNotify = exports.updateNotify = exports.postNotify = exports.useLocalStorage = exports.useDebounce = exports.removeHtmlTags = exports.getTodayDate = exports.formatDate = exports.TruncateText = exports.formatPrice = exports.handleScrollTop = exports.decodeHtmlTags = exports.encodeHtmlTags = exports.isEven = exports.getFirstWord = exports.exportDataToExcel = exports.arabicSlugGenerator = exports.slugGenerator = exports.referenceGenerator = exports.randomKeyGenerator = exports.formDataGenerator = void 0;
var react_1 = __importStar(require("react"));
var slugify_1 = __importDefault(require("slugify"));
var xlsx_1 = __importDefault(require("xlsx"));
var moment_1 = __importDefault(require("moment"));
var react_toastify_1 = require("react-toastify");
function formDataGenerator(object, formData, prefix) {
    if (prefix === void 0) { prefix = ""; }
    for (var key in object) {
        if (object.hasOwnProperty(key)) {
            var propKey = prefix
                ? "".concat(prefix, "[").concat(key === "file" ? "value" : key, "]")
                : key;
            var value = object[key];
            if (value != null) {
                if (value instanceof Date) {
                    formData.append(propKey, (0, moment_1.default)(value).format('YYYY-MM-DD'));
                }
                else if (value instanceof Blob) {
                    formData.append(propKey, value);
                }
                else if (typeof value === "object" && value !== null) {
                    if (value.hasOwnProperty('uri')) {
                        formData.append(propKey, value);
                    }
                    else {
                        formDataGenerator(value, formData, propKey);
                    }
                }
                else {
                    formData.append(propKey, value);
                }
            }
        }
    }
}
exports.formDataGenerator = formDataGenerator;
var randomKeyGenerator = function (length) {
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz';
    var randomKey = '';
    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * characters.length);
        randomKey += characters.charAt(randomIndex);
    }
    return randomKey;
};
exports.randomKeyGenerator = randomKeyGenerator;
var referenceGenerator = function (randomLength) {
    if (randomLength === void 0) { randomLength = 2; }
    var elements = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        elements[_i - 1] = arguments[_i];
    }
    var currentDate = new Date();
    var dateElements = {
        year: String(currentDate.getFullYear()).slice(-2),
        month: String(currentDate.getMonth() + 1).padStart(2, "0"),
        day: String(currentDate.getDate()).padStart(2, "0"),
        hours: String(currentDate.getHours()).padStart(2, "0"),
        minutes: String(currentDate.getMinutes()).padStart(2, "0"),
        seconds: String(currentDate.getSeconds()).padStart(2, "0"),
        randomNumber: Math.floor(Math.random() * Math.pow(10, randomLength)).toString().padStart(randomLength, "0"),
    };
    return elements.map(function (element) { return dateElements[element]; }).join('');
};
exports.referenceGenerator = referenceGenerator;
function slugGenerator(inputString) {
    var string = inputString.replace(/&/g, 'et').replace(/'|’/g, '-').replace('$', '');
    var transliterated = (0, slugify_1.default)(string, {
        lower: true,
        remove: /[^a-zA-Z0-9 -]/g,
    });
    var slug = transliterated.replace(/ /g, '-').replace(/-+/g, '-').replace(/^-+|-+$/g, '');
    return slug;
}
exports.slugGenerator = slugGenerator;
function arabicSlugGenerator(inputString) {
    var string = inputString
        .replace(/&/g, 'et')
        .replace(/'|’/g, '-')
        .replace(/\$/g, '');
    var slug = string
        .replace(/ /g, '-')
        .replace(/-+/g, '-')
        .replace(/^-+|-+$/g, '');
    return slug;
}
exports.arabicSlugGenerator = arabicSlugGenerator;
var exportDataToExcel = function (data, fileName) { return __awaiter(void 0, void 0, void 0, function () {
    var naming, wb, ws;
    return __generator(this, function (_a) {
        if (data) {
            naming = "".concat(fileName, ".xlsx");
            wb = xlsx_1.default.utils.book_new();
            ws = xlsx_1.default.utils.aoa_to_sheet(data);
            xlsx_1.default.utils.book_append_sheet(wb, ws, 'Sheet1');
            xlsx_1.default.writeFile(wb, naming);
        }
        return [2];
    });
}); };
exports.exportDataToExcel = exportDataToExcel;
var getFirstWord = function (inputString) {
    var words = inputString.split(' ');
    if (words.length === 1) {
        return words[0];
    }
    var initials = words.map(function (word) { return word.charAt(0); });
    return initials.join('').replace('&', '').replace('-', '');
};
exports.getFirstWord = getFirstWord;
function isEven(number) {
    return number % 2 === 0;
}
exports.isEven = isEven;
var encodeHtmlAssociations = (_a = {},
    _a['<'] = '@lt',
    _a['>'] = '@gt',
    _a['%'] = '@percent',
    _a['style="'] = '@style',
    _a[':'] = '@twopoint',
    _a[';'] = '@pointcomma',
    _a);
var decodeHtmlAssociations = (_b = {},
    _b['@lt'] = '<',
    _b['@gt'] = '>',
    _b['@percent'] = '%',
    _b['@style'] = 'style="',
    _b['@twopoint'] = ':',
    _b['@pointcomma'] = ';',
    _b);
function encodeHtmlTags(html) {
    Object.keys(encodeHtmlAssociations).forEach(function (key) {
        html = html.replace(new RegExp(key, "g"), encodeHtmlAssociations[key]);
    });
    return html;
}
exports.encodeHtmlTags = encodeHtmlTags;
function decodeHtmlTags(html) {
    Object.keys(decodeHtmlAssociations).forEach(function (key) {
        html = html.replace(new RegExp(key, "g"), decodeHtmlAssociations[key]);
    });
    return html;
}
exports.decodeHtmlTags = decodeHtmlTags;
var handleScrollTop = function () {
    document.documentElement.scrollTop = 0;
};
exports.handleScrollTop = handleScrollTop;
function formatPrice(price) {
    var numericPrice = parseFloat(price);
    if (isNaN(numericPrice)) {
        return price;
    }
    return numericPrice.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).replace(',', ' ');
}
exports.formatPrice = formatPrice;
function TruncateText(_a) {
    var text = _a.text, maxLength = _a.maxLength;
    if (text.length <= maxLength) {
        return react_1.default.createElement("span", null, text);
    }
    var truncatedText = text.slice(0, maxLength) + '...';
    return truncatedText;
}
exports.TruncateText = TruncateText;
function formatDate(dateInput, template, asInputValue) {
    if (template === void 0) { template = function (_a) {
        var day = _a.day, month = _a.month, year = _a.year;
        return "".concat(day, "-").concat(month, "-").concat(year);
    }; }
    if (asInputValue === void 0) { asInputValue = false; }
    var datePart = dateInput.includes('T') ? dateInput.slice(0, 10) : dateInput;
    var _a = __read(datePart.split('-'), 3), year = _a[0], month = _a[1], day = _a[2];
    var dateFormat = { year: year, month: month, day: day };
    if (asInputValue) {
        var date = new Date(dateInput);
        var day_1 = String(date.getDate()).padStart(2, '0');
        var month_1 = String(date.getMonth() + 1).padStart(2, '0');
        var year_1 = String(date.getFullYear());
        return "".concat(year_1, "-").concat(month_1, "-").concat(day_1);
    }
    return template(dateFormat);
}
exports.formatDate = formatDate;
var getTodayDate = function (dateElements) {
    if (dateElements === void 0) { dateElements = ['day', 'month', 'year']; }
    var today = new Date();
    var dateFormat = {
        year: String(today.getFullYear()),
        month: String(today.getMonth() + 1).padStart(2, '0'),
        day: String(today.getDate()).padStart(2, '0'),
    };
    var formattedDate = dateElements.map(function (element) { return dateFormat[element]; }).join('-');
    return formattedDate;
};
exports.getTodayDate = getTodayDate;
function removeHtmlTags(input) {
    return input.replace(/<[^>]*>/g, '');
}
exports.removeHtmlTags = removeHtmlTags;
function useDebounce(value, delay) {
    var _a = __read((0, react_1.useState)(value), 2), debouncedValue = _a[0], setDebouncedValue = _a[1];
    (0, react_1.useEffect)(function () {
        var handler = setTimeout(function () {
            setDebouncedValue(value);
        }, delay);
        return function () {
            clearTimeout(handler);
        };
    }, [value, delay]);
    return debouncedValue;
}
exports.useDebounce = useDebounce;
function useLocalStorage(key, initialValue) {
    var _a = __read((0, react_1.useState)(function () {
        try {
            var item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        }
        catch (error) {
            console.error(error);
            return initialValue;
        }
    }), 2), storedValue = _a[0], setStoredValue = _a[1];
    var setValue = function (value) {
        try {
            setStoredValue(value);
            window.localStorage.setItem(key, JSON.stringify(value));
        }
        catch (error) {
            console.error(error);
        }
    };
    return [storedValue, setValue];
}
exports.useLocalStorage = useLocalStorage;
function postNotify(entity, delay) {
    if (delay === void 0) { delay = 1500; }
    react_toastify_1.toast.success("".concat(entity, " ajout\u00E9 avec succ\u00E8s"), {
        autoClose: delay,
    });
}
exports.postNotify = postNotify;
;
function updateNotify(entity, delay) {
    if (delay === void 0) { delay = 1500; }
    react_toastify_1.toast.success("".concat(entity, " modifi\u00E9 avec succ\u00E8s"), {
        autoClose: delay,
    });
}
exports.updateNotify = updateNotify;
;
function deleteNotify(entity, delay) {
    if (delay === void 0) { delay = 1500; }
    react_toastify_1.toast.success("".concat(entity, " supprim\u00E9 avec succ\u00E8s"), {
        autoClose: delay,
    });
}
exports.deleteNotify = deleteNotify;
;
function successNotify(text, delay) {
    if (delay === void 0) { delay = 1500; }
    react_toastify_1.toast.success("".concat(text), {
        autoClose: delay,
    });
}
exports.successNotify = successNotify;
;
function errorNotify(text, delay) {
    if (delay === void 0) { delay = 1500; }
    react_toastify_1.toast.error("".concat(text), {
        autoClose: delay,
    });
}
exports.errorNotify = errorNotify;
;
function infoNotify(text, delay) {
    if (delay === void 0) { delay = 1500; }
    react_toastify_1.toast.info("".concat(text), {
        autoClose: delay,
    });
}
exports.infoNotify = infoNotify;
;
function warningNotify(text, delay) {
    if (delay === void 0) { delay = 1500; }
    react_toastify_1.toast.warning("".concat(text), {
        autoClose: delay,
    });
}
exports.warningNotify = warningNotify;
;
function enCustomeErrorNotify(delay) {
    if (delay === void 0) { delay = 1500; }
    react_toastify_1.toast.error('Something wrong try again', {
        autoClose: delay,
    });
}
exports.enCustomeErrorNotify = enCustomeErrorNotify;
;
function frCustomeErrorNotify(delay) {
    if (delay === void 0) { delay = 1500; }
    react_toastify_1.toast.error('Une erreur est survenue, réessayez', {
        autoClose: delay,
    });
}
exports.frCustomeErrorNotify = frCustomeErrorNotify;
;
exports.notify = {
    postNotify: postNotify,
    updateNotify: updateNotify,
    deleteNotify: deleteNotify,
    successNotify: successNotify,
    errorNotify: errorNotify,
    infoNotify: infoNotify,
    warningNotify: warningNotify,
    enCustomeErrorNotify: enCustomeErrorNotify,
    frCustomeErrorNotify: frCustomeErrorNotify
};
