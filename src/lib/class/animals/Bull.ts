import { Animal } from "../../interface/Animal";

/**
 * Represents a Bull that implements the Animal interface.
 */
export class Bull implements Animal {
  /**
   * Gets the message of the Bull.
   * 
   * @returns The Bull's ASCII art message as a string.
   */
  public getMessage(): string {
    return `  \\   (__)
   \\  (oo)\\_______
      (__)\\       )\\/\\
           ||----w |
           ||     ||
  `;
  }
}
