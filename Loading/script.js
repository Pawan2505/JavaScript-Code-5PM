// Wait for the full page to load
window.onload = function() {
    // Hide the loader
    document.getElementById("loader").style.display = "none";
    
    // Show the content
    document.getElementById("content").classList.remove("hidden");
};
