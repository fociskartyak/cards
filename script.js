const cards = [
  {
    id: 1,
    name: "Cristiano Ronaldo",
    image: "ronaldo.jpg",
    images: ["ronaldo1.jpg", "ronaldo2.jpg", "ronaldo3.jpg"],
    facebookLink: "https://facebook.com/ronaldo_card"
  },
  {
    id: 2,
    name: "Lionel Messi",
    image: "messi.jpg",
    images: ["messi1.jpg", "messi2.jpg", "messi3.jpg"],
    facebookLink: "https://facebook.com/messi_card"
  },
  {
    id: 3,
    name: "Neymar Jr.",
    image: "neymar.jpg",
    images: ["neymar1.jpg", "neymar2.jpg", "neymar3.jpg"],
    facebookLink: "https://facebook.com/neymar_card"
  },
  {
    id: 4,
    name: "HELLOHELLO",
    image: "kutyus.jpg",  // Itt adunk hozzá a kutyus képet
    images: ["camavinga.jpg", "foden.jpg", "haaland.jpg", "haalandszamozas.jpg", "hulianalvarez.jpg", "lineker.jpg", "simacamavinga.jpg"],
    facebookLink: "https://www.facebook.com/share/p/15zAg7Jinu/?mibextid=wwXIfr"
  }
];

function loadCards() {
  const cardList = document.getElementById('card-list');
  cardList.innerHTML = '';

  cards.forEach(card => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('col');
    cardElement.innerHTML = `
      <div class="card" data-bs-toggle="modal" data-bs-target="#cardDetailModal" data-id="${card.id}">
        <img src="${card.image}" alt="${card.name}" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">${card.name}</h5>
        </div>
      </div>
    `;
    cardList.appendChild(cardElement);
  });
}

$('#card-list').on('click', '.card', function() {
  const cardId = $(this).data('id');
  const card = cards.find(c => c.id === cardId);

  const imagesContainer = document.getElementById('card-images');
  imagesContainer.innerHTML = '';
  card.images.forEach(image => {
    const imgElement = document.createElement('img');
    imgElement.src = image;
    imagesContainer.appendChild(imgElement);
  });

  const facebookButton = document.getElementById('facebook-button');
  facebookButton.href = card.facebookLink;

  const infoContainer = document.getElementById('card-info');
  infoContainer.innerHTML = `<p><strong>Név:</strong> ${card.name}</p>`;
});

loadCards();
