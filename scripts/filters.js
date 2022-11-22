const filterContainer = document.querySelector(".filters");

//element filter
const elementFilter = document.createElement("div");
elementFilter.setAttribute("class", "element-filter");

//icon button
const pyro = "../assets/element/icon_pyro.svg";
const hydro = "../assets/element/icon_hydro.svg";
const anemo = "../assets/element/icon_anemo.svg";
const electro = "../assets/element/icon_electro.svg";
const dendro = "../assets/element/icon_dendro.svg";
const cryo = "../assets/element/icon_cryo.svg";
const geo = "../assets/element/icon_geo.svg";

const elements = [pyro, hydro, anemo, electro, dendro, cryo, geo];

function icon(src) {
  const btn = document.createElement("input");
  btn.setAttribute("type", "image");
  btn.setAttribute("src", src);
  return btn;
}

elements.forEach((element) => {
  elementFilter.appendChild(icon(element));
});

//weapon filter
const weaponFilter = document.createElement("div");
weaponFilter.setAttribute("class", "weapon-filter");

const bow = "./assets/weapons/icon_bow.png";
const catalyst = "./assets/weapons/icon_catalyst.png";
const claymore = "./assets/weapons/icon_claymore.png";
const polearm = "./assets/weapons/icon_polearm.png";
const sword = "./assets/weapons/icon_sword.png";

const weapons = [bow, catalyst, claymore, polearm, sword];
weapons.forEach((weapon) => {
  weaponFilter.appendChild(icon(weapon));
});

//filters container
const filters = [weaponFilter, elementFilter];

filters.forEach((filter) => {
  filterContainer.appendChild(filter);
});
