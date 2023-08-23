import * as readline from "readline";

export async function getInputLines(inputStream: NodeJS.ReadableStream): Promise<string[]> {
  const lines: string[] = [];
  const rl = readline.createInterface({
    input: inputStream,
  });

  for await (const line of rl) {
    lines.push(line);
  }

  return lines;
}

export function printBalloonAndText(balloon: string): void {
  console.log(balloon);
}
