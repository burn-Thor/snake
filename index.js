const grid = document.querySelector(".grid");
const startButton = document.getElementById("start");
const scoreDisplay = document.getElementById("score");
let squares = [];
let currentSnake = [2, 1, 0];
let direction = 1;
const width = 10;
let appleIndex = 0;
let score = 0;
let intervalTime = 1000;
let speed = 0.9;
let timerId = 0

function createGrid(){
   
    //create 100 of these elements with a for loop
    for (let i = 0; i < width * width; i++) {

        //create element
        const square = document.createElement('div');

        //add styling to the element
        square.classList.add("square");

        //put element into our grid
        grid.appendChild(square);

        //push it into a new square array
        squares.push(square)
    }    
}
createGrid()

//now time to create the snake on the grid
currentSnake.forEach(index => squares[index].classList.add('snake'));

// now to work on start and restart
function startGame()
{
    // remove the sanke
    currentSnake.forEach(index => squares[index].classList.remove('snake'))

    // remove the apple
    squares[appleIndex].classList.remove('apple')
    clearInterval(timerId)
    currentSnake = [2,1,0]
    score = 0

    // re add new score to browser
    scoreDisplay.textContent = scoredirection = 0
    intervalTime = 1000
    generateApples()



    // re add the class of snake to our new currentSnake
    currentSnake.forEach(index => squares[index].classList.add('snake'))

    timerID = setInterval(move , intervalTime)
    
}



function move()
{
    if (
  (currentSnake[0] + width >= width*width && direction === width) || // if snake has hit bottom 
  (currentSnake[0] % width === 9 && direction === 1) || // if snake hits right wall
  (currentSnake[0] % width === 0 && direction === -1) || // if snake hts left
  (currentSnake[0] - width < 0 && direction === -width) || // it snake hits top
  squares[currentSnake[0] + direction].classList.contains('snake')
    )
    return clearInterval(timerId)

    // quick refactor of code 100->width
// now generate random numbers




//remove last element from our currentSnake array
const tail = currentSnake.pop()
console.log(tail)
console.log(currentSnake)

//remove styling from last element
squares[tail].classList.remove("snake")


//add square in direction we are heading
currentSnake.unshift(currentSnake[0] + direction);
console.log(currentSnake)

//add styling so we can see it

// deal with snake head gets apple
if (squares[currentSnake[0]].classList.contains('apple'))
{
    //remove the class of apple
   squares[currentSnake[0]].classList.remove('apple')
  
   // grow our snake by adding class of snake to it
   squares[tail].classList.add('snake')
  
   //grow our snake array
   currentSnake.push(tail)
  
   //generate new apple
    generateApples()

    //add one to the score
    score++

    // display our score
    scoreDisplay.textContent = score

    //speed up our snake
    clearInterval(timerID)
    intervalTime = intervalTime * speed
    timerID = setInterval(move , intervalTime)
}

   squares[currentSnake[0]].classList.add('snake')

}



//now time to give it a timer




function generateApples()
{
    do{
        // generate a random number
        appleIndex = Math.floor(Math.random() * squares.length)

    }while(squares[appleIndex].classList.contains('snake'))
    squares[appleIndex].classList.add('apple')
}


generateApples()


// now time in this order to ...  1. to make the key ups/down/etc work. 2. make the snake change direction. 3. use the modulus in our game

//in keycode generator 39 is right arrow, 38 is up, 37 is left, 40 is down

function controle(e){

    if(e.keyCode === 39)
    { 
        console.log('right pressed')
        direction = 1;

    }else if(e.keyCode === 38) 
    {
        console.log('up pressed')
        direction = - width;

    }else if(e.keyCode === 37) 
    {
        console.log('left pressed')
        direction = -1;

    }else if(e.keyCode === 40)
    {
        console.log('down pressed')
        direction = + width;
    } 
}

document.addEventListener('keyup', controle)
startButton.addEventListener('click', startGame)

//now change the snake's direction

