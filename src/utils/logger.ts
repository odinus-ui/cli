import { colors } from "../consts/colors";

export class Logger {
  private readonly trigger: string;
  private readonly color: string;
  constructor(trigger: string, color: keyof typeof colors) {
    this.trigger = trigger;
    this.color = color;
  }

  private toCenter(message: string, color: keyof typeof colors) {
    const width = 5;
    const centeredMessage = message.padStart(width - message.length, " ");
    return (
      " " + colors[color] + " " + centeredMessage + " " + colors.reset + " "
    );
  }

  log(message: string) {
    console.log(
      this.toCenter(this.trigger, this.color as keyof typeof colors) + message
    );
  }

  error(message: string) {
    console.log(this.toCenter("Error", "red") + message);
  }

  success(message: string) {
    console.log(this.toCenter("Done", "green") + message);
  }

  warn(message: string) {
    console.log(this.toCenter("Warn", "yellow") + message);
  }
}
