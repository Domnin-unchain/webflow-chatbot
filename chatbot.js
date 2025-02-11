<!DOCTYPE html>
<html lang="fi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Madame Chatbot</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Gilda+Display&display=swap" rel="stylesheet">
</head>
<body class="bg-white min-h-screen relative overflow-hidden font-gilda">

    <!-- Background gradient overlay -->
    <div class="fixed inset-0 bg-gradient-to-b from-transparent via-white/20 to-white/40 backdrop-blur-[2px] pointer-events-none"></div>

    <script>
      // Wait for all resources to load
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
              <!-- ...existing chatbot HTML... -->
            </div>
          `;
          
          // Insert HTML into body
          document.body.insertAdjacentHTML('beforeend', chatbotCode);

          // Load and execute the script last
          const script = document.createElement('script');
          script.src = 'https://cdn.jsdelivr.net/gh/p451/chatbot-assets@master/script.js';
          document.body.appendChild(script);
        });
      });
    </script>
</body>
</html>
