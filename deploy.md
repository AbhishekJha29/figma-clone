# Vercel Deployment Guide

This guide provides instructions for deploying your Figma clone application to Vercel.

## 1. Project Setup on Vercel

1.  Create a new project on your Vercel dashboard.
2.  Connect your Git repository (GitHub, GitLab, Bitbucket) where your project is hosted.
3.  Vercel will automatically detect that you are using Next.js and will configure the project settings for you.

## 2. Configure Environment Variables

You need to add the following environment variables to your Vercel project settings. You can find these settings under **Settings > Environment Variables**.

| Variable                | Description                                                                                                                              |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `AUTH_SECRET`           | A secret key for NextAuth.js to sign and encrypt tokens. You can generate one using `npx auth secret` in your terminal.                     |
| `AUTH_DISCORD_ID`       | The Client ID of your Discord OAuth application.                                                                                         |
| `AUTH_DISCORD_SECRET`   | The Client Secret of your Discord OAuth application.                                                                                     |
| `DATABASE_URL`          | The connection string for your PostgreSQL database. Make sure your database is accessible from Vercel's servers.                         |
| `LIVEBLOCKS_PUBLIC_KEY` | Your Liveblocks public API key.                                                                                                          |
| `LIVEBLOCKS_SECRET_KEY` | Your Liveblocks secret API key.                                                                                                          |

**Note:** For `DATABASE_URL`, if you are using a service like Vercel Postgres, you can integrate it directly. Otherwise, ensure your database provider allows external connections and whitelist Vercel's IP addresses if necessary.

## 3. Build and Deployment Settings

Vercel should automatically detect the correct settings for a Next.js project. However, you can verify them under **Settings > General**.

*   **Framework Preset:** Next.js
*   **Build Command:** `npm run build`
*   **Install Command:** `npm install`
*   **Output Directory:** `.next`

Your `package.json` contains a `postinstall` script (`prisma generate`) that will be run by Vercel after `npm install`.

You also have a database migration script. You should run this manually after deployment or as part of your CI/CD pipeline if you have one set up.

```bash
npm run db:migrate
```

To run this command on Vercel, you can add it to your build command in `vercel.json` or run it in the Vercel CLI after a deployment. A simpler approach for the first deployment is to run it locally against your production database.

## 4. Deploy

Once your repository is connected and the environment variables are set, you can trigger a deployment from your Vercel dashboard or by pushing a new commit to your main branch.

Vercel will then build and deploy your application. You can monitor the deployment process in the "Deployments" tab of your Vercel project.
