// Movie data
const moviesData = [
    { name: "🦁👑", title: "The Lion King" },
    { name: "🔥🫂", title: "salaar" },
    { name: "🧙‍♂️🎂", title: "Harry Potter" },
    { name: "🪙🔫⛏", title: "Kgf" },
    { name: "🧇👷", title: "IronMan" },
    { name: "❤💙💕", title: "Premalu" },
    { name: "🔥🌊", title: "RRR" },
    { name: "🐘👑", title: "Bahubali" },
    { name: "🔎🐠🌊", title: "Finding Nemo" },
    { name: "🕸👨‍💼", title: "Spider man" },
    
  ];
  
  // Phrases
  const winningWords = ["Congratulations!", "You're a movie genius!", "Well done!","Don't miss the game","Great Champ You are in Form"];
  const motivationPhrases = ["Better luck next time!", "Don't worry, try again!", "Almost there!","Try to score more in the game"];
  const dumbPhrases = ["Try Again!","You Lost the game before begenning","gain knowledge about movies","Get Lost"];
  // DOM elements
  let backGround = new Audio('./assets/backgound.mp3');
  let move = new Audio('./assets/move.mp3');
  let win= new Audio('./assets/win.mp3');
  const movieEmojis = document.getElementById("movie-emojis");
  const userGuesses = document.getElementById("user-guess");
  const guessButton = document.getElementById("guess-btn");
  const scores = document.getElementById("score");
  const gameOverBox = document.getElementById("endGameBox");
  const endGameMsg = document.getElementById("dumbMsg");
  const finalScr = document.getElementById("final-score");
  const playAgainButton = document.getElementById("restart");

  
  // Game state
  let score = 0;
  let currentMovieIndex = 0;
  let timer;
  
  // Initialize game
  startGame();
  
  // Initialize game function
  function startGame() {
    backGround.play()
    backGround.volume=0.7;
    displayTitles();
    getSetGo();
  }
  
  // Display movie title function
  function displayTitles() {
    movieEmojis.textContent = moviesData[currentMovieIndex].name;
  }
  
  // Start timer function
  function getSetGo() {
    let timeLeft = 25;
    updateTimer(timeLeft);
  
    timer = setInterval(() => {
      timeLeft--;
      updateTimer(timeLeft);
      if (timeLeft === 0) {
        clearInterval(timer);
        endGame();
      }
    }, 1000);
  }
  
  function updateTimer(timeLeft) {
    const timerDisplay = document.getElementById("timer");
    timerDisplay.textContent = timeLeft;
  }
  
  
  // Submit button click event
  guessButton.addEventListener("click", () => {
    const userGuess = userGuesses.value.trim().toLowerCase();
    const correctAnswer = moviesData[currentMovieIndex].title.toLowerCase();
    move.play()
    move.volume=0.9;
  
    if (userGuess === correctAnswer) {
      score++;
      scores.textContent = score;
      currentMovieIndex++;
      clearTimeout(timer);
      if (currentMovieIndex < moviesData.length) {
        displayTitles();
        getSetGo();
        userGuesses.value = "";
      } else {
        endGame();
        clearInterval(timer);
      }
    } else {
      endGame();
      clearInterval(timer);
    }
  });
  
  // End game function
  function endGame() {
    let message = "";
    if (score === 10) {
        const randomIndex = Math.floor(Math.random() * winningWords.length);
        message = winningWords[randomIndex];
    } else if (score < 10 && score > 0) {
        const randomIndex = Math.floor(Math.random() * motivationPhrases.length);
        message = motivationPhrases[randomIndex];
    } else if (score === 0) {
        const randomIndex = Math.floor(Math.random() * dumbPhrases.length);
        message = dumbPhrases[randomIndex];
    }
    endGameMsg.textContent = message;
    finalScr.textContent = score;
    gameOverBox.style.display = "block";
}
  function resetGame() {
    window.location.reload();
  }
  playAgainButton.addEventListener("click", resetGame);

  
  
