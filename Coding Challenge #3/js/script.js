let dolphinsScore01, dolphinsScore02, dolphinsScore03;
let koalasScore01, koalasScore02, koalasScore03;
let dolphinsAverageScore, koalasAverageScore;

if (document.getElementById("scores01").checked) {
  dolphinsScore01 = 96;
  dolphinsScore02 = 108;
  dolphinsScore03 = 89;
  koalasScore01 = 88;
  koalasScore02 = 91;
  koalasScore03 = 110;
} else if (document.getElementById("scores02").checked) {
  dolphinsScore01 = 97;
  dolphinsScore02 = 112;
  dolphinsScore03 = 101;
  koalasScore01 = 109;
  koalasScore02 = 95;
  koalasScore03 = 123;
} else if (document.getElementById("scores03").checked) {
  dolphinsScore01 = 97;
  dolphinsScore02 = 112;
  dolphinsScore03 = 101;
  koalasScore01 = 109;
  koalasScore02 = 95;
  koalasScore03 = 106;
}
console.log(dolphinsScore01);
console.log(dolphinsScore02);
console.log(dolphinsScore03);
console.log(koalasScore01);
console.log(koalasScore02);
console.log(koalasScore03);

dolphinsAverageScore =
  (dolphinsScore01 + dolphinsScore02 + dolphinsScore03) / 3;
koalasAverageScore = (koalasScore01 + koalasScore02 + koalasScore03) / 3;

console.log(dolphinsAverageScore);
console.log(koalasAverageScore);

document.getElementById("DAS").innerHTML = "  " + dolphinsAverageScore;

document.getElementById("KAS").innerHTML = "  " + koalasAverageScore;

if (dolphinsAverageScore > koalasAverageScore) {
  document.getElementById("result").innerHTML = "Dolphis are the winner!!";
} else if (koalasAverageScore > dolphinsAverageScore) {
  document.getElementById("result").innerHTML = "Koalas are the winner!!";
} else if (dolphinsAverageScore === koalasAverageScore) {
  document.getElementById("result").innerHTML =
    "There is no winner. Only a bunch of loosers!!";
}

function clickme() {
  if (document.getElementById("scores01").checked) {
    dolphinsScore01 = 96;
    dolphinsScore02 = 108;
    dolphinsScore03 = 89;
    koalasScore01 = 88;
    koalasScore02 = 91;
    koalasScore03 = 110;
  } else if (document.getElementById("scores02").checked) {
    dolphinsScore01 = 97;
    dolphinsScore02 = 112;
    dolphinsScore03 = 101;
    koalasScore01 = 109;
    koalasScore02 = 95;
    koalasScore03 = 123;
  } else if (document.getElementById("scores03").checked) {
    dolphinsScore01 = 97;
    dolphinsScore02 = 112;
    dolphinsScore03 = 101;
    koalasScore01 = 109;
    koalasScore02 = 95;
    koalasScore03 = 106;
  }
  console.log(dolphinsScore01);
  console.log(dolphinsScore02);
  console.log(dolphinsScore03);
  console.log(koalasScore01);
  console.log(koalasScore02);
  console.log(koalasScore03);

  dolphinsAverageScore =
    (dolphinsScore01 + dolphinsScore02 + dolphinsScore03) / 3;
  koalasAverageScore = (koalasScore01 + koalasScore02 + koalasScore03) / 3;

  console.log(dolphinsAverageScore);
  console.log(koalasAverageScore);

  document.getElementById("DAS").innerHTML = "  " + dolphinsAverageScore;

  document.getElementById("KAS").innerHTML = "  " + koalasAverageScore;

  if (dolphinsAverageScore > koalasAverageScore) {
    document.getElementById("result").innerHTML = "Dolphis are the winner!!";
  } else if (koalasAverageScore > dolphinsAverageScore) {
    document.getElementById("result").innerHTML = "Koalas are the winner!!";
  } else if (dolphinsAverageScore === koalasAverageScore) {
    document.getElementById("result").innerHTML =
      "There is no winner. Only a bunch of loosers!!";
  }
}

// let scores01 = document.getElementById("scores01");
// let scores02 = document.getElementById("scores01");
// let scores03 = document.getElementById("scores01");

// console.log(scores01);

// if (document.getElementById("scores01")) let selection = 01;
// if (document.getElementById("scores02")) let selection = 02;
// if (document.getElementById("scores03")) let selection = 03;
