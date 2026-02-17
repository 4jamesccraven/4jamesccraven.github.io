async function include(selector, url) {
    const el = document.querySelector(selector);
    if (!el) return;
    const res = await fetch(url);
    el.innerHTML = await res.text();
}

function setActiveNav() {
    const currentPath = window.location.pathname.replace(/\/$/, "");
    const links = document.querySelectorAll("nav a");

    links.forEach(link => {
        const linkPath = new URL(link.href).pathname.replace(/\/$/, "");
        if (linkPath === currentPath) {
            link.classList.add("current");
            link.removeAttribute("href");
        }
    })
}

document.addEventListener("DOMContentLoaded", async () => {
    await include("#site-header", "/header.html");
    // await include("#site-footer", "/footer.html");
    setActiveNav();
    document.body.classList.remove("preload");
});
