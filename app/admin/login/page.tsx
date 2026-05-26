"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    setError("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });

      if (!res.ok) {
        setError("Password salah");
        return;
      }

      router.push("/admin/dashboard");
      router.refresh();
    } catch {
      setError("Login gagal");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-white">
      <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900/50 p-8">
        <p className="mb-2 font-mono text-sm text-sky-400">Admin Area</p>

        <h1 className="mb-6 text-3xl font-bold">Login Dashboard</h1>

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleLogin();
          }}
          placeholder="Enter admin password"
          className="input-admin"
        />

        {error && <p className="mt-3 text-sm text-red-400">{error}</p>}

        <button
          onClick={handleLogin}
          disabled={isLoading}
          className="mt-6 w-full rounded-xl bg-sky-500 px-5 py-3 font-medium text-white transition hover:bg-sky-400 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isLoading ? "Checking..." : "Login"}
        </button>
      </div>
    </main>
  );
}