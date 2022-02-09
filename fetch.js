"use strict";

const search = document.querySelector(".search");
const button = document.querySelector(".button");
const flag = document.querySelector(".flag");
const name = document.querySelector(".name");
const capital = document.querySelector(".capital");
const population = document.querySelector(".population");

console.log(flag);

button.addEventListener("click", (el) => {
  fetch(`https://restcountries.com/v3.1/name/${search.value}`)
    .then((res) => res.json())
    .then((res) => {
      name.innerText = res[0].name.common;
      capital.innerText = res[0].capital;
      population.innerText = `${(res[0].population / 1000000).toFixed(1)} mln`;
      flag.src = res[0].flags.png;
    });
});
