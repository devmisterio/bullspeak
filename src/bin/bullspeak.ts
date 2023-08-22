import * as readline from "readline";
import { BalloonBuilder } from "../lib/class/BalloonBuilder";

async function main() {
  const stdin = process.stdin;

  if (stdin.isTTY) {
    console.log("The command is intended to work with pipes.");
    console.log("Usage: fortune | bullspeak");
    return;
  }

  const lines: string[] = [];
  const rl = readline.createInterface({
    input: stdin,
  });

  for await (const line of rl) {
    lines.push(line);
  }

   const bull = `  \\   (__)
   \\  (oo)\\_______
      (__)\\       )\\/\\
           ||----w |
           ||     ||
    `;

    const builder = new BalloonBuilder(lines);

    const balloon = builder.buildBalloon();
  console.log(balloon);
  console.log(bull);
  console.log();
}

main();