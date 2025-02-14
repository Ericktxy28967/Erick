// JavaScript code can be added here if needed for interactivity or additional effects

onload = () => {
    const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");
        clearTimeout(c);
    }, 1000);
};
