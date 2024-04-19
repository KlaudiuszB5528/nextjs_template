# This is my base configuration for the Next.js project.

## Things configured:

- [x] TypeScript
- [x] ESLint
- [x] Prettier
- [x] Prisma
- [x] NextAuth.js
- [x] TailwindCSS
- [x] Shadcn
- [x] Playwright
- [x] Jest
- [x] .env file

## How to use:

1. Clone the repository
2. Run

```bash
yarn install
npm install
pnpm install
```

3. Update the .env file with your secrets
4. Run docker compose to start the database

```bash
docker-compose up -d
```

5. Run the migrations

```bash
npx prisma migrate dev
```

6. Run the project

```bash
yarn dev
npm run dev
pnpm dev
```

7. Enjoy!
