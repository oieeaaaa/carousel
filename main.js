window.addEventListener('load', () => {
  const carousel = document.querySelector('.carousel');

  if (!carousel) return false;

  const list = document.querySelector('.carousel-list');
  const prev = document.querySelector('.carousel__prev');
  const next = document.querySelector('.carousel__next');

  const totalItems = list.childElementCount - 1; // starts from 0 (index based)
  let currentIndex = 0;

  /*
   * Next handler
   * It moves the carousel to the previous item
   * It should disable the next button if the currentIndex is equal to 0
   */
  const handlePrev = e => {
    e.preventDefault();
    currentIndex -= 1;

    list.style.transform = `translateX(-${currentIndex * 100}%)`;

    if (currentIndex === 0) {
      prev.classList.add('--disabled');
      prev.disabled = true;
    }

    if (currentIndex < totalItems) {
      next.classList.remove('--disabled');
      next.disabled = false;
    }
  }

  /*
   * Next handler
   * It moves the carousel to the next item
   * It should disable the next button if the currentIndex is equal to totalItems
   */
  const handleNext = e => {
    e.preventDefault();
    currentIndex += 1;

    list.style.transform = `translateX(-${currentIndex * 100}%)`;

    if (currentIndex === totalItems) {
      next.classList.add('--disabled');
      next.disabled = true;
    }

    if (currentIndex > 0) {
      prev.classList.remove('--disabled');
      prev.disabled = false;
    }
  }

  prev.addEventListener('click', handlePrev);
  next.addEventListener('click', handleNext);
});
