# 🗂️ Mini Feedback Board — Technical Task

Hi! 👋 
This project demonstrates a simple but production-ready feedback board using **Next.js App Router**, **tRPC**, **Prisma**, **PostgreSQL**, and **Tailwind CSS**.

---

## Features

- Displays a paginated list of feedback posts (title + body)
- Form to add new feedback
- Real-time local cache update using tRPC
- Cursor-based pagination (infinite scroll ready)
- Brand styling with Tailwind CSS + shadcn
- Input validation with Zod


---

## Local Setup

> **Note:** Please have a **local PostgreSQL database** ready.  
> Or you can connect to a hosted Postgres if you prefer.

1️⃣ **Clone the repo**

```bash
git clone https://github.com/sahibthecreator/feedback-board-nextjs-trpc.git
cd feedback-board-nextjs-trpc
```

2️⃣ **Install dependencies**
```bash
npm install
```

3️⃣ **Configure ```.env```**
```bash
touch .env
```
```bash
DATABASE_URL="postgresql://YOUR_USER:YOUR_PASSWORD@localhost:5432/YOUR_DB_NAME"
```

4️⃣ **Push Prisma schema & generate client**
```bash
npx prisma db push
npx prisma generate
```

5️⃣ **Run the dev server**
```bash
npm run dev
```

## Additional Notes
I used a bit of brand styling to show how this could feel as a natural extension of the Buildscout platform.

With more time, I’d also:
* Host a live Postgres DB for easy demo.
* Add more features: editing, deleting, upvotes, full user auth.
* Polish design with production-ready theming.

