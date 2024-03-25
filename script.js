// Smooth Scrolling for navigation links
document.querySelectorAll('.navbar a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dynamic content display for Projects and Education (can be expanded upon)
function toggleSection(sectionId) {
    var x = document.getElementById(sectionId);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

// Contact form validation
function validateForm() {
    // This is a placeholder function. Update with actual validation rules for your form.
    let name = document.forms["contactForm"]["name"].value;
    if (name == "") {
        alert("Name must be filled out");
        return false;
    }
}