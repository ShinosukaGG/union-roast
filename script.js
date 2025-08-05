// -------------------- CONFIG --------------------

const X_SHARE_URL = "https://x.com/intent/tweet?text=";
const SITE_URL = "union-roast.vercel.app";
const roastImage = "capybara-roast.png";

// ---- FULL ROAST ARRAYS ----

const testnetRoasts = [
  "You’ve got fewer transactions than Union has delays.",
  "Your testnet wallet is cleaner than Vitalik’s search history.",
  "Union testnet says hi. You’ve clearly never replied.",
  "Two transactions? So bold. So brave.",
  "You treat testnets like horror games — too scared to interact.",
  "Even the faucet gave up on you.",
  "You connected wallet… then ghosted. Classic.",
  "Your activity is so low we checked if the RPC was down.",
  "You left fewer traces than Tornado Cash.",
  "If there was an NFT for inactivity, you’d be the 1/1.",
  "You did 3 txs… all approvals. Peak contribution.",
  "You farmed less than a cactus in winter.",
  "Your testnet life is just ‘connect wallet > close tab.’",
  "If Union gave XP for lurking, you’d be a Level 100.",
  "You deployed vibes. Nothing else.",
  "You called yourself early… but showed up late.",
  "At this point, we’re not sure you’re real.",
  "Did you even read the docs or just pray for an airdrop?",
  "Union’s capybara tested more than you.",
  "You committed one contract. It broke the site.",
  "Your txs are so spaced out they look like Halley’s comet sightings.",
  "You’re the 0 in 0x.",
  "Testnet? You thought that was a quiz.",
  "Even abandoned multisigs have more onchain history.",
  "You left fewer footprints than zk-SNARKs.",
  "Your testnet stats are so bad, we checked if it was a burner.",
  "One tx per month. You're farming at glacier speed.",
  "You’re the reason they invented “low activity” roles.",
  "Your GitHub and wallet are equally empty.",
  "You’re testing the patience of the devs, not the protocol.",
  "You spun up a contract… and vanished into dust.",
  "You missed more epochs than your grandpa missed leg day.",
  "You waited for the perfect moment — it never came.",
  "You tested once, then tweeted like a core contributor.",
  "Testnet broke? Nah, that was just your vibe.",
  "You used Union as a read-only dapp.",
  "You’re farming less than a vegan in a drought.",
  "You contributed negative value. Impressive.",
  "Your interaction was a single “approve” tx. Iconic.",
  "You saw the docs, closed the tab, and called it a day.",
  "Your only skill: watching others test.",
  "If we airdropped based on vibes, you'd still miss.",
  "You bring the same energy to testnets as you do to group projects.",
  "At least your gas fees were optimized — by doing nothing.",
  "Your contract is still stuck in “Deploying…”",
  "You said you were early. The data says otherwise.",
  "You have less footprint than a zk rollup proof.",
  "Your testnet arc is shorter than a Twitter thread.",
  "You contributed… to our server costs. That’s it.",
  "You’re so non-interactive, we thought you were from TradFi."
];

const yapperRoasts = [
  "You yap like it's a chore — once a week, off-topic, and half-asleep.",
  "Your posts are so dry they triggered a drought warning.",
  "You invented low-effort engagement.",
  "You typed \"gm\" 37 times. And nothing else.",
  "Your yapper stats are lower than testnet gas.",
  "You retweet, but never contribute.",
  "Your yapper role is honorary at this point.",
  "You post only when someone says \"airdrop.\" We noticed.",
  "Your meme game is stuck in 2022.",
  "Even bots bring more value than your posts.",
  "You’re a silent yapper — that’s just a lurker.",
  "Your ideas are as original as a derivative NFT.",
  "One good tweet. That’s your entire resume.",
  "Your yapper level is “I was just passing by.”",
  "You joined the convo, then immediately left.",
  "We searched your posts for alpha. Found \"lol\" and \"fr fr\".",
  "You speak once a week like it’s a sacred ritual.",
  "Even Discord thought you were spam.",
  "You reply with \"Wen\" more than actual words.",
  "You ride threads like they’re free buses.",
  "Your takes have less conviction than a DAO vote.",
  "We’d roast your engagement, but there’s nothing to roast.",
  "Union’s capybara yaps more than you — and he doesn’t talk.",
  "You drop emojis like they’re thought leadership.",
  "Yapper? You mean Yaplurker.",
  "Your threads get less attention than Terms of Service updates.",
  "You posted once, got ignored, and rage-quit.",
  "You tried to meme, but we thought it was serious. Tragic.",
  "You only show up to say \"gm\" and beg.",
  "Your engagement is flatter than an L2 price chart.",
  "You write like you're scared of words.",
  "We thought your account was shadowbanned. Turns out it’s just boring.",
  "Your reply game is so weak, even bots don’t follow you.",
  "You posted a joke once. We’re still recovering.",
  "Your community presence is like zk — invisible.",
  "You got a few likes and acted like an influencer.",
  "You yap like you're on a character limit from 2009.",
  "You replied “nice” to 14 different posts. That’s it.",
  "If vibes were volume, you'd be a whisper.",
  "You’re not adding to the convo. You’re just echoing.",
  "Every post you make reduces morale by 1%.",
  "You drop takes so cold, they froze our RPC.",
  "You show up like airdrop seasons — rarely and with poor timing.",
  "You tweet like you're afraid of the algorithm.",
  "You post like someone’s forcing you.",
  "You lurk, observe, and vanish. Like a ghost with no alpha.",
  "Your idea of contribution is asking “Wen?” repeatedly.",
  "Your memes don’t slap. They nap.",
  "Even spam bots think you’re inactive.",
  "Union yapping is an art. You just doodled on the margins."
];

// --- Exception dictionary (username: [roast1, roast2]) ---
const exceptions = {
  "0xkaiserkarel": [
    "Your ZKGF count is so low we had to assign it a float32... just so we could store the embarrassment.",
    "Your chest hairs are like a jungle — Union Capybara went in to debug and hasn’t come out since."
  ],
  "corcoder": [
    "Your English is so sharp, Grok had to retrain just to translate your tweets. GPT-4 panicked. OpenAI cried.",
    "Your hairstyle is so wild you almost look like Rick from Rick and Morty — except with more chaos and less science."
  ],
  "e_beriker": [
    "You're so serious even the Joker stopped joking around you — he thought it was a governance meeting.",
    "Your posts are so far from Union topics they might as well be sent through a Cosmos bridge to another galaxy."
  ],
  "eastwood_nft": [
    "There’s a ‘wood’ in your name, but nothing solid in your takes.",
    "Your posts are so bad, the Union founder followed me instead — and I post roasts for a living."
  ]
};

// -------------------- HELPERS --------------------

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
function normalizeUsername(input) {
  let u = input.trim().toLowerCase();
  u = u.replace(/^@/, "");
  return u;
}
function saveRoast(username, roast1, roast2) {
  let data = JSON.parse(localStorage.getItem("roastData") || "{}");
  data[username] = { roast1, roast2 };
  localStorage.setItem("roastData", JSON.stringify(data));
}
function getSavedRoast(username) {
  let data = JSON.parse(localStorage.getItem("roastData") || "{}");
  return data[username];
}
function fireConfetti(duration = 4000, count = 36) {
  const container = document.createElement("div");
  container.style.position = "fixed";
  container.style.left = 0; container.style.top = 0;
  container.style.width = "100vw";
  container.style.height = "100vh";
  container.style.pointerEvents = "none";
  container.style.zIndex = "2147483647"; // Highest z-index possible
  document.body.appendChild(container);

  for (let i = 0; i < count; i++) {
    let span = document.createElement("span");
    span.innerText = "🔥";
    span.style.position = "absolute";
    span.style.fontSize = `${30 + Math.random() * 36}px`;
    span.style.top = `${10 + Math.random() * 75}%`;
    span.style.left = `${5 + Math.random() * 90}%`;
    span.style.opacity = 0.82 + Math.random() * 0.16;
    span.style.transform = `rotate(${Math.random()*360}deg)`;
    span.style.transition = "transform 1.5s cubic-bezier(.4,2,.7,1)";
    container.appendChild(span);

    setTimeout(() => {
      span.style.transform += ` translateY(${100 + Math.random()*80}px) scale(${0.8+Math.random()*0.4})`;
      span.style.opacity = 0.02;
    }, 50 + Math.random()*300);
  }
  setTimeout(() => container.remove(), duration);
}
// -------------------- UI LOGIC --------------------

const roastBtn = document.getElementById("roastBtn");
const usernameInput = document.getElementById("usernameInput");
const landingBox = document.getElementById("landingBox");
const landingMain = document.getElementById("landing-main");
const roastMain = document.getElementById("roast-main");
const roastBox = document.getElementById("roastBox");
const roast1El = document.getElementById("roast1");
const roast2El = document.getElementById("roast2");
const shareBtn = document.getElementById("shareBtn");

// Assign & display roast for username
function handleRoast() {
  let userRaw = usernameInput.value;
  if(!userRaw || userRaw.length < 2) {
    usernameInput.focus();
    usernameInput.style.borderColor = "#ff4200";
    return;
  }
  let username = normalizeUsername(userRaw);

  let roast = getSavedRoast(username);

  // Exception: fixed roasts
  if(exceptions[username]) {
    roast = { roast1: exceptions[username][0], roast2: exceptions[username][1] };
    saveRoast(username, roast.roast1, roast.roast2);
  } else if(!roast) {
    // Assign new roast: random one from each category
    let roast1 = pick(testnetRoasts);
    let roast2 = pick(yapperRoasts);
    roast = { roast1, roast2 };
    saveRoast(username, roast1, roast2);
  }

  // Set roast text and show (let CSS handle wrapping!)
  roast1El.textContent = roast.roast1;
  roast2El.textContent = roast.roast2;

  // Hide landing, show roast, fire confetti
  landingMain.style.display = "none";
  roastMain.style.display = "flex";
  fireConfetti();

  // Reset input color
  usernameInput.style.borderColor = "#ABECFD";
}

// Share button logic
function handleShare() {
  let roast1 = roast1El.textContent;
  let roast2 = roast2El.textContent;
  let tweetText =
    `I just got Roasted by Union Capybara! 🔥\nHe said:\n\n${roast1}\n${roast2}\n\nGet yourself cooked: ${SITE_URL}`;
  let shareUrl = X_SHARE_URL + encodeURIComponent(tweetText);
  window.open(shareUrl, "_blank");
}

// EVENTS
if(roastBtn) roastBtn.onclick = handleRoast;
if(shareBtn) shareBtn.onclick = handleShare;

// Enter key triggers roast
if(usernameInput) {
  usernameInput.addEventListener("keydown", function(e) {
    if(e.key === "Enter") handleRoast();
  });
}
