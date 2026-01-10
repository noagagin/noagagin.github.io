// NOAGAGIN — quiet, elegant, intentional.
console.log("NOAGAGIN");

const toastEl = document.getElementById("toast");
const brandTitle = document.getElementById("brandTitle");
const watchfacesCard = document.getElementById("watchfacesCard");

function toast(msg){
  if (!toastEl) return;
  toastEl.textContent = msg;
  toastEl.classList.add("show");
  clearTimeout(toastEl._t);
  toastEl._t = setTimeout(() => {
    toastEl.classList.remove("show");
  }, 1600);
}

/**
 * Easter Egg #1 (very hidden):
 * Click the site title 7 times within ~3 seconds.
 */
let titleClicks = 0;
let titleTimer = null;

if (brandTitle) {
  brandTitle.addEventListener("click", () => {
    titleClicks++;
    clearTimeout(titleTimer);
    titleTimer = setTimeout(() => {
      titleClicks = 0;
    }, 3000);

    if (titleClicks === 7) {
      toast("Hello, curious human.");
      titleClicks = 0;
    }
  });
}

/**
 * Easter Egg #2 (extremely subtle):
 * Type "noagagin" anywhere.
 */
let buffer = "";

window.addEventListener("keydown", (e) => {
  const tag = document.activeElement?.tagName?.toLowerCase();
  if (tag === "input" || tag === "textarea") return;

  if (e.key.length === 1) {
    buffer = (buffer + e.key.toLowerCase()).slice(-16);

    if (buffer.endsWith("noagagin")) {
      document.body.classList.toggle("elegant-mode");
      toast(
        document.body.classList.contains("elegant-mode")
          ? "Elegant mode."
          : "Standard mode."
      );
      buffer = "";
    }
  }
});

/**
 * Easter Egg #3 (whisper-level):
 * Long press on Watchfaces card.
 */
let pressTimer = null;

if (watchfacesCard) {
  watchfacesCard.addEventListener("mousedown", () => {
    pressTimer = setTimeout(() => {
      toast("Still ticking.");
    }, 1200);
  });

  watchfacesCard.addEventListener("mouseup", () => {
    clearTimeout(pressTimer);
  });

  watchfacesCard.addEventListener("mouseleave", () => {
    clearTimeout(pressTimer);
  });
}
