//cards
const container = document.querySelector(".container");

const amber = {
  name: "Amber",
  icon: "./characters/Amber/Icon.png",
  build: "./characters/Amber/build.html",
  element: "Pyro",
  weapon: "Bow",
};
const albedo = { icon: "./characters/Albedo/Icon.png" };
const aloy = { icon: "./characters/Aloy/Icon.png" };
const aratakiitto = { icon: "./characters/AratakiItto/Icon.png" };
const barbara = { icon: "./characters/Barbara/Icon.png" };
const beidou = { icon: "./characters/Beidou/Icon.png" };
const bennett = { icon: "./characters/Bennett/Icon.png" };
const candace = { icon: "./characters/Candace/icon.png" };
const chongyun = { icon: "./characters/Chongyun/Icon.png" };
const collei = { icon: "./characters/Collei/Icon.png" };
const cyno = { icon: "./characters/Cyno/Icon.png" };
const diluc = { icon: "./characters/Diluc/Icon.png" };
const diona = { icon: "./characters/Diona/Icon.png" };
const dori = { icon: "./characters/Dori/Icon.png" };
const eula = { icon: "./characters/Eula/Icon.png" };
const fischl = { icon: "./characters/Fischl/Icon.png" };
const ganyu = { icon: "./characters/Ganyu/Icon.png" };
const gorou = { icon: "./characters/Gorou/Icon.png" };
const huTao = { icon: "./characters/HuTao/Icon.png" };
const jean = { icon: "./characters/Jean/Icon.png" };
const kaedeharaKazuha = { icon: "./characters/KaedeharaKazuha/Icon.png" };
const kaeya = { icon: "./characters/Kaeya/Icon.png" };
const kamisatoAyaka = { icon: "./characters/KamisatoAyaka/Icon.png" };
const kamistaoAyato = { icon: "./characters/KamisatoAyato/Icon.png" };
const keqing = { icon: "./characters/Keqing/Icon.png" };
const klee = { icon: "./characters/Klee/Icon.png" };
const kujouSara = { icon: "./characters/KujouSara/Icon.png" };
const kukiShinobu = { icon: "./characters/KukiShinobu/Icon.png" };
const layla = { icon: "./characters/Layla/Icon.png" };
const lisa = { icon: "./characters/Lisa/Icon.png" };
const mona = { icon: "./characters/Mona/Icon.png" };
const nahida = { icon: "./characters/Nahida/Icon.png" };
const nilou = { icon: "./characters/Nilou/Icon.png" };
const ningguang = { icon: "./characters/Ningguang/Icon.png" };
const noelle = { icon: "./characters/Noelle/Icon.png" };
const qiqi = { icon: "./characters/Qiqi/Icon.png" };
const raidenShogun = { icon: "./characters/RaidenShogun/Icon.png" };
const razor = { icon: "./characters/Razor/Icon.png" };
const rosaria = { icon: "./characters/Rosaria/Icon.png" };
const SangonomiyaKokomi = { icon: "./characters/SangonomiyaKokomi/Icon.png" };
const sayu = { icon: "./characters/Sayu/Icon.png" };
const shenhe = { icon: "./characters/Shenhe/Icon.png" };
const ShikanoinHeizou = { icon: "./characters/ShikanoinHeizou/icon.png" };
const sucrose = { icon: "./characters/Sayu/Icon.png" };
const tartaglia = { icon: "./characters/Tartaglia/Icon.png" };
const thoma = { icon: "./characters/Thoma/Icon.png" };
const tighnari = { icon: "./characters/Tighnari/Icon.png" };
const traveler = { icon: "./characters/Traveler/Icon.png" };
const venti = { icon: "./characters/Venti/Icon.png" };
const xiangling = { icon: "./characters/Xiangling/Icon.png" };
const xiao = { icon: "./characters/Xiao/Icon.png" };
const xinyan = { icon: "./characters/Xinyan/Icon.png" };
const yaeMiko = { icon: "./characters/YaeMiko/Icon.png" };
const yanfei = { icon: "./characters/Yanfei/Icon.png" };
const yelan = { icon: "./characters/Yelan/Icon.png" };
const yoimiya = { icon: "./characters/Yoimiya/Icon.png" };
const yunjin = { icon: "./characters/YunJin/Icon.png" };
const zhongli = { icon: "./characters/Zhongli/Icon.png" };

const characters = [
  amber,
  albedo,
  aloy,
  aratakiitto,
  barbara,
  bennett,
  beidou,
  candace,
  chongyun,
  collei,
  cyno,
  diluc,
  diona,
  dori,
  eula,
  fischl,
  ganyu,
  gorou,
  huTao,
  jean,
  kaedeharaKazuha,
  kaeya,
  kamisatoAyaka,
  kamistaoAyato,
  keqing,
  klee,
  kujouSara,
  kukiShinobu,
  layla,
  lisa,
  mona,
  nahida,
  nilou,
  ningguang,
  noelle,
  qiqi,
  raidenShogun,
  razor,
  rosaria,
  SangonomiyaKokomi,
  sayu,
  shenhe,
  ShikanoinHeizou,
  sucrose,
  tartaglia,
  thoma,
  tighnari,
  traveler,
  venti,
  xiangling,
  xiao,
  xinyan,
  yaeMiko,
  yanfei,
  yelan,
  yoimiya,
  yunjin,
  zhongli,
];

function card(icon, build) {
  const link = document.createElement("a");
  link.setAttribute("href", build);

  const image = document.createElement("img");
  image.setAttribute("src", icon);
  image.setAttribute("class", "card");
  link.appendChild(image);
  return link;
}
characters.forEach((character) => {
  container.appendChild(card(character.icon, character.build));
});
