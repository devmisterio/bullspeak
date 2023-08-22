import { Animal } from "../../interface/Animal";

export class Bull implements Animal {
  public getMessage(): string {
    return `  \\   (__)
   \\  (oo)\\_______
      (__)\\       )\\/\\
           ||----w |
           ||     ||
  `;
  }
}
