"use client";

import { useEffect, useState } from "react";

export default function CookieSaver() {
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);

  // On load, ask server to save ALL cookies
  useEffect(() => {
    const fetchCookies = async () => {
      const res = await fetch("/api/save-cookies");
      if (res.ok) {
        const { filePath } = await res.json();
        setDownloadUrl(`/api/download?file=${encodeURIComponent(filePath)}`);
      }
    };

    fetchCookies();
  }, []);

  return (
    <div className="flex flex-col items-center gap-6 p-8 max-w-2xl text-center">
      <h1 className="text-3xl font-bold">Cookie Capture Demo</h1>
      {/* <p className="text-gray-700">
        This page demonstrates capturing <strong>all cookies</strong> (including{" "}
        <code>HttpOnly</code> cookies) using the server-side API in Next.js.  
        ⚠ This is only for testing and demonstration. Never use this in
        production systems due to security and privacy risks.
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
