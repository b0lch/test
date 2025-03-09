document.addEventListener("DOMContentLoaded", function() {
    let popup = document.getElementById("popup");
    let closeBtn = document.getElementById("closePopup");

    // Popup nach 2 Sekunden einblenden
    setTimeout(() => {
        popup.style.display = "block";
    }, 2000);

    // Beim Klicken auf "OK" das Popup schließen
    closeBtn.addEventListener("click", function() {
        popup.style.display = "none";
    });
});
