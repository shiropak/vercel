// Create an intersection observer to watch elements
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            // Add class 'show' when element is visible
            entry.target.classList.add('show');
        } else {
            // Optional: Remove this else block if you want elements 
            // to stay visible once they appear
            // entry.target.classList.remove('show'); 
        }
    });
});

// Select all elements with the 'hidden' class
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
