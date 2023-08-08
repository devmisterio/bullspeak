import { TextEncoder } from "util";
import * as readline from "readline";


function buildBalloon(lines: string[], maxWidth: number): string {
  const borders = ["/", "\\", "\\", "/", "|", "<", ">"];

  const top = ` ${"_".repeat(maxWidth + 2)}`;
  const bottom = ` ${"-".repeat(maxWidth + 2)}`;

  const ret: string[] = [top];
  let s: string;
  if (lines.length === 1) {
    s = `${borders[5]} ${lines[0]} ${borders[6]}`;
    ret.push(s);
  } else {
    s = `${borders[0]} ${lines[0]} ${borders[1]}`;
    ret.push(s);

    for (let i = 1; i < lines.length - 1; i++) {
      const s = `${borders[4]} ${lines[i]} ${borders[4]}`;
      ret.push(s);
    }

    s = `${borders[2]} ${lines[lines.length - 1]} ${borders[3]}`;
    ret.push(s);
  }

  ret.push(bottom);
  return ret.join("\n");
}

function tabsToSpaces(lines: string[]): string[] {
  return lines.map((l) => l.replace(/\t/g, "    "));
}

function calculateMaxWidth(lines: string[]): number {
  let maxWidth = 0;
  for (const l of lines) {
    const len = [...new TextEncoder().encode(l)].length;
    if (len > maxWidth) {
      maxWidth = len;
    }
  }
  return maxWidth;
}

function normalizeStringsLength(lines: string[], maxwidth: number): string[] {
  return lines.map(
    (l) => l + " ".repeat(maxwidth - [...new TextEncoder().encode(l)].length)
  );
}


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

  const normalizedLines = normalizeStringsLength(
    tabsToSpaces(lines),
    calculateMaxWidth(lines)
  );
  const balloon = buildBalloon(normalizedLines, calculateMaxWidth(lines));

  console.log(balloon);
  console.log(bull);
  console.log();
}

main();