import { Project } from "@prisma/client";
import ProjectListItem from "./ProjectListItem";

export default function ProjectList({
  projects,
}: Readonly<{
  projects: Project[];
}>) {
  return (
    <div className="flex flex-col">
      {projects.map((project) => (
        <ProjectListItem key={project.id} project={project} />
      ))}
    </div>
  );
}
