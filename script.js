(function () {
  // ---- live clock ----
  const clockEl = document.getElementById("clock");
  function tick() {
    if (!clockEl) return;
    const now = new Date();
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const day = days[now.getDay()];
    const hh = String(now.getHours()).padStart(2, "0");
    const mm = String(now.getMinutes()).padStart(2, "0");
    clockEl.textContent = `${day} ${hh}:${mm}`;
  }
  tick();
  setInterval(tick, 1000 * 15);

  // ---- keyboard workspace switching: 1 / 2 / 3 ----
  const routes = {
    1: "index.html",
    2: "projects.html",
    3: "links.html",
  };
  document.addEventListener("keydown", (e) => {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    const tag = document.activeElement && document.activeElement.tagName;
    if (tag === "INPUT" || tag === "TEXTAREA") return;
    if (routes[e.key]) window.location.href = routes[e.key];
  });
})();
