"use client";

import { useRouter } from "next/navigation";

interface Props {
  id: string;
}

export default function DeleteProjectButton({ id }: Props) {
  const router = useRouter();

  const handleDelete = async () => {
    const confirmDelete = confirm("Delete this project?");

    if (!confirmDelete) return;

    await fetch(`/api/projects/${id}`, {
      method: "DELETE",
    });

    router.refresh();
  };

  return (
    <button
      onClick={handleDelete}
      className="rounded-lg border border-red-500/40 px-4 py-2 text-sm text-red-400"
    >
      Delete
    </button>
  );
}