export const commands: Command[] = [
  {
    cmd: "add",
    description: "Add a new component to the project",
    requestController: async () => (await import("./commands/add")).add,
  },
];
