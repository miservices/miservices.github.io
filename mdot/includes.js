// Loads shared header/footer partials into any page that includes this script.
// Usage: <div data-include="header.html"></div>  <div data-include="footer.html"></div>
(function () {
  document.querySelectorAll('[data-include]').forEach(function (el) {
    var file = el.getAttribute('data-include');
    fetch(file)
      .then(function (res) {
        if (!res.ok) throw new Error('Failed to load ' + file);
        return res.text();
      })
      .then(function (html) {
        el.outerHTML = html;
      })
      .catch(function (err) {
        console.error(err);
      });
  });
})();