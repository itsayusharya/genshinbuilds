//Navbar

const navbar = document.querySelector("header");
const linkWrapper = document.createElement("div");
const searchInput = document.createElement("input");

function link(linkName, url) {
  const t = document.createTextNode(linkName);
  const a = document.createElement("a");
  a.setAttribute("href", url);
  a.setAttribute("class", "navitem");
  a.appendChild(t);

  return a;
}

const home = link(
  "Genshin Builds",
  "https://itsayusharya.github.io/genshinbuilds/"
);

const navItems = [home];

navItems.forEach((item) => {
  linkWrapper.append(item);
});

//searchbar
searchInput.setAttribute("type", "text");
searchInput.setAttribute("placeholder", "Character Name");

searchInput.addEventListener("input", (e) => {
  const value = e.target.value;
  console.log(value);
});

navbar.append(linkWrapper, searchInput);
