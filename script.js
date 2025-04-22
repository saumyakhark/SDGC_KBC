entTeam = 0;
let teamNames = [];
let teamScores = [];
let teamAnsweredQuestions = [];
let currentRound = 1;
let score = 0;
let used5050 = false;
let usedPoll = false;
let timer;
let timeLeft;

let allQuestions = {
  round1: [
        {
          question: "What is the theme of SDG 1?",
          options: ["Zero Hunger", "No Poverty", "Good Health and Well-being", "Gender Equality"],
          answer: 1
        },
        {
          question: "What is the theme of SDG 2?",
          options: ["Clean Water and Sanitation", "Climate Action", "Zero Hunger", "Affordable and Clean Energy"],
          answer: 2
        },
        {
          question: "What is the theme of SDG 3?",
          options: ["Quality Education", "Good Health and Well-being", "Life Below Water", "Reduced Inequalities"],
          answer: 1
        },
        {
          question: "What is the theme of SDG 4?",
          options: ["Quality Education", "No Poverty", "Life on Land", "Sustainable Cities and Communities"],
          answer: 0
        },
        {
          question: "What is the theme of SDG 5?",
          options: ["Climate Action", "Gender Equality", "Clean Water and Sanitation", "Peace and Justice"],
          answer: 1
        },
        {
          question: "What is the theme of SDG 6?",
          options: ["Clean Water and Sanitation", "Industry and Innovation", "Reduced Inequality", "Life Below Water"],
          answer: 0
        },
        {
          question: "What is the theme of SDG 7?",
          options: ["Affordable and Clean Energy", "Sustainable Cities", "Responsible Consumption", "Climate Action"],
          answer: 0
        },
        {
          question: "What is the theme of SDG 8?",
          options: ["No Poverty", "Decent Work and Economic Growth", "Partnerships for the Goals", "Gender Equality"],
          answer: 1
        },
        {
          question: "What is the theme of SDG 9?",
          options: ["Life on Land", "Peace and Justice", "Industry, Innovation and Infrastructure", "Affordable Energy"],
          answer: 2
        },
        {
          question: "What is the theme of SDG 10?",
          options: ["Responsible Consumption", "Reduced Inequalities", "Life Below Water", "Zero Hunger"],
          answer: 1
        },
        {
          question: "What is the theme of SDG 11?",
          options: ["Peace and Justice", "Sustainable Cities and Communities", "Climate Action", "Clean Water"],
          answer: 1
        },
        {
          question: "What is the theme of SDG 12?",
          options: ["Responsible Consumption and Production", "Clean Water", "Life on Land", "Zero Hunger"],
          answer: 0
        },
        {
          question: "What is the theme of SDG 13?",
          options: ["Life Below Water", "Quality Education", "Climate Action", "Decent Work"],
          answer: 2
        },
        {
          question: "What is the theme of SDG 14?",
          options: ["Peace, Justice and Strong Institutions", "Life Below Water", "Life on Land", "Affordable and Clean Energy"],
          answer: 1
        },
        {
          question: "What is the theme of SDG 15?",
          options: ["Life on Land", "Gender Equality", "Zero Hunger", "Industry and Innovation"],
          answer: 0
        },
        {
          question: "What is the theme of SDG 16?",
          options: ["No Poverty", "Partnerships for the Goals", "Peace, Justice and Strong Institutions", "Good Health and Well-being"],
          answer: 2
        },
        {
          question: "What is the theme of SDG 17?",
          options: ["Partnerships for the Goals", "Quality Education", "Clean Water and Sanitation", "Gender Equality"],
          answer: 0
        },
        {
          question: "Which SDG focuses on innovation and infrastructure?",
          options: ["SDG 8", "SDG 5", "SDG 9", "SDG 11"],
          answer: 2
        },
        {
          question: "Which goal relates to marine life and ocean health?",
          options: ["SDG 13", "SDG 14", "SDG 15", "SDG 10"],
          answer: 1
        },
        {
          question: "Which SDG targets ending hunger globally?",
          options: ["SDG 1", "SDG 2", "SDG 12", "SDG 4"],
          answer: 1
        },
        {
          question: "Which SDG promotes peaceful societies and access to justice?",
          options: ["SDG 17", "SDG 13", "SDG 16", "SDG 7"],
          answer: 2
        },
        {
          question: "Which SDG promotes access to affordable energy?",
          options: ["SDG 6", "SDG 7", "SDG 8", "SDG 10"],
          answer: 1
        },
        {
          question: "Which SDG aims to create sustainable urban development?",
          options: ["SDG 11", "SDG 4", "SDG 1", "SDG 14"],
          answer: 0
        },
        {
          question: "Which SDG strengthens global cooperation and implementation?",
          options: ["SDG 15", "SDG 12", "SDG 17", "SDG 6"],
          answer: 2
        }
      
  ],
  round2: [
    {
      question: "Which of the following best reflects the paradox of implementing SDG 8 (Decent Work and Economic Growth) in developing countries?",
      options: [
        "Encouraging industrialization leads to reduced emissions.",
        "Job creation often comes at the expense of labour rights and environmental sustainability.",
        "Economic growth naturally leads to lower inequality.",
        "Developed nations must fund all growth initiatives."
      ],
      answer: 1
    },
    {
      question: "SDG 12 emphasizes decoupling economic growth from environmental degradation. What does this suggest in practice?",
      options: [
        "Banning all consumer goods",
        "Shifting toward GDP-neutral policies",
        "Increasing GDP without increasing resource use",
        "Replacing all fossil fuels with nuclear energy"
      ],
      answer: 2
    },
    {
      question: "Which scenario contradicts the spirit of SDG 10 (Reduced Inequalities), despite showing progress on other SDGs?",
      options: [
        "A country grows its GDP but sees the top 10% earn 90% of the wealth.",
        "Gender parity in education is achieved across regions.",
        "Universal healthcare access is ensured for rural populations.",
        "Internet access is expanded across urban and rural sectors."
      ],
      answer: 0
    },
    {
      question: "What is the implicit challenge in achieving SDG 13 while pursuing SDG 9?",
      options: [
        "Innovation inherently avoids carbon emissions.",
        "Industrialization often increases carbon footprints, contradicting climate goals.",
        "Infrastructure projects are always carbon-neutral.",
        "Climate action and industrial growth are mutually exclusive."
      ],
      answer: 1
    },
    {
      question: "Which of the following is a misconception about SDG 1 (No Poverty)?",
      options: [
        "Reducing poverty requires only income-based policies.",
        "Access to healthcare and education affects poverty levels.",
        "Social protection systems help eradicate poverty.",
        "Empowering women supports poverty alleviation."
      ],
      answer: 0
    },
    {
      question: "Which SDG could be considered a cross-cutting enabler that affects the achievement of almost all others?",
      options: [
        "SDG 14 – Life Below Water",
        "SDG 7 – Affordable and Clean Energy",
        "SDG 6 – Clean Water and Sanitation",
        "SDG 17 – Partnerships for the Goals"
      ],
      answer: 3
    },
    {
      question: "Which best reflects the dilemma in SDG 2 (Zero Hunger) initiatives in urbanizing regions?",
      options: [
        "Food supply increases with urbanization.",
        "Urban agriculture easily replaces rural food production.",
        "Urban expansion often leads to loss of arable land.",
        "Hunger only exists in rural areas."
      ],
      answer: 2
    },
    {
      question: "If a government focuses only on SDG 4 (Quality Education) but ignores SDG 5 (Gender Equality), what is a likely unintended consequence?",
      options: [
        "Literacy rates among men improve faster.",
        "Educational systems collapse.",
        "Overall education quality increases.",
        "Only primary schools show growth."
      ],
      answer: 0
    },
    {
      question: "Which illustrates a hidden barrier to achieving SDG 6 (Clean Water and Sanitation)?",
      options: [
        "Deforestation",
        "Cultural taboos around sanitation practices",
        "Overuse of clean water",
        "Desalination technology"
      ],
      answer: 1
    },
    {
      question: "Which of the following policy approaches would most likely fail to advance SDG 11 (Sustainable Cities and Communities)?",
      options: [
        "Investing in public transport infrastructure",
        "Encouraging vertical housing with green certification",
        "Prioritizing car-centric urban expansion",
        "Building resilient housing in flood-prone areas"
      ],
      answer: 2
    },
    {
      question: "Why might over-prioritizing SDG 9 without coordinating SDG 15 cause conflict?",
      options: [
        "Innovation naturally restores biodiversity.",
        "Infrastructure expansion often leads to habitat destruction.",
        "Industrial policies are always environment-friendly.",
        "SDG 15 deals only with marine life."
      ],
      answer: 1
    },
    {
      question: "Which best reflects the interconnected risk of ignoring SDG 16 (Peace, Justice, and Strong Institutions) in global SDG efforts?",
      options: [
        "It only affects war-torn nations.",
        "Corruption can derail all SDG implementations.",
        "Strong institutions play no role in environmental governance.",
        "Justice systems are unrelated to poverty reduction."
      ],
      answer: 1
    },
    {
      question: "Which approach would be counterproductive to achieving SDG 7 (Affordable and Clean Energy)?",
      options: [
        "Expanding coal-based electricity plants in rural areas",
        "Installing off-grid solar panels in villages",
        "Subsidizing energy-efficient appliances",
        "Promoting decentralized renewable energy"
      ],
      answer: 0
    },
    {
      question: "If a nation makes significant progress in SDG 3 but ignores SDG 13, what could be a long-term consequence?",
      options: [
        "Healthcare demand decreases",
        "Health improvements reverse due to climate-induced diseases",
        "All diseases are eradicated",
        "Hospitals consume less energy"
      ],
      answer: 1
    },
    {
      question: "Which SDG’s progress is most difficult to quantify, making policy measurement and evaluation especially tricky?",
      options: [
        "SDG 1 – No Poverty",
        "SDG 13 – Climate Action",
        "SDG 17 – Partnerships for the Goals",
        "SDG 3 – Good Health and Well-being"
      ],
      answer: 2
    }
  ],
  round3: [
    {
      question: "Guess the SDG goal according to the picture.",
      image: "images/sdg1.jpeg",
      options: ["Zero Hunger", "Reduced Inequalities", "No Poverty", "Good Health and Well-being"],
      answer: 2
    },
    {
      question: "Guess the SDG goal according to the picture.",
      image: "images/sdg2.jpeg",
      options: ["Zero Hunger", "Reduced Inequalities", "No Poverty", "Good Health and Well-being"],
      answer: 2
    },
    {
      question: "Guess the SDG goal according to the picture.",
      image: "images/sdg3.jpeg",
      options: ["Zero Hunger", "Reduced Inequalities", "No Poverty", "Good Health and Well-being"],
      answer: 0
    },
    {
      question: "Guess the SDG goal according to the picture.",
      image: "images/sdg4.jpeg",
      options: ["Quality Education", "Reduced Inequalities", "No Poverty", "Good Health and Well-being"],
      answer: 2
    },
    {
      question: "Guess the SDG goal according to the picture.",
      image: "images/sdg5.jpeg",
      options: ["Gender Equality", "Reduced Inequalities", "Industry, Innovation and Infrastructure", "Good Health and Well-being"],
      answer: 3
    },
    {
      question: "Guess the SDG goal according to the picture.",
      image: "images/sdg6.jpeg",
      options: ["Zero Hunger", "Reduced Inequalities", "Clean Water and Sanitation", "Good Health and Well-being"],
      answer: 3
    },
    {
      question: "Guess the SDG goal according to the picture.",
      image: "images/sdg7.jpeg",
      options: ["Quality Education", "Reduced inequalities", "No Poverty", "Good Health and Well-being"],
      answer: 0
    },
    {
      question: "Guess the SDG goal according to the picture.",
      image: "images/sdg8.jpeg",
      options: ["Gender Equality", "Reduced Inequalities", "Industry, Innovation and Infrastructure", "Good health and well being"],
      answer: 0
    },
    {
      question: "Guess the SDG goal according to the picture.",
      image: "images/sdg9.jpeg",
      options: ["Gender Equality", "Reduced inequalities", "Industry, Innovation and Infrastructure", "Good health and well being"],
      answer: 0
    },
    {
      question: "Guess the SDG goal according to the picture.",
      image: "images/sdg10.jpeg",
      options: ["Zero Hunger", "Reduced Inequalities", "Clean Water and Sanitation", "Gender Equality"],
      answer: 2
    },
    {
      question: "Guess the SDG goal according to the picture.",
      image: "images/sdg11.jpeg",
      options: ["Decent Work and Economic Growth", "Affordable and clean energy", "Industry, Innovation and Infrastructure", "Sustainable Cities and Communities"],
      answer: 1
    },
    {
      question: "Guess the SDG goal according to the picture.",
      image: "images/sdg12.jpeg",
      options: ["Responsible Consumption and Production", "Zero Hunger", "Industry, Innovation and Infrastructure", "Decent Work and Economic Growth"],
      answer: 3
    },
    {
      question: "Guess the SDG goal according to the picture.",
      image: "images/sdg13.jpeg",
      options: ["Responsible Consumption and Production", "Life on Land", "Industry, Innovation and Infrastructure", "Climate Action"],
      answer: 2
    },
    {
      question: "Guess the SDG goal according to the picture.",
      image: "images/sdg14.jpeg",
      options: ["Responsible Consumption and Production", "Reduced Inequalities", "Clean Water and Sanitation", "Climate Action"],
      answer: 1
    },
    {
      question: "Guess the SDG goal according to the picture.",
      image: "images/sdg15.jpeg",
      options: ["Sustainable Cities and Communities", "Life on Land", "Life Below Water", "Climate Action"],
      answer: 0
    },
    {
      question: "Guess the SDG goal according to the picture.",
      image: "images/sdg16.jpeg",
      options: ["Responsible Consumption and Production", "Life on Land", "Peace, Justice and Strong Institutions", "Climate Action"],
      answer: 0
    },
    {
      question: "Guess the SDG goal according to the picture.",
      image: "images/sdg17.jpeg",
      options: ["Responsible Consumption and Production", "Gender Equality", "Peace, Justice and Strong Institutions", "Climate Action"],
      answer: 3
    }
  ],
  round4: [
    {
      question: "A massive solar flare has wiped out global power grids and communications. You lead a team in a facility with partial energy. Establish a functioning, self-sufficient base and rebuild communications and infrastructure.",
      image: "", // optional
      answer: null // No answer, open-ended discussion
    },
    {
      question: "A virus causes progressive cognitive loss. Healthcare is overwhelmed. Develop a scalable and ethical response to slow decline and work toward treatment.",
      image: "",
      answer: null
    },
    {
      question: "Over-irrigation and sea-level rise have left no freshwater. Your team must establish a sustainable, protected source of safe drinking water.",
      image: "",
      answer: null
    },
    {
      question: "Post-war regions have no electricity. Corporations exploit energy. Create a decentralized, protected, renewable energy network for the people.",
      image: "",
      answer: null
    },
    {
      question: "Schools and digital data are gone. All that remains is an analog library and aging scholars. Rebuild a resilient education system that spreads.",
      image: "",
      answer: null
    },
    {
      question: "Global crop failure makes food the most valuable resource. Rival factions surround the last known seed vault. Protect and distribute food without triggering conflict.",
      image: "",
      answer: null
    },
    {
      question: "Toxic smog covers the lower levels of a mega city. Build a permanent, city-wide air purification system that benefits all social levels.",
      image: "",
      answer: null
    },
    {
      question: "A genetically modified plant releases paralyzing pollen. It's beautiful, so people refuse to destroy it. Reverse the impact or modify it to save life.",
      image: "",
      answer: null
    },
    {
      question: "A major cyberattack erased all legal records. Create a fair legal system and restore trust in justice for your community.",
      image: "",
      answer: null
    },
    {
      question: "A mega oil rig explosion created a black tide in the ocean. Clean the sea, save marine life, and build long-term ocean protection strategies.",
      image: "",
      answer: null
    },
    {
      question: "A hidden valley of refugees is cut off from the world. Reconnect it with dignity and help them build an independent future.",
      image: "",
      answer: null
    },
    {
      question: "A mining landslide buried a mountain town. Toxic sludge remains. Restore the ecosystem, clean the water, and revive the culture and land.",
      image: "",
      answer: null
    }
  ],
  round5: [
    {
      question: "Which goal focuses on reducing inequality both within and among countries?",
      options: [
        "Achieve gender equality and empower all women and girls",
        "Promote inclusive and sustainable industrialization and foster innovation",
        "Reduce inequality within and among countries",
        "Strengthen global partnerships for sustainable development"
      ],
      answer: 2
    },
    {
      question: "What is the official deadline set by the United Nations to achieve the SDGs?",
      options: ["2025", "2030", "2040", "2050"],
      answer: 1
    },
    {
      question: "Which SDG is aimed at ensuring sustainable consumption and production patterns?",
      options: [
        "Promote peaceful and inclusive societies",
        "Ensure sustainable consumption and production patterns",
        "Ensure clean water and sanitation for all",
        "Build resilient infrastructure and foster innovation"
      ],
      answer: 1
    },
    {
      question: "Which SDG focuses on providing clean water and sanitation for all?",
      options: [
        "Promote inclusive and sustainable industrialization",
        "End poverty in all its forms everywhere",
        "Ensure availability and sustainable management of water and sanitation",
        "Strengthen resilience to climate-related disasters"
      ],
      answer: 2
    },
    {
      question: "What does SDG 8 aim to achieve regarding employment and economic growth?",
      options: [
        "Provide free education for all",
        "Promote sustained, inclusive, and sustainable economic growth, full and productive employment",
        "End hunger and malnutrition",
        "Improve access to renewable energy"
      ],
      answer: 1
    },
    {
      question: "Which of the following is NOT one of the '5 Ps' of Sustainable Development?",
      options: ["People", "Planet", "Profit", "Peace"],
      answer: 2
    },
    {
      question: "What does SDG 14 focus on?",
      options: [
        "Achieve universal health coverage",
        "Ensure inclusive education",
        "Conserve and sustainably use the oceans, seas, and marine resources",
        "Double agricultural productivity and incomes"
      ],
      answer: 2
    },
    {
      question: "Which SDG includes indicators on the proportion of youth not in education, employment, or training (NEET)?",
      options: [
        "Ensure quality education for all",
        "Promote decent work and economic growth",
        "Reduce inequality",
        "End hunger and ensure food security"
      ],
      answer: 1
    },
    {
      question: "Which SDG promotes gender equality and empowerment of all women and girls?",
      options: [
        "End poverty in all its forms everywhere",
        "Promote peaceful and inclusive societies",
        "Achieve gender equality and empower all women and girls",
        "Strengthen global trade networks"
      ],
      answer: 2
    },
    {
      question: "Which SDG is most closely related to affordable and clean energy?",
      options: [
        "Promote peaceful societies",
        "Ensure access to affordable, reliable, sustainable and modern energy for all",
        "Conserve marine ecosystems",
        "Reduce maternal and infant mortality"
      ],
      answer: 1
    },
    {
      question: "How many Sustainable Development Goals (SDGs) are there?",
      options: ["15", "16", "17", "18"],
      answer: 2
    },
    {
      question: "Which goal is focused on making cities and human settlements inclusive, safe, resilient and sustainable?",
      options: [
        "Ensure access to affordable housing and transport",
        "Promote sustainable agriculture",
        "Make cities and human settlements inclusive, safe, resilient, and sustainable",
        "Improve rural infrastructure"
      ],
      answer: 2
    },
    {
      question: "What does SDG 2 aim to accomplish?",
      options: [
        "End poverty in all its forms everywhere",
        "End hunger, achieve food security and improved nutrition, and promote sustainable agriculture",
        "Achieve universal primary education",
        "Provide clean drinking water"
      ],
      answer: 1
    },
    {
      question: "What is the focus of SDG 13?",
      options: [
        "Promote lifelong learning",
        "Take urgent action to combat climate change and its impacts",
        "Provide universal access to the internet",
        "Promote fair global trade"
      ],
      answer: 1
    },
    {
      question: "Which SDG aims to build resilient infrastructure, promote sustainable industrialization and foster innovation?",
      options: ["Goal 11", "Goal 9", "Goal 17", "Goal 3"],
      answer: 1
    },
    {
      question: "What does SDG 3 seek to achieve?",
      options: [
        "Ensure healthy lives and promote well-being for all at all ages",
        "Ensure access to justice for all",
        "Reduce global food waste",
        "Achieve gender parity in education"
      ],
      answer: 0
    },
    {
      question: "Which SDG is focused on ending poverty in all its forms everywhere?",
      options: ["Goal 4", "Goal 1", "Goal 7", "Goal 15"],
      answer: 1
    },
    {
      question: "What does SDG 16 promote?",
      options: [
        "Partnerships for the goals",
        "Life on land",
        "Peace, justice and strong institutions",
        "Responsible consumption and production"
      ],
      answer: 2
    },
    {
      question: "Which goal promotes strengthening the means of implementation and revitalizing global partnership for sustainable development?",
      options: ["Goal 13", "Goal 17", "Goal 10", "Goal 5"],
      answer: 1
    },
    {
      question: "What does SDG 15 address?",
      options: [
        "Climate action",
        "Life on land: sustainably manage forests, combat desertification, and halt biodiversity loss",
        "Promote clean energy",
        "Access to legal identity"
      ],
      answer: 1
    },
    {
      question: "What is the total number of targets under the SDG framework?",
      options: ["160", "169", "175", "180"],
      answer: 1
    },
    {
      question: "How many unique global indicators are used to track SDG progress?",
      options: ["200", "212", "232", "250"],
      answer: 2
    },
    {
      question: "Which SDG emphasizes inclusive and equitable quality education and lifelong learning opportunities?",
      options: ["Goal 4", "Goal 3", "Goal 6", "Goal 2"],
      answer: 0
    },
    {
      question: "Which of the following goals directly addresses climate action?",
      options: [
        "Promote innovation and inclusive industries",
        "Take urgent action to combat climate change and its impacts",
        "End poverty",
        "Promote sustainable tourism"
      ],
      answer: 1
    },
    {
      question: "Which SDG includes the target to reduce global food waste by half by 2030?",
      options: [
        "Goal 2: Zero Hunger",
        "Goal 3: Good Health and Well-Being",
        "Goal 12: Responsible Consumption and Production",
        "Goal 15: Life on Land"
      ],
      answer: 2
    }
  ]
};


function startGame() {
    const name = document.getElementById("team-name-input").value.trim();
    if (!name) return alert("Enter a team name!");
    teamNames.push(name);
    teamScores.push(0);
    teamAnsweredQuestions.push({ round1: [], round2: [], round3: [], round4: [], round5: [] });
    document.getElementById("team-name-display").textContent = `Team: ${name}`;
    document.getElementById("welcome-screen").classList.add("hidden");
    document.getElementById("quiz-screen").classList.remove("hidden");
    score = 0;
    currentRound = 1;
    used5050 = false;
    usedPoll = false;
    showQuestion();
  }
  
  function showQuestion() {
    clearInterval(timer);
    const roundKey = `round${currentRound}`;
    const usedIndexes = teamAnsweredQuestions[currentTeam][roundKey];
    let availableIndexes = allQuestions[roundKey].map((_, i) => i).filter(i => !usedIndexes.includes(i));
    if (availableIndexes.length === 0) {
      currentRound++;
      if (currentRound > 5) return showResult();
      return showQuestion();
    }
  
    const index = availableIndexes[Math.floor(Math.random() * availableIndexes.length)];
    teamAnsweredQuestions[currentTeam][roundKey].push(index);
    const question = allQuestions[roundKey][index];
    document.getElementById("round-label").textContent = `Round ${currentRound}`;
    document.getElementById("question").textContent = question.question;
  
    const imgEl = document.getElementById("question-img");
    if (question.image) {
      imgEl.src = question.image;
      imgEl.classList.remove("hidden");
    } else {
      imgEl.classList.add("hidden");
    }
  
    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";
    if (question.options) {
      question.options.forEach((opt, i) => {
        const div = document.createElement("div");
        div.className = "option";
        div.textContent = opt;
        div.onclick = () => showAnswer(i, question.answer);
        optionsDiv.appendChild(div);
      });
    }
  
    timeLeft = (currentRound === 4) ? 300 : 30;
    updateTimerDisplay();
    document.getElementById("timer-sound").play().catch(() => {});
  
    timer = setInterval(() => {
      timeLeft--;
      updateTimerDisplay();
      if (timeLeft <= 0) {
        clearInterval(timer);
        showAnswer(-1, question.answer);
      }
    }, 1000);
  }
  
  function updateTimerDisplay() {
    document.getElementById("timer").textContent =
      (currentRound === 4)
        ? `Time Left: ${Math.floor(timeLeft / 60)}m ${timeLeft % 60}s`
        : `Time Left: ${timeLeft}s`;
  }

  let questionsInCurrentRound = 0;

  function showAnswer(selected, correct) {
    clearInterval(timer);
    const options = document.querySelectorAll(".option");
    options.forEach((opt, i) => {
      opt.onclick = null;
      if (i === correct) opt.classList.add("correct");
      else if (i === selected) opt.classList.add("wrong");
    });
  
    if (selected === correct) {
      score += Math.max(1, Math.floor(timeLeft / 5));
    }
  
    document.getElementById("score-display").textContent = `Score: ${score}`;
  
    setTimeout(() => {
        questionsInCurrentRound++;

        const questionsPerRound = (currentRound === 4) ? 1 : 2;
        if (questionsInCurrentRound < questionsPerRound) {
          showQuestion(); // same round, second question
        } else {
          currentRound++; // move to next round
          questionsInCurrentRound = 0;
          if (currentRound > 5) showResult();
          else showQuestion();
        }
      }, 1000); // Slight pause for visual feedback
  }
  
  function use5050() {
    if (used5050) return;
    used5050 = true;
    document.getElementById("btn-5050").disabled = true;
  
    const options = document.querySelectorAll(".option");
    const roundKey = `round${currentRound}`;
    const lastQIndex = teamAnsweredQuestions[currentTeam][roundKey].slice(-1)[0];
    const correctIndex = allQuestions[roundKey][lastQIndex].answer;
  
    let wrongIndexes = [0, 1, 2, 3].filter(i => i !== correctIndex);
    wrongIndexes.sort(() => Math.random() - 0.5).slice(0, 2).forEach(i => {
      if (options[i]) options[i].style.visibility = "hidden";
    });
  }
  
  function useAudiencePoll() {
    if (usedPoll) return;
    usedPoll = true;
    document.getElementById("btn-poll").disabled = true;
    clearInterval(timer);
    alert("Take Audience Poll. Click OK when done.");
    startTimer();
  }
  
  function startTimer() {
    updateTimerDisplay();
    timer = setInterval(() => {
      timeLeft--;
      updateTimerDisplay();
      if (timeLeft <= 0) {
        clearInterval(timer);
        showAnswer(-1, -1);
      }
    }, 1000);
  }
  
  function showResult() {
    clearInterval(timer);
    document.getElementById("quiz-screen").classList.add("hidden");
    document.getElementById("result-screen").classList.remove("hidden");
    document.getElementById("final-score").textContent = `${teamNames[currentTeam]} scored ${score}`;
    teamScores[currentTeam] = score;
  }
  
  function nextTeam() {
    currentTeam++;
    if (currentTeam >= 20) return alert("All teams completed.");
    document.getElementById("result-screen").classList.add("hidden");
    document.getElementById("quiz-screen").classList.remove("hidden");
    score = 0;
    currentRound = 1;
    questionsInCurrentRound = 0;
    used5050 = false;
    usedPoll = false;
    document.getElementById("btn-5050").disabled = false;
    document.getElementById("btn-poll").disabled = false;
  
    const name = prompt(`Enter name for Team ${currentTeam + 1}`);
    teamNames.push(name);
    teamScores.push(0);
    teamAnsweredQuestions.push({ round1: [], round2: [], round3: [], round4: [], round5: [] });
    document.getElementById("team-name-display").textContent = `Team: ${name}`;
    showQuestion();
  }
