const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  const counterIncrement = () => {
    const target = counter.getAttribute("data-target");
    const total = +counter.innerText;
    const increment = target / 200;

    if (total < target) {
      counter.innerText = `${Math.floor(total + increment)}`;
      setTimeout(counterIncrement, 1);
    } else {
      counter.innerText = target;
    }

    console.log(target);
  };

  counterIncrement();
});
