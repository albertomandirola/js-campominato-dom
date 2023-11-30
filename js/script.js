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

    let row_num = 10; 
    for(let i=1; i<101; i++){
        let cell = createCell(i,row_num)
        grid.append(cell)
    }
}


//INIZIALIZZO LA VARIABILE BTN CON CUI FARO PARTIRE UN EVNTO TRAMITE ADDEVENTLISTENER
let btn_start = document.getElementById('btn-start')

btn_start.addEventListener('click',function(){
    createNewGame()
})