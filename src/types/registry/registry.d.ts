type registry = {
  title: string;
  packageManager: "pnpm" | "npm" | "yarn";
  dependencies?: string[];
  files: file[];
  tailwind?: any;
};
