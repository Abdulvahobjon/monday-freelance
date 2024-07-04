let catergories__toggle__bg = document.querySelectorAll(
  ".catergories__toggle__bg"
);
let catergories__toggle__circle = document.querySelectorAll(
  ".catergories__toggle__circle"
);
let catergories__bottom__select = document.querySelectorAll(
  ".catergories__bottom__select"
);
let catergori__bottom__btn = document.querySelectorAll(
  ".catergori__bottom__btn"
);
let catergories__bottom__arrow = document.querySelectorAll(
  ".catergories__bottom__arrow"
);
let creation__select = document.querySelectorAll(".creation__select");
let creation__select__btn = document.querySelectorAll(".creation__select__btn");
let creation__select__btn__arrow = document.querySelectorAll(
  ".creation__select__btn__arrow"
);
let catergories = document.querySelectorAll("#catergories");
let catergories__top = document.querySelectorAll(".catergories__top");
let catergories__right = document.querySelector(".catergories__right");
let catergories__top__arrow = document.querySelectorAll(
  ".catergories__top__arrow"
);
let clear__all = document.querySelector(".clear__all")
let inp__clear = document.querySelectorAll("#inp__clear")
let close__filter = document.querySelector(".close__filter")
let filter_catergiries = document.querySelector(".filter_catergiries")
let search__filter = document.querySelector(".search__filter")
let show__filter__result = document.querySelector(".show__filter__result")

close__filter.addEventListener("click" , function(){
    filter_catergiries.classList.remove("top-0")
    filter_catergiries.classList.add("top-[-100%]")
})
show__filter__result.addEventListener("click" , function(){
    filter_catergiries.classList.remove("top-0")
    filter_catergiries.classList.add("top-[-100%]")
})
search__filter.addEventListener("click" , function(){
    filter_catergiries.classList.add("top-0")
    filter_catergiries.classList.remove("top-[-100%]")
})

clear__all.addEventListener("click", function(){
    catergories__toggle__bg.forEach(function (item, index) {
          catergories__toggle__circle[index].classList.remove("translate-x-5");
          catergories__toggle__bg[index].classList.add("bg-[#4790FF]");
    });
    inp__clear.forEach(function(item , index){
        item.value = ""
    })
    catergories__top.forEach(function (item, index) {
          catergories[index].classList.add("h-[45px]");
          catergories[index].classList.remove("h-[837px]");
          catergories__top__arrow[index].classList.add("rotate-180");
      });
})

catergories__toggle__bg.forEach(function (item, index) {
  item.addEventListener("click", function () {
    catergories__toggle__circle[index].classList.toggle("translate-x-5");
    catergories__toggle__bg[index].classList.toggle("bg-[#4790FF]");
  });
});

catergories__top.forEach(function (item, index) {
  catergories__top[index].addEventListener("click", function () {
      let currentHeight = catergories[index].clientHeight;
      if (currentHeight === 45) {
          // Expand
          catergories[index].style.height = 'auto';
          let expandedHeight = catergories[index].clientHeight + 'px';
          catergories[index].style.height = currentHeight + 'px';

          setTimeout(() => {
              catergories[index].style.height = expandedHeight;
          }, 0);
      } else {
          // Collapse
          catergories[index].style.height = currentHeight + 'px';

          setTimeout(() => {
              catergories[index].style.height = '45px';
          }, 0);
      }
      catergories[index].classList.toggle("overflow-hidden")
      catergories[index].classList.toggle("overflow-auto")
      catergories__right.classList.toggle("md:min-h-[1663px]");
      catergories__right.classList.toggle("min-h-[843px]");
      catergories__right.classList.toggle("md:min-h-[871px]");
      catergories__top__arrow[index].classList.toggle("rotate-180");
  });
});


creation__select__btn.forEach(function (item, index) {
  item.addEventListener("click", function () {
    creation__select[index].classList.toggle("h-[64px]");
    creation__select[index].classList.toggle("max-h-[900px]");
    creation__select__btn__arrow[index].classList.toggle("rotate-180");
    catergories[index].classList.remove("h-[837px]");
    catergories[index].classList.add("h-auto");
  });
});

catergori__bottom__btn.forEach(function (item, index) {
  item.addEventListener("click", function () {
    catergori__bottom__btn[index].classList.toggle("mb-3");
    catergories__bottom__select[index].classList.toggle("h-[25px]");
    catergories__bottom__select[index].classList.toggle("h-[61px]");
    catergories__bottom__arrow[index].classList.toggle("rotate-180");
    catergories[index].classList.toggle("h-[837px]");
    catergories[index].classList.add("h-auto");
  });
});

let catergories__bottom__select_2 = document.querySelectorAll(
  ".catergories__bottom__select_2"
);
let catergori__bottom__btn_2 = document.querySelectorAll(
  ".catergori__bottom__btn_2"
);
let catergories__bottom__arrow_2 = document.querySelectorAll(
  ".catergories__bottom__arrow_2"
);

catergori__bottom__btn_2.forEach(function (item, index) {
  item.addEventListener("click", function () {
    catergories[index].classList.remove("h-[837px]");
    catergories[index].classList.add("h-auto");
    catergories__bottom__select_2[index].classList.toggle("h-[44px]");
    catergories__bottom__select_2[index].classList.toggle("h-[92px]");
    catergories__bottom__arrow_2[index].classList.toggle("rotate-180");
  });
});
