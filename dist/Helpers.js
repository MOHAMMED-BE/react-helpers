"use strict";
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
exports.notify = exports.frCustomeErrorNotify = exports.enCustomeErrorNotify = exports.warningNotify = exports.infoNotify = exports.errorNotify = exports.successNotify = exports.deleteNotify = exports.updateNotify = exports.postNotify = exports.removeHtmlTags = exports.getTodayDate = exports.formatDate = exports.TruncateText = exports.formatPrice = exports.handleScrollTop = exports.decodeHtmlTags = exports.encodeHtmlTags = exports.isEven = exports.getFirstWord = exports.arabicSlugGenerator = exports.slugGenerator = exports.referenceGenerator = exports.randomKeyGenerator = exports.formDataGenerator = void 0;
var react_1 = __importDefault(require("react"));
var slugify_1 = __importDefault(require("slugify"));
var react_toastify_1 = require("react-toastify");
function formDataGenerator(object, prefix, formData) {
    if (prefix === void 0) { prefix = ""; }
    for (var key in object) {
        if (object.hasOwnProperty(key)) {
            var propKey = prefix
                ? "".concat(prefix, "[").concat(key === "file" ? "value" : key, "]")
                : key;
            var value = object[key];
            if (value != null) {
                if (value instanceof Blob) {
                    formData.append(propKey, value);
                }
                else if (typeof value === "object" && value !== null) {
                    if (value.hasOwnProperty('uri')) {
                        formData.append(propKey, value);
                    }
                    else {
                        formDataGenerator(value, propKey, formData);
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
    _a["<"] = "@lt",
    _a[">"] = "@gt",
    _a);
var decodeHtmlAssociations = (_b = {},
    _b["@lt"] = "<",
    _b["@gt"] = ">",
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
function postNotify(entity) {
    react_toastify_1.toast.success("".concat(entity, " ajout\u00E9 avec succ\u00E8s"));
}
exports.postNotify = postNotify;
;
function updateNotify(entity) {
    react_toastify_1.toast.success("".concat(entity, " modifi\u00E9 avec succ\u00E8s"));
}
exports.updateNotify = updateNotify;
;
function deleteNotify(entity) {
    react_toastify_1.toast.success("".concat(entity, " supprim\u00E9 avec succ\u00E8s"));
}
exports.deleteNotify = deleteNotify;
;
function successNotify(text) {
    react_toastify_1.toast.success("".concat(text));
}
exports.successNotify = successNotify;
;
function errorNotify(text) {
    react_toastify_1.toast.error("".concat(text));
}
exports.errorNotify = errorNotify;
;
function infoNotify(text) {
    react_toastify_1.toast.info("".concat(text));
}
exports.infoNotify = infoNotify;
;
function warningNotify(text) {
    react_toastify_1.toast.warning("".concat(text));
}
exports.warningNotify = warningNotify;
;
function enCustomeErrorNotify() {
    react_toastify_1.toast.error('Something wrong, try again');
}
exports.enCustomeErrorNotify = enCustomeErrorNotify;
;
function frCustomeErrorNotify() {
    react_toastify_1.toast.error('Une erreur est survenue, réessayez');
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
