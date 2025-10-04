const leaders = {
  "Michelle Obama": {
    title: "Education & Social Impact",
    specialty: "Passionate about financial literacy through education reform and community investment strategies.",
    emoji: "🎓",
    image: "/Michelle_Obama.png",
    expertise: ["Impact Investing", "Education Finance"]
  },
  "Angela Merkel": {
    title: "Economic Policy Expert",
    specialty: "Analytical approach to fiscal policy, European economics, and strategic financial planning.",
    emoji: "📊",
    image: "/Angela_Merkel.png",
    expertise: ["Fiscal Policy", "Economic Strategy"]
  },
  "Malala Yousafzai": {
    title: "Social Finance Advocate",
    specialty: "Championing financial empowerment for all through microfinance and education.",
    emoji: "🌍",
    image: "/Malala_Yousafazi.png",
    expertise: ["Microfinance","Social Bonds"]
  },
  "Ruth Bader Ginsburg": {
    title: "Financial Law & Ethics",
    specialty: "Precise guidance on financial regulations and ethical wealth management.",
    emoji: "⚖️",
    image: "/Ruth_Bader_Ginsburg.png",
    expertise: ["Financial Law","Securities"]
  }
  // Add the remaining leaders here similarly...
};

let currentIndex = 0;
const leadersList = Object.keys(leaders);

function updateCard() {
  const leader = leaders[leadersList[currentIndex]];
  document.getElementById("curvedText").innerHTML = `Hi, I'm <b>${leadersList[currentIndex].split(" ")[0]}</b>!`;
  document.getElementById("leaderImg").src = leader.image;
  document.getElementById("leaderName").innerText = leadersList[currentIndex];
  document.getElementById("leaderTitle").innerText = `${leader.title} ${leader.emoji}`;
  document.getElementById("leaderSpecialty").innerText = leader.specialty;

  const tagsContainer = document.getElementById("expertiseTags");
  tagsContainer.innerHTML = "";
  leader.expertise.forEach(exp => {
    const span = document.createElement("span");
    span.innerText = exp;
    tagsContainer.appendChild(span);
  });

  const card = document.getElementById("leaderCard");
  card.classList.remove("card-exit");
  void card.offsetWidth; // trigger reflow for restart animation
  card.style.animation = "cardSlideIn 0.8s forwards";
}

document.getElementById("prevBtn").addEventListener("click", () => {
  const card = document.getElementById("leaderCard");
  card.classList.add("card-exit");
  setTimeout(() => {
    currentIndex = (currentIndex - 1 + leadersList.length) % leadersList.length;
    updateCard();
  }, 500);
});

document.getElementById("nextBtn").addEventListener("click", () => {
  const card = document.getElementById("leaderCard");
  card.classList.add("card-exit");
  setTimeout(() => {
    currentIndex = (currentIndex + 1) % leadersList.length;
    updateCard();
  }, 500);
});

document.getElementById("startChatBtn").addEventListener("click", () => {
  alert(`Chat with ${leadersList[currentIndex]} coming soon!`);
});

updateCard(); // initialize first card

