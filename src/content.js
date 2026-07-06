function start() {
  document.body.style.border = "5px solid red";

  document.querySelectorAll("span").forEach((span) => {
    span.style.backgroundColor = "blue";
  });

  console.log("Enabled");
}

function stop() {
  document.body.style.border = "";

  document.querySelectorAll("span").forEach((span) => {
    span.style.backgroundColor = "";
  });

  console.log("Disabled");
}

chrome.storage.local.get("enabled", ({ enabled }) => {
  if (enabled) {
    start();
  }
});

chrome.storage.onChanged.addListener((changes, area) => {
  if (area !== "local") return;

  if (changes.enabled) {
    if (changes.enabled.newValue) {
      start();
    } else {
      stop();
    }
  }
});