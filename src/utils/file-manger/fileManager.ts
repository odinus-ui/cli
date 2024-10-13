import { readFileSync, writeFileSync } from "fs";
import { join } from "path";

export default class FileManager {
  private userPath: string;
  constructor() {
    this.userPath = process.cwd();
  }

  /**
   * Create a file
   * @param fileName the name of the file to create
   * @param path the path to create the file
   * @param contents the content of the file
   */
  createFile(fileName: string, path: string, contents: string) {
    const newFilePath = join(this.userPath, path, fileName);
    writeFileSync(newFilePath, contents);
  }

  /**
   * Get the tailwind config file
   * @returns the tailwind config file
   */
  getTailwindConfig(): any {
    const config = this.getOdinusUIConfig();
    const tailwindConfig = require(config.tailwind.config).default;
    return tailwindConfig;
  }

  /**
   * Get the odinus ui config file
   * @returns the odinus ui config file
   */
  getOdinusUIConfig(): OdinusUIConfig {
    const file = readFileSync(
      join(this.userPath, "odinusui.config.js"),
      "utf-8"
    );
    if (!file) {
      throw new Error("The configuration file for Odinus UI is missing!");
    }

    return JSON.parse(
      readFileSync(join(this.userPath, "odinusui.config.js"), "utf-8")
    );
  }
}
