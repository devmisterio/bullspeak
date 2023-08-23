import * as readline from "readline";
import yargs from 'yargs/yargs';

import { BalloonBuilder } from "../lib/class/BalloonBuilder";

import { Cat } from "../lib/class/animals/Cat";
import { Fish } from "../lib/class/animals/Fish";
import { Bull } from "../lib/class/animals/Bull";
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


  const lines: string[] = [];
  const rl = readline.createInterface({
    input: stdin,
  });

  for await (const line of rl) {
    lines.push(line);
  }

  const animalTypes = {
    cat: Cat,
    fish: Fish,
    bull: Bull,
  };

  const animalClass = new animalTypes[animalName as keyof typeof animalTypes]();
  const animal = animalClass.getMessage();

  const builder = new BalloonBuilder(lines);
  const balloon = builder.buildBalloon();

  console.log(balloon);
  console.log(animal);
  console.log();
}

main();
