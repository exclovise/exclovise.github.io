const SERVER_IP = "31079.ddnod.es";
const STATUS_URL = `https://api.mcsrvstat.us/2/${SERVER_IP}`;
const darkToggle = document.getElementById("darkModeToggle");
const statusText = document.getElementById("server-status");
const playerList = document.getElementById("player-list");

// Dark Mode Toggle
darkToggle.onclick = () => {
  document.body.classList.toggle("light");
  localStorage.setItem("theme", document.body.classList.contains("light") ? "light" : "dark");
};

// Load saved theme
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light");
}

// Fetch Server Status
fetch(STATUS_URL)
  .then(res => res.json())
  .then(data => {
    if (data.online) {
      statusText.innerHTML = `🟢 Online — ${data.players.online}/${data.players.max} players`;
      playerList.innerHTML = (data.players.list || []).map(player => `<img src="https://minotar.net/avatar/${player}/32" title="${player}">`).join(" ");
    } else {
      statusText.textContent = "🔴 Offline";
      playerList.textContent = "";
    }
  })
  .catch(() => {
    statusText.textContent = "⚠️ Unable to fetch server status.";
  });

// Load changelog
fetch('data/changelog.json')
  .then(res => res.json())
  .then(logs => {
    const changelogList = document.getElementById("changelog-list");
    logs.forEach(entry => {
      const li = document.createElement("li");
      li.textContent = `[${entry.date}] ${entry.text}`;
      changelogList.appendChild(li);
    });
  });
