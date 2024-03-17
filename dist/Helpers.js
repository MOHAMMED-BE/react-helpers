"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
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
exports.notify = exports.frCustomeErrorNorify = exports.enCustomeErrorNorify = exports.warningNotify = exports.infoNotify = exports.errorNotify = exports.successNotify = exports.deleteNotify = exports.updateNotify = exports.postNotify = exports.FormLabel = exports.removeHtmlTags = exports.getTodayDate = exports.formatDate = exports.TruncateText = exports.handleImageLinkDrage = exports.formatPrice = exports.handleScrollTop = exports.decodeHtmlTags = exports.encodeHtmlTags = exports.isEven = exports.getFirstWord = exports.arabicSlugGenerator = exports.slugGenerator = exports.referenceGenerator = exports.randomKeyGenerator = exports.transformCartData = exports.transformData = void 0;
var react_1 = __importDefault(require("react"));
var axios_1 = __importDefault(require("axios"));
var slugify_1 = __importDefault(require("slugify"));
var react_toastify_1 = require("react-toastify");
var transformData = function (data) { return __awaiter(void 0, void 0, void 0, function () {
    var transformedData;
    return __generator(this, function (_a) {
        transformedData = data.map(function (item, index) {
            var product = item.product, variant = item.variant, isvariant = item.isvariant, itemtype = item.itemtype, rest = __rest(item, ["product", "variant", "isvariant", "itemtype"]);
            var transformedItem = __assign(__assign(__assign(__assign(__assign({}, (itemtype === 'product' ? { product: "api/products/".concat(product) } : {})), (isvariant && variant ? { variant: "api/variants/".concat(variant) } : {})), (itemtype === 'pack' ? { pack: "api/packs/".concat(product) } : {})), (isvariant ? { isvariant: true } : { isvariant: false })), rest);
            return transformedItem;
        });
        return [2, transformedData];
    });
}); };
exports.transformData = transformData;
var transformCartData = function (data) { return __awaiter(void 0, void 0, void 0, function () {
    var packIdsArray, transformedData;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, Promise.all(data.map(function (item) { return __awaiter(void 0, void 0, void 0, function () {
                    var product, uniqId, response;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                product = item.product;
                                uniqId = typeof product === 'string' ? product : null;
                                if (!(uniqId !== null)) return [3, 2];
                                return [4, axios_1.default.get("pack-id/uniq_id/".concat(product))];
                            case 1:
                                response = _a.sent();
                                if (response.status === 200) {
                                    return [2, response.data.packId];
                                }
                                _a.label = 2;
                            case 2: return [2, null];
                        }
                    });
                }); }))];
            case 1:
                packIdsArray = _a.sent();
                transformedData = data.map(function (item, index) {
                    var product = item.product, variant = item.variant, isvariant = item.isvariant, rest = __rest(item, ["product", "variant", "isvariant"]);
                    var packId = typeof product === 'string' ? packIdsArray[index] : null;
                    var transformedItem = __assign(__assign(__assign(__assign(__assign({}, (typeof product === 'number' ? { product: "api/products/".concat(product) } : {})), (isvariant && variant ? { variant: "api/variants/".concat(variant) } : {})), (typeof product === 'string' && packId !== null ? { pack: "api/packs/".concat(packId) } : {})), (isvariant ? { isvariant: true } : { isvariant: false })), rest);
                    return transformedItem;
                });
                return [2, transformedData];
        }
    });
}); };
exports.transformCartData = transformCartData;
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
var referenceGenerator = function () {
    var elements = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        elements[_i] = arguments[_i];
    }
    var currentDate = new Date();
    var dateElements = {
        year: String(currentDate.getFullYear()).slice(-2),
        month: String(currentDate.getMonth() + 1).padStart(2, "0"),
        day: String(currentDate.getDate()).padStart(2, "0"),
        hours: String(currentDate.getHours()).padStart(2, "0"),
        minutes: String(currentDate.getMinutes()).padStart(2, "0"),
        seconds: String(currentDate.getSeconds()).padStart(2, "0"),
        randomNumber: Math.floor(Math.random() * 99).toString().padStart(2, "0"),
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
var handleImageLinkDrage = function (e) {
    e.preventDefault();
};
exports.handleImageLinkDrage = handleImageLinkDrage;
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
var FormLabel = function (_a) {
    var value = _a.value, _b = _a.isRequired, isRequired = _b === void 0 ? true : _b, className = _a.className;
    return react_1.default.createElement("label", { className: "col-lg-6 col-md-6 col-form-label fw-bold fs-6 ".concat(isRequired ? 'required' : '', " ").concat(className) }, value);
};
exports.FormLabel = FormLabel;
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
function enCustomeErrorNorify() {
    react_toastify_1.toast.error('Something wrong, try again');
}
exports.enCustomeErrorNorify = enCustomeErrorNorify;
;
function frCustomeErrorNorify() {
    react_toastify_1.toast.error('Une erreur est survenue, réessayez');
}
exports.frCustomeErrorNorify = frCustomeErrorNorify;
;
exports.notify = {
    postNotify: postNotify,
    updateNotify: updateNotify,
    deleteNotify: deleteNotify,
    successNotify: successNotify,
    errorNotify: errorNotify,
    infoNotify: infoNotify,
    warningNotify: warningNotify,
    enCustomeErrorNorify: enCustomeErrorNorify,
    frCustomeErrorNorify: frCustomeErrorNorify
};
