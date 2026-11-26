/* ==================================================================
   EDIT THIS SECTION — everything personal lives here
   ================================================================== */
const SETTINGS = {
  herName: "Stephany",
  myName: "Youness",
  startDate: "2026-06-19",         // day you started dating (YYYY-MM-DD); shown as "Since 06.19.26". Use "" to hide
  pageTitle: "Happy 3 Months, Stephany",
  introTitle: "Happy 3 Months",
  introSubtitle: "A little something I made for you...",
  openText: "Open Me",
  songPath: "music/our-song.mp3",
  playLabel: "♫ Play Our Song",
  pauseLabel: "❚❚ Pause Our Song",
  scrapbookTitle: "Our First 3 Months",
  endLine1: "3 months down, many more to go.",
  endLine2: "I love you.",
  introPhotos: ["images/photo6.jpg", "images/photo7.jpg", "images/photo8.jpg"], // up to 3
  finalPhoto: "images/photo1.jpg"
};

/* SCRAPBOOK — one continuous collection, shown in this order.
   Rearrange = move a line. Remove = delete a line. Add = copy a line and change the file name.
   featured:true = bigger photo. No captions are shown. */
const photos = [
  { image: "images/photo5.jpg", featured: true },
  { image: "images/photo2.jpg", featured: false },
  { image: "images/photo4.jpg", featured: false },
  { image: "images/photo3.jpg", featured: true },
  { image: "images/photo6.jpg", featured: false },
  { image: "images/photo8.jpg", featured: false },
  { image: "images/photo7.jpg", featured: false }
];

/* THE LETTER — each quoted line is one paragraph. Edit freely. */
const letter = [
"First of all, thank you. Thank you for giving me the chance to date you these past three months. I hope you've enjoyed it as much as I have, because I've genuinely loved it.",
"I'll be honest, I know I'm not always the easiest person to deal with. I know I've ragebaited you way more times than I should have, and a couple times I took it past your limit. You've put up with my stupid jokes, my personality, and me annoying you on purpose, and I really do appreciate it.",
"But seriously, I really appreciate the patience you've had with me. I'm still learning how to actually be in a relationship. I'm learning what you need from me, how to communicate better, and how to handle disagreements better. Thank you for letting me figure this out with you.",
"I'm also learning when to stop joking around. It's basically my whole personality, so it's not easy, but I'm trying to get better at reading when you actually want to laugh and when you just need me to be serious.",
"Same with communicating. I'm getting better at saying what's actually on my mind, and at listening properly when you tell me something. I'm not perfect at any of that yet, but I'm trying, and I want you to know that.",
"I really don't take your patience for granted. I'm still learning how to be a better boyfriend, and I'm glad I get to learn it with you.",
"I was going through our pictures the other day and it hit me how much we've already done. Our dates, our random conversations about nothing, the dumb stuff that had us laughing way harder than it should have. A lot of those little moments didn't seem like a big deal when they happened, but I remember all of them. Some of the pictures aren't even good and I love them anyway.",
"I also notice the little things you do, even when I forget to say it. So thank you for those too. Honestly, a lot of them are the reason these three months have been so easy to enjoy.",
"Some of my favorite parts are just the normal little moments. Talking about random things, sending each other dumb stuff, and spending time together. Those are the parts I'd miss the most, and they're a big reason I'm so excited to keep doing this with you.",
"Neither of us is perfect, and I don't expect us to be. There will be times we mess up or get on each other's nerves, and that's normal. I just want us to keep learning each other, keep talking things through, and keep growing together.",
"There's so much we haven't done yet. More dates, trips, random memories, inside jokes, and way more pictures. More milestones too. I want this one to be the first of a lot of them.",
"Three months might not sound like a huge amount of time, but these three months have genuinely meant a lot to me. I'm grateful I got to spend them with you, and I hope I keep becoming a better boyfriend to you. You deserve that.",
"Happy 3 months, and here's to many more. I love you."
];
/* ==================== END OF EDIT SECTION ==================== */

const $ = id => document.getElementById(id);
const S = SETTINGS, reduce = matchMedia("(prefers-reduced-motion: reduce)").matches, T = reduce ? .2 : 1;
document.title = S.pageTitle;
$("title").textContent = S.introTitle; $("sub").textContent = S.introSubtitle; $("tap").textContent = S.openText;
if(S.startDate){ const [y,m,d] = S.startDate.split("-"); $("since").textContent = "Since " + m + "." + d + "." + y.slice(2); }
$("bookTitle").textContent = S.scrapbookTitle; $("end1").textContent = S.endLine1; $("end2").textContent = S.endLine2;
$("l-to").textContent = "To " + S.herName + ",";
$("l-body").innerHTML = letter.map(t => `<p>${t}</p>`).join("");
$("l-sign").innerHTML = "Love,<br>" + S.myName;
$("audio").src = S.songPath;

const rots = [-4,3,-2,4,-3,2,-5,3]; let n = 0;
function photo(src, feat, eager, tape){
  const i = n++, r = rots[i % rots.length];
  const f = document.createElement("figure"); f.className = "item enter" + (feat ? " feat" : "");
  f.style.setProperty("--r", r + "deg"); f.style.transform = `rotate(${r}deg)`; f.style.animationDelay = (i * .12) + "s";
  f.innerHTML = `<div class="pol t${tape ?? i % 5}"><img src="${src}" alt="Photo from our first three months" ${eager ? "" : 'loading="lazy"'} decoding="async"></div>`;
  f.onclick = e => { f.classList.toggle("up"); hearts(e.clientX, e.clientY, 3); };
  return f;
}
S.introPhotos.slice(0,3).forEach(s => $("trio").append(photo(s, false, true, 0)));
photos.forEach(p => $("scrap").append(photo(p.image, p.featured)));
$("endpic").append(photo(S.finalPhoto, false, false, 3));

function hearts(x, y, c = 6){
  for(let i = 0; i < c; i++){
    const h = document.createElement("span"); h.className = "heart"; h.textContent = Math.random() > .3 ? "♥" : "✦";
    h.style.left = (x + Math.random() * 40 - 20) + "px"; h.style.top = y + "px"; h.style.fontSize = (12 + Math.random() * 16) + "px";
    h.style.setProperty("--dx", (Math.random() * 120 - 60) + "px"); h.style.setProperty("--rot", (Math.random() * 80 - 40) + "deg");
    h.style.animationDelay = (i * .12) + "s"; document.body.append(h); setTimeout(() => h.remove(), 4200);
  }
}
/* ---- letter: the mini letter in the envelope becomes the readable sheet (FLIP) ---- */
const env = $("env"), sheet = $("sheet"), veil = $("veil"); let opened = false, sheetOpen = false;
const CLIP0 = "polygon(0 0,100% 0,100% 65.4%,69.6% 100%,30.4% 100%,0 65.4%)", CLIP1 = "polygon(0 0,100% 0,100% 100%,69.6% 100%,30.4% 100%,0 100%)";
function expand(){
  const m = $("mini").getBoundingClientRect();
  sheet.scrollTop = 0; sheet.style.transition = "none"; sheet.style.transform = "none"; sheet.style.opacity = 1; sheet.style.clipPath = "none";
  sheet.style.visibility = "hidden"; const F = sheet.getBoundingClientRect();
  sheet.style.transform = `translate(${m.left - F.left}px,${m.top - F.top}px) scale(${m.width / F.width},${m.height / F.height})`;
  sheet.style.clipPath = CLIP0; sheet.style.visibility = "visible"; $("mini").style.visibility = "hidden";
  veil.classList.add("on"); document.body.style.overflow = "hidden"; sheet.offsetWidth;
  sheet.style.transition = `transform ${1.2*T}s cubic-bezier(.3,.8,.2,1),clip-path ${1.2*T}s ease`;
  sheet.style.transform = "none"; sheet.style.clipPath = CLIP1; sheet.classList.add("full"); sheetOpen = true;
  setTimeout(() => { sheet.style.clipPath = "none"; hearts(innerWidth / 2, innerHeight * .8, 5); }, 1300 * T);
}
function reshow(){
  sheet.scrollTop = 0; sheet.style.transition = "none"; sheet.style.opacity = 0; sheet.style.transform = "translateY(40px) scale(.96)";
  sheet.style.clipPath = "none"; sheet.style.visibility = "visible"; veil.classList.add("on"); document.body.style.overflow = "hidden"; sheet.offsetWidth;
  sheet.style.transition = `opacity ${.6*T}s,transform ${.7*T}s cubic-bezier(.2,.8,.2,1)`; sheet.style.opacity = 1; sheet.style.transform = "none"; sheetOpen = true;
}
function closeSheet(){
  if(!sheetOpen) return; sheetOpen = false;
  sheet.style.transition = `opacity ${.5*T}s,transform ${.5*T}s`; sheet.style.opacity = 0; sheet.style.transform = "translateY(30px) scale(.96)";
  veil.classList.remove("on"); document.body.style.overflow = "";
  setTimeout(() => { if(!sheetOpen) sheet.style.visibility = "hidden"; }, 520 * T);
}
function openEnv(){
  if(opened) return; opened = true; env.removeAttribute("tabindex");
  const r = env.getBoundingClientRect(); $("tap").style.visibility = "hidden"; env.classList.add("open");
  setTimeout(() => hearts(r.left + r.width / 2, r.top + r.height / 3, 8), 700 * T);
  setTimeout(() => hearts(r.left + r.width / 2, r.top, 5), 1700 * T);
  setTimeout(expand, 2700 * T);
}
env.onclick = openEnv; env.onkeydown = e => { if(e.key === "Enter" || e.key === " ") { e.preventDefault(); openEnv(); } };
$("close").onclick = () => { closeSheet(); $("book").hidden = false; $("reopen").hidden = false; setTimeout(() => $("book").scrollIntoView({behavior: reduce ? "auto" : "smooth"}), 250); };
$("x").onclick = () => { closeSheet(); $("book").hidden = false; $("reopen").hidden = false; };
$("reopen").onclick = reshow;
addEventListener("keydown", e => { if(e.key === "Escape") closeSheet(); });
setInterval(() => { if(!document.hidden && !sheetOpen) hearts(Math.random() * innerWidth, innerHeight - 20, 1); }, 5000);
new IntersectionObserver(es => es.forEach(e => { if(e.isIntersecting) hearts(innerWidth / 2, innerHeight * .8, 6); }), {threshold: .6}).observe($("end2"));
/* ---- music: button always reflects what the listener asked for ---- */
const a = $("audio"), mb = $("music"); let want = false, fade = null;
const ui = () => { mb.textContent = want ? S.pauseLabel : S.playLabel; mb.setAttribute("aria-pressed", want); mb.setAttribute("aria-label", want ? "Pause music" : "Play music"); };
function fadeTo(target, step, ms, done){
  clearInterval(fade);
  fade = setInterval(() => {
    a.volume = target > a.volume ? Math.min(target, a.volume + step) : Math.max(target, a.volume - step);
    if(Math.abs(a.volume - target) < .001){ clearInterval(fade); done && done(); }
  }, ms);
}
mb.onclick = () => {
  want = !want; ui();
  if(want){ a.volume = Math.min(a.volume, .05); a.play().then(() => { if(want) fadeTo(.8, .05, 150); }).catch(() => { want = false; ui(); }); }
  else fadeTo(0, .1, 80, () => { if(!want) a.pause(); });
};
a.addEventListener("error", () => { want = false; ui(); });
ui();
