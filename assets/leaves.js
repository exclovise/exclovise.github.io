const leaves = ["🍂", "🍁", "🌿"];
for (let i = 0; i < 15; i++) {
  const leaf = document.createElement("div");
  leaf.className = "leaf";
  leaf.style.position = "fixed";
  leaf.style.left = Math.random() * 100 + "vw";
  leaf.style.top = Math.random() * -20 + "vh";
  leaf.style.fontSize = Math.random() * 24 + 12 + "px";
  leaf.innerText = leaves[Math.floor(Math.random() * leaves.length)];
  document.body.appendChild(leaf);

  leaf.animate([
    { transform: "translateY(0)", opacity: 1 },
    { transform: `translateY(${window.innerHeight}px)`, opacity: 0.2 }
  ], {
    duration: 10000 + Math.random() * 5000,
    iterations: Infinity,
    delay: Math.random() * 5000
  });
}
