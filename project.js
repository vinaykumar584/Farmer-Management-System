// Run after page loads
document.addEventListener("DOMContentLoaded", () => {

    /* ===== NAVBAR ACTIVE EFFECT ===== */
    const navItems = document.querySelectorAll("nav ul li");

    navItems.forEach(item => {
        item.addEventListener("click", () => {
            navItems.forEach(i => i.classList.remove("active"));
            item.classList.add("active");
        });
    });


    /* ===== OPEN BUTTON HANDLING ===== */
    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(btn => {
        btn.addEventListener("click", (e) => {

            // If button has no link (Storage / Reports)
            if (!btn.closest("a")) {
                e.preventDefault();
                alert("🚧 This module is under development!");
            }
        });
    });


    /* ===== FOOTER YEAR AUTO UPDATE ===== */
    const footer = document.querySelector("footer");
    const year = new Date().getFullYear();
    footer.innerHTML = `© ${year} Farmer Management System`;


    /* ===== CARD CLICK ANIMATION ===== */
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.addEventListener("click", () => {
            card.style.transform = "scale(0.97)";
            setTimeout(() => {
                card.style.transform = "";
            }, 150);
        });
    });

});
