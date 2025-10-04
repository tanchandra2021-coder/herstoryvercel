// chat.js
const leaders = [
    { name: "Michelle Obama", title: "Education & Social Impact", specialty: "Passionate about financial literacy through education reform and community investment strategies.", emoji:"🎓", image:"/Michelle_Obama.png" },
    { name: "Angela Merkel", title: "Economic Policy Expert", specialty: "Analytical approach to fiscal policy, European economics, and strategic financial planning.", emoji:"📊", image:"/Angela_Merkel.png" },
    { name: "Malala Yousafzai", title: "Social Finance Advocate", specialty: "Passionate insights on funding education, microfinance, and investing in social change.", emoji:"🌍", image:"/Malala_Yousafzai.png" },
    { name: "Ruth Bader Ginsburg", title: "Financial Law & Ethics", specialty: "Precise guidance on financial regulations, investment law, and ethical wealth management.", emoji:"⚖️", image:"/Ruth_Bader_Ginsburg.png" },
    { name: "Indra Nooyi", title: "Corporate Finance Leader", specialty: "Strategic insights on corporate finance, M&A, sustainable business growth, and CFO excellence.", emoji:"💼", image:"/Indra_Nooyi.png" },
    { name: "Sheryl Sandberg", title: "Tech Finance Executive", specialty: "Data-driven approach to tech valuations, scaling startups, and financial operations.", emoji:"💻", image:"/Sheryl_Sandberg.png" },
    { name: "Jacinda Ardern", title: "Wellbeing Economics", specialty: "Compassionate approach to budget management, public finance, and wellbeing economics.", emoji:"🌱", image:"/Jacinda_Ardern.png" },
    { name: "Mae Jemison", title: "STEM Finance Pioneer", specialty: "Innovative thinking on R&D funding, STEM investment, and technology venture capital.", emoji:"🚀", image:"/Mae_Jemison.png" },
    { name: "Reshma Saujani", title: "Startup Finance Advocate", specialty: "Bold approach to fundraising, startup equity, and building financial resilience in tech.", emoji:"💪", image:"/Reshma_Saujani.png" },
    { name: "Sara Blakely", title: "Bootstrap Finance Expert", specialty: "Self-made approach to bootstrapping businesses, cash flow management, and building wealth.", emoji:"✨", image:"/Sara_Blakely.png" },
];

document.addEventListener("DOMContentLoaded", () => {
    let currentIndex = 0;

    const container = document.getElementById('card-container');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    function renderCard(index){
        const leader = leaders[index];
        container.innerHTML = `
            <div class="leader-card">
                <div class="profile-circle-wrapper">
                    <img src="${leader.image}" alt="${leader.name}">
                </div>
                <div class="curved-text">Hi, I'm ${leader.name.split(" ")[0]}!</div>
                <div class="leader-name">${leader.name}</div>
                <div class="leader-title">${leader.title} ${leader.emoji}</div>
                <div class="leader-specialty">"${leader.specialty}"</div>
                <button class="start-chat-btn">Start Chatting</button>
            </div>
        `;
    }

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + leaders.length) % leaders.length;
        renderCard(currentIndex);
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % leaders.length;
        renderCard(currentIndex);
    });

    // Initial render
    renderCard(currentIndex);
});


