// Redirect if .html is in the URL
if (window.location.pathname.endsWith(".html")) {
    window.location.href =
        window.location.pathname.replace(".html", "") +
        window.location.search;
}