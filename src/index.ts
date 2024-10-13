import { Command } from "commander";
import { commands } from "./commands";

const program = new Command();

program.name("odinus-ui").description("CLI for Odinus UI").version("1.0.0");

for (const command of commands) {
  if (
    command.flags &&
    command.flags.platforms &&
    !command.flags.platforms.includes(process.platform)
  ) {
    continue;
  }

  let buildCommand = program
    .command(command.cmd)
    .description(command.description)
    .aliases(command?.aliases || []);

  for (const opt of command?.options || []) {
    buildCommand = buildCommand.option(opt.arg, opt.description);
  }

  buildCommand = buildCommand.action(async (...arguments_) => {
    const controller = command.requestController();

    (await controller)(...arguments_);
  });
}

program.parse(process.argv);
