var gamePattern = [];
var userPattern = [];
var colors = ["red", "blue", "green", "yellow"];
var gameStarted = false;
var level = 0;
// var scoreBoardFlash = setInterval(() => {
//   $(".scoreBoard").fadeOut(500).fadeIn(500);
// }, 1000);

// pressing any key event
$(document).on("keydown", () => {
  if (!gameStarted) {
    $(".replay")
      .fadeOut(100)
      .fadeIn(100)
      .fadeOut(100)
      .fadeIn(100)
      .fadeOut(100)
      .fadeIn(100);
    setTimeout(() => {
      $(".replay").css({ display: "none" });
      newSequence();
    }, 1000);
    gameStarted = true;
  }
});

// clicking scoreboard event
$(".scoreBoard").on("click", () => {
  if (!gameStarted) {
    animatePress(".scoreBoard");
    $(".scoreBoard")
      .fadeOut(100)
      .fadeIn(100)
      .fadeOut(100)
      .fadeIn(100)
      .fadeOut(100)
      .fadeIn(100);
    setTimeout(() => {
      $(".replay").css({ display: "none" });
      newSequence();
    }, 1000);
    gameStarted = true;
  }
});

// clicking replay-icon event
$(".replay").on("click", () => {
  console.log("replay clicked");
  if (!gameStarted) {
    $(".replay")
      .fadeOut(100)
      .fadeIn(100)
      .fadeOut(100)
      .fadeIn(100)
      .fadeOut(100)
      .fadeIn(100);
    setTimeout(() => {
      $(".replay").css({ display: "none" });
      newSequence();
    }, 1000);
    gameStarted = true;
  }
});

// clicking colors
$(".tile").on("click", (e) => {
  if (gameStarted) {
    let userChosenColor = e.target.id;
    userPattern.push(userChosenColor);
    playBgm(userChosenColor);
    animatePress(`.tile-wrapper>#${userChosenColor}`);
    checkResult(userPattern.length - 1);
  }
});

// adding New or Next sequence function
function newSequence() {
  level++;
  userPattern = [];
  $(".scoreBoard").text("Level " + level);
  let randomChosenColor = colors[Math.floor(Math.random() * colors.length)];
  playBgm(randomChosenColor);
  $(`.tile-wrapper>#${randomChosenColor}`)
    .fadeOut(100)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  console.log(randomChosenColor);
  gamePattern.push(randomChosenColor);
}

// playing Background music function
function playBgm(color) {
  let audio = new Audio(`./assets/sounds/${color}.mp3`);
  audio.play();
}

// pressing animation function
function animatePress(element) {
  $(element).addClass("pressed");
  setTimeout(() => {
    $(element).removeClass("pressed");
  }, 200);
}

// result checking function
function checkResult(currentLevel) {
  if (gamePattern[currentLevel] === userPattern[currentLevel]) {
    if (userPattern.length === gamePattern.length) {
      setTimeout(() => {
        newSequence();
      }, 1000);
    }
  } else {
    $("body").addClass("game-over-theme");
    $(".scoreBoard").text("Game Over...!!!");
    playBgm("wrong");
    setTimeout(() => {
      $("body").removeClass("game-over-theme");
    }, 1000);
    $(".replay").css({ display: "block" });

    startOver();
  }
}

// startover function inorder to replay
function startOver() {
  gamePattern = [];
  userPattern = [];
  level = 0;
  gameStarted = false;
  setTimeout(() => {
    $(`.scoreBoard`).text("Tap me or Tap Replay ↻ icon to Restart");
  }, 2000);
}
