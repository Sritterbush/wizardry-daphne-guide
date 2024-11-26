https://opensheet.elk.sh/1bdjOO2Utzk9AA5AyflNH36KM7BERLP9r55VPHCu8emo/Characters
let btnget = document.querySelector("button");
let inputEl = document.querySelector("input");
let characterEl = document.querySelector("#Character");
let rarityEl = document.querySelector("#Rarity");
let raceEl = document.querySelector("#Race");
let genderEl = document.querySelector("#Gender");
let personalityEl = document.querySelector("#Personality");

async function (showCharacter() {
  const sheetId = "1bdjOO2Utzk9AA5AyflNH36KM7BERLP9r55VPHCu8emo";
  let tabId = "Characters";
  let url = `https://opensheet.elk.sh/${sheetId}/${tabId}`;

  const response = await fetch(url);
  const data = await response.json();
  const character = data.find(v => v.character == inputEl.value);
  characterEl.innerText = `${character.Character}`;
  rarityEl.innerText = `${character.Rarity}`;
  raceEl.innerText = `${character.Race}`;
  genderEl.innerText = `${character.Gender}`;
  personalityEl.innerText = `${character.Personality}`;
}
