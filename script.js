// Function to load content dynamically based on the link clicked
function loadContent(page) {
    fetch(page)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to load page');
        }
        return response.text();
      })
      .then(data => {
        document.getElementById('content').innerHTML = data; // Load the content into the main section
      })
      .catch(error => {
        console.error(error);
        document.getElementById('content').innerHTML = "<h1>Error loading page</h1>";
      });
  }
  
  // Add event listeners to navbar links
  document.getElementById('nav-home').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default link behavior
    loadContent('home.html');
  });
  
  document.getElementById('nav-about').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default link behavior
    loadContent('about.html');
  });
  
  document.getElementById('nav-resources').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default link behavior
    loadContent('resources.html');
  });
  
  // Optionally, load the home page content initially
  loadContent('home.html');
  
  // Night mode slider toggle logic
  const themeToggleCheckbox = document.getElementById('theme-toggle-checkbox'); // Get the checkbox
  const currentTheme = localStorage.getItem('theme') || 'light';
  
  // Set initial theme based on preference
  document.documentElement.setAttribute('data-theme', currentTheme);
  if (currentTheme === 'dark') {
    themeToggleCheckbox.checked = true; // Set the checkbox to checked if in dark mode
  } else {
    themeToggleCheckbox.checked = false; // Set the checkbox to unchecked if in light mode
  }
  
  // Toggle between themes when the slider is toggled
  themeToggleCheckbox.addEventListener('change', () => {
    const newTheme = themeToggleCheckbox.checked ? 'dark' : 'light';
    
    // Apply the new theme
    document.documentElement.setAttribute('data-theme', newTheme);
    
    // Save the user's preference
    localStorage.setItem('theme', newTheme);
  });