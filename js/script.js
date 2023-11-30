function arreyBomb(){
    let bombs = []
    let random_num;

    while(bombs.length<16){
        random_num = Math.floor(Math.random()*100 + 1)
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
    console.log(arrey_bombs)

    let row_num = 10; 
    for(let i=1; i<101; i++){
        let cell = createCell(i,row_num)
        cell.addEventListener('click', function(){
            if(arrey_bombs.includes(i)){
                this.classList.add('bg-danger')
            }
            else{
                this.classList.add('bg-white');
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