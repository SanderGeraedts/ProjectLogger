import { useSearchParams } from "next/navigation";
import prisma from "../../../prisma";
import { EntryItem } from "@/components/molecule/EntryItem";

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
    <main className="flex min-h-screen flex-col items-center">
      <div className="bg-white rounded-lg shadow-lg p-6 m-4 w-full">
        <p className="font-semibold">{project?.name}</p>
        <p>{project?.description}</p>
      </div>

      {project?.entries.map((entry) => (
        <EntryItem key={entry.id} entry={entry} />
      ))}
    </main>
  );
}
