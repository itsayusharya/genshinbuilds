const container = document.querySelector(".conatiner");

//filters

//element filter
const pyro = document.querySelector("#pyro");
const hydro = document.querySelector("#hydro");
const anemo = document.querySelector("#anemo");
const electro = document.querySelector("#electro");
const dendro = document.querySelector("#dendro");
const cryo = document.querySelector("#cryo");
const geo = document.querySelector("#geo");

elements = [pyro, hydro, anemo, electro, dendro, cryo, geo];

elements.forEach((element) => {
  element.addEventListener("click", function () {});
});

function elementFilter() {}

//wepon filter
const bow = document.querySelector("#bow");
const catalyst = document.querySelector("#catalyst");
const claymore = document.querySelector("#claymore");
const polearm = document.querySelector("#polearm");
const sword = document.querySelector("#sword");

weapons = [bow, catalyst, claymore, polearm, sword];

weapons.forEach((weapon) => weapon.addEventListener("click", function () {}));

//searchbar
const searchInput = document.querySelector(".input");
searchInput.addEventListener("input", (e) => {
  const value = e.target.value;
  console.log(value);
});
