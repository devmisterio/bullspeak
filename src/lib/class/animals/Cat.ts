import { Animal } from "../../interface/Animal";

export class Cat implements Animal {
  public getMessage(): string {
    return `    \\
     \\   /\\_/\\
       )  o o (   Meow!
      =\\      /=
`;
  }
}
