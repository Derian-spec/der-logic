const soal = [
  {
    question: "¬(P∨(Q∧R)) = ",
    answers: ["¬P∧(¬Q∨¬R)", "¬P∧¬Q∧¬R", "¬P∧(¬Q∧¬R)", "¬P∨(¬Q∧¬R)"],
    correct: "¬P∧(¬Q∨¬R)",
  },
  {
    question: `
    Klub Robotika

Di sebuah sekolah, terdapat tiga siswa: Guin, Lance, dan Gosen yang mengikuti seleksi tim robotika.
Diketahui pernyataan berikut:

Jika Guin lolos seleksi, maka Lance juga lolos.

Jika Lance lolos, maka Gosen juga lolos.

Gosen tidak lolos seleksi.

Kesimpulan yang pasti benar adalah: `,
    answers: ["Guin lolos seleksi", "Lance lolos seleksi", "Guin tidak lolos seleksi", "Tidak dapat ditentukan"],
    correct: "Guin tidak lolos seleksi",
  },
  {
    question: `
    Lampu dan Alarm

Di sebuah rumah terdapat sistem keamanan otomatis dengan aturan berikut:
1. Jika pintu dibuka, maka alarm berbunyi.
2. Jika alarm berbunyi, maka lampu menyala.
3. Jika lampu tidak menyala, maka pemilik rumah tidak terbangun.
Suatu malam diketahui pemilik rumah terbangun.
Kesimpulan yang pasti benar adalah:
`,
    answers: ["Alarm berbunyi", "Pintu dibuka", "Lampu menyala", "Alarm tidak berbunyi"],
    correct: "Lampu menyala",
  },
  {
    question: `
Transformasi Logika

Misalkan:
P : Hari ini hujan
Q : Saya membawa payung
R : Saya tidak kehujanan

Diketahui pernyataan:
Jika hari ini hujan maka saya membawa payung
Jika saya membawa payung maka saya tidak kehujanan

Manakah kesimpulan yang pasti benar?
`,
    answers: ["Jika hari ini hujan maka saya tidak kehujanan", "Jika saya tidak membawa payung maka tidak hujan", "Jika saya tidak kehujanan maka saya membawa payung", "Jika tidak hujan maka saya tidak membawa payung"],
    correct: "Jika hari ini hujan maka saya tidak kehujanan",
  },
];

let index = 0;
let score = 0;
let selectedAnswer = null;

function tampilSoal() {
  selectedAnswer = null;

  const q = soal[index];

  document.getElementById("questionNumber").innerText = "Soal " + (index + 1) + " dari " + soal.length;

  document.getElementById("question").innerHTML = q.question;

  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  q.answers.forEach((jawaban) => {
    const button = document.createElement("button");
    button.innerText = jawaban;

    button.addEventListener("click", () => {
      selectedAnswer = jawaban;

      const buttons = document.querySelectorAll("#answers button");
      buttons.forEach((btn) => btn.classList.remove("selected"));

      button.classList.add("selected");
    });

    answersDiv.appendChild(button);
  });
}

function nextQuestion() {
  if (selectedAnswer === null) {
    alert("Pilih jawaban terlebih dahulu!");
    return;
  }

  if (selectedAnswer === soal[index].correct) {
    score++;
  }

  if (index < soal.length - 1) {
    index++;
    tampilSoal();
  } else {
    tampilkanHasil();
  }
}

function tampilkanHasil() {
  document.getElementById("question").style.display = "none";
  document.getElementById("answers").style.display = "none";

  document.querySelector(".start-btn").style.display = "none";

  document.getElementById("result").style.display = "block";

  document.getElementById("scoreText").innerText = "Skor kamu: " + score + " dari " + soal.length;
}

tampilSoal();
