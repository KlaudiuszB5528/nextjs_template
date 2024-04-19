# This is my base configuration for the Next.js project.

## Things configured:

- [x] TypeScript
- [x] ESLint
- [x] Prettier
- [x] Prisma
- [x] NextAuth.js
- [x] NextAuth middleware (base configuration - only dashboard route is protected)
- [x] TailwindCSS
- [x] Shadcn
- [x] Playwright
- [x] Jest
- [x] .env file

## How to use:

1. Clone the repository and remove origin and set new origin with your remote repository URL

   ```bash
   git https://github.com/KlaudiuszB5528/nextjs_template new-project-name
   cd new-project-name  # Navigate into the new project directory
   git remote remove origin  # Remove the default remote
   git init  # Initialize a new Git repository
   git remote add origin https://<your_remote_repository_url>
   ```

2. Run

```bash
yarn install
npm install
pnpm install
```

3. Update the .env file with your secrets
4. Run docker compose to start the database(PostgreSQL)

### Note: Make sure you have Docker installed on your machine

#### The frontend is running on port 3000 and the database is running on port 5432 by default (frontend part is commented out in the docker-compose file, uncomment it if you want to run the frontend in a container as well)

```bash
docker-compose up -d
```

5. For local development, run the following command to generate the Prisma client and push the schema to the database

```bash
npx prisma generate
npx prisma db push
```

6. Run the project

```bash
yarn dev
npm run dev
pnpm dev
```

7. Enjoy!
