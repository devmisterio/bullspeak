#! /usr/bin/env node

import yargs from 'yargs/yargs';
import { getBalloonAndText } from "../lib/bullspeak";
import { getInputLines, printBalloonAndText } from "../lib/utils/handle";

async function main() {
  const stdin = process.stdin;

  if (stdin.isTTY) {
    console.log("The command is intended to work with pipes.");
    console.log("Usage: fortune | bullspeak");
    return;
  }

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

  const animalName = argv.a;

  const lines: string[] = await getInputLines(stdin);

  const result = getBalloonAndText(animalName, lines);
  printBalloonAndText(result);
}

main();
