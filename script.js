function toggleMenu() {
    var menu = document.querySelector('.menu');
    menu.style.width = menu.style.width === '250px' ? '0' : '250px';
}

function loadContent(page) {
    var contentContainer = document.getElementById('content-container');

    // Load content from separate HTML files
    fetch(`pages/${page}.html`)
        .then(response => response.text())
        .then(data => {
            contentContainer.innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading content:', error);
        });

    // Close the menu after selecting a page
    toggleMenu();
}
