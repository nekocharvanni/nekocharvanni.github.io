const modal = document.getElementById("signupmem");
const btn = document.querySelector(".storynav");
const span = document.querySelector(".close-btn");

btn.onclick = function () {
  modal.style.display = "block";
}

span.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// ======= WAIT FOR DOM =======
document.addEventListener("DOMContentLoaded", () => {
  // 1. Text‐to‐Speech (TTS) for the story
  const readStoryBtn = document.getElementById("readStoryBtn");
  const storyContent = document.getElementById("story-content");

  readStoryBtn.addEventListener("click", () => {
    const storyText = storyContent.innerText.trim();
    if (!storyText) return;

    // Check if browser supports Web Speech API
    if (!("speechSynthesis" in window)) {
      alert("Sorry, your browser does not support text‐to‐speech.");
      return;
    }
    // Create a new utterance
    const utterance = new SpeechSynthesisUtterance(storyText);
    utterance.rate = 1; // Normal speed
    utterance.pitch = 1; // Normal pitch
    speechSynthesis.cancel(); // In case something’s already playing
    speechSynthesis.speak(utterance);
  });

  // 2. Avatar Customizer
  const avatarPreview = document.getElementById("avatarPreview");
  const baseAvatarImg = document.getElementById("baseAvatar");
  const hairSelect = document.getElementById("hairSelect");
  const eyesSelect = document.getElementById("eyesSelect");
  const clothesSelect = document.getElementById("clothesSelect");
  const skinColorInput = document.getElementById("skinColor");
  const resetAvatarBtn = document.getElementById("resetAvatarBtn");

  // Keep references to overlays
  let hairLayer = null;
  let eyesLayer = null;
  let clothesLayer = null;
  let skinLayer = null;

  // Helper: create an <img> overlay with given src
  function createOverlay(src, id) {
    const img = document.createElement("img");
    img.src = src;
    img.id = id;
    img.classList.add("avatar-layer");
    img.style.position = "absolute";
    img.style.top = "0";
    img.style.left = "0";
    img.style.width = "100%";
    img.style.height = "auto";
    return img;
  }

  // Clear existing layer if present
  function removeLayer(layer) {
    if (layer && avatarPreview.contains(layer)) {
      avatarPreview.removeChild(layer);
    }
  }

  // WHEN user changes hair style
  hairSelect.addEventListener("change", () => {
    // Remove old hair layer
    removeLayer(hairLayer);

    const value = hairSelect.value;
    if (value === "none") {
      hairLayer = null;
      return;
    }
    // Map selection to an image path
    let imgPath = "";
    switch (value) {
      case "hair1":
        imgPath = "assets/avatar/hair_black_long.png";
        break;
      case "hair2":
        imgPath = "assets/avatar/hair_blonde_short.png";
        break;
      case "hair3":
        imgPath = "assets/avatar/hair_red_curly.png";
        break;
      default:
        imgPath = "";
    }
    if (imgPath) {
      hairLayer = createOverlay(imgPath, "hairLayer");
      avatarPreview.appendChild(hairLayer);
    }
  });

  // WHEN user changes eyes
  eyesSelect.addEventListener("change", () => {
    removeLayer(eyesLayer);

    const value = eyesSelect.value;
    if (value === "none") {
      eyesLayer = null;
      return;
    }
    let imgPath = "";
    switch (value) {
      case "eyes1":
        imgPath = "assets/avatar/eyes_brown.png";
        break;
      case "eyes2":
        imgPath = "assets/avatar/eyes_green.png";
        break;
      case "eyes3":
        imgPath = "assets/avatar/eyes_blue.png";
        break;
      default:
        imgPath = "";
    }
    if (imgPath) {
      eyesLayer = createOverlay(imgPath, "eyesLayer");
      avatarPreview.appendChild(eyesLayer);
    }
  });

  // WHEN user changes clothes
  clothesSelect.addEventListener("change", () => {
    removeLayer(clothesLayer);

    const value = clothesSelect.value;
    if (value === "none") {
      clothesLayer = null;
      return;
    }
    let imgPath = "";
    switch (value) {
      case "clothes1":
        imgPath = "assets/avatar/clothes_kimono.png";
        break;
      case "clothes2":
        imgPath = "assets/avatar/clothes_steampunk.png";
        break;
      case "clothes3":
        imgPath = "assets/avatar/clothes_modern.png";
        break;
      default:
        imgPath = "";
    }
    if (imgPath) {
      clothesLayer = createOverlay(imgPath, "clothesLayer");
      avatarPreview.appendChild(clothesLayer);
    }
  });

  // WHEN user changes skin color
  skinColorInput.addEventListener("input", () => {
    // For simplicity, tint the base avatar's CSS filter
    baseAvatarImg.style.filter = `opacity(0.8) drop-shadow(0 0 0 ${skinColorInput.value})`;
  });

  // Reset avatar to defaults
  resetAvatarBtn.addEventListener("click", () => {
    hairSelect.value = "none";
    eyesSelect.value = "none";
    clothesSelect.value = "none";
    skinColorInput.value = "#f2d3c4"; // default tone
    baseAvatarImg.style.filter = "";
    removeLayer(hairLayer);
    removeLayer(eyesLayer);
    removeLayer(clothesLayer);
    hairLayer = eyesLayer = clothesLayer = null;
  });

  // 3. Signup Modal Logic
  const openSignupBtn = document.getElementById("openSignupBtn");
  const signupModal = document.getElementById("signupModal");
  const closeSignupBtn = document.getElementById("closeSignupBtn");
  const signupForm = document.getElementById("signupForm");

  openSignupBtn.addEventListener("click", () => {
    signupModal.style.display = "flex";
  });

  closeSignupBtn.addEventListener("click", () => {
    signupModal.style.display = "none";
  });

  // Close modal if user clicks outside content
  window.addEventListener("click", (e) => {
    if (e.target === signupModal) {
      signupModal.style.display = "none";
    }
  });

  // Handle form submission (you’ll need to wire this up to your email backend or service)
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const emailInput = signupForm.querySelector('input[type="email"]').value;
    if (emailInput) {
      // For demo: just show an alert
      alert(`Thanks for subscribing, ${emailInput}!`);
      signupModal.style.display = "none";
      signupForm.reset();
    }
  });

  // 4. Basic “Bug Tests” (console logs)
  function runBasicTests() {
    console.group("Basic Site Tests");
    console.assert(
      !!document.getElementById("readStoryBtn"),
      "❌ [Test Failed] readStoryBtn should exist"
    );
    console.assert(
      !!document.getElementById("avatarPreview"),
      "❌ [Test Failed] avatarPreview should exist"
    );
    console.assert(
      !!document.getElementById("hairSelect"),
      "❌ [Test Failed] hairSelect should exist"
    );
    console.assert(
      !!document.querySelector("header"),
      "❌ [Test Failed] header element should exist"
    );
    console.log("✅ If no ❌ errors above, basic DOM elements are present.");
    console.groupEnd();
  }

  // Run tests once DOM is ready
  runBasicTests();
});
