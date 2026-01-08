const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved user preference
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.textContent = '☀️'; // Change icon to sun
}

themeToggle.addEventListener('click', () => {
    // Toggle the class
    body.classList.toggle('dark-mode');
    
    // Check if dark mode is active to save preference and change icon
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        themeToggle.textContent = '☀️';
    } else {
        localStorage.setItem('theme', 'light');
        themeToggle.textContent = '🌙';
    }
});

