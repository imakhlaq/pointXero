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
          title: "this is my book",
          features: JSON.stringify({ message: "data" }),
          description: "this is description",
          public: true,
          rating: 3.4,
          currentPrice: 22.33,
          marketPrice: 222.1,
          brand: "adidas",
          image: {
            create: {
              url: "https://images.freeimages.com/images/previews/ac9/railway-hdr-1361893.jpg",
            },
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
