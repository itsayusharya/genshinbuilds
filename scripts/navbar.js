//Navbar

const navbar = document.querySelector(".navbar");
const linkWrapper = document.createElement("div");
const searchWrapper = document.createElement("input");

function link(linkName, url) {
  const t = document.createTextNode(linkName);
  const a = document.createElement("a");
  a.setAttribute("href", url);
  a.appendChild(t);

  return a;
}

const logo = "Genshin Build";
const home = link("Home", "../index.html");
const about = link("About", "#");
const credits = link("Credits", "#");

const navItems = [logo, home, about, credits];

navItems.forEach((item) => {
  linkWrapper.append(item);
});

navbar.append(linkWrapper, searchWrapper);
