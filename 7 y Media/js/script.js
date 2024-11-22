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

// Baraja
const suits = ["♠", "♥", "♦", "♣"];
const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

// Crear la baraja
function createDeck() {
    deck = [];
    suits.forEach(suit => {
        values.forEach(value => {
            deck.push({ suit, value });
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
    let aces = 0;
    hand.forEach(card => {
        if (["J", "Q", "K"].includes(card.value)) {
            score += 10;
        } else if (card.value === "A") {
            score += 11;
            aces += 1;
        } else {
            score += parseInt(card.value);
        }
    });
    while (score > 21 && aces) {
        score -= 10;
        aces--;
    }
    return score;
}

// Dibujar cartas
function renderCards(hand, container) {
    container.innerHTML = "";
    hand.forEach(card => {
        const cardDiv = document.createElement("div");
        cardDiv.className = "card bg-light text-dark m-1";
        cardDiv.style.width = "50px";
        cardDiv.style.height = "75px";
        cardDiv.innerHTML = `<div class="text-center">${card.value}<br>${card.suit}</div>`;
        container.appendChild(cardDiv);
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

    updateUI();
}

// Pedir carta
function hit() {
    if (!gameOver) {
        playerHand.push(deck.pop());
        updateUI();
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
}

// Actualizar interfaz
function updateUI() {
    renderCards(playerHand, playerCardsDiv);
    renderCards(dealerHand, dealerCardsDiv);
    playerScoreEl.textContent = `Puntuación: ${calculateScore(playerHand)}`;
    dealerScoreEl.textContent = `Puntuación: ${calculateScore(dealerHand)}`;
}

// Finalizar juego
function endGame(message) {
    statusMessage.textContent = message;
    hitBtn.disabled = true;
    standBtn.disabled = true;
    startGameBtn.disabled = false;
    gameOver = true;
}

// Event listeners
startGameBtn.addEventListener("click", startGame);
hitBtn.addEventListener("click", hit);
standBtn.addEventListener("click", stand);
