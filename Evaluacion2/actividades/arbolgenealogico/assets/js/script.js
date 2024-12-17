// Estructura del árbol genealógico
const familyTree = {
    name: "Reina Isabel II (1926-2022)",
    description: "Antigua monarca del Reino Unido",
    children: [
        {
            name: "Rey Carlos III",
            description: "Hijo mayor de Isabel II y actual Rey del Reino Unido",
            children: [
                {
                    name: "Príncipe William",
                    description: "Primogénito de Carlos III, heredero al trono",
                    children: [
                        { name: "Príncipe George", description: "Hijo mayor de William, segundo en la línea de sucesión", children: [] },
                        { name: "Princesa Charlotte", description: "Hija de William, tercera en la línea de sucesión", children: [] },
                        { name: "Príncipe Louis", description: "Hijo menor de William, cuarto en la línea de sucesión", children: [] },
                    ],
                },
                {
                    name: "Príncipe Harry",
                    description: "Segundo hijo de Carlos III, conocido por sus actividades humanitarias",
                    children: [
                        { name: "Archie Mountbatten-Windsor", description: "Hijo mayor de Harry y Meghan Markle", children: [] },
                        { name: "Lilibet Mountbatten-Windsor", description: "Hija menor de Harry y Meghan Markle", children: [] },
                    ],
                },
            ],
        },
        {
            name: "Princesa Ana",
            description: "Única hija de Isabel II, conocida por su labor humanitaria",
            children: [
                {
                    name: "Peter Phillips",
                    description: "Hijo mayor de Ana, no tiene título real",
                    children: [
                        { name: "Savannah Phillips", description: "Hija mayor de Peter Phillips", children: [] },
                        { name: "Isla Phillips", description: "Hija menor de Peter Phillips", children: [] },
                    ],
                },
                {
                    name: "Zara Tindall",
                    description: "Hija menor de Ana, ecuestre olímpica",
                    children: [
                        { name: "Mia Tindall", description: "Hija mayor de Zara Tindall", children: [] },
                        { name: "Lena Tindall", description: "Hija de Zara Tindall", children: [] },
                        { name: "Lucas Tindall", description: "Hijo menor de Zara Tindall", children: [] },
                    ],
                },
            ],
        },
        {
            name: "Príncipe Andrés",
            description: "Tercer hijo de Isabel II, conocido como Duque de York",
            children: [
                {
                    name: "Princesa Beatriz",
                    description: "Hija mayor de Andrés, conocida por su estilo y labores benéficas",
                    children: [
                        { name: "Sienna Mapelli Mozzi", description: "Hija de Beatriz y Edoardo Mapelli Mozzi", children: [] },
                    ],
                },
                {
                    name: "Princesa Eugenia",
                    description: "Hija menor de Andrés, involucrada en actividades caritativas",
                    children: [
                        { name: "August Brooksbank", description: "Hijo de Eugenia y Jack Brooksbank", children: [] },
                    ],
                },
            ],
        },
        {
            name: "Príncipe Eduardo",
            description: "Hijo menor de Isabel II, conocido como Duque de Edimburgo",
            children: [
                { name: "Lady Louise Windsor", description: "Hija mayor de Eduardo", children: [] },
                { name: "James, vizconde de Severn", description: "Hijo menor de Eduardo", children: [] },
            ],
        },
    ],
};

// Función recursiva para generar el árbol
function createTree(node) {
    if (!node) return "";

    let html = `
<li>
    <a href="javascript:void(0)"> 
        ${node.name} 
    </a>
    <p style="margin-left: 20px; font-size: 0.9em; color: gray;">${node.description}</p>
</li>`;

    if (node.children && node.children.length > 0) {
        html += `<ul>`;
        node.children.forEach((child) => {
            html += createTree(child);
        });
        html += `</ul>`;
    }

    return html;
}

// Inicializar el árbol
document.addEventListener("DOMContentLoaded", () => {
    const treeContainer = document.getElementById("tree-container");
    const treeHtml = `<ul>${createTree(familyTree)}</ul>`;
    treeContainer.innerHTML = treeHtml;

    // Agregar eventos a los nodos
    const treeNodes = treeContainer.querySelectorAll("a");
    treeNodes.forEach((node) => {
        node.addEventListener("click", function (event) {
            event.stopPropagation();
            const description = this.nextElementSibling.textContent;
            alert(`Persona: ${this.textContent.trim()}\nDescripción: ${description.trim()}`);
        });
    });
});
