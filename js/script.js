//Funzione che mi permette di generare un arrey di numeri che saranno viste come bombe
function arreyBomb(){
    let bombs = []
    let random_num;
    //cicla fino a quando l'arrey non presenta 16 elementi
    while(bombs.length<16){
        random_num = Math.floor(Math.random()*100 + 1)
        //if che mi permette di aggiungere elementi all arrey solo se non presenti
        if(!bombs.includes(random_num)){
            bombs.push(random_num)
        }
    }
    return bombs;
}

//funzione crea celle che dipende da due fattori
function createCell(num ,row_num){
    const square = document.createElement('div')
    square.classList.add('square')
    square.style.width = `calc(100% / ${row_num})`
    square.style.height = square.style.width
    square.innerText = num
    return square
}

//FUNZIONE CHE CREA NUOVE GRILIE DI GIOCO
function createNewGame(){
    let grid = document.getElementById('grid')
    grid.innerHTML = '';
    let arrey_bombs = arreyBomb()
    let point = 0;
    let row_num = 10;
    let cell_tot = 100; 
    console.log(arrey_bombs.length);
    console.log(arrey_bombs);
    
    for(let i=1; i<101; i++){
        let cell = createCell(i,row_num)
        //FUNZIONE CLICK SULLA CELLA PER STABILIRE IL PUNTEGGIO 
        cell.addEventListener('click', function(){
            if(point == cell_tot - arrey_bombs.length){
                alert('hai vinto')
            }
            else{
                if(arrey_bombs.includes(i)){
                    this.classList.add('bg-danger')
                    alert(`hai totalizzato un punteggio di ${point}. Clicca di nuovo il bottone per iniziare una nuova partita`)
                    grid.innerHTML = '';
                    document.getElementById('point').innerText = ``
                }
                else{
                    
                    this.classList.add('bg-white');
                    point++
                    document.getElementById('point').innerText = `${point}`
                }
            }
            
        })
        grid.append(cell)
    }
   
}


//INIZIALIZZO LA VARIABILE BTN CON CUI FARO PARTIRE UN EVNTO TRAMITE ADDEVENTLISTENER
let btn_start = document.getElementById('btn-start')

btn_start.addEventListener('click',function(){
    createNewGame()
})