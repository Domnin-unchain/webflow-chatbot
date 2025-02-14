// First create wrapper
const wrapper = document.createElement('div');
wrapper.className = 'madame-chatbot-wrapper';

// Define chatbot HTML
const chatbotCode = `
    <!-- Chat toggle button -->
    <button id="chat-toggle" class="fixed bottom-6 right-6 btn-luxury animate-pop shadow-luxury float-animation p-4 rounded-2xl">
      <span class="text-2xl">💬</span>
    </button>
    <!-- Chatbot window -->
    <div id="chatbot" class="hidden fixed bottom-16 right-6 w-96 animate-fade-in overflow-hidden rounded-2xl z-40">
      <div class="absolute inset-0 glassmorphism-container"></div>
      <div class="relative z-10">
        <div id="chat-messages" class="p-6 h-[420px] overflow-y-auto text-sm space-y-6">
          <div class="gradient-overlay"></div>
        </div>
        
        <div id="chat-inputs" class="p-6"></div>
        <div class="h-2"></div>
        <div class="chat-footer p-4 flex items-center justify-between glassmorphism-container">
          <div class="flex gap-2">
            <button class="lang-btn" data-lang="fi" title="Suomi">
              <img src="https://flagcdn.com/w20/fi.png" alt="Finnish" class="rounded">
            </button>
            <button class="lang-btn" data-lang="en" title="English">
              <img src="https://flagcdn.com/w20/gb.png" alt="English" class="rounded">
            </button>
            <button class="lang-btn" data-lang="fr" title="Français">
              <img src="https://flagcdn.com/w20/fr.png" alt="French" class="rounded">
            </button>
          </div>
          <div class="flex gap-3">
            <button id="chat-reset" class="control-btn" title="Aloita alusta">
              <i class="fas fa-redo text-lg"></i>
            </button>
            <button id="chat-close" class="control-btn" title="Sulje chat">
              <i class="fas fa-times text-lg"></i>
            </button>
          </div>
          <div class="flex gap-8">
            <a href="mailto:antoni.duhov@gmail.com" class="contact-link" title="Lähetä sähköpostia">
              <i class="fas fa-envelope text-xl"></i>
            </a>
            <a href="https://wa.me/358504719828" class="contact-link" title="WhatsApp" target="_blank">
              <i class="fab fa-whatsapp text-xl"></i>
            </a>
            <a href="tel:+358401234567" class="contact-link" title="Soita meille">
              <i class="fas fa-phone text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
`;

// Add the chatbot HTML to wrapper
wrapper.innerHTML = chatbotCode;

// Add required resources
const resources = `
    <!-- Required CSS -->
    <link href="https://cdn.jsdelivr.net/gh/p451/chatbot-assets@master/dist/output.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/gh/p451/chatbot-assets@master/src/custom.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Gilda+Display&display=swap" rel="stylesheet">
    <!-- Required JS -->
    <script src="https://cdn.jsdelivr.net/gh/p451/chatbot-assets@master/script.js"></script>
`;

// Insert wrapper and resources
document.body.appendChild(wrapper);
document.head.insertAdjacentHTML('beforeend', resources);
