import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const akhlaq = await prisma.user.upsert({
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
                feature:
                  "17.00 cm (6.7-inch) Super Retina XDR display featuring Always-On and ProMotion",
              },
              {
                feature:
                  "Dynamic Island, a magical new way to interact with iPhone",
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
                feature:
                  "All-day battery life and up to 29 hours of video playback",
              },
              {
                feature:
                  "Vital safety technology — Crash Detection can detect a severe car crash and call for help",
              },
              {
                feature:
                  "A16 Bionic, the ultimate smartphone chip. Superfast 5G cellular",
              },
              {
                feature:
                  "All-day battery life and up to 29 hours of video playback",
              },
              {
                feature:
                  "Industry-leading durability features with Ceramic Shield and water resistance",
              },
              {
                feature:
                  "iOS 16 offers even more ways to personalise, communicate and share",
              },
            ],
          },

          description:
            "iPhone is a line of smartphones produced by Apple Inc. that use Apple's own iOS mobile operating system. The first-generation iPhone was announced by then-Apple CEO Steve Jobs on January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates. As of November 1, 2018, more than 2.2 billion iPhones had been sold. As of 2022, the iPhone accounts for 15.6% of global smartphone market share",
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
  });

  const use2 = await prisma.user.upsert({
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
            title:
              "Redmi 108 cm (43 inches) Android 11 Series Full HD Smart LED TV L43M6-RA/L43M7-RA (Black)",
            features: {
              create: [
                {
                  feature:
                    "Resolution : Full HD (1920x1080) resolution | Refresh Rate : 60 Hertz | 178 Degree wide viewing angle",
                },
                {
                  feature:
                    "Connectivity: 2 HDMI ports to connect set top box, Blu-Ray players, gaming console | 2 USB ports to connect hard drives and other USB devices | 3.5mm to connect your headphones | Bluetooth 5.0 to connect Bluetooth speakers, earphones and TWS earphones",
                },
                {
                  feature:
                    "Sound: 20 Watts Powerful Stereo Speakers | Dolby Audio | DTS Virtual: X and DTS-HD | Dolby Atmos pass through ARC port",
                },
                {
                  feature:
                    "Smart TV Features : Android TV 11 | Chromecast built-in | PatchWall 4 with IMDb integration | Kids Mode with Parental Lock | 75+ Free Live Channels | Universal search | Language Universe (16+ Languages) | India's Top 10 | Miracast | Supported Apps: Prime Video | Netflix | Disney + Hotstar | YouTube | Apple TV | 5000+ apps from Play Store | Auto Low Latency Mode | Quad core processor | Dual band Wi-Fi | 1GB RAM + 8GB Storage",
                },
                {
                  feature:
                    "Display: A+ Grade LED panel | Vivid Picture Engine | Detailed Picture Controls | Ultra bright screen | Dynamic contrast | Dynamic backlight",
                },
                {
                  feature:
                    "Warranty Information: 1 year comprehensive warranty on product and 1 year additional on Panel provided by the brand from the date of purchase",
                },
                {
                  feature:
                    "Support Information : Installation/demo will be arranged by ASH Team or Xiaomi service partner. Wall Mount is not included in the box and will be charged extra at the time of installation",
                },
              ],
            },

            description:
              "‎Remote with easy Access like Voice assistant | Ok Google |" +
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
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
