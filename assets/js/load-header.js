document.addEventListener("DOMContentLoaded", function() {
    // Look for the element with the ID 'header-placeholder'
    const headerPlaceholder = document.getElementById('header-placeholder');

    if (headerPlaceholder) {
        fetch('../assets/header.html')
            .then(response => {
                if (!response.ok) throw new Error("Failed to load header");
                return response.text();
            })
            .then(data => {
                headerPlaceholder.innerHTML = data;
                
                // Optional: This part highlights the active link automatically
                const currentPage = window.location.pathname.split("/").pop();
                const navLinks = document.querySelectorAll('.site-nav a');
                navLinks.forEach(link => {
                    if (link.getAttribute('href') === currentPage) {
                        link.classList.add('on');
                    }
                });
            })
            .catch(error => console.error('Error loading the header:', error));
    }
});