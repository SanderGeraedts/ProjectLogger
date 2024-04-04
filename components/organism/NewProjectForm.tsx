'use client';

import { createProject } from "@/lib/actions";
import { useFormState } from "react-dom";

export const NewProjectForm = () => {

  const [state, dispatch] = useFormState(createProject, {
    name: "",
    status: "",
    description: "",
  });



  return (
    <form
    action={dispatch}
      className="bg-white rounded-lg shadow-lg p-6 m-4"
    >
      <p className="font-semibold">New Project</p>
      <input
        id="name"
        name="name"
        type="text"
        placeholder="Project Name"
        className="border border-gray-300 rounded-lg px-4 py-2 mt-4 w-full"
      />
      <input
        id="status"
        name="status"
        type="text"
        placeholder="Project Status"
        className="border border-gray-300 rounded-lg px-4 py-2 mt-4 w-full"
      />
      <textarea
        id="description"
        name="description"
        placeholder="Project Description"
        className="border border-gray-300 rounded-lg px-4 py-2 mt-4 w-full"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white rounded-lg px-4 py-2 mt-4 w-full"
      >
        Create Project
      </button>
    </form>
  );
};
