<script>
  document.addEventListener("DOMContentLoaded", function () {
    const heroCarousel = document.getElementById("heroCarousel");

    if (heroCarousel) {
      new bootstrap.Carousel(heroCarousel, {
        interval: 4000,
        ride: 'carousel'
      });
    }
  });
</script>
