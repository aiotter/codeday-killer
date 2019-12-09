var oldUrl = location.href;
var newUrl = document.querySelector(".article-es-url a").href;
window.location.href = newUrl;
toast(oldUrl, newUrl);

