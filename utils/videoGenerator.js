// utils/videoGenerator.js
// Enhanced Chapter Video Generator for Romance Stories

class ChapterVideoGenerator {
  constructor() {
    this.canvas = null;
    this.ctx = null;
    this.mediaRecorder = null;
    this.chunks = [];
    this.isRecording = false;
  }

  // Initialize canvas for video generation
  initCanvas(width = 600, height = 400) {
    this.canvas = document.createElement('canvas');
    this.canvas.width = width;
    this.canvas.height = height;
    this.ctx = this.canvas.getContext('2d');
    return this.canvas;
  }

  // Create animated background for different story themes
  createStoryBackground(storyTheme, frame) {
    const { ctx, canvas } = this;
    
    switch (storyTheme) {
      case 'chocolate-matcha':
        this.drawTeaGardenScene(frame);
        break;
      case 'tiger-eyes':
        this.drawMysticalLibraryScene(frame);
        break;
      case 'immortal-angel':
        this.drawGothicMansionScene(frame);
        break;
      default:
        this.drawRomanticScene(frame);
    }
  }

  drawTeaGardenScene(frame) {
    const { ctx, canvas } = this;
    
    // Gradient sky with time variation
    const timeProgress = (frame % 1800) / 1800; // 60 second cycle
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, '#87CEEB');
    gradient.addColorStop(1, '#F0E68C');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Cherry blossom trees with swaying motion
    this.drawSwayingTree(canvas.width * 0.15, canvas.height - 150, 25, 150, frame);
    this.drawSwayingTree(canvas.width * 0.85, canvas.height - 125, 20, 125, frame);
    
    // Animated falling petals
    this.drawFallingPetals(frame);
    
    // Tea fountain in center
    this.drawTeaFountain(canvas.width / 2, canvas.height - 100, frame);
    
    // Stepping stones path
    this.drawSteppingStones();
    
    // Ambient mist particles
    this.drawAmbientParticles(frame, 'mist');
  }

  drawMysticalLibraryScene(frame) {
    const { ctx, canvas } = this;
    
    // Dark mystical background with pulsing energy
    const intensity = Math.sin(frame * 0.02) * 0.3 + 0.7;
    const gradient = ctx.createRadialGradient(
      canvas.width / 2, canvas.height / 2, 0,
      canvas.width / 2, canvas.height / 2, canvas.width * intensity
    );
    gradient.addColorStop(0, `rgba(75, 0, 130, ${intensity})`);
    gradient.addColorStop(1, '#000000');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Ancient bookshelves
    this.drawBookshelves(frame);
    
    // Floating magical orbs
    this.drawMagicalOrbs(frame);
    
    // Mystical sparkles
    this.drawMysticalSparkles(frame);
    
    // Floating ancient books
    this.drawFloatingBooks(frame);
  }

  drawGothicMansionScene(frame) {
    const { ctx, canvas } = this;
    
    // Dark Gothic background with storm effect
    const stormIntensity = Math.sin(frame * 0.01) * 0.5 + 0.5;
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, `rgba(26, 26, 46, ${stormIntensity})`);
    gradient.addColorStop(1, `rgba(22, 33, 62, ${stormIntensity})`);
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Lightning flashes occasionally
    if (frame % 300 < 5) {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
    
    // Moon with passing clouds
    this.drawMoonAndClouds(frame);
    
    // Gothic mansion silhouette
    this.drawGothicArchitecture(frame);
    
    // Floating ethereal spirits
    this.drawEtherealSpirits(frame);
    
    // Graveyard elements in distance
    this.drawGraveyardElements(frame);
  }

  drawRomanticScene(frame) {
    const { ctx, canvas } = this;
    
    // Romantic sunset with color transitions
    const timeProgress = (frame % 900) / 900; // 30 second cycle
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, '#FF6B6B');
    gradient.addColorStop(0.5, '#FFE66D');
    gradient.addColorStop(1, '#FF8E53');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Floating hearts with various sizes
    this.drawFloatingHearts(frame);
    
    // Rose petals falling gently
    this.drawFallingRosePetals(frame);
    
    // Romantic silhouettes in distance
    this.drawRomanticSilhouettes(frame);
  }

  // Helper methods for scene elements
  drawSwayingTree(x, y, width, height, frame) {
    const { ctx } = this;
    const sway = Math.sin(frame * 0.02) * 3;
    
    // Tree trunk
    ctx.fillStyle = '#8B4513';
    ctx.save();
    ctx.translate(x + width/2, y + height);
    ctx.rotate(sway * 0.01);
    ctx.fillRect(-width/2, -height, width, height);
    ctx.restore();
    
    // Tree crown
    ctx.fillStyle = '#228B22';
    ctx.save();
    ctx.translate(x + width/2, y);
    ctx.rotate(sway * 0.02);
    ctx.beginPath();
    ctx.arc(0, 0, width * 1.2, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  drawFallingPetals(frame) {
    const { ctx, canvas } = this;
    
    ctx.fillStyle = '#FFB6C1';
    for (let i = 0; i < 20; i++) {
      const speed = 1 + (i % 3);
      const x = (frame * speed + i * 30) % (canvas.width + 50) - 25;
      const y = (frame * (speed * 0.8) + i * 40) % (canvas.height + 50) - 25;
      const rotation = (frame * 0.02 + i) % (Math.PI * 2);
      const size = 3 + (i % 3);
      
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      this.drawPetalShape(size);
      ctx.restore();
    }
  }

  drawPetalShape(size) {
    const { ctx } = this;
    ctx.beginPath();
    ctx.ellipse(0, 0, size, size * 1.5, 0, 0, Math.PI * 2);
    ctx.fill();
  }

  drawTeaFountain(x, y, frame) {
    const { ctx } = this;
    
    // Fountain base
    ctx.fillStyle = '#696969';
    ctx.fillRect(x - 30, y, 60, 20);
    
    // Dragon sculptures
    ctx.fillStyle = '#228B22';
    this.drawDragonSculpture(x - 15, y - 25, frame);
    this.drawDragonSculpture(x + 15, y - 25, frame);
    
    // Animated water
    const waterHeight = Math.sin(frame * 0.1) * 8 + 15;
    const waterGradient = ctx.createLinearGradient(x - 25, y - waterHeight, x + 25, y);
    waterGradient.addColorStop(0, 'rgba(135, 206, 235, 0.8)');
    waterGradient.addColorStop(1, 'rgba(135, 206, 235, 0.4)');
    ctx.fillStyle = waterGradient;
    ctx.fillRect(x - 25, y - waterHeight, 50, waterHeight);
    
    // Water droplets
    this.drawWaterDroplets(x, y - waterHeight, frame);
  }

  drawDragonSculpture(x, y, frame) {
    const { ctx } = this;
    const breathe = Math.sin(frame * 0.05) * 1;
    
    ctx.save();
    ctx.translate(x, y + breathe);
    ctx.fillStyle = '#2F4F4F';
    ctx.fillRect(-4, -10, 8, 10);
    
    // Glowing eyes
    ctx.fillStyle = `rgba(255, 215, 0, ${0.5 + Math.sin(frame * 0.1) * 0.3})`;
    ctx.fillRect(-3, -8, 1, 1);
    ctx.fillRect(2, -8, 1, 1);
    ctx.restore();
  }

  drawWaterDroplets(x, y, frame) {
    const { ctx } = this;
    
    for (let i = 0; i < 8; i++) {
      const dropX = x + Math.sin(frame * 0.05 + i) * 15;
      const dropY = y + (frame * 1.5 + i * 10) % 50;
      const size = 1 + Math.sin(frame * 0.1 + i) * 0.5;
      
      ctx.fillStyle = 'rgba(135, 206, 235, 0.6)';
      ctx.beginPath();
      ctx.arc(dropX, dropY, size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  drawBookshelves(frame) {
    const { ctx, canvas } = this;
    
    // Bookshelf structure
    const ageEffect = Math.sin(frame * 0.01) * 0.1 + 0.9;
    ctx.fillStyle = `rgba(139, 69, 19, ${ageEffect})`;
    
    // Multiple bookshelves
    const shelves = [
      {x: 25, y: canvas.height - 200, w: 50, h: 200},
      {x: canvas.width - 75, y: canvas.height - 175, w: 50, h: 175}
    ];
    
    shelves.forEach(shelf => {
      ctx.fillRect(shelf.x, shelf.y, shelf.w, shelf.h);
      this.drawBooks(shelf.x, shelf.y, shelf.w, shelf.h, frame);
    });
  }

  drawBooks(shelfX, shelfY, shelfW, shelfH, frame) {
    const { ctx } = this;
    const bookColors = ['#8B0000', '#4169E1', '#228B22', '#FFD700', '#8B008B'];
    
    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 6; col++) {
        const book = {
          x: shelfX + 5 + col * (shelfW - 10) / 6,
          y: shelfY + 10 + row * (shelfH - 20) / 4,
          w: (shelfW - 20) / 6,
          h: (shelfH - 40) / 4 - 3
        };
        
        const colorIndex = (row * 6 + col) % bookColors.length;
        const glow = Math.sin(frame * 0.02 + col + row) * 0.2 + 0.8;
        ctx.fillStyle = this.adjustBrightness(bookColors[colorIndex], glow);
        ctx.fillRect(book.x, book.y, book.w, book.h);
        
        // Book spine line
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(book.x + 1, book.y + book.h / 2);
        ctx.lineTo(book.x + book.w - 1, book.y + book.h / 2);
        ctx.stroke();
      }
    }
  }

  drawMagicalOrbs(frame) {
    const { ctx, canvas } = this;
    
    const orbs = [
      {x: canvas.width * 0.2, y: canvas.height * 0.3, color: '#FF6B6B', phase: 0},
      {x: canvas.width * 0.8, y: canvas.height * 0.4, color: '#4ECDC4', phase: Math.PI / 3},
      {x: canvas.width * 0.5, y: canvas.height * 0.2, color: '#FFD93D', phase: Math.PI * 2 / 3}
    ];
    
    orbs.forEach((orb, index) => {
      const float = Math.sin(frame * 0.02 + orb.phase) * 10;
      const pulse = Math.sin(frame * 0.05 + orb.phase) * 5 + 8;
      const x = orb.x + Math.sin(frame * 0.01 + index) * 25;
      const y = orb.y + float;
      
      // Orb glow
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, pulse * 1.5);
      gradient.addColorStop(0, orb.color);
      gradient.addColorStop(0.7, orb.color + '80');
      gradient.addColorStop(1, 'transparent');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(x, y, pulse * 1.5, 0, Math.PI * 2);
      ctx.fill();
      
      // Core orb
      ctx.fillStyle = orb.color;
      ctx.beginPath();
      ctx.arc(x, y, pulse * 0.3, 0, Math.PI * 2);
      ctx.fill();
    });
  }

  drawFloatingHearts(frame) {
    const { ctx, canvas } = this;
    
    for (let i = 0; i < 10; i++) {
      const speed = 0.5 + (i % 3) * 0.2;
      const x = (frame * speed + i * 60) % (canvas.width + 50) - 25;
      const y = canvas.height * 0.3 + Math.sin(frame * 0.01 + i) * 50;
      const size = 8 + (i % 3) * 3;
      const opacity = 0.3 + Math.sin(frame * 0.02 + i) * 0.15;
      
      ctx.fillStyle = `rgba(255, 105, 180, ${opacity})`;
      this.drawHeart(x, y, size);
    }
  }

  drawHeart(x, y, size) {
    const { ctx } = this;
    
    ctx.save();
    ctx.translate(x, y);
    ctx.beginPath();
    ctx.moveTo(0, size / 4);
    ctx.bezierCurveTo(0, 0, -size / 2, 0, -size / 2, size / 4);
    ctx.bezierCurveTo(-size / 2, size / 2, 0, size, 0, size);
    ctx.bezierCurveTo(0, size, size / 2, size / 2, size / 2, size / 4);
    ctx.bezierCurveTo(size / 2, 0, 0, 0, 0, size / 4);
    ctx.fill();
    ctx.restore();
  }

  // Utility functions
  adjustBrightness(color, factor) {
    // Simple brightness adjustment for demo
    return color;
  }

  drawSteppingStones() {
    const { ctx, canvas } = this;
    
    ctx.fillStyle = '#2F4F4F';
    for (let i = 0; i < 6; i++) {
      const x = 100 + i * 80;
      const y = canvas.height - 50 + Math.sin(i * 0.5) * 10;
      
      // Stone shadow
      ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
      ctx.beginPath();
      ctx.ellipse(x + 2, y + 2, 22, 12, 0, 0, Math.PI * 2);
      ctx.fill();
      
      // Stone
      ctx.fillStyle = '#2F4F4F';
      ctx.beginPath();
      ctx.ellipse(x, y, 20, 10, 0, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  drawAmbientParticles(frame, type) {
    const { ctx, canvas } = this;
    
    const particleCount = type === 'mist' ? 12 : 20;
    
    for (let i = 0; i < particleCount; i++) {
      const x = (frame * 0.3 + i * 50) % (canvas.width + 50);
      const y = canvas.height * 0.8 + Math.sin(frame * 0.02 + i) * 30;
      const size = 2 + Math.sin(frame * 0.03 + i) * 1;
      const opacity = 0.1 + Math.sin(frame * 0.01 + i) * 0.05;
      
      if (type === 'mist') {
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
      } else {
        ctx.fillStyle = `rgba(135, 206, 235, ${opacity})`;
      }
      
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // Placeholder methods for other scene elements
  drawMysticalSparkles(frame) {
    const { ctx, canvas } = this;
    
    ctx.fillStyle = '#FFD700';
    for (let i = 0; i < 15; i++) {
      const x = Math.sin(frame * 0.02 + i) * 100 + canvas.width / 2;
      const y = Math.cos(frame * 0.015 + i) * 80 + canvas.height / 2;
      const size = Math.sin(frame * 0.05 + i) * 2 + 1;
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  drawFloatingBooks(frame) {
    const { ctx, canvas } = this;
    
    for (let i = 0; i < 5; i++) {
      const x = Math.sin(frame * 0.01 + i) * 50 + canvas.width / 2;
      const y = Math.cos(frame * 0.008 + i) * 40 + canvas.height * 0.3;
      const rotation = Math.sin(frame * 0.02 + i) * 0.3;
      
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.fillStyle = '#8B4513';
      ctx.fillRect(-6, -4, 12, 8);
      ctx.strokeStyle = '#FFD700';
      ctx.lineWidth = 0.5;
      ctx.strokeRect(-6, -4, 12, 8);
      ctx.restore();
    }
  }

  drawMoonAndClouds(frame) {
    const { ctx, canvas } = this;
    
    // Moon
    ctx.fillStyle = '#F5F5DC';
    ctx.beginPath();
    ctx.arc(canvas.width - 60, 50, 25, 0, Math.PI * 2);
    ctx.fill();
    
    // Passing clouds
    for (let i = 0; i < 3; i++) {
      const x = (frame * 0.5 + i * 150) % (canvas.width + 100) - 50;
      const y = 40 + i * 15;
      ctx.fillStyle = 'rgba(200, 200, 200, 0.3)';
      ctx.beginPath();
      ctx.ellipse(x, y, 30, 15, 0, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  drawGothicArchitecture(frame) {
    const { ctx, canvas } = this;
    
    // Gothic mansion silhouette
    ctx.fillStyle = '#000000';
    ctx.fillRect(canvas.width / 4, canvas.height - 150, canvas.width / 2, 150);
    
    // Gothic windows with flickering light
    for (let i = 0; i < 4; i++) {
      const x = canvas.width / 4 + 25 + i * 30;
      const y = canvas.height - 125;
      const flicker = Math.sin(frame * 0.1 + i) * 0.3 + 0.7;
      
      ctx.fillStyle = `rgba(255, 215, 0, ${flicker})`;
      ctx.fillRect(x, y, 10, 20);
      
      // Gothic arch top
      ctx.beginPath();
      ctx.arc(x + 5, y, 5, Math.PI, 0);
      ctx.fill();
    }
    
    // Towers
    ctx.fillStyle = '#000000';
    ctx.fillRect(canvas.width / 4 - 15, canvas.height - 200, 20, 200);
    ctx.fillRect(canvas.width * 3/4, canvas.height - 190, 20, 190);
  }

  drawEtherealSpirits(frame) {
    const { ctx, canvas } = this;
    
    ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
    for (let i = 0; i < 8; i++) {
      const x = Math.sin(frame * 0.008 + i * 0.5) * 100 + canvas.width / 2;
      const y = Math.cos(frame * 0.01 + i * 0.3) * 60 + canvas.height / 3;
      const size = Math.sin(frame * 0.02 + i) * 3 + 5;
      
      ctx.globalAlpha = 0.4;
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;
    }
  }

  drawGraveyardElements(frame) {
    const { ctx, canvas } = this;
    
    // Simple tombstones in distance
    ctx.fillStyle = '#696969';
    for (let i = 0; i < 4; i++) {
      const x = 50 + i * 40;
      const y = canvas.height - 60;
      ctx.fillRect(x, y, 8, 15);
      
      // Cross on top
      ctx.fillRect(x + 2, y - 3, 4, 3);
      ctx.fillRect(x + 3, y - 5, 2, 7);
    }
  }

  drawFallingRosePetals(frame) {
    const { ctx, canvas } = this;
    
    ctx.fillStyle = '#FF69B4';
    for (let i = 0; i < 12; i++) {
      const speed = 0.8 + (i % 2) * 0.3;
      const x = (frame * speed + i * 50) % (canvas.width + 30) - 15;
      const y = (frame * (speed * 0.7) + i * 35) % (canvas.height + 30) - 15;
      const rotation = (frame * 0.03 + i) % (Math.PI * 2);
      const size = 2 + (i % 2);
      
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      this.drawRosePetal(size);
      ctx.restore();
    }
  }

  drawRosePetal(size) {
    const { ctx } = this;
    ctx.beginPath();
    ctx.ellipse(0, 0, size, size * 1.8, 0, 0, Math.PI * 2);
    ctx.fill();
  }

  drawRomanticSilhouettes(frame) {
    const { ctx, canvas } = this;
    
    // Simple romantic silhouettes in distance
    ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
    
    // Couple silhouette
    const coupleX = canvas.width * 0.7;
    const coupleY = canvas.height - 80;
    
    // Male figure
    ctx.fillRect(coupleX, coupleY, 6, 20);
    ctx.beginPath();
    ctx.arc(coupleX + 3, coupleY - 5, 4, 0, Math.PI * 2);
    ctx.fill();
    
    // Female figure
    ctx.fillRect(coupleX + 10, coupleY, 8, 20);
    ctx.beginPath();
    ctx.arc(coupleX + 14, coupleY - 5, 4, 0, Math.PI * 2);
    ctx.fill();
  }

  // Generate video from story chapter
  async generateChapterVideo(storyId, chapterData, options = {}) {
    const {
      width = 600,
      height = 400,
      fps = 30,
      duration = 60 // 1 minute
    } = options;
    
    this.initCanvas(width, height);
    const totalFrames = fps * duration;
    
    // For canvas-based animation, we'll create a simple loop
    let frame = 0;
    const animate = () => {
      if (frame >= totalFrames) return;
      
      // Clear canvas
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      
      // Draw background scene
      this.createStoryBackground(storyId, frame);
      
      // Add title overlay (first 5 seconds)
      if (frame < fps * 5) {
        this.addTextOverlay(chapterData.title, frame, {
          fontSize: 32,
          color: '#FFD700'
        });
      }
      
      // Add story text (after 5 seconds)
      if (frame > fps * 5) {
        const textFrame = frame - fps * 5;
        this.addTextOverlay(chapterData.text, textFrame, {
          fontSize: 16,
          maxWidth: this.canvas.width * 0.8
        });
      }
      
      frame++;
      requestAnimationFrame(animate);
    };
    
    animate();
    return this.canvas;
  }

  // Add text overlay with animations
  addTextOverlay(text, frame, options = {}) {
    const { ctx, canvas } = this;
    
    const {
      fontSize = 24,
      fontFamily = 'Cinzel Decorative, serif',
      color = 'white',
      shadowColor = 'rgba(0,0,0,0.8)',
      maxWidth = canvas.width * 0.9,
      animationType = 'typewriter'
    } = options;
    
    ctx.font = `${fontSize}px ${fontFamily}`;
    ctx.fillStyle = color;
    ctx.shadowColor = shadowColor;
    ctx.shadowBlur = 5;
    ctx.textAlign = 'center';
    
    // Word wrap
    const words = text.split(' ');
    const lines = [];
    let currentLine = words[0] || '';
    
    for (let i = 1; i < words.length; i++) {
      const word = words[i];
      const width = ctx.measureText(currentLine + ' ' + word).width;
      if (width < maxWidth) {
        currentLine += ' ' + word;
      } else {
        lines.push(currentLine);
        currentLine = word;
      }
    }
    if (currentLine) lines.push(currentLine);
    
    // Render lines with animation
    const lineHeight = fontSize * 1.2;
    const startY = canvas.height / 2 - (lines.length * lineHeight) / 2;
    
    lines.forEach((line, index) => {
      const y = startY + index * lineHeight;
      
      if (animationType === 'typewriter') {
        const charsToShow = Math.floor((frame - index * 30) / 2);
        const visibleLine = line.substring(0, Math.max(0, charsToShow));
        if (visibleLine) {
          ctx.fillText(visibleLine, canvas.width / 2, y);
        }
      } else {
        ctx.fillText(line, canvas.width / 2, y);
      }
    });
    
    ctx.shadowBlur = 0;
  }

  // Generate thumbnail for chapter
  generateThumbnail(storyId, chapterData) {
    this.initCanvas(200, 150);
    
    // Draw background at frame 50 for consistency
    this.createStoryBackground(storyId, 50);
    
    // Add title
    this.addTextOverlay(chapterData.title, 100, {
      fontSize: 14,
      color: '#FFD700'
    });
    
    return this.canvas.toDataURL();
  }
}

// Export for use in main application
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ChapterVideoGenerator;
} else {
  window.ChapterVideoGenerator = ChapterVideoGenerator;
}