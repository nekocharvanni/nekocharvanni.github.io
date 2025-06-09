// Global state
let currentStory = null;
let currentChapter = 1;
let maxFreeChapters = 3;
let isReading = false;
let speechSynthesis = window.speechSynthesis;
let currentUtterance = null;
let selectedPricing = 'all';

// Story data
const stories = {
  'chocolate-matcha': {
    title: 'Chocolate & Matcha',
    chapters: 5,
    content: {
      1: {
        title: 'Chapter 1: Osaka Tea Garden',
        text: `In the garden following the path of arranged onyx marble stepping-stones, past the water basin and near cherry blossom trees in tranquil bloom, Kazuhiko Wakahisa sat on the stone bench sipping green tea he prepared. His eyes wandered past the shrubberies arranged simplistically around the garden to the jade fountain. Two intricately sculptured jade dragons twisted around a miniature jade Mount Fuji. Crystal clear water serenely flowed through their fangs, cascading down Mount Fuji until the water trickled into the base.`,
        video: 'chocolate-matcha'
      },
      2: {
        title: 'Chapter 2: The Encounter',
        text: `"Haha, mother," he yelled at Charlene and humiliated Ryuku. "Not to mention his affair with Hanako Love." Charlene briefly listened to the conversation Natsumi was having with their mother. Natsumi was still attempting to sway their mother's decision to renounce their attendance at the ceremony.`,
        video: 'chocolate-matcha'
      },
      3: {
        title: 'Chapter 3: Rising Tensions',
        text: `The ceremony was set to begin, and Kazuhiko found himself more nervous than he had been in years. The weight of tradition and expectation pressed down on him as he prepared the sacred tea. Little did he know that this ceremony would change everything.`,
        video: 'chocolate-matcha'
      },
      4: {
        title: 'Chapter 4: Forbidden Desires',
        text: `As the tea ceremony progressed, Kazuhiko couldn't shake the memory of the mysterious woman who had thrown her drink at him. Her fierce eyes haunted his thoughts, stirring feelings he had never experienced before.`,
        video: 'chocolate-matcha'
      },
      5: {
        title: 'Chapter 5: Hearts Unveiled',
        text: `The final confrontation between Kazuhiko and Charlene would determine whether their pride would keep them apart, or if love could bridge the gap between their different worlds.`,
        video: 'chocolate-matcha'
      }
    }
  },
  'tiger-eyes': {
    title: 'Her Tiger Eyes',
    chapters: 6,
    content: {
      1: {
        title: 'Chapter 1: The Ancient Library',
        text: `The old library stood like a sentinel against time, its weathered stones holding secrets that predated the modern world. Amara traced her fingers along the ancient texts, feeling the mystical energy that seemed to pulse from within the leather-bound volumes.`,
        video: 'tiger-eyes'
      },
      2: {
        title: 'Chapter 2: Awakening Powers',
        text: `As Amara delved deeper into the forbidden texts, she began to understand the truth about her heritage. The tiger eyes that had always made her different were not a curse, but a gift that connected her to an ancient magical lineage.`,
        video: 'tiger-eyes'
      }
    }
  },
  'immortal-angel': {
    title: 'Immortal Angel',
    chapters: 8,
    content: {
      1: {
        title: 'Chapter 1: The Awakening',
        text: `For centuries, she had walked among mortals, her true nature hidden behind the facade of humanity. But tonight, everything would change when she met the one person who could see through her immortal disguise and touch her eternal soul.`,
        video: 'immortal-angel'
      }
    }
  }
};

// Section management
function showSection(sectionName) {
  // Hide all sections
  document.querySelectorAll('.section').forEach(section => {
    section.style.display = 'none';
  });
  
  // Show selected section
  const targetSection = document.getElementById(sectionName + '-section');
  if (targetSection) {
    targetSection.style.display = 'block';
    targetSection.classList.add('fade-in');
    
    // Show chapter reader when stories section is opened
    if (sectionName === 'stories') {
      document.querySelector('.chapter-reader').style.display = 'block';
    }
  }
}

// Story selection
function selectStory(storyId) {
  currentStory = storyId;
  currentChapter = 1;
  showSection('stories');
  loadChapter();
}

// Chapter loading
function loadChapter() {
  if (!currentStory || !stories[currentStory]) return;
  
  const story = stories[currentStory];
  const chapter = story.content[currentChapter];
  
  if (!chapter) {
    document.getElementById('chapter-content').innerHTML = '<p>Chapter not available</p>';
    return;
  }
  
  document.getElementById('chapter-title').textContent = story.title;
  document.getElementById('chapter-subtitle').textContent = chapter.title;
  document.getElementById('chapter-content').innerHTML = `<p>${chapter.text}</p>`;
  
  // Generate video for chapter
  if (window.ChapterVideoGenerator) {
    generateChapterVideo(currentStory, chapter);
  }
  
  saveProgress();
}

// Generate video using the video generator
function generateChapterVideo(storyId, chapterData) {
  const canvas = document.getElementById('story-canvas');
  const ctx = canvas.getContext('2d');
  
  let frame = 0;
  function animate() {
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Create background based on story theme
    createStoryBackground(ctx, canvas, storyId, frame);
    
    // Add text overlay
    if (frame > 60) { // Show text after 2 seconds
      addTextOverlay(ctx, canvas, chapterData.title, frame - 60);
    }
    
    frame++;
    if (frame < 300) { // 10 seconds at 30fps
      requestAnimationFrame(animate);
    }
  }
  
  animate();
}

// Create story-themed backgrounds
function createStoryBackground(ctx, canvas, storyTheme, frame) {
  switch (storyTheme) {
    case 'tiger-eyes':
      drawMysticalLibraryScene(ctx, canvas, frame);
      break;
    case 'immortal-angel':
      drawGothicMansionScene(ctx, canvas, frame);
      break;
    default:
      drawRomanticScene(ctx, canvas, frame);
  }
}

// Tea garden scene for Chocolate & Matcha
function drawTeaGardenScene(ctx, canvas, frame) {
  // Gradient sky
  const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
  gradient.addColorStop(0, '#87CEEB');
  gradient.addColorStop(1, '#F0E68C');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // Animated falling petals
  ctx.fillStyle = '#FFB6C1';
  for (let i = 0; i < 15; i++) {
    const x = (frame * 2 + i * 40) % canvas.width;
    const y = (frame * 3 + i * 30) % canvas.height;
    ctx.beginPath();
    ctx.arc(x, y, 6, 0, Math.PI * 2);
    ctx.fill();
  }
  
  // Tea fountain
  ctx.fillStyle = '#696969';
  ctx.fillRect(canvas.width/2 - 25, canvas.height - 80, 50, 20);
  
  // Water animation
  ctx.fillStyle = '#87CEEB';
  const waterHeight = Math.sin(frame * 0.1) * 5 + 10;
  ctx.fillRect(canvas.width/2 - 20, canvas.height - 80 - waterHeight, 40, waterHeight);
}

// Mystical library scene for Tiger Eyes
function drawMysticalLibraryScene(ctx, canvas, frame) {
  // Dark mystical background
  const gradient = ctx.createRadialGradient(
    canvas.width / 2, canvas.height / 2, 0,
    canvas.width / 2, canvas.height / 2, canvas.width
  );
  gradient.addColorStop(0, '#4B0082');
  gradient.addColorStop(1, '#000000');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // Floating magical sparkles
  ctx.fillStyle = '#FFD700';
  for (let i = 0; i < 20; i++) {
    const x = Math.sin(frame * 0.02 + i) * 100 + canvas.width / 2;
    const y = Math.cos(frame * 0.01 + i) * 75 + canvas.height / 2;
    const size = Math.sin(frame * 0.05 + i) * 3 + 2;
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fill();
  }
}

// Gothic mansion scene for Immortal Angel
function drawGothicMansionScene(ctx, canvas, frame) {
  // Dark Gothic background
  const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
  gradient.addColorStop(0, '#1a1a2e');
  gradient.addColorStop(1, '#16213e');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // Moon
  ctx.fillStyle = '#F5F5DC';
  ctx.beginPath();
  ctx.arc(canvas.width - 80, 60, 30, 0, Math.PI * 2);
  ctx.fill();
  
  // Floating ethereal spirits
  ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
  for (let i = 0; i < 10; i++) {
    const x = Math.sin(frame * 0.01 + i * 0.5) * 150 + canvas.width / 2;
    const y = Math.cos(frame * 0.015 + i * 0.3) * 100 + canvas.height / 3;
    const size = Math.sin(frame * 0.03 + i) * 5 + 8;
    ctx.globalAlpha = 0.6;
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1;
  }
}

// Default romantic scene
function drawRomanticScene(ctx, canvas, frame) {
  // Romantic sunset background
  const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
  gradient.addColorStop(0, '#FF6B6B');
  gradient.addColorStop(0.5, '#FFE66D');
  gradient.addColorStop(1, '#FF8E53');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // Floating hearts
  ctx.fillStyle = '#FF69B4';
  for (let i = 0; i < 8; i++) {
    const x = (frame + i * 75) % canvas.width;
    const y = Math.sin(frame * 0.01 + i) * 25 + canvas.height / 2;
    drawHeart(ctx, x, y, 10);
  }
}

// Draw heart shape
function drawHeart(ctx, x, y, size) {
  ctx.beginPath();
  ctx.moveTo(x, y + size / 4);
  ctx.bezierCurveTo(x, y, x - size / 2, y, x - size / 2, y + size / 4);
  ctx.bezierCurveTo(x - size / 2, y + size / 2, x, y + size, x, y + size);
  ctx.bezierCurveTo(x, y + size, x + size / 2, y + size / 2, x + size / 2, y + size / 4);
  ctx.bezierCurveTo(x + size / 2, y, x, y, x, y + size / 4);
  ctx.fill();
}

// Add text overlay to canvas
function addTextOverlay(ctx, canvas, text, frame) {
  ctx.font = '24px Cinzel Decorative, serif';
  ctx.fillStyle = 'white';
  ctx.shadowColor = 'rgba(0,0,0,0.8)';
  ctx.shadowBlur = 10;
  ctx.textAlign = 'center';
  
  // Typewriter effect
  const charsToShow = Math.floor(frame / 3);
  const visibleText = text.substring(0, Math.max(0, charsToShow));
  
  if (visibleText) {
    ctx.fillText(visibleText, canvas.width / 2, canvas.height / 2);
  }
  
  ctx.shadowBlur = 0;
}

// Chapter navigation
function nextChapter() {
  if (!currentStory) return;
  
  const nextChap = currentChapter + 1;
  
  // Check if user needs to pay
  if (nextChap > maxFreeChapters && !isPremiumUser()) {
    showPaymentModal();
    return;
  }
  
  if (nextChap <= stories[currentStory].chapters) {
    currentChapter = nextChap;
    loadChapter();
  }
}

function previousChapter() {
  if (currentChapter > 1) {
    currentChapter--;
    loadChapter();
  }
}

// Media controls
function toggleVideoMode() {
  const container = document.getElementById('video-container');
  const toggle = document.getElementById('video-toggle');
  
  if (container.style.display === 'none') {
    container.style.display = 'block';
    toggle.textContent = '📹 Hide Video';
  } else {
    container.style.display = 'none';
    toggle.textContent = '📹 Show Video';
  }
}

function toggleTextReader() {
  const toggle = document.getElementById('reader-toggle');
  
  if (isReading) {
    stopReading();
    toggle.textContent = '🔊 Start Reading';
    isReading = false;
  } else {
    startReading();
    toggle.textContent = '⏸️ Stop Reading';
    isReading = true;
  }
}

function startReading() {
  const text = document.getElementById('chapter-content').textContent;
  if (speechSynthesis && text) {
    // Cancel any existing speech
    speechSynthesis.cancel();
    
    currentUtterance = new SpeechSynthesisUtterance(text);
    
    // Apply voice settings
    const speed = document.getElementById('voice-speed').value;
    const pitch = document.getElementById('voice-pitch').value;
    
    currentUtterance.rate = parseFloat(speed);
    currentUtterance.pitch = parseFloat(pitch);
    
    // Set voice based on selection
    const voices = speechSynthesis.getVoices();
    const voiceSelect = document.getElementById('voice-select').value;
    
    if (voiceSelect.includes('female')) {
      const femaleVoices = voices.filter(voice => 
        voice.name.toLowerCase().includes('female') || 
        voice.name.toLowerCase().includes('samantha') ||
        voice.name.toLowerCase().includes('karen') ||
        voice.name.toLowerCase().includes('susan')
      );
      if (femaleVoices.length > 0) {
        currentUtterance.voice = femaleVoices[0];
      }
    } else if (voiceSelect.includes('male')) {
      const maleVoices = voices.filter(voice => 
        voice.name.toLowerCase().includes('male') || 
        voice.name.toLowerCase().includes('alex') ||
        voice.name.toLowerCase().includes('daniel')
      );
      if (maleVoices.length > 0) {
        currentUtterance.voice = maleVoices[0];
      }
    }
    
    currentUtterance.onend = () => {
      isReading = false;
      document.getElementById('reader-toggle').textContent = '🔊 Start Reading';
    };
    
    speechSynthesis.speak(currentUtterance);
  }
}

function stopReading() {
  if (speechSynthesis) {
    speechSynthesis.cancel();
  }
}

// Avatar system
function initializeAvatar() {
  const canvas = document.getElementById('avatar-canvas');
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  canvas.width = 200;
  canvas.height = 200;
  
  drawAvatar();
  
  // Add event listeners for customization
  const elements = ['skin-color', 'hair-style', 'hair-color', 'eye-shape', 'eye-color', 'outfit-style'];
  elements.forEach(id => {
    const element = document.getElementById(id);
    if (element) {
      element.addEventListener('change', drawAvatar);
    }
  });
}

function drawAvatar() {
  const canvas = document.getElementById('avatar-canvas');
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  
  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Get current settings
  const skinColor = document.getElementById('skin-color')?.value || '#F2D3C4';
  const hairStyle = document.getElementById('hair-style')?.value || 'long';
  const hairColor = document.getElementById('hair-color')?.value || '#8B4513';
  const eyeShape = document.getElementById('eye-shape')?.value || 'almond';
  const eyeColor = document.getElementById('eye-color')?.value || '#8B4513';
  const outfitStyle = document.getElementById('outfit-style')?.value || 'casual';
  
  // Draw face
  ctx.fillStyle = skinColor;
  ctx.beginPath();
  ctx.arc(100, 100, 80, 0, Math.PI * 2);
  ctx.fill();
  
  // Draw hair based on style
  ctx.fillStyle = hairColor;
  switch(hairStyle) {
    case 'long':
      ctx.beginPath();
      ctx.ellipse(100, 60, 90, 40, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.ellipse(100, 120, 85, 60, 0, 0, Math.PI * 2);
      ctx.fill();
      break;
    case 'short':
      ctx.beginPath();
      ctx.ellipse(100, 70, 85, 35, 0, 0, Math.PI * 2);
      ctx.fill();
      break;
    case 'curly':
      for(let i = 0; i < 8; i++) {
        const angle = (i * Math.PI * 2) / 8;
        const x = 100 + Math.cos(angle) * 70;
        const y = 70 + Math.sin(angle) * 30;
        ctx.beginPath();
        ctx.arc(x, y, 15, 0, Math.PI * 2);
        ctx.fill();
      }
      break;
    case 'braided':
      ctx.beginPath();
      ctx.ellipse(100, 60, 80, 30, 0, 0, Math.PI * 2);
      ctx.fill();
      break;
  }
  
  // Draw eyes
  ctx.fillStyle = eyeColor;
  switch(eyeShape) {
    case 'almond':
      ctx.beginPath();
      ctx.ellipse(80, 90, 12, 8, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.ellipse(120, 90, 12, 8, 0, 0, Math.PI * 2);
      ctx.fill();
      break;
    case 'round':
      ctx.beginPath();
      ctx.arc(80, 90, 10, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(120, 90, 10, 0, Math.PI * 2);
      ctx.fill();
      break;
  }
  
  // Draw pupils
  ctx.fillStyle = '#000';
  ctx.beginPath();
  ctx.arc(80, 90, 4, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(120, 90, 4, 0, Math.PI * 2);
  ctx.fill();
  
  // Draw mouth
  ctx.strokeStyle = '#8B0000';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(100, 120, 8, 0, Math.PI, false);
  ctx.stroke();
  
  // Draw outfit indicator
  ctx.fillStyle = getOutfitColor(outfitStyle);
  ctx.fillRect(60, 160, 80, 40);
}

function getOutfitColor(style) {
  switch(style) {
    case 'casual': return '#4A90E2';
    case 'elegant': return '#8B0000';
    case 'traditional': return '#DAA520';
    case 'modern': return '#000000';
    default: return '#4A90E2';
  }
}

function resetAvatar() {
  const elements = [
    {id: 'skin-color', value: '#F2D3C4'},
    {id: 'hair-style', value: 'long'},
    {id: 'hair-color', value: '#8B4513'},
    {id: 'eye-shape', value: 'almond'},
    {id: 'eye-color', value: '#8B4513'},
    {id: 'outfit-style', value: 'casual'}
  ];
  
  elements.forEach(({id, value}) => {
    const element = document.getElementById(id);
    if (element) element.value = value;
  });
  
  drawAvatar();
}

function saveAvatar() {
  const avatarSettings = {
    skinColor: document.getElementById('skin-color')?.value,
    hairStyle: document.getElementById('hair-style')?.value,
    hairColor: document.getElementById('hair-color')?.value,
    eyeShape: document.getElementById('eye-shape')?.value,
    eyeColor: document.getElementById('eye-color')?.value,
    outfitStyle: document.getElementById('outfit-style')?.value
  };
  
  // Store in memory for this session
  window.savedAvatar = avatarSettings;
  alert('Avatar saved successfully!');
}

// Payment system
function showPaymentModal() {
  document.getElementById('payment-modal').style.display = 'flex';
}

function hidePaymentModal() {
  document.getElementById('payment-modal').style.display = 'none';
}

function selectPricing(option) {
  selectedPricing = option;
  document.querySelectorAll('.pricing-option').forEach(opt => {
    opt.classList.remove('selected');
  });
  event.target.closest('.pricing-option').classList.add('selected');
}

function processPurchase() {
  const priceMap = {
    'single': 'price_single_story',
    'all': 'price_all_stories',
    'monthly': 'price_monthly'
  };
  
  // Show loading state
  const button = event.target;
  const originalText = button.textContent;
  button.textContent = 'Processing...';
  button.disabled = true;
  
  // Simulate API call to create Stripe checkout session
  fetch('/.netlify/functions/create-checkout-session', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      priceId: priceMap[selectedPricing],
      successUrl: window.location.origin + '/success.html',
      cancelUrl: window.location.origin + '/index.html'
    })
  })
  .then(response => response.json())
  .then(session => {
    if (session.sessionId) {
      // Initialize Stripe and redirect to checkout
      const stripe = Stripe('pk_test_your_publishable_key_here'); // Replace with your publishable key
      return stripe.redirectToCheckout({ sessionId: session.sessionId });
    } else {
      throw new Error('Failed to create checkout session');
    }
  })
  .catch(error => {
    console.error('Error:', error);
    alert('Error processing payment. For demo purposes, simulating successful payment...');
    
    // For demo purposes, simulate successful payment
    setTimeout(() => {
      alert('Payment successful! All chapters unlocked.');
      window.premiumUser = true;
      hidePaymentModal();
      button.textContent = originalText;
      button.disabled = false;
    }, 2000);
  });
}

function isPremiumUser() {
  return window.premiumUser || false;
}

// Progress tracking
function saveProgress() {
  const progress = {
    currentStory,
    currentChapter,
    timestamp: new Date().toISOString()
  };
  window.userProgress = progress;
}

function loadProgress() {
  const progress = window.userProgress;
  if (progress) {
    currentStory = progress.currentStory;
    currentChapter = progress.currentChapter;
  }
}

// Voice settings update
function updateVoiceSettings() {
  if (isReading && currentUtterance) {
    stopReading();
    setTimeout(startReading, 100);
  }
}

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', function() {
  initializeAvatar();
  loadProgress();
  
  // Add voice setting event listeners
  const voiceElements = ['voice-select', 'voice-speed', 'voice-pitch'];
  voiceElements.forEach(id => {
    const element = document.getElementById(id);
    if (element) {
      element.addEventListener('change', updateVoiceSettings);
    }
  });
  
  // Auto-load first story if available
  if (currentStory) {
    loadChapter();
  }
  
  // Add keyboard shortcuts
  document.addEventListener('keydown', function(e) {
    if (e.ctrlKey || e.metaKey) {
      switch(e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          previousChapter();
          break;
        case 'ArrowRight':
          e.preventDefault();
          nextChapter();
          break;
        case ' ':
          e.preventDefault();
          toggleTextReader();
          break;
      }
    }
  });
  
  // Save progress when user navigates away
  window.addEventListener('beforeunload', saveProgress);
});

// Make functions globally available
window.showSection = showSection;
window.selectStory = selectStory;
window.nextChapter = nextChapter;
window.previousChapter = previousChapter;
window.toggleVideoMode = toggleVideoMode;
window.toggleTextReader = toggleTextReader;
window.resetAvatar = resetAvatar;
window.saveAvatar = saveAvatar;
window.showPaymentModal = showPaymentModal;
window.hidePaymentModal = hidePaymentModal;
window.selectPricing = selectPricing;
window.processPurchase = processPurchase;chocolate-matcha':
      drawTeaGardenScene(ctx, canvas, frame);
      break;
    case '