
const observer = new IntersectionObserver((entries, observer) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			console.log("Initializing Disqus!");

			// Starting Disqus's universal embed code.
			(function() {
				var d = document, s = d.createElement('script');
				s.src = 'https://duanestorey.disqus.com/embed.js';
				s.setAttribute('data-timestamp', +new Date());
				(d.head || d.body).appendChild(s);
			})();
			// Ending Disqus's universal embed code.

			// Stop observing to prevent reinitializing Disqus.
			observer.unobserve(entry.target);
		}
	});
});

// Start listening:
const mountNode = document.querySelector( "#disqus_thread" );
if ( mountNode != null ) {
    observer.observe( mountNode );
}

document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Add a click event on each of them
  $navbarBurgers.forEach( el => {
    el.addEventListener('click', () => {

      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle('is-active');
      $target.classList.toggle('is-active');

    });
  });

});
