import { useSearchParams } from "next/navigation";
import prisma from "../../../prisma";

export default async function Home({ params }: { params: { id: string } }) {
  async function getProject(id: string) {
    const projects = await prisma.project.findUnique({
      where: { id },
      include: { entries: true },
    });

    return projects;
  }

  const project = await getProject(params.id as string);

  return (
    <main className="flex min-h-screen flex-col items-center ">
      <p className="font-semibold">{project?.name}</p>
    </main>
  );
}
