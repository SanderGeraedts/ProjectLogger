import prisma from "../prisma";
import ProjectList from "../components/molecule/ProjectList";

export default async function Home() {
  async function getProjects() {
    const projects = await prisma.project.findMany({
      include: {
        entries: {
          orderBy: {
            createdAt: "desc",
          },
        },
      },
    });

    return projects;
  }

  const projects = await getProjects();

  return (
    <main className="flex min-h-screen flex-col items-center ">
        <p className="font-semibold">Test</p>
        <ProjectList projects={projects} />
    </main>
  );
}
