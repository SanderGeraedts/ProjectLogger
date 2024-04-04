"use client";

import { CldImage } from "next-cloudinary";
import clsx from 'clsx';
import Link from "next/link";

export default function ProjectListItem({
  project,
}: Readonly<{
  project: {
    entries: {
      imageId: string | null;
    }[];
  } & {
    id: string;
    name: string;
    status: string | null;
    description: string | null;
  };
}>) {
  return (
    <Link
      href={`/projects/${project.id}`}
      className="bg-white rounded-lg shadow-lg p-6 m-4 flex items-center gap-4 flex-col sm:flex-row relative"
    >
      <CldImage
        src={project.entries[0]?.imageId || "https://placehold.co/280"}
        alt={project.name}
        width={280}
        height={280}
        crop="thumb"
        className="rounded-lg"
      />
      <div className={clsx("absolute top-4 right-4 font-semibold text-white py-1 px-2 rounded-lg", {
        "bg-yellow-500": project.status === "In Progress",
        "bg-green-500": project.status === "Done",
        "bg-red-500": project.status === "On Hold",
      
      })}>{project.status}</div>
      <div className="flex flex-col w-full">
        <h2 className="font-semibold text-lg">{project.name}</h2>
        <p className="text-sm text-gray-500">{project.description}</p>
      </div>
    </Link>
  );
}
