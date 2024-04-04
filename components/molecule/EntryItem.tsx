"use client";

import { CldImage } from "next-cloudinary";

export const EntryItem = ({entry}: Readonly<{
    entry: {
        id: string;
        imageId: string | null;
        description: string | null;
    };
}>) => {
  return (
    <div key={entry.id} className="bg-white rounded-lg shadow-lg p-6 m-4 w-full flex flex-col items-center">
      <CldImage
        src={entry.imageId || "https://placehold.co/280"}
        alt={entry.description || ""}
        width={280}
        height={280}
        crop="thumb"
        className="rounded-lg"
      />
      <p>{entry.description}</p>
    </div>
  );
};
