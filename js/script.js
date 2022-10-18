/*
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
*/


/*function randomNumber*/
function randomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*Function play: funzione principale dove viene strutturata la griglia di grancìdezza 7*7, 9*9, e 10*10 */
const playButton =  document.getElementById('play');
function play(){
    console.log('Start game');
    let numSquare;
    let bombsInField = 16;
    const bombsPosition = [];


    const playGround = document.getElementById('playGround');
    playGround.innerHTML = '';

    const levelHtml = document.getElementById('level');
    const level = levelHtml.value;

    /*function drawGrid: funzione interna alla function play che genera il terreno di gioco */
    function drawGrid(){
        const grid = document.createElement('div');
        grid.className = 'grid';
        // appendo le celle alla griglia
        for(let i = 1; i <= numSquare; i++){
            const square = drawSquare(i);
            grid.appendChild(square);
        }
        // appendo la griglia al campo di gioco
        playGround.appendChild(grid);
    }

    /*function drawSquare: funzione interna alla function play che genera le celle */
    function drawSquare(num){
        const squarePerline = Math.sqrt(numSquare);
        const square = document.createElement('div');
        square.className = 'cell';
        square.style.width = `calc(100% / ${squarePerline})`;
        square.style.height = `calc(100% / ${squarePerline})`;
        square.innerHTML = `<span>${num}</span>`;
        square.addEventListener('click', function() {
            square.classList.add('green'); // si può anche usare this al posto di square in questo caso
        })
        return square;
    }

    /*switch case choose level to play 1 2 or 3 */
    /*switch case bomb quantity level 1 2 or 3 */
    switch(level){
        case '1':
        default:
            numSquare = 100; 
        break;

        case '2':
            numSquare = 81;
        break;

        case '3':
            numSquare = 49;
        break;
    }

    /*ciclo while per mettere in griglia le bombe in posizione randomica */
    /*ciclo for per creazione bombe: richiamo dalla libreria.js la function randomNumber*/ 
    while(bombsPosition.length < bombsInField){
        const bomb = randomNumber(1, numSquare);
        if(!bombsPosition.includes(bomb)){
            bombsPosition.push(bomb);
        }
    }

    /*Richiamo la funzione drawgrid */
    drawGrid();
}

playButton.addEventListener('click', play);


