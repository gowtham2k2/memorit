# Memorit

Memorit is a simple implementation of the classic "Simon" memory game using HTML, CSS, and JavaScript (jQuery). The game involves repeating a sequence of colors that gets progressively longer, testing the player's memory.

## Table of Contents

- [Memorit](#Memorit)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Game Rules](#game-rules)
  - [Code Explanation](#code-explanation)

## Getting Started

### Prerequisites

Make sure you have the following software installed:

- A modern web browser (Chrome, Firefox, Safari, etc.)
- A code editor (VS Code, Sublime Text, etc.)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/gowtham2k2/memorit.git
   ```
2. Navigate to the project directory:
   ```bash
   cd memorit
   ```
3. Open the `index.html` file in your web browser to start the game.

## Game Rules

1. Press any key or click on the scoreboard to start the game.
2. The game will show you a sequence of colors. Memorize the sequence.
3. Repeat the sequence by clicking on the colored tiles.
4. If you get the sequence right, the game will add one more color to the sequence.
5. If you get the sequence wrong, the game will display "Game Over!!!" and you can restart by clicking the replay button.

## Code Explanation

### Variables

- `gamePattern`: Stores the sequence of colors generated by the game.
- `userPattern`: Stores the sequence of colors clicked by the user.
- `colors`: An array of possible colors.
- `gameStarted`: A flag to check if the game has started.
- `level`: Tracks the current level of the game.

---

Feel free to modify and enhance the game. Contributions are welcome!

## Output

<div align= "center">
<img src= "./eg_img/eg1.png" height=400>
<img src= "./eg_img/eg2.png" height=400>
<img src= "./eg_img/eg3.png" height=400>
</div>
