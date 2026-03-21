
document.addEventListener("DOMContentLoaded", function() {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
            highlightActiveTab();
        });
});

function highlightActiveTab() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-item a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath.split('/').pop()) {
            link.parentElement.classList.add('active');
        }
    });
}