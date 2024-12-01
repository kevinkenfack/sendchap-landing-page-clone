document.addEventListener("DOMContentLoaded", () => {
    const faqs = document.querySelectorAll(".faq");

    faqs.forEach(faq => {
        const question = faq.querySelector(".question");
        const toggleIcon = faq.querySelector(".toggle-icon");

        question.addEventListener("click", () => {
            faq.classList.toggle("active");
            if (faq.classList.contains("active")) {
                toggleIcon.src = "assets/icon/moins.svg"; // Remplacez par le chemin de moins.svg
            } else {
                toggleIcon.src = "assets/icon/plus.svg"; // Remplacez par le chemin de plus.svg
            }
        });
    });
});


document.getElementById("telSquare").addEventListener("click", function() {
    window.location.href = "tel:+1234567890";
});

document.getElementById("emailSquare").addEventListener("click", function() {
    window.location.href = "mailto:contact@example.com";
});

