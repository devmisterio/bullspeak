import { Animal } from "../../interface/Animal";

/**
 * Represents a Cat that implements the Animal interface.
 */
export class Cat implements Animal {
  /**
   * Gets the message of the Cat.
   * 
   * @returns The Cat's ASCII art message as a string.
   */
  public getMessage(): string {
    return `    \\
     \\   /\\_/\\
       )  o o (   Meow!
      =\\      /=
`;
  }
}
