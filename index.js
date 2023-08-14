const staff = [
  "Paulo",
  "Elivelton",
  "Sujina",
  "Susmita",
  "Juliana",
  "Eliseu",
  "Carol",
  "Sudip",
  "Pawan",
  "Carla",
  "Mayra",
  "Junior",
  "Pedro",
];

const team5 = [];
const team21 = [];
const team33 = [];

const staffList = document.querySelector(".staff");
staff.forEach((person) => {
  const btn = document.createElement("button");
  btn.innerText = person;
  staffList.append(btn);
  btn.addEventListener("click", function () {
    const card = document.createElement("div");
    card.className = "confirmQuestion";
    document.body.appendChild(card);
  });
});
