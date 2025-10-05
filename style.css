@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Poppins:wght@300;400;500;600;700&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Poppins', sans-serif;
    background: linear-gradient(135deg, #FFF5F7 0%, #FFE8F0 25%, #F0F8FF 50%, #FFF8E8 75%, #FFE8F5 100%);
    background-size: 400% 400%;
    animation: bgFlow 20s ease infinite;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    overflow-x: hidden;
    position: relative;
}

/* Animated Aura Background - Floating Blobs */
.aura-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    overflow: hidden;
    pointer-events: none;
}

.aura-blob {
    position: absolute;
    border-radius: 50%;
    filter: blur(100px);
    opacity: 0.4;
    animation: float 25s ease-in-out infinite;
}

.blob-1 {
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, #FFB3D9, #FFC9E5);
    top: -200px;
    left: -200px;
    animation: float 20s ease-in-out infinite, colorShift1 15s ease-in-out infinite;
}

.blob-2 {
    width: 700px;
    height: 700px;
    background: radial-gradient(circle, #A8D8F0, #C8E6F5);
    top: 50%;
    right: -300px;
    animation: float 23s ease-in-out infinite reverse, colorShift2 18s ease-in-out infinite;
}

.blob-3 {
    width: 550px;
    height: 550px;
    background: radial-gradient(circle, #FFB3C6, #FFCCD9);
    bottom: -200px;
    left: 30%;
    animation: float 28s ease-in-out infinite, colorShift3 20s ease-in-out infinite;
}

.blob-4 {
    width: 650px;
    height: 650px;
    background: radial-gradient(circle, #FFD4A3, #FFE4C4);
    top: 20%;
    left: 50%;
    animation: float 26s ease-in-out infinite reverse, colorShift4 17s ease-in-out infinite;
}

@keyframes float {
    0%, 100% { transform: translate(0, 0) scale(1); }
    25% { transform: translate(150px, -150px) scale(1.1); }
    50% { transform: translate(-100px, 150px) scale(0.9); }
    75% { transform: translate(200px, 100px) scale(1.05); }
}

@keyframes colorShift1 {
    0%, 100% { background: radial-gradient(circle, #FFB3D9, #FFC9E5); }
    50% { background: radial-gradient(circle, #FFC9E5, #FFD6EE); }
}

@keyframes colorShift2 {
    0%, 100% { background: radial-gradient(circle, #A8D8F0, #C8E6F5); }
    50% { background: radial-gradient(circle, #C8E6F5, #D8F0FA); }
}

@keyframes colorShift3 {
    0%, 100% { background: radial-gradient(circle, #FFB3C6, #FFCCD9); }
    50% { background: radial-gradient(circle, #FFCCD9, #FFE0E8); }
}

@keyframes colorShift4 {
    0%, 100% { background: radial-gradient(circle, #FFD4A3, #FFE4C4); }
    50% { background: radial-gradient(circle, #FFE4C4, #FFF0D9); }
}

@keyframes bgFlow {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
}

/* Header Section */
.header-section {
    text-align: center;
    margin: 50px 0 40px;
    position: relative;
    z-index: 10;
}

.main-title {
    font-family: 'Playfair Display', serif;
    font-size: 4rem;
    font-weight: 900;
    background: linear-gradient(135deg, #E91E63, #9C27B0, #673AB7, #E91E63);
    background-size: 300% 300%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: gradientShift 8s ease infinite, titleFloat 3s ease-in-out infinite;
    letter-spacing: 2px;
    margin-bottom: 15px;
}

.wave-emoji {
    font-size: 3.5rem;
    animation: wave 2s ease-in-out infinite;
}

@keyframes wave {
    0%, 100% { transform: rotate(0deg); }
    10%, 30%, 50%, 70% { transform: rotate(14deg); }
    20%, 40%, 60% { transform: rotate(-8deg); }
    80% { transform: rotate(10deg); }
    90% { transform: rotate(-4deg); }
}

@keyframes gradientShift {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
}

@keyframes titleFloat {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-8px); }
}

.subtitle {
    font-size: 1.2rem;
    font-weight: 300;
    color: #4A5568;
    max-width: 750px;
    margin: 0 auto;
    line-height: 1.8;
    animation: fadeSlideUp 1s ease 0.3s backwards;
    letter-spacing: 0.5px;
}

@keyframes fadeSlideUp {
    0% { opacity: 0; transform: translateY(30px); }
    100% { opacity: 1; transform: translateY(0); }
}

/* Carousel */
.carousel-container {
    display: flex;
    align-items: center;
    gap: 30px;
    position: relative;
    z-index: 10;
    margin-top: 20px;
}

.arrow-btn {
    background: linear-gradient(135deg, #E91E63, #9C27B0);
    border: none;
    border-radius: 50%;
    width: 70px;
    height: 70px;
    color: white;
    font-size: 2.2rem;
    cursor: pointer;
    box-shadow: 0 15px 45px rgba(233, 30, 99, 0.5);
    transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    position: relative;
    overflow: hidden;
}

.arrow-btn::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
}

.arrow-btn:hover::before {
    width: 300px;
    height: 300px;
}

.arrow-btn:hover {
    transform: scale(1.2) rotate(10deg);
    box-shadow: 0 20px 60px rgba(233, 30, 99, 0.7);
}

.arrow-btn:active {
    transform: scale(1.1) rotate(5deg);
}

#card-container {
    width: 380px;
    height: 650px;
    perspective: 1500px;
}

/* CARD STYLES - NO PURPLE! */
.leader-card {
    background: #ffffff;
    border-radius: 35px;
    padding: 35px 25px 40px;
    box-shadow: 
        0 30px 80px rgba(0, 0, 0, 0.2),
        0 0 0 1px rgba(255, 255, 255, 0.8) inset;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    animation: cardSlideIn 1s cubic-bezier(0.34, 1.56, 0.64, 1);
    border: 3px solid transparent;
    background-clip: padding-box;
}

.leader-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 35px;
    padding: 3px;
    background: linear-gradient(135deg, #FFB3D9, #A8D8F0, #FFD4A3);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    z-index: -1;
    opacity: 0.6;
}

@keyframes cardSlideIn {
    0% { opacity: 0; transform: translateY(80px) scale(0.8); }
    100% { opacity: 1; transform: translateY(0) scale(1); }
}

.curved-text {
    font-family: 'Playfair Display', serif;
    font-size: 1.4rem;
    font-weight: 700;
    text-align: center;
    background: linear-gradient(90deg, #E91E63, #9C27B0, #673AB7, #E91E63);
    background-size: 200% 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: textShimmer 5s ease infinite;
    margin-bottom: 15px;
    letter-spacing: 1px;
}

@keyframes textShimmer {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
}

.profile-circle-wrapper {
    width: 220px;
    height: 220px;
    margin-bottom: 25px;
    position: relative;
    filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.2));
}

.profile-circle-wrapper::before,
.profile-circle-wrapper::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    border: 3px solid transparent;
    animation: ringPulse 3s ease-in-out infinite;
}

.profile-circle-wrapper::before {
    width: 240px;
    height: 240px;
    border-color: rgba(233, 30, 99, 0.3);
    animation-delay: 0s;
}

.profile-circle-wrapper::after {
    width: 260px;
    height: 260px;
    border-color: rgba(156, 39, 176, 0.2);
    animation-delay: 1.5s;
}

@keyframes ringPulse {
    0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
    50% { transform: translate(-50%, -50%) scale(1.15); opacity: 0; }
}

.profile-circle-wrapper img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 8px solid white;
    box-shadow: 
        0 20px 60px rgba(0, 0, 0, 0.3),
        0 0 0 3px rgba(233, 30, 99, 0.3);
    object-fit: cover;
    animation: imagePopUp 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transition: transform 0.5s ease;
}

.profile-circle-wrapper:hover img {
    transform: scale(1.05) rotate(5deg);
}

@keyframes imagePopUp {
    0% { opacity: 0; transform: scale(0.3) rotateY(-180deg); }
    60% { transform: scale(1.1) rotateY(0deg); }
    100% { opacity: 1; transform: scale(1) rotateY(0deg); }
}

.leader-name {
    font-size: 2.2rem;
    font-weight: 900;
    margin: 0 0 8px;
    text-align: center;
    color: #2D3748;
    animation: fadeSlideUp 0.8s ease 0.3s backwards;
    letter-spacing: 1px;
}

.leader-title {
    font-size: 1.3rem;
    font-weight: 700;
    text-align: center;
    background: linear-gradient(135deg, #E91E63, #9C27B0, #673AB7);
    background-size: 200% 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 12px;
    animation: fadeSlideUp 0.8s ease 0.4s backwards, gradientShift 6s ease infinite;
}

.leader-specialty {
    font-size: 1rem;
    text-align: center;
    margin: 0 0 20px;
    color: #4A5568;
    line-height: 1.6;
    animation: fadeSlideUp 0.8s ease 0.5s backwards;
    padding: 0 10px;
}

.expertise-tags {
    display: flex;
    gap: 10px;
    margin-bottom: 30px;
    flex-wrap: wrap;
    justify-content: center;
    animation: fadeSlideUp 0.8s ease 0.6s backwards;
}

.tag {
    background: linear-gradient(135deg, rgba(233, 30, 99, 0.1), rgba(156, 39, 176, 0.1));
    padding: 8px 16px;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 600;
    color: #9C27B0;
    border: 2px solid rgba(156, 39, 176, 0.3);
    transition: all 0.3s ease;
    animation: tagPop 0.5s ease backwards;
}

.tag:nth-child(1) { animation-delay: 0.7s; }
.tag:nth-child(2) { animation-delay: 0.8s; }

@keyframes tagPop {
    0% { opacity: 0; transform: scale(0) rotate(-10deg); }
    100% { opacity: 1; transform: scale(1) rotate(0deg); }
}

.tag:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 8px 20px rgba(156, 39, 176, 0.3);
    background: linear-gradient(135deg, rgba(233, 30, 99, 0.2), rgba(156, 39, 176, 0.2));
}

.start-chat-btn {
    background: linear-gradient(135deg, #E91E63, #9C27B0, #673AB7);
    background-size: 200% 200%;
    color: white;
    border: none;
    padding: 16px 40px;
    border-radius: 30px;
    cursor: pointer;
    font-weight: 700;
    font-size: 1.1rem;
    transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    box-shadow: 0 15px 40px rgba(233, 30, 99, 0.4);
    animation: fadeSlideUp 0.8s ease 0.9s backwards, buttonPulse 2s ease-in-out 2s infinite;
    position: relative;
    overflow: hidden;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-top: auto;
}

.start-chat-btn::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
}

.start-chat-btn:hover::before {
    width: 400px;
    height: 400px;
}

.start-chat-btn:hover {
    transform: translateY(-5px) scale(1.05);
    box-shadow: 0 25px 60px rgba(233, 30, 99, 0.6);
    background-position: 100% 50%;
}

.start-chat-btn:active {
    transform: translateY(-2px) scale(1.02);
}

@keyframes buttonPulse {
    0%, 100% { box-shadow: 0 15px 40px rgba(233, 30, 99, 0.4); }
    50% { box-shadow: 0 15px 40px rgba(233, 30, 99, 0.7), 0 0 30px rgba(233, 30, 99, 0.5); }
}

/* Mobile responsiveness */
@media (max-width: 768px) {
    .main-title {
        font-size: 2.5rem;
        margin: 30px 20px;
    }
    
    .wave-emoji {
        font-size: 2.5rem;
    }
    
    .subtitle {
        font-size: 1rem;
        padding: 0 20px;
    }
    
    #card-container {
        width: 320px;
        height: 600px;
    }
    
    .arrow-btn {
        width: 55px;
        height: 55px;
        font-size: 1.8rem;
    }
    
    .carousel-container {
        gap: 15px;
    }
    
    .profile-circle-wrapper {
        width: 180px;
        height: 180px;
    }
    
    .chat-container {
        width: 95%;
        height: 90%;
        margin: 20px;
    }
}

/* CHAT MODAL STYLES */
.chat-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(10px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.chat-modal.active {
    opacity: 1;
}

.chat-container {
    background: white;
    border-radius: 25px;
    width: 90%;
    max-width: 500px;
    height: 600px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 30px 80px rgba(0, 0, 0, 0.3);
    animation: slideUp 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

@keyframes slideUp {
    0% { transform: translateY(100px) scale(0.9); opacity: 0; }
    100% { transform: translateY(0) scale(1); opacity: 1; }
}

.chat-header {
    padding: 20px;
    border-bottom: 2px solid #f0f0f0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: linear-gradient(135deg, #E91E63, #9C27B0);
    border-radius: 25px 25px 0 0;
    color: white;
}

.chat-header-info {
    display: flex;
    align-items: center;
    gap: 15px;
}

.chat-avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 3px solid white;
    object-fit: cover;
}

.chat-header h3 {
    margin: 0;
    font-size: 1.2rem;
    font-weight: 700;
}

.chat-header p {
    margin: 0;
    font-size: 0.85rem;
    opacity: 0.9;
}

.close-chat {
    background: rgba(255, 255, 255, 0.2);
    border: none;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
}

.close-chat:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: rotate(90deg);
}

.chat-messages {
    flex: 1;
    overflow-y: auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    background: #f8f9fa;
}

.message {
    max-width: 80%;
    padding: 12px 18px;
    border-radius: 20px;
    animation: messageSlide 0.3s ease;
}

@keyframes messageSlide {
    0% { opacity: 0; transform: translateY(10px); }
    100% { opacity: 1; transform: translateY(0); }
}

.user-message {
    align-self: flex-end;
    background: linear-gradient(135deg, #E91E63, #9C27B0);
    color: white;
    border-bottom-right-radius: 5px;
}

.bot-message {
    align-self: flex-start;
    background: white;
    color: #2D3748;
    border-bottom-left-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.bot-message small {
    display: block;
    margin-top: 8px;
    font-size: 0.75rem;
    color: #9C27B0;
    font-weight: 600;
}

.message p {
    margin: 0;
    line-height: 1.5;
}

.typing-indicator p {
    display: flex;
    gap: 4px;
    align-items: center;
}

.typing-indicator span {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #9C27B0;
    animation: typingDot 1.4s infinite;
}

.typing-indicator span:nth-child(2) {
    animation-delay: 0.2s;
}

.typing-indicator span:nth-child(3) {
    animation-delay: 0.4s;
}

@keyframes typingDot {
    0%, 60%, 100% { opacity: 0.3; transform: translateY(0); }
    30% { opacity: 1; transform: translateY(-10px); }
}

.chat-input-container {
    padding: 20px;
    border-top: 2px solid #f0f0f0;
    display: flex;
    gap: 10px;
}

#chat-input {
    flex: 1;
    padding: 12px 18px;
    border: 2px solid #e0e0e0;
    border-radius: 25px;
    font-size: 1rem;
    font-family: 'Poppins', sans-serif;
    transition: border-color 0.3s ease;
}

#chat-input:focus {
    outline: none;
    border-color: #9C27B0;
}

#send-btn {
    background: linear-gradient(135deg, #E91E63, #9C27B0);
    color: white;
    border: none;
    padding: 12px 25px;
    border-radius: 25px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: 'Poppins', sans-serif;
}

#send-btn:hover {
    transform: scale(1.05);
    box-shadow: 0 5px 20px rgba(156, 39, 176, 0.4);
}

#send-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

#chat-input:disabled {
    background: #f5f5f5;
    cursor: not-allowed;
}
