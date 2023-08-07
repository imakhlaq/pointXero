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
var database_1 = require("../../db/database");
var zod_1 = require("zod");
var CustomError_1 = __importDefault(require("../../utils/CustomError"));
var formatError_1 = __importDefault(require("../../utils/formatError"));
var bodyDTO = zod_1.z.object({ prodId: zod_1.z.string(), versionId: zod_1.z.string() });
function updateCart(req, res) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var _b, prodId_1, versionId, product, productVersion, cartExit, currentPrice, cartData, productExistsInCart, qty, totalPrice, cartData, cartData, _err_1, err;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 10, , 11]);
                    _b = bodyDTO.parse(req.body), prodId_1 = _b.prodId, versionId = _b.versionId;
                    return [4 /*yield*/, database_1.prisma.product.findUnique({
                            where: { id: prodId_1 },
                            include: { versions: true },
                        })];
                case 1:
                    product = _c.sent();
                    if (!product) {
                        throw new CustomError_1.default("Product does not exits", 404);
                    }
                    return [4 /*yield*/, database_1.prisma.version.findUnique({
                            where: { id: versionId },
                        })];
                case 2:
                    productVersion = _c.sent();
                    if (!productVersion) {
                        throw new CustomError_1.default("Product does not exits", 404);
                    }
                    return [4 /*yield*/, database_1.prisma.cart.findUnique({
                            where: { userId: req.body.userId },
                            include: {
                                CartItem: {
                                    include: {
                                        product: {
                                            include: { image: true },
                                        },
                                        version: true,
                                    },
                                },
                            },
                        })];
                case 3:
                    cartExit = _c.sent();
                    if (!!cartExit) return [3 /*break*/, 5];
                    currentPrice = productVersion === null || productVersion === void 0 ? void 0 : productVersion.currentPrice;
                    return [4 /*yield*/, database_1.prisma.cart.create({
                            data: {
                                userId: req.body.userId,
                                CartItem: {
                                    create: {
                                        price: currentPrice,
                                        productId: prodId_1,
                                        quantity: 1,
                                        versionId: versionId,
                                    },
                                },
                                cartPrice: currentPrice,
                            },
                            include: {
                                CartItem: {
                                    include: {
                                        product: {
                                            include: { image: true },
                                        },
                                        version: true,
                                    },
                                },
                            },
                        })];
                case 4:
                    cartData = _c.sent();
                    return [2 /*return*/, res.json(cartData)];
                case 5:
                    productExistsInCart = cartExit.CartItem.find(function (item) { return item.productId === prodId_1; });
                    if (!productExistsInCart) return [3 /*break*/, 7];
                    qty = (_a = (productExistsInCart === null || productExistsInCart === void 0 ? void 0 : productExistsInCart.quantity) + 1) !== null && _a !== void 0 ? _a : 1;
                    totalPrice = +cartExit.cartPrice +
                        +(productVersion === null || productVersion === void 0 ? void 0 : productVersion.currentPrice) * (productExistsInCart.quantity + 1);
                    return [4 /*yield*/, database_1.prisma.cart.update({
                            where: { userId: req.body.userId },
                            data: {
                                userId: req.body.userId,
                                CartItem: {
                                    update: {
                                        where: { id: productExistsInCart.id },
                                        data: {
                                            quantity: qty,
                                        },
                                    },
                                },
                                cartPrice: totalPrice,
                            },
                            include: {
                                CartItem: {
                                    include: {
                                        product: {
                                            include: { image: true },
                                        },
                                        version: true,
                                    },
                                },
                            },
                        })];
                case 6:
                    cartData = _c.sent();
                    return [2 /*return*/, res.json(cartData)];
                case 7: return [4 /*yield*/, database_1.prisma.cart.update({
                        where: { userId: req.body.userId },
                        data: {
                            userId: req.body.userId,
                            CartItem: {
                                create: {
                                    productId: prodId_1,
                                    price: productVersion === null || productVersion === void 0 ? void 0 : productVersion.currentPrice,
                                    quantity: 1,
                                    versionId: versionId,
                                },
                            },
                            cartPrice: cartExit.cartPrice,
                        },
                        include: {
                            CartItem: {
                                include: {
                                    product: {
                                        include: { image: true },
                                    },
                                    version: true,
                                },
                            },
                        },
                    })];
                case 8:
                    cartData = _c.sent();
                    return [2 /*return*/, res.json(cartData)];
                case 9: return [3 /*break*/, 11];
                case 10:
                    _err_1 = _c.sent();
                    err = _err_1;
                    return [2 /*return*/, res.status(500).json((0, formatError_1.default)(err))];
                case 11: return [2 /*return*/];
            }
        });
    });
}
exports.default = updateCart;
