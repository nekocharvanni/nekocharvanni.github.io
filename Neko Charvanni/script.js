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
    case 'chocolate-matcha':
      drawTeaGardenScene(ctx, canvas, frame);
      break;
    case '
