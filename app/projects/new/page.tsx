import { NewProjectForm } from "@/components/organism/NewProjectForm";
import prisma from "@/prisma";

export default async function NewProject() {
  "use server";
  async function createProject() {
    const project = await prisma.project.create({
      data: {
        name: "New Project",
      },
    });

    return project;
  }

  return (
    <main className="flex min-h-screen flex-col items-center">
      <NewProjectForm />
    </main>
  );
}
