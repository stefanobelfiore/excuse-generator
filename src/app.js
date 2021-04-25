/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
const PRONOUN = ["A ", "The ", "My "];
const SUBJECT = ["dog ", "turtle ", "bird ", "Jogger ", "Driver "];
const ACTION = ["ate ", "peed ", "crushed ", "broke ", "took "];
const WHAT = ["my homework ", "the keys ", "the car ", "my shoes "];
const WHEN = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];
window.onload = function() {
  generateExcuse(printExcuse());
};
let inventExcuse = () => {
  let pronounIndex = Math.floor(Math.random() * PRONOUN.length);
  let subjectIndex = Math.floor(Math.random() * SUBJECT.length);
  let actionIndex = Math.floor(Math.random() * ACTION.length);
  let whatIndex = Math.floor(Math.random() * WHAT.length);
  let whenIndex = Math.floor(Math.random() * WHEN.length);
  let pronounExcuse = PRONOUN[pronounIndex];
  let subjectExcuse = SUBJECT[subjectIndex];
  let actionExcuse = ACTION[actionIndex];
  let whatExcuse = WHAT[whatIndex];
  let whenExcuse = WHEN[whenIndex];
  return pronounExcuse.concat(
    subjectExcuse,
    actionExcuse,
    whatExcuse,
    whenExcuse
  );
};
let printExcuse = () => {
  let myExcuse = document.querySelector("#excuse");
  myExcuse.innerHTML = inventExcuse();
};
let generateExcuse = () => {
  let myButton = document.querySelector("#buttonExcuse");
  myButton.addEventListener("click", event => {
    printExcuse();
  });
};
