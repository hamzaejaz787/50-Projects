function imageCarousel() {
  const highlight = document.querySelector(".carousel-highlight");
  const previews = document.querySelectorAll(".carousel-preview img");

  previews.forEach((preview) => {
    preview.addEventListener("click", function () {
      const smallSrc = this.src;
      const bigSrc = smallSrc.replace("-thumbnail", "");

      highlight.src = bigSrc;

      previews.forEach((preview) => preview.classList.remove("image-active"));
      preview.classList.add("image-active");
    });
  });
}

imageCarousel();
