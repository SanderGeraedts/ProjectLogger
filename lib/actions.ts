"use server"

import prisma from "@/prisma";
import { redirect } from "next/navigation";

export const createProject = async (
  state: { name: string; status: string; description: string },
  formData: FormData
) => {
    const name = formData.get("name") as string;
    const status = formData.get("status") as string;
    const description = formData.get("description") as string;

    const project = await prisma.project.create({
      data: {
        name,
        status,
        description,
      },
    });

    redirect(`/projects/${project.id}`);
};
