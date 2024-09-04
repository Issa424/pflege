document.getElementById("learnMoreBtn").addEventListener("click", function() {
    alert("Thank you for your interest! More information will be available soon.");
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for contacting us! We will get back to you shortly.");
});
