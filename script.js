// NOAGAGIN: tasteful chaos, locally served.
console.log("👋 Hi.");

const toastEl = document.getElementById("toast");
const brandTitle = document.getElementById("brandTitle");
const watchfacesCard = document.getElementById("watchfacesCard");
const btnPing = document.getElementById("btnPing");
const btnSurprise = document.getElementById("btnSurprise");

function toast(msg){
  toastEl.textContent = msg;
  toastEl.classList.add("show");
  clearTimeout(toastEl._t);
  toastEl._t = setTimeout(()=>toastEl.classList.remove("show"), 2400);
}

// Easter Egg #1: click the title 5 times
let titleClicks = 0;
brandTitle.addEventListener("click", () => {
  titleClicks++;
  if (titleClicks === 5){
    toast("c u 😈  NOAGAGIN = gaming time.");
    titleClicks = 0;
  } else {
    toast("ganes games games. 😎");
  }
});

// Easter Egg #2: type 'pebble' anywhere
let buffer = "";
window.addEventListener("keydown", (e) => {
  if (e.key.length === 1){
    buffer = (buffer + e.key.toLowerCase()).slice(-10);
    if (buffer.endsWith("pebble")){
      document.body.classList.toggle("pebble-mode");
      toast(document.body.classList.contains("pebble-mode")
        ? "🕶️ Pebble Mode ON. Long live the round screen."
        : "🎨 Pebble Mode OFF. Back to color like a responsible adult.");
      buffer = "";
    }
  }
});

// Little buttons
btnPing?.addEventListener("click", () => toast("good time for a book."));
btnSurprise?.addEventListener("click", () => toast("Lions and Tigers and Bears"));


// Bonus: click watchfaces card 3 times
let wfClicks = 0;
watchfacesCard?.addEventListener("click", () => {
  wfClicks++;
  if (wfClicks === 3){
    toast("Pinky & The Brain were here. 🧠🐭");
    wfClicks = 0;
  }
});


