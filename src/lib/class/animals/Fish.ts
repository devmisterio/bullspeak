import { Animal } from "../../interface/Animal";

/**
 * Represents a Fish that implements the Animal interface.
 */
export class Fish implements Animal {
  /**
   * Gets the message of the Fish.
   * 
   * @returns The Fish's ASCII art message as a string.
   */
  public getMessage(): string {
    return `    \\
     \\
       ><(((º>
`;
  }
}
