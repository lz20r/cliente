/**
 * INFORME DE JUEGO DE BLACKJACK
 * --------------------------------------------------------------
 * @file script.js
 * @description Script que permite jugar a Blackjack.
 * @version 1.0
 * @date 04/11/2022
 * @autor Naiara Zhiyao Lezameta Rodrigo
 * -------------------------------------------------------------- 
 * @variables 
 * @const startGameBtn - Botón para iniciar el juego.
 * @const hitBtn - Botón para pedir carta.
 * @const standBtn - Botón para pasar turno.
 * @const dealerCardsDiv - Div para mostrar las cartas del crupier.
 * @const playerCardsDiv - Div para mostrar las cartas del jugador.
 * @const dealerScoreEl - Elemento para mostrar la puntuación del crupier.
 * @const playerScoreEl - Elemento para mostrar la puntuación del jugador.
 * @const gameResultModal - Modal para mostrar el resultado del juego.
 * @const gameResultMessage - Elemento para mostrar el mensaje del resultado del juego.
 * @const suits - Array que contiene los palos de la baraja.
 * @const values - Array que contiene los valores de las cartas.
 * @const cardBackImage - Ruta de la imagen de la carta de vuelta. 
 * @let deck - Array que contiene la baraja.
 * @let playerHand - Array que contiene las cartas del jugador.
 * @let dealerHand - Array que contiene las cartas del crupier.
 * @let gameOver - Booleano que indica si el juego ha terminado.
 * --------------------------------------------------------------
 * @function createDeck() - Función que crea la baraja.
 * @function shuffleDeck() - Función que mezcla la baraja.
 * @function getCardPoints() - Función que obtiene los puntos de una carta.
 * @function renderCards() - Función que muestra las cartas.
 * @function updateUI() - Función que actualiza la interfaz.
 * @function calculateScore() - Función que calcula la puntuación.
 * @function startGame() - Función que inicia el juego.
 * @function hit() - Función que pide carta.
 * @function stand() - Función que pasa turno.
 * @function endGame() - Función que finaliza el juego.
 * @function resetGame() - Función que reinicia el juego.
 * --------------------------------------------------------------
  
 * 
 */


// Variables
const startGameBtn = document.getElementById("startGame");
const hitBtn = document.getElementById("hit");
const standBtn = document.getElementById("stand");
const dealerCardsDiv = document.getElementById("dealerCards");
const playerCardsDiv = document.getElementById("playerCards");
const dealerScoreEl = document.getElementById("dealerScore");
const playerScoreEl = document.getElementById("playerScore");
const gameResultModal = new bootstrap.Modal(document.getElementById("gameResultModal"));
const gameResultMessage = document.getElementById("gameResultMessage");

let deck = [];
let playerHand = [];
let dealerHand = [];
let gameOver = false;

// Baraja (cartas españolas)
const suits = ["Bastos", "Copas", "Espadas", "Oros"];
const values = ["1", "2", "3", "4", "5", "6", "7", "10", "11", "12"];
const cardBackImage = "../assets/img/baraja/vuelta.png";

// Crear la baraja
function createDeck() {
    deck = [];
    suits.forEach((suit) => {
        values.forEach((value) => {
            deck.push({
                suit,
                value,
                points: getCardPoints(value),
                imageUrl: `../assets/img/baraja/${suit}${value}.png`,
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

// Obtener puntos de una carta
function getCardPoints(value) {
    if (["10", "11", "12"].includes(value)) return 10;
    return parseInt(value);
}

// Mostrar cartas
function renderCards(hand, container, hideFirstCard = false) {
    container.innerHTML = "";
    hand.forEach((card, index) => {
        const cardDiv = document.createElement("div");
        cardDiv.className = "card-img";
        const img = document.createElement("img");
        img.src = hideFirstCard && index === 0 ? cardBackImage : card.imageUrl;
        cardDiv.appendChild(img);
        if (hideFirstCard && index === 0) {
            cardDiv.classList.add("flipped");
        }
        container.appendChild(cardDiv);
    });
}

// Actualizar interfaz
function updateUI(hideDealerCard) {
    renderCards(playerHand, playerCardsDiv);
    renderCards(dealerHand, dealerCardsDiv, hideDealerCard);
    playerScoreEl.textContent = `Puntuación: ${calculateScore(playerHand)}`;
    dealerScoreEl.textContent = `Puntuación: ${hideDealerCard ? "?" : calculateScore(dealerHand)}`;
}

// Calcular puntuación
function calculateScore(hand) {
    return hand.reduce((acc, card) => acc + card.points, 0);
}

// Función para iniciar el juego
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
        if (calculateScore(playerHand) > 21) {
            endGame("¡Te pasaste de 21! Has perdido.");
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
        } else if (playerScore === dealerScore) {
            endGame("Es un empate.");
        } else {
            endGame("El ordenador gana.");
        }
    }
}

// Finalizar juego
function endGame(message) {
    gameOver = true;
    updateUI(false);
    hitBtn.disabled = true;
    standBtn.disabled = true;
    startGameBtn.disabled = false;
    gameResultMessage.textContent = message;
    gameResultModal.show();
}

// Volver a jugar
document.getElementById("playAgainButton").addEventListener("click", function () {
    resetGame();
    const modal = bootstrap.Modal.getInstance(document.getElementById('gameResultModal'));
    modal.hide();
});

function resetGame() {
    // Reiniciar las variables
    deck = [];
    playerHand = [];
    dealerHand = [];
    gameOver = false;

    // Volver a habilitar los botones
    hitBtn.disabled = false;
    standBtn.disabled = false;
    startGameBtn.disabled = false;

    // Limpiar las cartas en la interfaz
    playerCardsDiv.innerHTML = "";
    dealerCardsDiv.innerHTML = "";
    playerScoreEl.textContent = "Puntuación: 0";
    dealerScoreEl.textContent = "Puntuación: ?";

    // Volver a crear y mezclar la baraja
    createDeck();
    shuffleDeck();

    // Iniciar el juego
    startGame();
    updateUI(true);
}


function resetGame() {
    console.log("El juego ha sido reiniciado");
}


// Event listeners
startGameBtn.addEventListener("click", startGame);
hitBtn.addEventListener("click", hit);
standBtn.addEventListener("click", stand);
