import prisma from "./index";

async function main() {
  await prisma.project.create({
    data: {
      name: "SD Magic Deck",
      status: "In Progress",
      description: "This is a project description",
      entries: {
        create: [
          {
            description: "This is the first entry",
            imageUrl:
              "https://res.cloudinary.com/sandergnl/image/upload/v1712221767/projects/MagicDeck%20Wiring.jpg",
          },
        ],
      },
    },
  });

  const allProjects = await prisma.project.findMany({
    include: { entries: true },
  });

  console.dir(allProjects, { depth: null });
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
