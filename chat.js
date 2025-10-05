const leaders = {
    "Michelle Obama": {
        title: "Education & Social Impact",
        specialty: "Passionate about financial literacy through education reform and community investment strategies",
        expertise: ["Impact Investing", "Education Finance"],
        image: "Michelle_Obama.png"
    },
    "Angela Merkel": {
        title: "Economic Policy Expert",
        specialty: "Analytical approach to fiscal policy, European economics, and strategic financial planning",
        expertise: ["Fiscal Policy", "Economic Strategy"],
        image: "Angela_Merkel.png"
    },
    "Malala Yousafzai": {
        title: "Social Finance Advocate",
        specialty: "Passionate insights on funding education, microfinance, and investing in social change",
        expertise: ["Microfinance", "Social Bonds"],
        image: "Malala_Yousafzai.png"
    },
    "Ruth Bader Ginsburg": {
        title: "Financial Law & Ethics",
        specialty: "Precise guidance on financial regulations, investment law, and ethical wealth management",
        expertise: ["Financial Law", "Securities"],
        image: "Ruth_Bader_Ginsburg.png"
    },
    "Indra Nooyi": {
        title: "Corporate Finance Leader",
        specialty: "Strategic insights on corporate finance, M&A, and sustainable business growth",
        expertise: ["Corporate Finance", "M&A"],
        image: "Indra_Nooyi.png"
    },
    "Sheryl Sandberg": {
        title: "Tech Finance Executive",
        specialty: "Data-driven approach to tech valuations, scaling startups, and financial operations",
        expertise: ["Tech Finance", "Scaling"],
        image: "Sheryl_Sandberg.png"
    },
    "Jacinda Ardern": {
        title: "Wellbeing Economics",
        specialty: "Compassionate approach to budget management, public finance, and wellbeing economics",
        expertise: ["Public Finance", "Budget Policy"],
        image: "Jacinda_Ardern.png"
    },
    "Mae Jemison": {
        title: "STEM Finance Pioneer",
        specialty: "Innovative thinking on R&D funding, STEM investment, and technology venture capital",
        expertise: ["Venture Capital", "R&D Finance"],
        image: "Mae_Jemison.png"
    },
    "Reshma Saujani": {
        title: "Startup Finance Advocate",
        specialty: "Bold approach to fundraising, startup equity, and building financial resilience",
        expertise: ["Fundraising", "Startup Equity"],
        image: "Reshma_Saujani.png"
    },
    "Sara Blakely": {
        title: "Bootstrap Finance Expert",
        specialty: "Self-made approach to bootstrapping businesses and building wealth",
        expertise: ["Bootstrapping", "Cash Flow"],
        image: "Sara_Blakely.png"
    }
};

const leaderNames = Object.keys(leaders);
let currentIndex = 0;

function renderCard() {
    const name = leaderNames[currentIndex];
    const leader = leaders[name];
    const firstName = name.split(' ')[0];
    
    const cardHTML = `
        <div class="leader-card">
            <p class="curved-text">Hi, I'm ${firstName}. Let's Chat!</p>
            
            <div class="profile-circle-wrapper">
                <img src="/public/${leader.image}" alt="${name}">
            </div>
            
            <h2 class="leader-name">${name}</h2>
            <p class="leader-title">${leader.title}</p>
            <p class="leader-specialty">${leader.specialty}</p>
            
            <div class="expertise-tags">
                ${leader.expertise.map(exp => `<span class="tag">${exp}</span>`).join('')}
            </div>
            
            <button class="start-chat-btn" onclick="startChat('${name}')">Start Chatting</button>
        </div>
    `;
    
    document.getElementById('card-container').innerHTML = cardHTML;
}

function nextLeader() {
    currentIndex = (currentIndex + 1) % leaderNames.length;
    renderCard();
}

function prevLeader() {
    currentIndex = (currentIndex - 1 + leaderNames.length) % leaderNames.length;
    renderCard();
}

function startChat(leaderName) {
    alert(`Starting chat with ${leaderName}! (Chat functionality coming soon)`);
    // You can add your chat logic here later
}

// Event listeners
document.getElementById('next-btn').addEventListener('click', nextLeader);
document.getElementById('prev-btn').addEventListener('click', prevLeader);

// Initial render
renderCard();
