/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronouns = ["the", "our"];
  let adjs = ["great", "big"];
  let nouns = ["jogger", "racoon"];
  let tlds = [
    ".com",
    ".net",
    ".us",
    ".io",
    ".edu",
    ".org",
    ".biz",
    ".gov",
    ".space",
    ".ru",
    ".de",
    ".uk",
    ".fr",
    ".es"
  ];

  let domainNames = [];

  //pronouns
  //.filter(item => {
  //return item[0].toLowerCase() === "a";
  //})
  //.forEach(article => {
  //console.log(pronoun);
  //});

  for (let pronoun of pronouns) {
    for (let adj of adjs) {
      for (let noun of nouns) {
        for (let tld of tlds) {
          domainNames.push(`${pronoun}${adj}${noun}${tld}`);
        }
      }
    }
  }

  try {
    throw new Error("Oh no, something broke!");
  } catch (error) {
    console.log(error);
  }

  document.querySelector("#generate").onclick = () => {
    document.querySelector("#domain").innerHTML = `<h1>${
      domainNames[Math.floor(Math.random() * domainNames.length)]
    }</h1>`;
  };
};
