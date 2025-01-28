// document.getElementById("show-more-btn").addEventListener("click", function () {
//     const hiddenBlogs = document.querySelector(".blog-hidden");
//     hiddenBlogs.style.display = hiddenBlogs.style.display === "grid" ? "none" : "grid";
//     this.textContent = hiddenBlogs.style.display === "grid" ? "Show Less" : "Show More";
// });

document.getElementById("show-more-btn").addEventListener("click", function() {
    var hiddenBlogs = document.querySelector(".hidden-blogs");
    if (hiddenBlogs.style.display === "none" || hiddenBlogs.style.display === "") {
        hiddenBlogs.style.display = "block";
        this.textContent = "Show Less"; // Change button text
    } else {
        hiddenBlogs.style.display = "none";
        this.textContent = "Show More"; // Reset button text
    }
});


document.addEventListener("DOMContentLoaded", () => {
    const hiddenBlogs = document.querySelector(".blog-hidden");
    const showMoreBtn = document.getElementById("show-more-btn");
    const blogContainer = document.querySelector(".blog-container");

    // Check if there are hidden blogs
    if (hiddenBlogs.children.length > 0) {
        blogContainer.classList.add("blog-exceed");
    }

    showMoreBtn.addEventListener("click", () => {
        hiddenBlogs.style.display = hiddenBlogs.style.display === "grid" ? "none" : "grid";
        showMoreBtn.textContent = hiddenBlogs.style.display === "grid" ? "Show Less" : "Show More";
    });
});
