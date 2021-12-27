function imageCarousel() {
  const highlight = document.querySelector(".carousel-highlight");
  const previews = document.querySelectorAll(".carousel-preview img");
  const prevBtn = document.querySelector("#prevBtn");
  const nextBtn = document.querySelector("#nextBtn");

  //Image Slider
  let counter = 0;

  prevBtn.addEventListener("click", function () {
    if (counter <= 0) return;
    counter--;
    const smallSrc = previews[counter].src;
    const bigSrc = smallSrc.replace("-thumbnail", "");
    highlight.src = bigSrc;
    previews.forEach((preview) => preview.classList.remove("image-active"));
    previews[counter].classList.add("image-active");
  });

  nextBtn.addEventListener("click", function () {
    if (counter >= previews.length - 1) return;
    counter++;
    const smallSrc = previews[counter].src;
    const bigSrc = smallSrc.replace("-thumbnail", "");
    highlight.src = bigSrc;
    previews.forEach((preview) => preview.classList.remove("image-active"));
    previews[counter].classList.add("image-active");
  });

  //Image Carousel
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
