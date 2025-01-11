document.getElementById("show-more-btn").addEventListener("click", function () {
    const hiddenBlogs = document.querySelector(".blog-hidden");
    hiddenBlogs.style.display = hiddenBlogs.style.display === "grid" ? "none" : "grid";
    this.textContent = hiddenBlogs.style.display === "grid" ? "Show Less" : "Show More";
});
