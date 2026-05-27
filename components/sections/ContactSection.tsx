"use client";

import { useState } from "react";

import SectionHeading from "../ui/SectionHeading";

export default function ContactSection() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [isSending, setIsSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSendEmail = async (
    e: React.FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();

    setIsSending(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          message,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to send email");
      }

      setSuccessMessage("Your message has been sent successfully.");

      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("SEND_EMAIL_ERROR:", error);

      setErrorMessage("Failed to send message. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="section-anchor section-spacing border-t border-slate-800"
    >
      <div className="container-layout">
        <SectionHeading
          title="Let’s Build Something Great"
          subtitle="Contact"
        />

        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-10 text-lg text-slate-400">
            Looking for a developer to build modern Android or web applications?
            I help businesses and clients create scalable, responsive, and
            user-friendly digital products. Let’s discuss your next project.
          </p>

          {/* FORM */}
          <form
            onSubmit={handleSendEmail}
            className="
              rounded-3xl
              border
              border-slate-800
              bg-slate-900/50
              p-6
              text-left
              shadow-2xl
              shadow-slate-950/30
              md:p-8
            "
          >
            {/* EMAIL */}
            <div className="mb-5">
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Your Email
              </label>

              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="
                  w-full
                  rounded-2xl
                  border
                  border-slate-800
                  bg-slate-950/70
                  px-4
                  py-4
                  text-sm
                  text-white
                  outline-none
                  transition
                  placeholder:text-slate-500
                  focus:border-sky-500
                  focus:ring-2
                  focus:ring-sky-500/20
                "
              />
            </div>

            {/* MESSAGE */}
            <div className="mb-6">
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Message
              </label>

              <textarea
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about your project, goals, timeline, or features you need..."
                rows={6}
                className="
                  w-full
                  resize-none
                  rounded-2xl
                  border
                  border-slate-800
                  bg-slate-950/70
                  px-4
                  py-4
                  text-sm
                  text-white
                  outline-none
                  transition
                  placeholder:text-slate-500
                  focus:border-sky-500
                  focus:ring-2
                  focus:ring-sky-500/20
                "
              />
            </div>

            {/* SUCCESS */}
            {successMessage && (
              <div
                className="
                  mb-5
                  rounded-2xl
                  border
                  border-emerald-500/30
                  bg-emerald-500/10
                  p-4
                  text-sm
                  text-emerald-300
                "
              >
                {successMessage}
              </div>
            )}

            {/* ERROR */}
            {errorMessage && (
              <div
                className="
                  mb-5
                  rounded-2xl
                  border
                  border-red-500/30
                  bg-red-500/10
                  p-4
                  text-sm
                  text-red-300
                "
              >
                {errorMessage}
              </div>
            )}

            {/* BUTTON */}
            <button
              type="submit"
              disabled={isSending}
              className="
                inline-flex
                w-full
                items-center
                justify-center
                rounded-2xl
                bg-sky-500
                px-8
                py-4
                font-medium
                text-white
                transition
                hover:bg-sky-400
                disabled:cursor-not-allowed
                disabled:opacity-50
                md:w-auto
              "
            >
              {isSending ? "Sending..." : "Send Email"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}