const leaders = [
    {
        name: "Michelle Obama",
        title: "Education & Social Impact 🎓",
        specialty: "Passionate about financial literacy through education reform and community investment strategies. Empowering communities through strategic financial planning.",
        image: "public/michelle_obama.png"
    },
    {
        name: "Angela Merkel",
        title: "Economic Policy Expert 📊",
        specialty: "Analytical approach to fiscal policy, European economics, and strategic financial planning. Bringing decades of economic leadership experience.",
        image: "public/Angela_Merkel.png"
    },
    {
        name: "Malala Yousafzai",
        title: "Social Finance Advocate 🌍",
        specialty: "Passionate insights on funding education, microfinance, and investing in social change. Championing financial empowerment for all.",
        image: "public/Malala_Yousafazi.png"
    },
    {
        name: "Ruth Bader Ginsburg",
        title: "Financial Law & Ethics ⚖️",
        specialty: "Precise guidance on financial regulations, investment law, and ethical wealth management. Justice in every financial decision.",
        image: "public/Ruth_Bader_Ginsburg.png"
    },
    {
        name: "Indra Nooyi",
        title: "Corporate Finance Leader 💼",
        specialty: "Strategic insights on corporate finance, M&A, sustainable business growth, and CFO excellence. Transforming businesses through financial innovation.",
        image: "public/Indra_Nooyi.png"
    },
    {
        name: "Sheryl Sandberg",
        title: "Tech Finance Executive 💻",
        specialty: "Data-driven approach to tech valuations, scaling startups, and financial operations. Building the future of tech finance.",
        image: "public/Sheryl_Sandberg.png"
    },
    {
        name: "Jacinda Ardern",
        title: "Wellbeing Economics 🌱",
        specialty: "Compassionate approach to budget management, public finance, and wellbeing economics. Putting people at the center of financial policy.",
        image: "public/Jacinda_Ardern.png"
    },
    {
        name: "Mae Jemison",
        title: "STEM Finance Pioneer 🚀",
        specialty: "Innovative thinking on R&D funding, STEM investment, and technology venture capital. Pioneering the frontier of innovation finance.",
        image: "public/Mae_Jemison.png"
    },
    {
        name: "Reshma Saujani",
        title: "Startup Finance Advocate 💪",
        specialty: "Bold approach to fundraising, startup equity, and building financial resilience in tech. Breaking barriers in venture capital.",
        image: "public/Reshman_Saujani.png"
    },
    {
        name: "Sara Blakely",
        title: "Bootstrap Finance Expert ✨",
        specialty: "Self-made approach to bootstrapping businesses, cash flow management, and building wealth. Turning ideas into billion-dollar businesses.",
        image: "public/Sara_Blakely.png"
    }
];

let currentIndex = 0;

const leaderImg = document.getElementById("leader-img");
const leaderName = document.getElementById("leader-name");
const leaderTitle = document.getElementById("leader-title");
const leaderSpecialty = document.getElementById("leader-specialty");
const curvedText = document.getElementById("curved-text");
const leaderCard = document.getElementById("leader-card");

document.getElementById("next-btn").addEventListener("click", () => {
    animateCard("next");
});
document.getElementById("prev-btn").addEventListener("click", () => {
    animateCard("prev");
});
document.getElementById("start-chat-btn").addEventListener("click", () => {
    document.querySelector(".carousel-container").classList.add("hidden");
    document.getElementById("chat-container").classList.remove("hidden");
});

document.getElementById("back-btn").addEventListener("click", () => {
    document.querySelector(".carousel-container").classList.remove("hidden");
    document.getElementById("chat-container").classList.add("hidden");
});

function animateCard(direction){
    leaderCard.classList.add("card-exit");
    setTimeout(() => {
        if(direction==="next"){
            currentIndex = (currentIndex+1)%leaders.length;
        } else {
            currentIndex = (currentIndex-1+leaders.length)%leaders.length;
        }
        updateCard();
        leaderCard.classList.remove("card-exit");
    }, 500);
}

function updateCard(){
    const leader = leaders[currentIndex];
    leaderImg.src = leader.image;
    leaderName.textContent = leader.name;
    leaderTitle.textContent = leader.title;
    leaderSpecialty.textContent = leader.specialty;
    curvedText.textContent = `Hi, I'm ${leader.name.split(" ")[0]}! Let's Chat!`;
}

