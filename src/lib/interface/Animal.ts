/**
 * Interface representing an animal that can provide a message.
 * Implementing classes should define the `getMessage` method.
 *
 * @interface Animal
 */
export interface Animal {
  /**
   * Get the message associated with the animal.
   *
   * @returns {string} The message from the animal.
   */
  getMessage(): string;
}
