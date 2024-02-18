document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("feeling-lucky").addEventListener("click", function() {
        var searchTerm = document.querySelector('input[name="q"]').value;
        window.location.href = "https://www.google.com/search?q=" + searchTerm + "&btnI=I";
    });
});