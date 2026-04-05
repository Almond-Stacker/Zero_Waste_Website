document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Function to load a component into a placeholder
    function loadComponent(elementId, filePath) {
        const placeholder = document.getElementById(elementId);
        if (placeholder) {
            fetch(filePath)
                .then(response => {
                    if (!response.ok) throw new Error(`Failed to load ${filePath}`);
                    return response.text();
                })
                .then(data => {
                    placeholder.innerHTML = data;
                    // If loading the header, run the active link highlighter
                    // then inject search-suggest scripts
                    if (elementId === 'header-placeholder') {
                        highlightActiveLink();
                        loadSearchSuggest();
                    }
                })
                .catch(error => console.error(error));
        }
    }

    // 2. Function to highlight the current page in the nav
    function highlightActiveLink() {
        const currentPage = window.location.pathname.split("/").pop() || "homepage.html";
        const navLinks = document.querySelectorAll('.site-nav a');
        navLinks.forEach(link => {
            if (link.getAttribute('href') === currentPage) {
                link.classList.add('on');
                // Also mark the parent dropdown trigger as active
                const dropdown = link.closest('.dropdown');
                if (dropdown) {
                    const trigger = dropdown.querySelector(':scope > a');
                    if (trigger) trigger.classList.add('on');
                }
            }
        });
    }

    // 3. Dynamically load search scripts then init suggestions
    function loadSearchSuggest() {
        // Resolve path relative to current page depth
        const base = '../assets/js/';
        function injectScript(src, onload) {
            const s = document.createElement('script');
            s.src = src;
            s.onload = onload || null;
            document.head.appendChild(s);
        }
        // Load index first, then suggest (suggest depends on SEARCH_INDEX)
        injectScript(base + 'search-index.js', () => {
            injectScript(base + 'search-suggest.js', () => {
                initSearchSuggest();
            });
        });
    }

    // 4. Execute the loads
    loadComponent('header-placeholder', '../assets/header.html');
    loadComponent('footer-placeholder', '../assets/footer.html');
});