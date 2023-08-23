import { BalloonBuilder } from "./class/BalloonBuilder";
import { Bull } from "./class/animals/Bull";
import { Cat } from "./class/animals/Cat";
import { Fish } from "./class/animals/Fish";

const animalTypes = {
    cat: Cat,
    fish: Fish,
    bull: Bull,
};

export function getBalloonAndText(animalName: string, lines: Array<string>): string {
    const animalClass: Cat | Fish | Bull = new animalTypes[animalName as keyof typeof animalTypes]();
    const animalMessage: string = animalClass.getMessage();

    const balloonBuilder: BalloonBuilder = new BalloonBuilder(lines);
    const balloonMessage: string = balloonBuilder.buildBalloon();

    return `${balloonMessage}\n${animalMessage}`;
}