// Selecting necessary elements
let verification__modal = document.querySelector("#verification__modal");
let verification__modal__backdrop = document.querySelector("#verification__modal__backdrop");
let verification__modal__close = document.querySelector("#verification__modal__close");
let pass__btn = document.querySelectorAll("#pass__btn");

// Adding click event listener to all pass__btn elements
pass__btn.forEach(function (item) {
  item.addEventListener("click", function () {
    // Show the modal
    verification__modal.classList.add("scale-1");
    verification__modal.classList.remove("scale-0");

    // Show the backdrop
    verification__modal__backdrop.classList.add("block");
    verification__modal__backdrop.classList.remove("hidden");

    // Prevent body from scrolling
    document.body.classList.add("overflow-hidden");
    document.body.classList.add("h-screen");
  });
});

// Event listener for the backdrop click to hide the modal
verification__modal__backdrop.addEventListener("click", function () {
  // Hide the modal
  verification__modal.classList.remove("scale-1");
  verification__modal.classList.add("scale-0");

  // Hide the backdrop
  verification__modal__backdrop.classList.remove("block");
  verification__modal__backdrop.classList.add("hidden");

  // Allow body to scroll
  document.body.classList.remove("overflow-hidden");
  document.body.classList.remove("h-screen");
});

// Event listener for the modal close button click to hide the modal
verification__modal__close.addEventListener("click", function () {
  // Hide the modal
  verification__modal.classList.remove("scale-1");
  verification__modal.classList.add("scale-0");

  // Hide the backdrop
  verification__modal__backdrop.classList.remove("block");
  verification__modal__backdrop.classList.add("hidden");

  // Allow body to scroll
  document.body.classList.remove("overflow-hidden");
  document.body.classList.remove("h-screen");
});
