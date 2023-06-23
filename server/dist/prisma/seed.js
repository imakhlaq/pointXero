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
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("@prisma/client");
var prisma = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var akhlaq, use2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.user.upsert({
                        where: { email: "alice@prisma.io" },
                        update: {},
                        create: {
                            username: "imakhlaq",
                            firstName: "Akhlaq",
                            lastName: "Ahmad",
                            password: "1234",
                            email: "alice@prisma.io",
                            phone: "7905399065",
                            product: {
                                create: {
                                    title: "Apple iPhone 14 Pro Max (128 GB) - Silver",
                                    features: {
                                        create: [
                                            {
                                                feature: "17.00 cm (6.7-inch) Super Retina XDR display featuring Always-On and ProMotion",
                                            },
                                            {
                                                feature: "Dynamic Island, a magical new way to interact with iPhone",
                                            },
                                            {
                                                feature: "48MP Main camera for up to 4x greater resolution",
                                            },
                                            {
                                                feature: "Cinematic mode now in 4K Dolby Vision up to 30 fps",
                                            },
                                            {
                                                feature: "Action mode for smooth, steady, handheld videos",
                                            },
                                            {
                                                feature: "All-day battery life and up to 29 hours of video playback",
                                            },
                                            {
                                                feature: "Vital safety technology — Crash Detection can detect a severe car crash and call for help",
                                            },
                                            {
                                                feature: "A16 Bionic, the ultimate smartphone chip. Superfast 5G cellular",
                                            },
                                            {
                                                feature: "All-day battery life and up to 29 hours of video playback",
                                            },
                                            {
                                                feature: "Industry-leading durability features with Ceramic Shield and water resistance",
                                            },
                                            {
                                                feature: "iOS 16 offers even more ways to personalise, communicate and share",
                                            },
                                        ],
                                    },
                                    description: "iPhone is a line of smartphones produced by Apple Inc. that use Apple's own iOS mobile operating system. The first-generation iPhone was announced by then-Apple CEO Steve Jobs on January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates. As of November 1, 2018, more than 2.2 billion iPhones had been sold. As of 2022, the iPhone accounts for 15.6% of global smartphone market share",
                                    public: true,
                                    rating: 4.4,
                                    brand: "Apple",
                                    image: {
                                        create: [
                                            {
                                                url: "https://m.media-amazon.com/images/I/61nzPMNY8zL._SX679_.jpg",
                                            },
                                            {
                                                url: "https://m.media-amazon.com/images/I/61Z-ep3MvAL._SX522_.jpg",
                                            },
                                            {
                                                url: "https://m.media-amazon.com/images/I/71qRo+VobOL._SX522_.jpg",
                                            },
                                            {
                                                url: "https://m.media-amazon.com/images/I/71dKjvLPkAL._SX522_.jpg",
                                            },
                                            {
                                                url: "https://m.media-amazon.com/images/I/91wGCiIAniL._SX522_.jpg",
                                            },
                                        ],
                                    },
                                    versions: {
                                        create: [
                                            {
                                                currentPrice: 122.33,
                                                marketPrice: 1222.1,
                                                version: "PRO MAX",
                                                quantity: 21,
                                            },
                                            {
                                                currentPrice: 1232.33,
                                                marketPrice: 1222.1,
                                                version: "MAX",
                                                quantity: 12,
                                            },
                                            {
                                                currentPrice: 1242.33,
                                                marketPrice: 12262.1,
                                                version: "PRO",
                                                quantity: 11,
                                            },
                                        ],
                                    },
                                    categories: {
                                        create: [
                                            {
                                                category: "phone",
                                            },
                                            {
                                                category: "mobile",
                                            },
                                            {
                                                category: "iphone",
                                            },
                                            {
                                                category: "camera",
                                            },
                                            {
                                                category: "apple",
                                            },
                                        ],
                                    },
                                },
                            },
                        },
                    })];
                case 1:
                    akhlaq = _a.sent();
                    return [4 /*yield*/, prisma.user.upsert({
                            where: { email: "akhlaq@prisma.io" },
                            update: {},
                            create: {
                                username: "imakhlaqxd",
                                firstName: "super",
                                lastName: "Ahmad",
                                password: "12341",
                                email: "akhlaq@prisma.io",
                                phone: "7905399098",
                                product: {
                                    create: [
                                        {
                                            title: "Redmi 108 cm (43 inches) Android 11 Series Full HD Smart LED TV L43M6-RA/L43M7-RA (Black)",
                                            features: {
                                                create: [
                                                    {
                                                        feature: "Resolution : Full HD (1920x1080) resolution | Refresh Rate : 60 Hertz | 178 Degree wide viewing angle",
                                                    },
                                                    {
                                                        feature: "Connectivity: 2 HDMI ports to connect set top box, Blu-Ray players, gaming console | 2 USB ports to connect hard drives and other USB devices | 3.5mm to connect your headphones | Bluetooth 5.0 to connect Bluetooth speakers, earphones and TWS earphones",
                                                    },
                                                    {
                                                        feature: "Sound: 20 Watts Powerful Stereo Speakers | Dolby Audio | DTS Virtual: X and DTS-HD | Dolby Atmos pass through ARC port",
                                                    },
                                                    {
                                                        feature: "Smart TV Features : Android TV 11 | Chromecast built-in | PatchWall 4 with IMDb integration | Kids Mode with Parental Lock | 75+ Free Live Channels | Universal search | Language Universe (16+ Languages) | India's Top 10 | Miracast | Supported Apps: Prime Video | Netflix | Disney + Hotstar | YouTube | Apple TV | 5000+ apps from Play Store | Auto Low Latency Mode | Quad core processor | Dual band Wi-Fi | 1GB RAM + 8GB Storage",
                                                    },
                                                    {
                                                        feature: "Display: A+ Grade LED panel | Vivid Picture Engine | Detailed Picture Controls | Ultra bright screen | Dynamic contrast | Dynamic backlight",
                                                    },
                                                    {
                                                        feature: "Warranty Information: 1 year comprehensive warranty on product and 1 year additional on Panel provided by the brand from the date of purchase",
                                                    },
                                                    {
                                                        feature: "Support Information : Installation/demo will be arranged by ASH Team or Xiaomi service partner. Wall Mount is not included in the box and will be charged extra at the time of installation",
                                                    },
                                                ],
                                            },
                                            description: "‎Remote with easy Access like Voice assistant | Ok Google |" +
                                                " Quick Wake | Quick Mute | Quick Settings | Netflix and" +
                                                " Prime Video buttons. ‎Redmi, Dixon Technologies (India)" +
                                                " Limited, SHED#2,3,4, EMC-2, Munagalapalem Post,Yerpedu Mandalam, Chittoor, Andhra Pradesh - 517526 ",
                                            public: false,
                                            rating: 4.4,
                                            brand: "Redmi",
                                            image: {
                                                create: [
                                                    {
                                                        url: "https://m.media-amazon.com/images/I/41DtKNis1UL._SY300_SX300_QL70_FMwebp_.jpg",
                                                    },
                                                    {
                                                        url: "https://m.media-amazon.com/images/I/81zj2CqZZ-L._SX569_.jpg",
                                                    },
                                                    {
                                                        url: "https://m.media-amazon.com/images/I/81frboMPbpL._SX569_.jpg",
                                                    },
                                                    {
                                                        url: "https://m.media-amazon.com/images/I/71QvOYXZMYL._SX569_.jpg",
                                                    },
                                                    {
                                                        url: "https://m.media-amazon.com/images/I/71Q6DnQMuyL._SX679_.jpg",
                                                    },
                                                ],
                                            },
                                            versions: {
                                                create: [
                                                    {
                                                        currentPrice: 1212.33,
                                                        marketPrice: 12222.1,
                                                        version: "55 inch",
                                                        quantity: 21,
                                                    },
                                                    {
                                                        currentPrice: 12362.33,
                                                        marketPrice: 12422.1,
                                                        version: "65 inch",
                                                        quantity: 12,
                                                    },
                                                    {
                                                        currentPrice: 21242.33,
                                                        marketPrice: 212262.1,
                                                        version: "75",
                                                        quantity: 112,
                                                    },
                                                ],
                                            },
                                            categories: {
                                                create: [
                                                    {
                                                        category: "TV",
                                                    },
                                                    {
                                                        category: "remote",
                                                    },
                                                    {
                                                        category: "smart tv",
                                                    },
                                                    {
                                                        category: "elctronic",
                                                    },
                                                    {
                                                        category: "machine",
                                                    },
                                                    {
                                                        category: "TV",
                                                    },
                                                ],
                                            },
                                        },
                                        {
                                            title: "washing TV",
                                            features: {
                                                create: [
                                                    {
                                                        feature: "for long third Feature",
                                                    },
                                                    {
                                                        feature: "this is second fire filter",
                                                    },
                                                    {
                                                        feature: "SoC is 918 is good",
                                                    },
                                                    {
                                                        feature: "24/7 delivery",
                                                    },
                                                ],
                                            },
                                            description: "this is description",
                                            public: true,
                                            rating: 4.7,
                                            brand: "L.G",
                                            image: {
                                                create: [
                                                    {
                                                        url: "https://images.freeimages.com/images/previews/ac9/railway-hdr-1361893.jpg",
                                                    },
                                                    {
                                                        url: "https://images.freeimages.com/images/previews/ac9/railway-hdr-161893.jpg",
                                                    },
                                                    {
                                                        url: "https://images.freeimages.com/images/previews/ac9/railway-hdr-161893.jpg",
                                                    },
                                                    {
                                                        url: "https://images.freeimages.com/images/previews/ac9/railway-hdr-161893.jpg",
                                                    },
                                                ],
                                            },
                                            versions: {
                                                create: [
                                                    {
                                                        currentPrice: 1122.33,
                                                        marketPrice: 11222.1,
                                                        version: "8 KG",
                                                        quantity: 11,
                                                    },
                                                    {
                                                        currentPrice: 122.33,
                                                        marketPrice: 222.1,
                                                        version: "14 KG",
                                                        quantity: 11,
                                                    },
                                                    {
                                                        currentPrice: 2222.33,
                                                        marketPrice: 222.1,
                                                        version: "18 KG",
                                                        quantity: 11,
                                                    },
                                                ],
                                            },
                                            categories: {
                                                create: [
                                                    {
                                                        category: "elctronic",
                                                    },
                                                    {
                                                        category: "machine",
                                                    },
                                                    {
                                                        category: "washing",
                                                    },
                                                    {
                                                        category: "clothe",
                                                    },
                                                ],
                                            },
                                        },
                                    ],
                                },
                            },
                        })];
                case 2:
                    use2 = _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
main()
    .then(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma.$disconnect()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); })
    .catch(function (e) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.error(e);
                return [4 /*yield*/, prisma.$disconnect()];
            case 1:
                _a.sent();
                process.exit(1);
                return [2 /*return*/];
        }
    });
}); });
