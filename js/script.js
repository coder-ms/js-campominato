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

/*
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
I numeri nella lista delle bombe non possono essere duplicati.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

BONUS:
1- quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle
2- quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste
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
    let score;


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
        square.innerHTML = `<span class="invisble">${num}</span>`;
        square.addEventListener('click', function choose() {
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
    console.log(bombsPosition);

    const MAX_ATTEMPT = numSquare - bombsInField;
    console.log(MAX_ATTEMPT);

    function choose(){
        /*
        se clicco la casella e il numero non corrisponde al numero della bomba(bombPosition)
        divernta verde, altrimenti diventa rossa
        */
        const span = this.querySelector('span');
        console.log(span);
        const num = span.innerText;
        console.log(num);
        this.removeEventListener('click', choose);

        if(!bombsPosition.includes(num)){
            this.classList.add('green');
            this.innerHTML = `<span class="visible">${num}</span>`;
            score++;
            console.log(score);

            if(score === MAX_ATTEMPT){
                endGame();
            }
        }    
        else{
            this.style.backgroundColor = 'red';
            endGame();
        }    
    }

    function endGame(){
        console.log('endGame');

        // prendo tutte le celle
        const squares = document.getElementsByClassName('cell');
        console.log(squares);
        for(let i = 0; i < squares.i; i++){
            squares[i].removeEventListener('click', scegli);
            let num = i+1;
            if(score === MAX_ATTEMPT){
                console.log('You win the game');
            }
            else{
                console.log('You lost the game');
            }
        }
    }

    /*Richiamo la funzione drawgrid */
    drawGrid();
}

playButton.addEventListener('click', play);


