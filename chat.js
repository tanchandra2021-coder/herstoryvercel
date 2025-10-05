const GEMINI_API_KEY = 'AIzaSyBYXz-7EuOz8dImz6571zcrAk14ikMlsfU';
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1/models/gemini-2.0-flash:generateContent';

const leaders = {
    "Michelle Obama": {
        title: "Education & Social Impact",
        specialty: "Passionate about financial literacy through education reform and community investment strategies",
        expertise: ["Impact Investing", "Education Finance"],
        image: "Michelle_Obama.png",
        persona: "You are Michelle Obama. You're warm, empowering, and passionate about education and social impact. You speak about financial literacy through the lens of community investment and education reform. Use an encouraging, inspirational tone while discussing finance topics like impact investing and education finance."
    },
    "Angela Merkel": {
        title: "Economic Policy Expert",
        specialty: "Analytical approach to fiscal policy, European economics, and strategic financial planning",
        expertise: ["Fiscal Policy", "Economic Strategy"],
        image: "Angela_Merkel.png",
        persona: "You are Angela Merkel. You're analytical, methodical, and pragmatic. You approach financial topics with a data-driven mindset, focusing on fiscal policy and European economics. Use clear, logical explanations and reference economic principles."
    },
    "Malala Yousafzai": {
        title: "Social Finance Advocate",
        specialty: "Passionate insights on funding education, microfinance, and investing in social change",
        expertise: ["Microfinance", "Social Bonds"],
        image: "Malala_Yousafazi.png",
        persona: "You are Malala Yousafzai. You're passionate, determined, and focused on education access. You discuss finance through the lens of social change, microfinance, and education funding. Speak with conviction about how finance can create opportunities for girls and marginalized communities."
    },
    "Ruth Bader Ginsburg": {
        title: "Financial Law & Ethics",
        specialty: "Precise guidance on financial regulations, investment law, and ethical wealth management",
        expertise: ["Financial Law", "Securities"],
        image: "Ruth_Bader_Ginsburg.png",
        persona: "You are Ruth Bader Ginsburg. You're precise, thoughtful, and focused on justice and ethics. You discuss financial regulations, investment law, and ethical wealth management with careful attention to fairness and legal principles. Use clear, authoritative language."
    },
    "Indra Nooyi": {
        title: "Corporate Finance Leader",
        specialty: "Strategic insights on corporate finance, M&A, and sustainable business growth",
        expertise: ["Corporate Finance", "M&A"],
        image: "Indra_Nooyi.png",
        persona: "You are Indra Nooyi, former PepsiCo CEO. You're strategic, results-driven, and focused on sustainable business growth. You discuss corporate finance, M&A strategy, and long-term value creation. Use business acumen and practical examples from corporate leadership."
    },
    "Sheryl Sandberg": {
        title: "Tech Finance Executive",
        specialty: "Data-driven approach to tech valuations, scaling startups, and financial operations",
        expertise: ["Tech Finance", "Scaling"],
        image: "Sheryl_Sandberg.png",
        persona: "You are Sheryl Sandberg. You're data-driven, ambitious, and focused on scaling businesses. You discuss tech finance, startup valuations, and operational efficiency. Use metrics, growth strategies, and lessons from Silicon Valley."
    },
    "Jacinda Ardern": {
        title: "Wellbeing Economics",
        specialty: "Compassionate approach to budget management, public finance, and wellbeing economics",
        expertise: ["Public Finance", "Budget Policy"],
        image: "Jacinda_Ardern.png",
        persona: "You are Jacinda Ardern. You're compassionate, empathetic, and focused on wellbeing economics. You discuss public finance and budget policy with a focus on people's quality of life. Use a caring, inclusive tone while discussing economic policy."
    },
    "Mae Jemison": {
        title: "STEM Finance Pioneer",
        specialty: "Innovative thinking on R&D funding, STEM investment, and technology venture capital",
        expertise: ["Venture Capital", "R&D Finance"],
        image: "Mae_Jemison.png",
        persona: "You are Mae Jemison, the first African American woman in space. You're innovative, curious, and focused on STEM advancement. You discuss R&D funding, technology venture capital, and investing in scientific innovation. Use inspiring language about the future."
    },
    "Reshma Saujani": {
        title: "Startup Finance Advocate",
        specialty: "Bold approach to fundraising, startup equity, and building financial resilience",
        expertise: ["Fundraising", "Startup Equity"],
        image: "Reshman_Saujani.png",
        persona: "You are Reshma Saujani, founder of Girls Who Code. You're bold, encouraging, and focused on closing the gender gap. You discuss startup fundraising, equity, and building financial resilience. Use an empowering tone about taking risks and building businesses."
    },
    "Sara Blakely": {
        title: "Bootstrap Finance Expert",
        specialty: "Self-made approach to bootstrapping businesses and building wealth",
        expertise: ["Bootstrapping", "Cash Flow"],
        image: "Sara_Blakely.png",
        persona: "You are Sara Blakely, founder of Spanx. You're scrappy, resourceful, and self-made. You discuss bootstrapping businesses, managing cash flow, and building wealth without outside funding. Use practical, down-to-earth advice with humor and hustle mentality."
    }
};

const leaderNames = Object.keys(leaders);
let currentIndex = 0;
let chatHistory = [];
let messageCount = 0;
const MAX_MESSAGES = 5;

function renderCard() {
    const name = leaderNames[currentIndex];
    const leader = leaders[name];
    const firstName = name.split(' ')[0];
    
    const cardHTML = `
        <div class="leader-card">
            <p class="curved-text">Hi, I'm ${firstName}. Let's Chat!</p>
            
            <div class="profile-circle-wrapper">
                <img src="public/${leader.image}" alt="${name}">
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
    chatHistory = [];
    messageCount = 0;
    const leader = leaders[leaderName];
    
    // Create chat modal
    const chatModal = document.createElement('div');
    chatModal.className = 'chat-modal';
    chatModal.innerHTML = `
        <div class="chat-container">
            <div class="chat-header">
                <div class="chat-header-info">
                    <img src="public/${leader.image}" alt="${leaderName}" class="chat-avatar">
                    <div>
                        <h3>${leaderName}</h3>
                        <p>${leader.title}</p>
                    </div>
                </div>
                <button class="close-chat" onclick="closeChat()">✕</button>
            </div>
            
            <div class="chat-messages" id="chat-messages">
                <div class="message bot-message">
                    <p>Hi! I'm ${leaderName.split(' ')[0]}. Ask me anything about ${leader.expertise.join(', ').toLowerCase()}, or how finance intersects with other disciplines!</p>
                    <small>${MAX_MESSAGES} questions remaining</small>
                </div>
            </div>
            
            <div class="chat-input-container">
                <input type="text" id="chat-input" placeholder="Ask me about finance..." />
                <button onclick="sendMessage('${leaderName}')" id="send-btn">Send</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(chatModal);
    
    // Focus input
    document.getElementById('chat-input').focus();
    
    // Enter key to send
    document.getElementById('chat-input').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage(leaderName);
        }
    });
    
    // Animate in
    setTimeout(() => chatModal.classList.add('active'), 10);
}

function closeChat() {
    const modal = document.querySelector('.chat-modal');
    modal.classList.remove('active');
    setTimeout(() => modal.remove(), 300);
}

async function sendMessage(leaderName) {
    const input = document.getElementById('chat-input');
    const message = input.value.trim();
    
    if (!message) return;
    
    if (messageCount >= MAX_MESSAGES) {
        addMessage('bot', `I've reached my message limit for this session! Feel free to explore other leaders by closing this chat.`);
        return;
    }
    
    // Add user message
    addMessage('user', message);
    input.value = '';
    
    // Show typing indicator
    const typingId = addTypingIndicator();
    
    try {
        const response = await callGemini(leaderName, message);
        removeTypingIndicator(typingId);
        addMessage('bot', response);
        messageCount++;
        
        const remaining = MAX_MESSAGES - messageCount;
        if (remaining > 0) {
            updateMessageCount(remaining);
        } else {
            addMessage('bot', `That's all the questions for now! Feel free to chat with another leader.`);
            document.getElementById('chat-input').disabled = true;
            document.getElementById('send-btn').disabled = true;
        }
    } catch (error) {
        removeTypingIndicator(typingId);
        addMessage('bot', "I'm having trouble responding right now. Please try again!");
        console.error('Error:', error);
    }
}

async function callGemini(leaderName, userMessage) {
    const leader = leaders[leaderName];
    
    const prompt = `${leader.persona}

User question: ${userMessage}

Respond as ${leaderName} in 2-3 sentences, staying in character. Keep it conversational and engaging.`;

    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            contents: [{
                parts: [{
                    text: prompt
                }]
            }],
            generationConfig: {
                temperature: 0.9,
                maxOutputTokens: 300,
            }
        })
    });

    if (!response.ok) {
        const errorText = await response.text();
        console.error('API Error:', errorText);
        throw new Error('API request failed');
    }

    const data = await response.json();
    console.log('Full API Response:', JSON.stringify(data, null, 2));
    console.log('Candidates:', data.candidates);
    console.log('First candidate:', data.candidates?.[0]);
    console.log('Content:', data.candidates?.[0]?.content);
    console.log('Parts:', data.candidates?.[0]?.content?.parts);
    
    // Handle Gemini 2.0 response structure
    if (data.candidates && data.candidates.length > 0) {
        const candidate = data.candidates[0];
        if (candidate.content && candidate.content.parts && candidate.content.parts.length > 0) {
            return candidate.content.parts[0].text;
        }
    }
    
    throw new Error('Unable to parse response from API');
}

function addMessage(type, text) {
    const messagesContainer = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}-message`;
    messageDiv.innerHTML = `<p>${text}</p>`;
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function addTypingIndicator() {
    const messagesContainer = document.getElementById('chat-messages');
    const typingDiv = document.createElement('div');
    const id = 'typing-' + Date.now();
    typingDiv.id = id;
    typingDiv.className = 'message bot-message typing-indicator';
    typingDiv.innerHTML = '<p><span></span><span></span><span></span></p>';
    messagesContainer.appendChild(typingDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    return id;
}

function removeTypingIndicator(id) {
    const indicator = document.getElementById(id);
    if (indicator) indicator.remove();
}

function updateMessageCount(remaining) {
    const messagesContainer = document.getElementById('chat-messages');
    const lastMessage = messagesContainer.lastElementChild;
    const small = document.createElement('small');
    small.textContent = `${remaining} question${remaining !== 1 ? 's' : ''} remaining`;
    lastMessage.appendChild(small);
}

// Event listeners
document.getElementById('next-btn').addEventListener('click', nextLeader);
document.getElementById('prev-btn').addEventListener('click', prevLeader);

// Initial render
renderCard();
