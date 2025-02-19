const cards = [
  {
    id: 1,
    name: "hellohello2",
    image: "ronaldo1.jpg",
    images: [
      { src: "ronaldo1.jpg", name: "Ronaldo 1", price: 1000 },
      { src: "ronaldo2.jpg", name: "Ronaldo 2", price: 1200 },
      { src: "ronaldo3.jpg", name: "Ronaldo 3", price: 1500 }
    ],
    facebookLink: "https://facebook.com/ronaldo_card"
  },
  {
    id: 2,
    name: "Lionel Messi",
    image: "messi.jpg",
    images: [
      { src: "messi1.jpg", name: "Messi 1", price: 1100 },
      { src: "messi2.jpg", name: "Messi 2", price: 1300 },
      { src: "messi3.jpg", name: "Messi 3", price: 1400 }
    ],
    facebookLink: "https://facebook.com/messi_card"
  },
  {
    id: 3,
    name: "Neymar Jr.",
    image: "neymar.jpg",
    images: [
      { src: "neymar1.jpg", name: "Neymar 1", price: 1500 },
      { src: "neymar2.jpg", name: "Neymar 2", price: 1600 },
      { src: "neymar3.jpg", name: "Neymar 3", price: 1700 }
    ],
    facebookLink: "https://facebook.com/neymar_card"
  },
  {
    id: 4,
    name: "HELLOHELLO",
    image: "kutyus.jpg",
    images: [
      { src: "camavinga.jpg", name: "Camavinga", price: 900 },
      { src: "foden.jpg", name: "Foden", price: 950 },
      { src: "haaland.jpg", name: "Haaland", price: 1000 },
      { src: "haalandszamozas.jpg", name: "Haaland Szám 2", price: 1050 },
      { src: "hulianalvarez.jpg", name: "Hulian Alvarez", price: 980 },
      { src: "lineker.jpg", name: "Lineker", price: 970 },
      { src: "simacamavinga.jpg", name: "Sima Camavinga", price: 900 }
    ],
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

  // Képek és árak hozzáadása
  card.images.forEach(image => {
    const imageInfoElement = document.createElement('div');
    imageInfoElement.classList.add('image-info');

    // Név és ár a kép előtt
    imageInfoElement.innerHTML = `
      <p><strong>Név:</strong> ${image.name}</p>
      <p><strong>Ár:</strong> ${image.price} Ft</p>
    `;
    imagesContainer.appendChild(imageInfoElement);

    // Kép
    const imgElement = document.createElement('img');
    imgElement.src = image.src;
    imagesContainer.appendChild(imgElement);
  });

  const facebookButton = document.getElementById('facebook-button');
  facebookButton.href = card.facebookLink;

  const infoContainer = document.getElementById('card-info');
  infoContainer.innerHTML = `
    <p><strong>Név:</strong> ${card.name}</p>
  `;
});

loadCards();
