interface Command {
  cmd: string;
  description: string;

  requestController: () => Promise<(...arguments_: any) => void>;

  options?: CommandOption[];
  aliases?: string[];
  flags?: {
    platforms?: CommandFlagPlatform[];
  };

  disableMiddleware?: boolean;
}

interface CommandOption {
  arg: string;
  description: string;
}

type CommandFlagPlatform = NodeJS.Platform;
