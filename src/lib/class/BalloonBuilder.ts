/**
 * BalloonBuilder class is responsible for constructing balloon messages.
 */
export class BalloonBuilder {
  private readonly lines: Array<string>;
  private readonly maxWidth: number;

  /**
   * Creates a new BalloonBuilder instance.
   * 
   * @param lines - The lines of text to be included in the balloon.
   */
  constructor(lines: Array<string>) {
    this.lines = this.normalizeStringsLength(
      this.tabsToSpaces(lines),
      this.calculateMaxWidth(lines)
    );
    this.maxWidth = this.calculateMaxWidth(lines);
  }

  /**
   * Normalizes the length of each line by adding padding spaces.
   * 
   * @param lines - The lines of text to be normalized.
   * @param maxwidth - The maximum width for the lines.
   * @returns The normalized lines with added padding.
   */
  private normalizeStringsLength(lines: Array<string>, maxwidth: number): Array<string> {
    return lines.map((line: string) => {
      const padding: string = " ".repeat(maxwidth - line.length);
      return line + padding;
    });
  }

  /**
   * Converts tabs to spaces in each line.
   * 
   * @param lines - The lines of text to be processed.
   * @returns The lines with tabs replaced by spaces.
   */
  private tabsToSpaces(lines: Array<string>): Array<string> {
    return lines.map((line: string) => line.replace(/\t/g, "    "));
  }

  /**
   * Calculates the maximum width among the lines.
   * 
   * @param lines - The lines of text to calculate the maximum width from.
   * @returns The maximum width among the lines.
   */
  private calculateMaxWidth(lines: Array<string>): number {
    let maxWidth: number = 0;
    for (const line of lines) {
      const length: number = [...line].length;
      if (length > maxWidth) {
        maxWidth = length;
      }
    }
    return maxWidth;
  }

  /**
   * Builds a line with specified borders.
   * 
   * @param content - The content of the line.
   * @param borderLeft - The left border.
   * @param borderRight - The right border.
   * @returns The line with specified borders.
   */
  private buildLineWithBorders(
    content: string,
    borderLeft: string,
    borderRight: string
  ): string {
    return `${borderLeft} ${content} ${borderRight}`;
  }

  /**
   * Builds the balloon message using the specified lines and borders.
   * 
   * @returns The complete balloon message as a string.
   */
  public buildBalloon(): string {
    const borders: Array<string> = ["/", "\\", "\\", "/", "|", "<", ">"];

    const top: string = ` ${"_".repeat(this.maxWidth + 2)}`;
    const bottom: string = ` ${"-".repeat(this.maxWidth + 2)}`;

    const ret: Array<string> = [top];
    if (this.lines.length === 1) {
      const s: string = this.buildLineWithBorders(
        this.lines[0],
        borders[5],
        borders[6]
      );
      ret.push(s);
    } else {
      const firstLine: string = this.buildLineWithBorders(
        this.lines[0],
        borders[0],
        borders[1]
      );
      ret.push(firstLine);

      for (let i = 1; i < this.lines.length - 1; i++) {
        const s: string = this.buildLineWithBorders(
          this.lines[i],
          borders[4],
          borders[4]
        );
        ret.push(s);
      }

      const lastLine: string = this.buildLineWithBorders(
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
