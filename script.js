// =========================
// FAQ ACCORDION FUNCTIONALITY
// =========================
document.addEventListener('DOMContentLoaded', function () {
  // Grab all elements with the class "accordion"
  const accordions = document.querySelectorAll('.accordion');

  accordions.forEach((accordionBtn) => {
    accordionBtn.addEventListener('click', function () {
      // Toggle "active" class on the clicked button
      this.classList.toggle('active');

      // Next sibling is the panel <div>
      const panel = this.nextElementSibling;
      if (panel.style.display === 'block') {
        panel.style.display = 'none';
      } else {
        panel.style.display = 'block';
      }
    });
  });
});
