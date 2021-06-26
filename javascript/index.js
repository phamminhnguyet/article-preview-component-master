function toggleSocialLinks() {
    var button = document.getElementById("button-toggle");
    var socialLinks = document.getElementById("social-links");
    if (socialLinks.style.display === "none") {
        button.classList.remove("button-inactive");
        button.classList.add("button-active");
        socialLinks.style.display = "block";
    } else {
        button.classList.remove("button-active");
        button.classList.add("button-inactive");
        socialLinks.style.display = "none";
    }
}

