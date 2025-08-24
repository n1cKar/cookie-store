# 🍪 Cookie Store (Next.js + TypeScript + Tailwind)

This project demonstrates how to capture **all cookies** (including `HttpOnly` cookies) in a **Next.js 13+ (App Router)** application.  

⚠️ **Important Disclaimer:**  
This is **only for demonstration and testing purposes**. Never use this approach in production, since capturing and storing cookies introduces **severe security and privacy risks**.

---

## 🚀 Features
1. **Automatic Cookie Capture**  
   - When a user visits the page, all cookies from the request are read on the server.  
   - Unlike `document.cookie`, this includes `HttpOnly` cookies.  

2. **Save to File**  
   - The cookies are stored in a `cookies.txt` file on the server.  
   - A download button is provided so users can download the file.  

3. **Frontend (React + Tailwind)**  
   - Simple page with description, status messages, and a button to download the cookies file.  

---

## Images

[1](./app_pics/1.png)


## 🛠️ Setup

1. Clone the repo:
```bash
git clone https://github.com/n1cKar/cookie-store.git
cd cookie-store
```

2. Install dependencies:
```bash
npm install
```

3. Run development server:
```bash
npm run dev
```

4. Vist http://localhost:3000


## 📜 How It Works

- On page load, the client component calls /api/save-cookies.
- The API route (save-cookies/route.ts) uses req.cookies.getAll() to capture all cookies, including HttpOnly.
- The cookies are written to cookies.txt.
- The page shows a Download button that links to /api/download?file=cookies.txt.

## ⚠️ Security Note

- Cookies often contain session tokens or sensitive data.
- Accessing/storing them without consent is a major security risk.
- This demo is meant for educational purposes only.

## Contact 

- For questions, suggestions, or feedback, reach out via email: [Nimash Mendis](emailto:nimash.mendis0202@gmail.com)