const questions = [
    // Add 10 questions here (2 per round)
    {
      question: "What does SDG stand for?",
      options: ["Sustainable Development Goals", "Super Duper Goals", "Science Development Group", "Secure Data Guidelines"],
      answer: 0
    },
    {
      question: "Which SDG focuses on quality education?",
      options: ["Goal 2", "Goal 4", "Goal 6", "Goal 7"],
      answer: 1
    },
    {
      question: "SDG 13 focuses on?",
      options: ["No Poverty", "Gender Equality", "Climate Action", "Zero Hunger"],
      answer: 2
    },
    {
      question: "How many SDGs are there?",
      options: ["15", "17", "20", "10"],
      answer: 1
    },
    {
      question: "Which SDG promotes gender equality?",
      options: ["Goal 3", "Goal 4", "Goal 5", "Goal 6"],
      answer: 2
    },
    {
      question: "What does SDG 6 aim to achieve?",
      options: ["Clean Water and Sanitation", "Clean Energy", "Peace and Justice", "Good Health"],
      answer: 0
    },
    {
      question: "Which of these is NOT an SDG?",
      options: ["No Hunger", "Life Below Water", "Decent Work", "Global Warming"],
      answer: 3
    },
    {
      question: "Goal 3 is about?",
      options: ["Innovation", "Good Health", "Justice", "Clean Air"],
      answer: 1
    },
    {
      question: "Target year to achieve SDGs?",
      options: ["2030", "2025", "2040", "2050"],
      answer: 0
    },
    {
      question: "Who adopted the SDGs?",
      options: ["UNESCO", "UN", "WHO", "NASA"],
      answer: 1
    }
  ];
  
  let currentQ = 0;
  let score = 0;
  let timer;
  let timeLeft = 30;
  let teamName = "";
  let used5050 = false;
  let audienceUsed = false;
  let timerPaused = false;
  let timeRemaining = 30;
  let timerAudio = document.getElementById("timer-audio");
 

  
  function startGame() {
    teamName = document.getElementById("teamNameInput").value.trim();
    if (!teamName) return alert("Please enter a team name!");
    document.getElementById("welcome-screen").classList.add("hidden");
    document.getElementById("quiz-container").classList.remove("hidden");
    document.getElementById("team-name").textContent = teamName;
    showQuestion();
    document.addEventListener("click", function unlockAudioOnce() {
        const timerAudio = document.getElementById("timer-audio");
        if (timerAudio) {
          timerAudio.play().then(() => {
            timerAudio.pause();
            timerAudio.currentTime = 0;
            document.removeEventListener("click", unlockAudioOnce); // only once
          }).catch(err => {
            console.warn("Autoplay blocked:", err);
          });
        }
      });
      
  }
  
  function showQuestion() {
    clearInterval(timer);
  
    const question = questions[currentQ];
    const round = Math.floor(currentQ / 2) + 1;
  
    document.getElementById("round-label").textContent = `Round ${round}`;
    document.getElementById("question").textContent = question.question;
  
    const optionsEl = document.getElementById("options");
    optionsEl.innerHTML = "";
    question.options.forEach((opt, idx) => {
      const btn = document.createElement("div");
      btn.className = "option";
      btn.textContent = opt;
      btn.onclick = () => selectOption(idx, btn);
      optionsEl.appendChild(btn);
    });
  
    // Reset 50-50 option visibility
    document.getElementById("btn-5050").disabled = false;
    const allOptions = document.querySelectorAll(".option");
    allOptions.forEach(opt => (opt.style.visibility = "visible"));
  
    // Timer logic
    timeLeft = 30;
    document.getElementById("timer").textContent = `Time Left: ${timeLeft}s`;
  
    // Play tik-tik sound
    const timerAudio = document.getElementById("timer-audio");
    timerAudio.currentTime = 0;
    timerAudio.loop = true;
    timerAudio.play().catch(() => {});
  
    timer = setInterval(() => {
      timeLeft--;
      document.getElementById("timer").textContent = `Time Left: ${timeLeft}s`;
  
      if (timeLeft <= 0) {
        clearInterval(timer);
        timerAudio.pause();
        timerAudio.currentTime = 0;
  
        score -= 2;
        if (score < 0) score = 0;
  
        document.getElementById("score-display").textContent = score;
        updateScoreBar();
  
        showAnswer(-1); // No option selected
      }
    }, 1000);
  }
  
  
  function selectOption(index, btn) {
    clearInterval(timer);
    showAnswer(index);
  }



  
  function showAnswer(selectedIndex) {
    timerAudio.pause();
    timerAudio.currentTime = 0;
    const correctIndex = questions[currentQ].answer;
    const options = document.querySelectorAll(".option");
  
    options.forEach((opt, i) => {
      opt.onclick = null;
      if (i === correctIndex) opt.classList.add("correct");
      else if (i === selectedIndex) opt.classList.add("wrong");
    });
  
    if (selectedIndex === correctIndex) {
      score += Math.max(1, Math.floor(timeLeft / 5)); // Speed bonus
    } else if (selectedIndex === -1) {
      // Timeout case
      score -= 2;
      if (score < 0) score = 0; // Optional: prevent negative scores
    }
  
    document.getElementById("score-display").textContent = score;
  
    setTimeout(() => {
      currentQ++;
      if (currentQ < questions.length) showQuestion();
      else showResult();
    }, 2000);
  }
  
  
  function use5050() {
    if (used5050) return;
    used5050 = true;
    document.getElementById("btn-5050").disabled = true;
  
    const correctIndex = questions[currentQ].answer;
    let wrongIndexes = [0, 1, 2, 3].filter(i => i !== correctIndex);
    wrongIndexes.sort(() => Math.random() - 0.5);
    const toHide = wrongIndexes.slice(0, 2);
  
    const options = document.querySelectorAll(".option");
    toHide.forEach(i => {
      options[i].style.visibility = "hidden";
    });
  }
  
  function showResult() {
    document.getElementById("quiz-container").classList.add("hidden");
    document.getElementById("result").classList.remove("hidden");
    document.getElementById("final-team").textContent = teamName;
    document.getElementById("final-score").textContent = score;
  }
  
  function useAudiencePoll() {
    if (audienceUsed) return;
    audienceUsed = true;
    document.getElementById("btn-audience").disabled = true;
  
    clearInterval(timer);
    timerPaused = true;
    timeRemaining = timeLeft;
  
    document.getElementById("quiz-container").classList.add("hidden");
    document.getElementById("audience-poll-box").classList.remove("hidden");
  }
  
  function showAudiencePollResult() {
    document.getElementById("audience-poll-box").classList.add("hidden");
    document.getElementById("audience-result").classList.remove("hidden");
  
    // You can dynamically update the text if needed
    document.getElementById("audience-text").textContent = "Audience suggests Option B";
  }
  
  function resumeAfterAudiencePoll() {
    document.getElementById("audience-result").classList.add("hidden");
    document.getElementById("quiz-container").classList.remove("hidden");
  
    timeLeft = timeRemaining;
    document.getElementById("timer").textContent = `Time Left: ${timeLeft}s`;
    timer = setInterval(() => {
      timeLeft--;
      document.getElementById("timer").textContent = `Time Left: ${timeLeft}s`;
      if (timeLeft <= 0) {
        clearInterval(timer);
        showAnswer(-1);
      }
    }, 1000);
  }
  