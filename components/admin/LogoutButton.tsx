"use client";

import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/admin/logout", {
      method: "POST",
    });

    router.push("/admin/login");
    router.refresh();
  };

  return (
    <button
      onClick={handleLogout}
      className="rounded-xl border border-slate-700 px-5 py-3 text-sm text-slate-300 transition hover:border-red-500/60 hover:text-red-400"
    >
      Logout
    </button>
  );
}