function toggleSocialLinks() {
    var button = document.getElementById("button-toggle");
    var socialLinks = document.getElementById("social-links");
    if (socialLinks.style.visibility === "hidden") {
        button.classList.remove("button-inactive");
        button.classList.add("button-active");
        socialLinks.style.visibility = "visible";
    } else {
        button.classList.remove("button-active");
        button.classList.add("button-inactive");
        socialLinks.style.visibility = "hidden";
    }
}

