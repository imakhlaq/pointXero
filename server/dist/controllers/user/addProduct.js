"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var zod_1 = require("zod");
var createProductDTO_1 = __importDefault(require("../../validations/createProductDTO"));
var formatError_1 = __importDefault(require("../../utils/formatError"));
var database_1 = require("../../db/database");
function addProduct(req, res) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var product, newProduct, _err_1, err;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    product = createProductDTO_1.default.parse(req.body);
                    return [4 /*yield*/, database_1.prisma.product.create({
                            data: {
                                title: product.title,
                                userId: "d1a0af50-6193-4b54-af16-4667d7a11948",
                                description: product.description,
                                brand: product.brand,
                                currentPrice: product.currentPrice,
                                marketPrice: product.marketPrice,
                                public: product.public,
                                features: {
                                    create: product.features.map(function (feature) {
                                        return { feature: feature };
                                    }),
                                },
                                categories: {
                                    create: product.categories.map(function (category) {
                                        return { category: category };
                                    }),
                                },
                                image: {
                                    create: product.image.map(function (img) {
                                        return { url: img };
                                    }),
                                },
                                size: {
                                    create: product.size.map(function (size) {
                                        return { size: size.size, quantity: size.quantity };
                                    }),
                                },
                            },
                            include: {
                                features: true,
                                categories: true,
                                image: true,
                                size: true,
                            },
                        })];
                case 1:
                    newProduct = _b.sent();
                    return [2 /*return*/, res.status(201).json(newProduct)];
                case 2:
                    _err_1 = _b.sent();
                    if (_err_1 instanceof zod_1.ZodError) {
                        return [2 /*return*/, res.status(402).json((0, formatError_1.default)(_err_1))];
                    }
                    err = _err_1;
                    return [2 /*return*/, res.status((_a = err.statusCode) !== null && _a !== void 0 ? _a : 500).json((0, formatError_1.default)(err))];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.default = addProduct;