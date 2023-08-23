# Bullspeak - The Amusing ASCII Talking App

Bullspeak is a delightful and quirky ASCII art application designed to bring a touch of humor and whimsy to your Linux terminal. Inspired by the popular cowsay app, Bullspeak introduces a new character to the ASCII art scene - a talkative bull, and possibly other amusing animals as well.

It's a fun and creative way to enhance your terminal experience!


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Available Animals](#available-animals)
- [Example Output](#example-output)
- [Contributing](#contributing)
- [License](#license)

## Installation

To use Bullspeak, you need to have Node.js installed on your machine. If you haven't already, you can download and install it from the [official Node.js website](https://nodejs.org/).

Once you have Node.js installed, you can install Bullspeak globally using npm:

```sh
npm install -g bullspeak
```

## Usage

Bullspeak is designed to work with text input from pipes. By default, it will use the **"bull"** animal if no parameters are provided. Here's how you can use it:
```sh
fortune | bullspeak
```

You can also choose a specific animal's message to display using the -a or --animal option:
```sh
fortune | bullspeak -a animalName
```

Replace **animalName** with the name of the animal whose message you want to display. The available options for **animalName** are: **cat**, **fish**, and **bull**.

For example:
```sh
fortune | bullspeak -a cat
```

This will display an ASCII art balloon with a cat's message.

## Available Animals
Bullspeak comes with three different animals, each with its own ASCII art message:
- Cat
- Fish
- Bull
You can choose which animal's message you want to display using the **-a** or **--animal** option when running the command.

## Example Output
When you run the following command:
```sh
fortune | bullspeak
```

```sh
 ________________________________________________________________
/                                                                \
| Math is like love -- a simple idea but it can get complicated. |
|         -- R. Drabek                                           |
\                                                                /
 ----------------------------------------------------------------
  \   (__)
   \  (oo)\_______
      (__)\       )\/\
           ||----w |
           ||     ||
```

## Contributing
Contributions to Bullspeak are welcome! Whether you want to add new animals, improve existing code, or fix bugs, your help is appreciated.

1. Fork the repository.
2. Create a new branch for your feature or fix: git checkout -b feature/your-feature-name or git checkout -b bugfix/your-bug-name.
3. Make your changes and commit them: git commit -m "Add your message here".
4. Push your changes to your fork: git push origin feature/your-feature-name.
5. Create a pull request on the original repository.

## License
This project is licensed under the GNU GPL. See the [LICENSE](LICENSE) file for details.