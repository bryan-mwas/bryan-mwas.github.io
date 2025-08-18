import type { NextConfig } from "next";

// Configure for static export and GitHub Pages compatibility
const isGithubActions = Boolean(process.env.GITHUB_ACTIONS);
const repository = process.env.GITHUB_REPOSITORY ?? ""; // owner/repo
const repoName = repository.split("/")[1] ?? "";
const isUserOrOrgPages = /\.github\.io$/i.test(repoName);

let basePath: string | undefined = undefined;
let assetPrefix: string | undefined = undefined;

if (isGithubActions && repoName && !isUserOrOrgPages) {
  basePath = `/${repoName}`;
  assetPrefix = basePath;
}

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath,
  assetPrefix,
};

export default nextConfig;
