#! /usr/bin/env node

import yargs from 'yargs/yargs';
import { getBalloonAndText } from "../lib/bullspeak";
import { getInputLines, printBalloonAndText } from "../lib/utils/handle";

/**
 * The main entry point of the bullspeak command-line utility.
 * Reads input lines, processes them, and displays the output balloon and text.
 */
async function main() {
  const stdin: NodeJS.ReadStream = process.stdin;

  // Check if input is being provided through pipes
  if (stdin.isTTY) {
    console.log("The command is intended to work with pipes.");
    console.log("Usage: fortune | bullspeak");
    return;
  }

  // Parse command-line arguments using yargs
  const argv = yargs(process.argv.slice(2))
    .scriptName('bullspeak')
    .usage('Usage: <cmd> | $0 -a animalName')
    .options({
      a: {
        alias: 'animal',
        describe: 'Animal to show',
        type: 'string',
        choices: ['cat', 'fish', 'bull'],
        default: 'bull',
      },
    }).parseSync();

  const animalName: string = argv.a;

  // Get input lines from stdin
  const lines: Array<string> = await getInputLines(stdin);

  // Process input and generate the output balloon and text
  const result: string = getBalloonAndText(animalName, lines);

  // Display the output
  printBalloonAndText(result);
}

main();
