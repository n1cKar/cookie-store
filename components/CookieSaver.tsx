"use client";

import { useEffect, useState } from "react";

export default function CookieSaver() {
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchCookies = async () => {
      const res = await fetch("/api/save-cookies");
      if (res.ok) {
        // Directly use /api/download, no query parameter
        setDownloadUrl("/api/download");
      }
    };

    fetchCookies();
  }, []);

  return (
    <div className="flex flex-col items-center gap-6 p-8 max-w-2xl text-center">
      <h1 className="text-3xl font-bold">Cookie Capture Demo</h1>
      {/* <p className="text-gray-300">
        Capturing cookies on the server side (including HttpOnly) and allowing
        you to download them as a text file.
      </p> */}

      {downloadUrl ? (
        <a
          href={downloadUrl}
          download="cookies.txt"
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Download Cookies File
        </a>
      ) : (
        <p className="text-gray-500">Collecting cookies...</p>
      )}
    </div>
  );
}
