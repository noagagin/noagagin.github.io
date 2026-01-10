// NOAGAGIN: tasteful chaos, locally served.
// Quiet mode. No fireworks. Just… competence.
console.log("NOAGAGIN");

const toastEl = document.getElementById("toast");
const brandTitle = document.getElementById("brandTitle");
const watchfacesCard = document.getElementById("watchfacesCard");
const btnPing = document.getElementById("btnPing");
const btnSurprise = document.getElementById("btnSurprise");

function toast(msg){
  // subtle toast: short + rare
  if (!toastEl) return;
  toastEl.textContent = msg;
  toastEl.classList.add("show");
  clearTimeout(toastEl._t);
  toastEl._t = setTimeout(()=>toastEl.classList.remove("show"), 1600);
}

/**
 * Easter Egg #1 (Hidden, subtle):
 * Click the title 7 times within 3 seconds.
 * (No one does this accidentally.)
 */
let tClicks = 0;
let tTimer = null;

brandTitle?.addEventListener("click", () => {
  tClicks++;
  clearTimeout(tTimer);
  tTimer = setTimeout(() => { tClicks = 0; }, 3000);

  if (tClicks === 7) {
    toast("Hello, curious human.");
    tClicks = 0;
  }
});

/**
 * Easter Egg #2 (Very hidden):
 * Type "noagagin" anywhere → toggles a very subtle theme shift.
 * No grayscale. No drama. Just tiny refinement.
 */
let buffer = "";
window.addEventListener("keydown", (e) => {
  // Ignore if user is typing in an input/textarea (future-proof)
  const tag = (document.activeElement?.tagName || "").toLowerCase();
  if (tag === "input" || tag === "textarea") return;

  if (e.key.length === 1) {
    buffer = (buffer + e.key.toLowerCase()).slice(-16);

    if (buffer.endsWith("noagagin")) {
      document.body.classList.toggle("elegant-mode");
      toast(document.body.classList.contains("elegant-mode")
        ? "Elegant mode."
        : "Standard mode.");
      buffer = "";
    }
  }
});

/**
 * Easter Egg #3 (Whisper-level):
 * Long-press on Watchfaces card (mouse down for 1.2s)
 */
let pressTimer = null;
watchfacesCard?.addEventListener("mousedown", () => {
  pressTimer = setTimeout(() => {
    toast("⌚ Still ticking.");
  }, 1200);
});
watchfacesCard?.addEventListener("mouseup", () => clearTimeout(pressTimer));
watchfacesCard?.addEventListener("mouseleave", () => clearTimeout(pressTimer));

/**
 * Buttons — keep them calm and useful
 */
btnPing?.addEventListener("click", () => toast("All good."));
btnSurprise?.addEventListener("click", () => toast("Nice.")); 
