<script>
  window.addEventListener('load', function() {
    // First add just the chat button to see if it appears
    const buttonHtml = `
      <button id="chat-toggle" class="fixed bottom-6 right-6 btn-luxury animate-pop shadow-luxury float-animation p-4 rounded-2xl" style="z-index: 9998;">
        <span class="text-2xl">💬</span>
      </button>
    `;
    
    document.body.insertAdjacentHTML('beforeend', buttonHtml);
    
    // Load the required CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/gh/p451/chatbot-assets@master/dist/output.css';
    document.head.appendChild(link);
  });
</script>
