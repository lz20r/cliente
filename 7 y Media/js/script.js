// Variables
let deck = [];
let playerHand = [];
let dealerHand = [];
let gameOver = false;

// Referencias a elementos HTML
const startGameBtn = document.getElementById("startGame");
const hitBtn = document.getElementById("hit");
const standBtn = document.getElementById("stand");
const statusMessage = document.getElementById("statusMessage");
const playerCardsDiv = document.getElementById("playerCards");
const dealerCardsDiv = document.getElementById("dealerCards");
const playerScoreEl = document.getElementById("playerScore");
const dealerScoreEl = document.getElementById("dealerScore");

// Ruta base de las imágenes
const imagePath = '../assets/img/baraja/';
const backCardImage = `${imagePath}vuelta.png`; // Imagen de carta boca abajo
const suits = ["Bastos", "Copas", "Espadas", "Oros"];
const values = [
    { value: "1", points: 1 },
    { value: "2", points: 2 },
    { value: "3", points: 3 },
    { value: "4", points: 4 },
    { value: "5", points: 5 },
    { value: "6", points: 6 },
    { value: "7", points: 7 },
    { value: "10", points: 10 },
    { value: "11", points: 10 },
    { value: "12", points: 10 },
];

// Crear la baraja
function createDeck() {
    deck = [];
    suits.forEach(suit => {
        values.forEach(card => {
            deck.push({
                suit,
                value: card.value,
                points: card.points,
                imageUrl: `${imagePath}${suit}${card.value}.png`,
            });
        });
    });
}

// Mezclar baraja
function shuffleDeck() {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}

// Calcular puntuación
function calculateScore(hand) {
    let score = 0;
    hand.forEach(card => {
        score += card.points;
    });
    return score;
}

// Dibujar cartas
function renderCards(hand, container, hideFirstCard = false) {
    container.innerHTML = "";
    hand.forEach((card, index) => {
        const cardImg = document.createElement("img");
        cardImg.src = hideFirstCard && index === 0 ? backCardImage : card.imageUrl;
        cardImg.alt = `${card.suit} ${card.value}`;
        cardImg.className = "card-img";
        container.appendChild(cardImg);
    });
}

// Iniciar juego
function startGame() {
    createDeck();
    shuffleDeck();
    playerHand = [deck.pop(), deck.pop()];
    dealerHand = [deck.pop(), deck.pop()];
    gameOver = false;

    hitBtn.disabled = false;
    standBtn.disabled = false;
    startGameBtn.disabled = true;

    updateUI(true);
}

// Pedir carta
function hit() {
    if (!gameOver) {
        playerHand.push(deck.pop());
        updateUI(true);
        const playerScore = calculateScore(playerHand);
        if (playerScore > 21) {
            endGame("Has perdido, te pasaste de 21.");
        }
    }
}

// Plantarse
function stand() {
    if (!gameOver) {
        while (calculateScore(dealerHand) < 17) {
            dealerHand.push(deck.pop());
        }
        const dealerScore = calculateScore(dealerHand);
        const playerScore = calculateScore(playerHand);
        if (dealerScore > 21 || playerScore > dealerScore) {
            endGame("¡Ganaste!");
        } else if (dealerScore === playerScore) {
            endGame("Empate.");
        } else {
            endGame("El Crupier gana.");
        }
    }
    updateUI(false);
}

// Actualizar interfaz
function updateUI(hideDealerCard) {
    renderCards(playerHand, playerCardsDiv);
    renderCards(dealerHand, dealerCardsDiv, hideDealerCard);
    playerScoreEl.textContent = `Puntuación: ${calculateScore(playerHand)}`;
    dealerScoreEl.textContent = `Puntuación: ${hideDealerCard ? "?" : calculateScore(dealerHand)}`;
}

// Finalizar juego
function endGame(message) {
    statusMessage.textContent = message;
    hitBtn.disabled = true;
    standBtn.disabled = true;
    startGameBtn.disabled = false;
    updateUI(false); // Mostrar todas las cartas del crupier
}

// Event listeners
startGameBtn.addEventListener("click", startGame);
hitBtn.addEventListener("click", hit);
standBtn.addEventListener("click", stand);
