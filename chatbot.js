<script>
  // Wait for all resources to be loaded
  window.addEventListener('load', function() {
    // First load required CSS
    const loadCSS = (url) => {
      return new Promise((resolve, reject) => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = url;
        link.onload = () => resolve();
        link.onerror = () => reject();
        document.head.appendChild(link);
      });
    };

    // Load all required stylesheets first
    Promise.all([
      loadCSS('https://cdn.jsdelivr.net/gh/p451/chatbot-assets@master/dist/output.css'),
      loadCSS('https://cdn.jsdelivr.net/gh/p451/chatbot-assets@master/src/custom.css'),
      loadCSS('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'),
      loadCSS('https://fonts.googleapis.com/css2?family=Gilda+Display&display=swap')
    ]).then(() => {
      // After CSS is loaded, inject the chatbot HTML
      const chatbotCode = `
        <!-- Chat toggle button -->
        <button id="chat-toggle" class="fixed bottom-6 right-6 btn-luxury animate-pop shadow-luxury float-animation p-4 rounded-2xl">
          <span class="text-2xl">💬</span>
        </button>

        <!-- Chatbot window -->
        <div id="chatbot" class="hidden fixed bottom-16 right-6 w-96 animate-fade-in overflow-hidden rounded-2xl z-40">
          <div class="absolute inset-0 glassmorphism-container"></div>
          <div class="relative z-10">
            <!-- ...existing chatbot window content... -->
          </div>
        </div>
      `;
      
      // Insert chatbot HTML into body
      document.body.insertAdjacentHTML('beforeend', chatbotCode);

      // Load the script last
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/gh/p451/chatbot-assets@master/script.js';
      document.body.appendChild(script);
    });
  });
</script>
