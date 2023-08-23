import * as readline from "readline";

/**
 * Reads lines from the input stream and returns them as an array of strings.
 *
 * @param {NodeJS.ReadableStream} inputStream - The input stream to read lines from.
 * @returns {Promise<string[]>} A promise that resolves with an array of input lines.
 */
export async function getInputLines(inputStream: NodeJS.ReadableStream): Promise<Array<string>> {
  const lines: Array<string> = [];
  const rl: readline.Interface = readline.createInterface({
    input: inputStream,
  });

  for await (const line of rl) {
    lines.push(line);
  }

  return lines;
}

/**
 * Prints the given balloon and text message to the console.
 *
 * @param {string} balloon - The balloon and text message to print.
 * @returns {void}
 */
export function printBalloonAndText(balloon: string): void {
  console.log(balloon);
}
