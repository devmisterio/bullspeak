import { BalloonBuilder } from "./class/BalloonBuilder";
import { Bull } from "./class/animals/Bull";
import { Cat } from "./class/animals/Cat";
import { Fish } from "./class/animals/Fish";

/**
 * A mapping of animal names to their corresponding animal classes.
 */
const animalTypes = {
    cat: Cat,
    fish: Fish,
    bull: Bull,
};

/**
 * Generates the combined balloon and animal text message.
 * 
 * @param {string} animalName - The name of the animal.
 * @param {Array<string>} lines - The input lines to be displayed in the balloon.
 * @returns {string} The concatenated message containing balloon and animal text.
 */
export function getBalloonAndText(animalName: string, lines: Array<string>): string {
    // Create an instance of the specified animal class
    const animalClass: Cat | Fish | Bull = new animalTypes[animalName as keyof typeof animalTypes]();

    // Get the animal's message
    const animalMessage: string = animalClass.getMessage();

    // Create a balloon builder instance
    const balloonBuilder: BalloonBuilder = new BalloonBuilder(lines);

    // Build the balloon message
    const balloonMessage: string = balloonBuilder.buildBalloon();

    // Combine the balloon and animal messages
    return `${balloonMessage}\n${animalMessage}`;
}