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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var bcrypt = __importStar(require("bcrypt"));
var createJwtTokens_1 = __importDefault(require("../../utils/createJwtTokens"));
var CustomError_1 = __importDefault(require("../../utils/CustomError"));
var zod_1 = require("zod");
var database_1 = require("../../db/database");
var formatError_1 = __importDefault(require("../../utils/formatError"));
var createUserDTO_1 = __importDefault(require("../../validations/createUserDTO"));
var signUp = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var body, hashedPassword, userData, emailExists, userNameExists, createdUser, token, _err_1, err;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 5, , 6]);
                body = createUserDTO_1.default.parse(req.body);
                return [4 /*yield*/, bcrypt.hash(body.password, 10)];
            case 1:
                hashedPassword = _b.sent();
                userData = __assign(__assign({}, body), { password: hashedPassword });
                return [4 /*yield*/, database_1.prisma.user.findUnique({
                        where: { email: userData.email },
                    })];
            case 2:
                emailExists = _b.sent();
                if (emailExists) {
                    throw new CustomError_1.default("This Email already Exits", 409);
                }
                return [4 /*yield*/, database_1.prisma.user.findUnique({
                        where: { username: userData.username },
                    })];
            case 3:
                userNameExists = _b.sent();
                if (userNameExists) {
                    throw new CustomError_1.default("This User Name already Exits", 409);
                }
                return [4 /*yield*/, database_1.prisma.user.create({ data: userData })];
            case 4:
                createdUser = _b.sent();
                token = (0, createJwtTokens_1.default)(createdUser.id, createdUser.username, createdUser.email);
                //return the jwt token
                return [2 /*return*/, res.status(201).json({
                        token: token,
                        userName: userData.username,
                        firstName: userData.firstName,
                        lastName: userData.lastName,
                        email: userData.email,
                    })];
            case 5:
                _err_1 = _b.sent();
                console.log(_err_1);
                if (_err_1 instanceof zod_1.ZodError) {
                    return [2 /*return*/, res.status(400).json((0, formatError_1.default)(_err_1))];
                }
                err = _err_1;
                return [2 /*return*/, res.status((_a = err.statusCode) !== null && _a !== void 0 ? _a : 500).json((0, formatError_1.default)(err))];
            case 6: return [2 /*return*/];
        }
    });
}); };
exports.default = signUp;
