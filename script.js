function toggleMenu() {
    var menu = document.querySelector('.menu');
    menu.style.width = menu.style.width === '250px' ? '0' : '250px';
}

function loadContent(page) {
    var contentArea = document.querySelector('.content');
    
    // Customize the content based on the selected page
    switch (page) {
        case 'home':
            contentArea.innerHTML = '<h2>Welcome to our website!</h2><p>This is the home page content.</p>';
            break;
        case 'about':
            contentArea.innerHTML = '<h2>About Us</h2><p>Learn more about our company and mission.</p>';
            break;
        case 'services':
            contentArea.innerHTML = '<h2>Our Services</h2><p>Explore the services we offer to our clients.</p>';
            break;
        case 'contact':
            contentArea.innerHTML = '<h2>Contact Us</h2><p>Get in touch with our team.</p>';
            break;
        default:
            contentArea.innerHTML = '<h2>Welcome to our website!</h2><p>This is the default content.</p>';
    }

    // Close the menu after selecting a page
    toggleMenu();
}
