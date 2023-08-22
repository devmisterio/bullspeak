export class BalloonBuilder {
  private readonly lines: string[];
  private readonly maxWidth: number;

  constructor(lines: string[]) {
    this.lines = this.normalizeStringsLength(
      this.tabsToSpaces(lines),
      this.calculateMaxWidth(lines)
    );
    this.maxWidth = this.calculateMaxWidth(lines);
  }

  private normalizeStringsLength(lines: string[], maxwidth: number): string[] {
    return lines.map((line) => {
      const padding = " ".repeat(maxwidth - line.length);
      return line + padding;
    });
  }

  private tabsToSpaces(lines: string[]): string[] {
    return lines.map((line) => line.replace(/\t/g, "    "));
  }

  private calculateMaxWidth(lines: string[]): number {
    let maxWidth = 0;
    for (const line of lines) {
      const length = [...line].length;
      if (length > maxWidth) {
        maxWidth = length;
      }
    }
    return maxWidth;
  }

  private buildLineWithBorders(
    content: string,
    borderLeft: string,
    borderRight: string
  ): string {
    return `${borderLeft} ${content} ${borderRight}`;
  }

  public buildBalloon(): string {
    const borders = ["/", "\\", "\\", "/", "|", "<", ">"];

    const top = ` ${"_".repeat(this.maxWidth + 2)}`;
    const bottom = ` ${"-".repeat(this.maxWidth + 2)}`;

    const ret: string[] = [top];
    if (this.lines.length === 1) {
      const s = this.buildLineWithBorders(
        this.lines[0],
        borders[5],
        borders[6]
      );
      ret.push(s);
    } else {
      const firstLine = this.buildLineWithBorders(
        this.lines[0],
        borders[0],
        borders[1]
      );
      ret.push(firstLine);

      for (let i = 1; i < this.lines.length - 1; i++) {
        const s = this.buildLineWithBorders(
          this.lines[i],
          borders[4],
          borders[4]
        );
        ret.push(s);
      }

      const lastLine = this.buildLineWithBorders(
        this.lines[this.lines.length - 1],
        borders[2],
        borders[3]
      );

      ret.push(lastLine);
    }

    ret.push(bottom);
    return ret.join("\n");
  }
}
