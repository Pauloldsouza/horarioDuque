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

const staffList = document.querySelector(".staff");
const restaurantes = document.querySelectorAll(".duque");

staff.forEach((person) => {
  const btn = document.createElement("button");
  btn.innerText = person;
  staffList.appendChild(btn);

  btn.addEventListener("click", function () {
    const card = document.createElement("div");
    card.className = "confirmQuestion";
    card.innerHTML = `
      <p>Onde ${person} trabalha hoje?</p>
      <div>
      <button class="confirm 5">05</button>
      <button class="confirm 21">21</button>
      <button class="confirm 33">33</button></div>
      <button class="folga">X</button>
    `;

    restaurantes.forEach((restaurante) => {
      restaurante.addEventListener("click", function () {
        // Implemente a lógica para adicionar a pessoa ao restaurante aqui
        console.log(
          `${person} adicionado ao restaurante ${restaurante.classList[1]}`
        );
        document.body.removeChild(card);
      });
    });

    const cancelButton = card.querySelector(".folga");
    cancelButton.addEventListener("click", function () {
      document.body.removeChild(card);
    });

    document.body.appendChild(card);
  });
});
