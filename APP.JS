let you = document.querySelector("#you");
let crush = document.querySelector("#crush");
let percent = document.querySelector("#Percent");
let btn = document.querySelector("button");
let char = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let youconvert;
let crushconvert;
let no;
let result;

btn.addEventListener("click", () => {
  if ((you.value === "") || (crush.value === "")) {
    alert("Please Enter Names");
  }else{
  youconvert = convertNo(you.value);
  crushconvert = convertNo(crush.value);
  result = calculate(youconvert, crushconvert);

  if (result > 100) {
    result = result - 50;
    percent.innerText = `${result}%`;
  } else if (result < 40) {
    result = result + 50;
    percent.innerText = `${result}%`;
  } else {
    percent.innerText = `${result}%`;
  }}
});

let convertNo = (Name) => {
  let num = 0;
  for (let i = 0; i < Name.length; i++) {
    for (let j = 0; j < char.length; j++) {
      if (Name[i] == char[j]) {
        num = num + j;
        break;
      }
    }
  }
  return num;
};

let calculate = (you, crush) => {
  let newstr = you + crush;
  return newstr;
};
