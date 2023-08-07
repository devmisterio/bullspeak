function main() {
  if (process.stdin.isTTY) {
    console.log("The command is intended to work with pipes.");
    console.log("Usage: fortune | bullspeak");
    return;
  }

  const output: string[] = [];

  process.stdin.setEncoding("utf-8");

  process.stdin.on("data", (input: string) => {
    output.push(input);
  });

  process.stdin.on("end", () => {
    for (const line of output) {
      process.stdout.write(line);
    }
  });
}

main();
