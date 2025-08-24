import CookieSaver from "@/components/CookieSaver";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6 py-12 space-y-12">
      {/* Title Section */}
      <section className="max-w-3xl text-center space-y-4">
        <h1 className="text-4xl font-bold">🍪 Cookie Capture & Security Demo</h1>
        <p className="text-gray-300">
          This demo shows how cookies can be accessed and stored using{" "}
          <code className="bg-gray-800 px-1 rounded">Next.js</code>.  
          Normally, JavaScript running in the browser can only see{" "}
          <strong>non-HttpOnly cookies</strong>. However, when cookies are read
          server-side, <strong>all cookies</strong> (including{" "}
          <code>HttpOnly</code>) are visible.
        </p>
      </section>

      {/* Demo Component */}
      <CookieSaver />

      {/* Educational Section */}
      <section className="max-w-4xl space-y-6 text-left">
        <h2 className="text-2xl font-semibold">🔍 How This Works</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-300">
          <li>
            When you load this page, your browser sends all cookies to the
            server.
          </li>
          <li>
            The Next.js API route reads cookies from{" "}
            <code>req.cookies.getAll()</code>, which includes{" "}
            <code>HttpOnly</code> cookies.
          </li>
          <li>
            These cookies are written to a file (<code>cookies.txt</code>),
            which you can download.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold">⚠️ Security Risks</h2>
        <p className="text-gray-300">
          If an attacker tricks you into visiting a malicious site that captures
          cookies, they could steal sensitive information such as{" "}
          <strong>session tokens</strong>. With this, they could impersonate
          your account.
        </p>

        <h2 className="text-2xl font-semibold">🛡 How to Protect Yourself</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-300">
          <li>
            Use the <code>HttpOnly</code> flag on session cookies to prevent
            client-side JavaScript from reading them.
          </li>
          <li>
            Always use <code>Secure</code> cookies so they are only sent over
            HTTPS.
          </li>
          <li>
            Implement proper <strong>SameSite</strong> policies to protect
            against CSRF (cross-site request forgery).
          </li>
          <li>
            Never store sensitive data in non-HttpOnly cookies.
          </li>
          <li>
            Regularly clear cookies and use trusted browsers/extensions.
          </li>
        </ul>

        <p className="text-gray-400 text-sm mt-6">
          🚫 Disclaimer: This project is intended for{" "}
          <strong>educational purposes only</strong>. Do not use these
          techniques for malicious activity.
        </p>
      </section>
      <footer className="text-gray-500">
        Made by Nimash Mendis
      </footer>
    </main>
  );
}
