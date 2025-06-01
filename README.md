# GreenField
The project is not what its name suggests, but an online food ordering app specifically designed as a Single Page Application with the aim of minimizing the loading time and giving a user-friendly and interactive experience which more often feels like a desktop application. Aims at providing uninterrupted services once loaded by minimizing requests to the server.  A single-page app can cache any local data effectively. It is built on the framework VueJS.

## Project Setup and Build

This project now includes a `package.json` file to manage dependencies and scripts. It is configured for a Vue CLI setup.

- **Install Dependencies**:
  ```bash
  npm install
  ```

- **Run Development Server**:
  ```bash
  npm run serve
  ```

- **Build for Production**:
  ```bash
  npm run build
  ```
  The build assets will be located in the `dist/` directory.

## Vercel Deployment

This Vue.js application is configured for deployment on the Vercel platform.

- **Configuration**: Deployment settings are specified in `vercel.json`. It uses the `@vercel/vue` builder, runs `npm run build`, and deploys the contents of the `dist` directory.
- **Manual Deployment**: You can deploy manually using the Vercel CLI by linking your project and running `vercel` or `vercel --prod`.

## CI/CD with GitHub Actions and Vercel

Continuous integration and deployment (CI/CD) are set up using GitHub Actions to automatically deploy the application to Vercel.

- **Workflow File**: The workflow is defined in `.github/workflows/vercel-deploy.yml`.
- **Trigger**: The workflow automatically triggers on every push to the `master` branch.
- **Deployment Process**:
    1. Checks out the code.
    2. Sets up Node.js.
    3. Installs project dependencies (`npm install`).
    4. Deploys the application to Vercel.

- **Required GitHub Secrets**:
  For the CI/CD workflow to successfully deploy to Vercel, you must configure the following secrets in your GitHub repository settings (under Settings > Secrets and variables > Actions):
    - `VERCEL_TOKEN`: Your Vercel account token. This is a personal access token you can generate from your Vercel account settings.
    - `VERCEL_ORG_ID`: The ID of your Vercel organization/team. You can find this in your Vercel account settings or team settings.
    - `VERCEL_PROJECT_ID`: The ID of the Vercel project that corresponds to this application. You can get this after creating a project in Vercel (either manually for the first deployment or it can be found in the project settings on Vercel).

**Note**: The GitHub Actions workflow (`amondnet/vercel-action@v20`) by default might deploy to a preview URL. For production deployment on pushes to `master`, ensure your Vercel project's Git integration settings are correctly configured to treat `master` as the production branch, or adjust the `vercel-args` in the workflow file to include `--prod` for the `master` branch deployment step.
