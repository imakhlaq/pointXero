"use strict";
/*
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
          description: "this is description",
          public: true,
          rating: 3.4,
          brand: "Apple",
          image: {
            create: [
              {
                url: "https://m.media-amazon.com/images/I/61nzPMNY8zL._SX679_.jpg",
              },
              {
                url: "https://m.media-amazon.com/images/I/61nzPMNY8zL._SX679_.jpg",
              },
              {
                url: "https://m.media-amazon.com/images/I/61nzPMNY8zL._SX679_.jpg",
              },
              {
                url: "https://m.media-amazon.com/images/I/61nzPMNY8zL._SX679_.jpg",
              },
              {
                url: "https://m.media-amazon.com/images/I/61nzPMNY8zL._SX679_.jpg",
              },
            ],
          },

          categories: {
            create: {
              category: "book",
            },
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
            title: "Panasonic TV",
            features: {
              create: [
                {
                  feature: "for long third Feature",
                },
                {
                  feature: "this is second fire filter",
                },
              ],
            },
            description: "this is description",
            public: false,
            rating: 5.4,
            currentPrice: 22.33,
            marketPrice: 222.1,
            brand: "panasonic",
            image: {
              create: {
                url: "https://images.freeimages.com/images/previews/ac9/railway-hdr-1361893.jpg",
              },
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
            rating: 5.4,
            currentPrice: 22.33,
            marketPrice: 222.1,
            brand: "panasonic",
            image: {
              create: [
                {
                  url: "https://images.freeimages.com/images/previews/ac9/railway-hdr-1361893.jpg",
                },
                {
                  url: "https://images.freeimages.com/images/previews/ac9/railway-hdr-161893.jpg",
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
              ],
            },
          },
        ],
      },
    },
  });
}

currentPrice: 22.33,
    marketPrice: 222.1,
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
*/
