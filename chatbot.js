(function() {
    // Create a scoped wrapper
    const chatbotWrapper = document.createElement('div');
    chatbotWrapper.className = 'madame-chatbot-wrapper';
    
    // Add scoped styles
    const scopedStyles = document.createElement('style');
    scopedStyles.textContent = `
        .madame-chatbot-wrapper {
            all: initial;
            font-family: 'Gilda Display', serif !important;
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            z-index: 999999;
            pointer-events: none;
        }
        
        .madame-chatbot-wrapper * {
            pointer-events: auto;
        }
    `;
    document.head.appendChild(scopedStyles);
    
    chatbotWrapper.innerHTML = `
        <!-- Chat toggle button -->
        <button id="chat-toggle" class="fixed bottom-6 right-6 btn-luxury animate-pop shadow-luxury p-4 rounded-2xl z-40">
            <span class="text-2xl">💬</span>
        </button>
        <!-- Chatbot window -->
        <div id="chatbot" class="hidden fixed w-80 animate-fade-in overflow-hidden rounded-2xl z-40">
            <!-- Rest of your chatbot HTML -->
        </div>
    `;
    
    document.body.appendChild(chatbotWrapper);
    
    // Load resources
    const resources = [
        {
            type: 'style',
            url: 'https://cdn.jsdelivr.net/gh/p451/chatbot-assets@master/dist/output.css'
        },
        {
            type: 'style',
            url: 'https://cdn.jsdelivr.net/gh/p451/chatbot-assets@master/src/custom.css'
        },
        {
            type: 'style',
            url: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'
        },
        {
            type: 'style',
            url: 'https://fonts.googleapis.com/css2?family=Gilda+Display&display=swap'
        }
    ];
    
    // Load resources sequentially
    Promise.all(resources.map(resource => {
        if (resource.type === 'style') {
            return new Promise((resolve, reject) => {
                const link = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = resource.url;
                link.onload = resolve;
                link.onerror = reject;
                document.head.appendChild(link);
            });
        }
    })).then(() => {
        // Load and initialize chatbot script
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/gh/p451/chatbot-assets@master/script.js';
        script.onload = () => {
            if (typeof window.initChatbot === 'function') {
                window.initChatbot();
            }
        };
        document.body.appendChild(script);
    });
})();
