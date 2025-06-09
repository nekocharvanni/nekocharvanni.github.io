# 🌹 Neko Charvanni Romance Site - Complete Setup Guide

## 📋 Project Overview

A complete interactive romance storytelling platform featuring:
- 🎥 **Illustrated Video Chapters** - AI-generated animated scenes
- 🎭 **Customizable Reader Avatars** - Personalized character creation
- 🔊 **Premium Voice Narration** - Multiple voice options with speed/pitch control
- 💳 **Stripe Payment Integration** - Secure chapter unlocking system
- 📱 **Responsive Design** - Mobile-first approach
- 🔒 **Premium Content Protection** - Free vs paid content management

## 🚀 Quick Start

### 1. File Structure
```
neko-charvanni-site/
├── index.html                 # Main application
├── styles.css                 # All styles
├── script.js                  # Main JavaScript
├── success.html               # Payment success page
├── cancel.html                # Payment cancellation page
├── package.json               # Dependencies
├── netlify.toml               # Netlify configuration
├── netlify/functions/
│   ├── create-checkout-session.js
│   └── stripe-webhook.js
├── utils/
│   └── videoGenerator.js
├── assets/
│   ├── images/
│   ├── videos/
│   └── audio/
└── README.md
```

### 2. Installation

```bash
# Clone or download all files to your project directory
npm install

# Install Netlify CLI globally (if not already installed)
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize site
netlify init
```

### 3. Environment Variables

Set these in your Netlify dashboard under Site Settings → Environment Variables:

```bash
STRIPE_SECRET_KEY=sk_test_...
STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
URL=https://yourdomain.netlify.app
NODE_ENV=production
```

### 4. Stripe Setup

#### A. Create Products in Stripe Dashboard:

1. **Single Story Access** - $4.99 one-time
   - Product Name: "Single Story Access"
   - Price ID: `price_single_story`

2. **All Stories Access** - $12.99 one-time
   - Product Name: "All Stories Access"
   - Price ID: `price_all_stories`

3. **Monthly Subscription** - $7.99/month recurring
   - Product Name: "Premium Monthly"
   - Price ID: `price_monthly`

#### B. Webhook Configuration:
- **URL**: `https://yourdomain.netlify.app/.netlify/functions/stripe-webhook`
- **Events**: 
  - `checkout.session.completed`
  - `customer.subscription.created`
  - `customer.subscription.deleted`
  - `invoice.payment_succeeded`
  - `invoice.payment_failed`

#### C. Update Publishable Key:
In `script.js`, line 580, replace:
```javascript
const stripe = Stripe('pk_test_your_publishable_key_here');
```
With your actual publishable key.

### 5. Deployment

```bash
# Deploy to Netlify
netlify deploy --prod

# Or connect to Git for automatic deployments
```

## 🎨 Customization Guide

### Adding New Stories

1. **Update the stories object** in `script.js`:
```javascript
const stories = {
  'your-new-story': {
    title: 'Your New Story Title',
    chapters: 8,
    content: {
      1: {
        title: 'Chapter 1: Beginning',
        text: 'Your story content here...',
        video: 'your-story-theme'
      }
      // Add more chapters...
    }
  }
};
```

2. **Add story card** to `index.html`:
```html
<div class="story-card" onclick="selectStory('your-new-story')">
  <h3>Your New Story</h3>
  <p>Story description...</p>
  <div class="story-progress">
    <div class="progress-bar" style="width: 20%"></div>
  </div>
  <p><strong>1/8 chapters unlocked</strong></p>
</div>
```

3. **Add video theme** to `videoGenerator.js`:
```javascript
// In createStoryBackground method, add new case:
case 'your-new-story':
  this.drawYourCustomScene(frame);
  break;

// Then implement the scene:
drawYourCustomScene(frame) {
  // Your custom background animation
}
```

### Creating Chapter Videos

#### Option 1: Built-in Canvas Animation (Current)
The system generates animated backgrounds with text overlays using HTML5 Canvas.

#### Option 2: External Video Creation
For higher quality videos, create MP4 files and reference them:

```javascript
// In story content:
video: 'path/to/your-video.mp4'
```

#### Option 3: AI Video Generation
Integrate with services like:
- **RunwayML**: Text-to-video AI
- **Stable Video Diffusion**: Open-source video AI
- **Luma AI**: High-quality video generation

### Voice Narration Enhancement

#### Using Premium Voice Services:
```javascript
// Example with ElevenLabs API
async function generatePremiumVoice(text, voiceId) {
  const response = await fetch('https://api.elevenlabs.io/v1/text-to-speech/' + voiceId, {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer ' + ELEVENLABS_API_KEY,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ 
      text, 
      voice_settings: { 
        stability: 0.5, 
        similarity_boost: 0.5 
      } 
    })
  });
  return response.blob();
}
```

### Avatar System Enhancement

#### Adding New Customization Options:
```javascript
// In drawAvatar function, add new features:
case 'accessories':
  this.drawAccessories(accessoryType);
  break;

drawAccessories(type) {
  switch(type) {
    case 'glasses':
      // Draw glasses
      break;
    case 'earrings':
      // Draw earrings
      break;
  }
}
```

#### 3D Avatar Integration:
```javascript
// Using ReadyPlayerMe or similar service
function load3DAvatar(avatarUrl) {
  const iframe = document.createElement('iframe');
  iframe.src = `https://models.readyplayer.me/${avatarUrl}`;
  iframe.style.width = '200px';
  iframe.style.height = '200px';
  document.getElementById('avatar-preview').appendChild(iframe);
}
```

## 🔧 Advanced Features

### Content Management System
```javascript
// Add CMS functionality for easier story management
class StoryManager {
  async loadStories() {
    // Load from external CMS (Sanity, Contentful, etc.)
    const response = await fetch('/api/stories');
    return response.json();
  }
  
  async saveProgress(userId, storyId, chapter) {
    // Save to database
    await fetch('/api/progress', {
      method: 'POST',
      body: JSON.stringify({ userId, storyId, chapter })
    });
  }
}
```

### Analytics Integration
```javascript
// Track user engagement
function trackChapterRead(storyId, chapter) {
  gtag('event', 'chapter_read', {
    story_id: storyId,
    chapter_number: chapter,
    reading_time: performance.now()
  });
}

// Track payment events
function trackPurchase(priceId, amount) {
  gtag('event', 'purchase', {
    transaction_id: Date.now(),
    value: amount,
    currency: 'USD',
    items: [{
      item_id: priceId,
      item_name: 'Story Access',
      category: 'Premium Content',
      price: amount
    }]
  });
}
```

### SEO Optimization
Add to each page `<head>`:
```html
<!-- Basic SEO -->
<meta name="description" content="Interactive romance stories with video chapters and voice narration">
<meta name="keywords" content="romance stories, interactive fiction, voice narration">

<!-- Open Graph -->
<meta property="og:title" content="Neko Charvanni - Interactive Romance Stories">
<meta property="og:description" content="Immersive romance with video chapters and personalized avatars">
<meta property="og:image" content="/assets/og-image.jpg">
<meta property="og:url" content="https://nekocharvanni.com">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Interactive Romance Stories">
<meta name="twitter:description" content="Immersive storytelling experience">
<meta name="twitter:image" content="/assets/twitter-image.jpg">
```

## 📱 Mobile Optimization

### Progressive Web App (PWA)
Create `manifest.json`:
```json
{
  "name": "Neko Charvanni Romance",
  "short_name": "NekoRomance",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#4A1A4A",
  "theme_color": "#FFD700",
  "icons": [
    {
      "src": "/assets/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/assets/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

Add to `index.html`:
```html
<link rel="manifest" href="/manifest.json">
<meta name="theme-color" content="#4A1A4A">
```

### Touch Gestures
```javascript
// Add swipe navigation
let startX = 0;
document.addEventListener('touchstart', e => {
  startX = e.touches[0].clientX;
});

document.addEventListener('touchend', e => {
  const endX = e.changedTouches[0].clientX;
  const diff = startX - endX;
  
  if (Math.abs(diff) > 50) {
    if (diff > 0) {
      nextChapter(); // Swipe left = next
    } else {
      previousChapter(); // Swipe right = previous
    }
  }
});
```

## 🔒 Security Best Practices

### Environment Variables
Never commit sensitive keys to version control:
```bash
# .gitignore
.env
.env.local
.env.production
node_modules/
*.log
```

### Content Security Policy
Add to `netlify.toml`:
```toml
[[headers]]
  for = "/*"
  [headers.values]
    Content-Security-Policy = "default-src 'self'; script-src 'self' 'unsafe-inline' https://js.stripe.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: blob:; media-src 'self' blob:; connect-src 'self' https://api.stripe.com"
```

## 🚀 Performance Optimization

### Image Optimization
```javascript
// Lazy loading for images
const images = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      img.classList.remove('lazy');
      observer.unobserve(img);
    }
  });
});

images.forEach(img => imageObserver.observe(img));
```

### Video Optimization
```javascript
// Preload next chapter video
function preloadNextChapter() {
  const nextChap = currentChapter + 1;
  if (stories[currentStory]?.content[nextChap]) {
    const video = document.createElement('video');
    video.preload = 'metadata';
    video.src = getVideoUrl(currentStory, nextChap);
  }
}
```

## 🧪 Testing

### Basic Tests
```javascript
// Add to script.js
function runTests() {
  console.group('Site Tests');
  
  // Test story loading
  console.assert(stories['chocolate-matcha'], 'Chocolate & Matcha story should exist');
  
  // Test avatar functions
  console.assert(typeof drawAvatar === 'function', 'drawAvatar should be a function');
  
  // Test payment modal
  console.assert(document.getElementById('payment-modal'), 'Payment modal should exist');
  
  console.log('✅ Basic tests passed');
  console.groupEnd();
}

// Run on page load
document.addEventListener('DOMContentLoaded', runTests);
```

## 📊 Analytics Setup

### Google Analytics 4
```html
<!-- Add to index.html head -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Tracking Events
```javascript
// Chapter reading
gtag('event', 'chapter_read', {
  story_id: currentStory,
  chapter_number: currentChapter
});

// Avatar customization
gtag('event', 'avatar_customized', {
  feature_used: 'hair_color'
});

// Payment attempts
gtag('event', 'purchase_attempted', {
  value: 12.99,
  currency: 'USD',
  item_id: selectedPricing
});
```

## 🎯 Deployment Checklist

### Pre-Launch
- [ ] All environment variables set
- [ ] Stripe products created with correct price IDs
- [ ] Webhook endpoint configured and tested
- [ ] All story content added
- [ ] Avatar system tested on different devices
- [ ] Payment flow tested with Stripe test cards
- [ ] Mobile responsiveness verified
- [ ] SEO meta tags added
- [ ] Analytics configured
- [ ] Error handling tested

### Post-Launch
- [ ] Monitor Netlify function logs
- [ ] Check Stripe webhook delivery
- [ ] Verify analytics tracking
- [ ] Test payment flows with real cards
- [ ] Monitor site performance
- [ ] Check mobile user experience
- [ ] Gather user feedback

## 🆘 Troubleshooting

### Common Issues

#### Payment Not Working
1. Check Stripe publishable key in script.js
2. Verify webhook endpoint is receiving events
3. Check console for JavaScript errors
4. Verify price IDs match Stripe dashboard

#### Videos Not Loading
1. Check video file paths
2. Verify video format compatibility
3. Test canvas animation fallback
4. Check network requests in browser dev tools

#### Avatar Not Saving
1. Check browser console for errors
2. Verify canvas is properly initialized
3. Test on different browsers
4. Check if localStorage is available

#### Voice Narration Issues
1. Test browser speech synthesis support
2. Check voice selection logic
3. Verify audio permissions
4. Test on different devices

### Debug Mode
Add to script.js:
```javascript
const DEBUG = true; // Set to false in production

function debugLog(message, data) {
  if (DEBUG) {
    console.log(`[DEBUG] ${message}`, data);
  }
}
```

## 📞 Support

For technical support or questions:
- 📧 Email: support@nekocharvanni.com
- 📚 Documentation: Check this README
- 🐛 Bug Reports: Create detailed issue descriptions
- 💡 Feature Requests: Describe use case and benefits

## 📄 License

MIT License - Feel free to modify and distribute as needed.

---

**Ready to launch your romance storytelling platform? Follow this guide step by step, and you'll have a professional, feature-rich site that your readers will love! 💖**