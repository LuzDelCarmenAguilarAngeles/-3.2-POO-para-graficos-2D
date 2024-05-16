const canvasOOP = document.getElementById("canvasOOP");
const canvasRandom = document.getElementById("canvasRandom");
const canvasMultiple = document.getElementById("canvasMultiple");
const canvasMultipleAcomodado = document.getElementById("canvasMultipleAcomodado");

const ctxOOP = canvasOOP.getContext("2d"); 
const ctxRandom = canvasRandom.getContext("2d");
const ctxMultiple = canvasMultiple.getContext("2d"); 
const ctxMultipleAcomodado = canvasMultipleAcomodado.getContext("2d");

canvasOOP.height = 200;
canvasOOP.width = 300;

canvasRandom.height = 200;
canvasRandom.width = 300;

canvasMultiple.height = 200;
canvasMultiple.width = 300;

canvasMultipleAcomodado.height = 200;
canvasMultipleAcomodado.width = 300;

canvasOOP.style.background = "#ff8";
canvasRandom.style.background = "#AAD4FF";
canvasMultiple.style.background = "#AAD4FF";
canvasMultipleAcomodado.style.background = "#AAD4FF";

class Circle {
    constructor(x, y, radius, color, text, backcolor) {
        this.posX = x;
        this.posY = y;
        this.radius = radius;
        this.color = color;
        this.text = text;
        this.backcolor = backcolor;
    }

    draw(context) {
        context.beginPath();
        context.fillStyle = this.backcolor;
        context.strokeStyle = this.color;
        context.textAlign = "center";
        context.textBaseline = "middle";
        context.font = "20px Arial cursive";

        context.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2, false);
        context.fill();
        context.lineWidth = 2;
        context.stroke();

        context.fillStyle = this.color;
        context.fillText(this.text, this.posX, this.posY);

        context.closePath();
    }
}

// Dibuja un círculo centrado en el canvasOOP
let miCirculo = new Circle(
    canvasOOP.width / 2,
    canvasOOP.height / 2,
    50,
    'red',
    'Tec',
    'rgb(218, 247, 166)'
);
miCirculo.draw(ctxOOP);

// Dibuja un círculo aleatorio en el canvasRandom
let randomX = Math.random() * canvasRandom.width;
let randomY = Math.random() * canvasRandom.height;
let randomRadius = Math.floor(Math.random() * 100 + 30);

let miCirculoRandom = new Circle(
    randomX,
    randomY,
    randomRadius,
    'red',
    'Tec',
    'rgb(218, 247, 166)'
);
miCirculoRandom.draw(ctxRandom);

let arrayCircle = [];

for (let i = 0; i < 10; i++) {
    randomX = Math.random() * canvasMultiple.width; // Reutilizado randomX
    randomY = Math.random() * canvasMultiple.height; // Reutilizado randomY
    randomRadius = Math.floor(Math.random() * 10 + 30); // Reutilizado randomRadius

    let miCirculoMultiple = new Circle(
        randomX,
        randomY,
        randomRadius,
        "blue",
        i + 1,
        "rgb(255, 170, 223)"
    );

    arrayCircle.push(miCirculoMultiple); // Corregido para que añada miCirculoMultiple al array
    arrayCircle[i].draw(ctxMultiple);
}

// Dibuja varios círculos en ambos canvasMultiple y canvasMultipleAcomodado
for (let i = 0; i < 10; i++) {
    randomRadius = Math.floor(Math.random() * 10 + 30);
    randomX = Math.random() * (canvasMultipleAcomodado.width - 2 * randomRadius) + randomRadius;
    randomY = Math.random() * (canvasMultipleAcomodado.height - 2 * randomRadius) + randomRadius;

    let miCirculoMultipleAcomodado = new Circle(
        randomX,
        randomY,
        randomRadius,
        "blue",
        i + 1,
        "rgb(255, 170, 223)"
    );

    miCirculoMultipleAcomodado.draw(ctxMultipleAcomodado);
}


