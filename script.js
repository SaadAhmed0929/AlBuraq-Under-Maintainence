
window.addEventListener("load", function() 
{
  document.getElementById("preloader").style.display = "none";
});

document.addEventListener('DOMContentLoaded', () => {
    const infoTrigger = document.getElementById('infoTrigger');
    const infoPanel = document.getElementById('infoPanel');

    if (infoTrigger && infoPanel) {
        infoTrigger.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent immediate closing
            infoPanel.classList.toggle('expanded');
        });

        // Close panel when clicking outside
        document.addEventListener('click', (e) => {
            if (infoPanel.classList.contains('expanded') && !infoPanel.contains(e.target)) {
                infoPanel.classList.remove('expanded');
            }
        });
    }
});

function acceptCookies() {
    document.getElementById("cookie-notice").style.display = "none";
}

function declineCookies() {
    document.getElementById("cookie-notice").style.display = "none";
}