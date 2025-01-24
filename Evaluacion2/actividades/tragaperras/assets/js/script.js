document.addEventListener("DOMContentLoaded", () => {
    const symbols = ["💎", "🍋", "🍉", "⭐", "💷"]; // Posibilidades de la máquina
    const slotMachine = document.getElementById("slot-machine");
    const playButton = document.getElementById("play-button");
    const resultMessage = document.getElementById("result-message");
    const styleSheet = document.getElementById("dynamic-styles").sheet;

    // Crear clases CSS dinámicamente
    symbols.forEach((symbol, index) => {
        styleSheet.insertRule(
            `.symbol-${index}::after { content: '${symbol}'; font-size: 4rem; }`,
            styleSheet.cssRules.length
        );
    });

    // Crear los tres elementos de la máquina con diseño de Bootstrap
    const slots = [];
    for (let i = 0; i < 3; i++) {
        const slot = document.createElement("div");
        slot.classList.add("slot", `symbol-${Math.floor(Math.random() * symbols.length)}`);
        slot.style.width = "100px";
        slot.style.height = "100px";
        slot.style.border = "2px solid #fff";
        slot.style.borderRadius = "10px";
        slot.style.margin = "0 10px";
        slot.style.display = "flex";
        slot.style.justifyContent = "center";
        slot.style.alignItems = "center";
        slot.style.backgroundColor = "#343a40";
        slotMachine.appendChild(slot);
        slots.push(slot);
    }

    // Acción al pulsar el botón Jugar
    playButton.addEventListener("click", () => {
        let currentClasses = [];

        // Cambiar clases aleatoriamente
        slots.forEach((slot) => {
            const randomClass = `symbol-${Math.floor(Math.random() * symbols.length)}`;
            slot.classList.remove(...slot.classList);
            slot.classList.add("slot", randomClass);
            currentClasses.push(randomClass);
        });

        // Verificar si todos los símbolos son iguales
        const isWinner = currentClasses.every((cls) => cls === currentClasses[0]);

        // Mostrar mensaje de resultado y cuando se pierde mostar el boton de volver a intentar usando 
        // el botón de volver a intentar que se encuentra en el html
        resultMessage.textContent = isWinner ? "¡Has ganado!" : "¡Has perdido!";
        if (!isWinner) {
            playButton.style.display = "block";
        } else {
            playButton.style.display = "none";
        }

        // Ocultar el botón de volver a intentar
        retryButton.style.display = "none";

        // Mostrar mensaje de resultado durante 3 segundos
        setTimeout(() => {
            resultMessage.textContent = "";
        })

        // Mostrar mensaje de resultado durante 3 segundos
        setTimeout(() => {
            resultMessage.textContent = "";
        })
    });
});
