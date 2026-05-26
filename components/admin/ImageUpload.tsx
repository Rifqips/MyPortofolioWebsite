"use client";

import Image from "next/image";
import { CldUploadWidget } from "next-cloudinary";

type CloudinaryUploadResult = {
  event: "success";
  info: {
    secure_url: string;
    public_id: string;
  };
};

interface Props {
  value: string;
  onChange: (url: string) => void;
}

export default function ImageUpload({ value, onChange }: Props) {
  return (
    <div className="space-y-4">
      {value && (
        <div className="relative h-48 w-full overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
          <Image
            src={value}
            alt="Project preview"
            fill
            className="object-cover"
          />
        </div>
      )}

      <CldUploadWidget
        uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
        options={{
          sources: ["local", "url"],
          multiple: false,
          maxFiles: 1,
          folder: "portfolio/projects",
        }}
        onSuccess={(result) => {
          const uploadResult = result as CloudinaryUploadResult;

          if (uploadResult.info?.secure_url) {
            onChange(uploadResult.info.secure_url);
          }
        }}
      >
        {({ open }) => (
          <button
            type="button"
            onClick={() => open()}
            className="rounded-xl border border-slate-700 px-5 py-3 text-sm text-slate-300 transition hover:border-sky-500 hover:text-sky-400"
          >
            Upload Image
          </button>
        )}
      </CldUploadWidget>
    </div>
  );
}