//Array to track plays
let count = [
    [null,null,null],
    [null,null,null],
    [null,null,null]
];

//Keeps track of which letter should be played
let tracker = false;

//Initalises variables to null
var divList = null;
var divStatus = null;

newGame();

//Checks if anyone won every 3 seconds
setInterval( function(){
    let divStatus = document.querySelector("div#status");

    if (count[0][0] === count[0][1] && count[0][1] === count[0][2] && count[0][0] === count[0][2] && count[0][0] === "X" //first row 
        || count[1][0] === count[1][1] && count[1][1] === count[1][2] && count[1][0] === count[1][2] && count[1][0] === "X" //second row
        || count[2][0] === count[2][1] && count[2][1] === count[2][2] && count[2][0] === count[2][2] && count[2][0] === "X" //third row
        || count[0][0] === count[1][0] && count[1][0] === count[2][0] && count[0][0] === count[2][0] && count[0][0] === "X" //first column
        || count[0][1] === count[1][1] && count[1][1] === count[2][1] && count[0][1] === count[2][1] && count[0][1] === "X" //second column
        || count[0][2] === count[1][2] && count[1][2] === count[2][2] && count[0][2] === count[2][2] && count[0][2] === "X" //third column
        || count[0][0] === count[1][1] && count[1][1] === count[2][2] && count[0][0] === count[2][2] && count[0][0] === "X" //leading diagonal 
        || count[0][2] === count [1][1] && count[1][1] === count[2][0] && count[0][2] === count[2][0] && count[0][2] === "X") //non-leading diagonal 
    {
        divStatus.classList.add("you-won"); 
        divStatus.textContent = "Congratulations! X is the Winner!";
    }
    else if (count[0][0] === count[0][1] && count[0][1] === count[0][2] && count[0][0] === count[0][2] && count[0][0] === "O" //first row
        || count[1][0] === count[1][1] && count[1][1] === count[1][2] && count[1][0] === count[1][2] && count[1][0] === "O" //second row
        || count[2][0] === count[2][1] && count[2][1] === count[2][2] && count[2][0] === count[2][2] && count[2][0] === "O" //third row
        || count[0][0] === count[1][0] && count[1][0] === count[2][0] && count[0][0] === count[2][0] && count[0][0] === "O" //first column
        || count[0][1] === count[1][1] && count[1][1] === count[2][1] && count[0][1] === count[2][1] && count[0][1] === "O" //second column
        || count[0][2] === count[1][2] && count[1][2] === count[2][2] && count[0][2] === count[2][2] && count[0][2] === "O" //third column
        || count[0][0] === count[1][1] && count[1][1] === count[2][2] && count[0][0] === count[2][2] && count[0][0] === "O" //leading diagonal
        || count[0][2] === count [1][1] && count[1][1] === count[2][0] && count[0][2] === count[2][0] && count[0][2] === "O") //non-leading diagonal
    {
        divStatus.classList.add("you-won");
        divStatus.textContent = "Congratulations! O is the Winner!";
    }
}, 250);

//Adds all event listeners to the document
document.addEventListener("DOMContentLoaded", function(){
    let divList = document.querySelectorAll("div#board > div");
    let divStatus = document.querySelector("div#status");

    for (const child of divList){
        try{
            child.className = "square";
            child.textContent = "";
            divStatus.textContent = "Move your mouse over a square and click to play an X or an O.";
            divStatus.classList.remove("you-won");
        } 
        catch (error){
            console.error("Error: Cannot add class 'square' to div.");
        }
    }

    //Implements Hover Functionality
    divList[0].addEventListener("mouseover", function(){
        divList[0].classList.add("hover");
    });

    divList[0].addEventListener("mouseout", function(){
        divList[0].classList.remove("hover");
    });

    divList[1].addEventListener("mouseover", function(){
        divList[1].classList.add("hover");
    });

    divList[1].addEventListener("mouseout", function(){
        divList[1].classList.remove("hover");
    });

    divList[2].addEventListener("mouseover", function(){
        divList[2].classList.add("hover");
    });

    divList[2].addEventListener("mouseout", function(){
        divList[2].classList.remove("hover");
    });

    divList[3].addEventListener("mouseover", function(){
        divList[3].classList.add("hover");
    });

    divList[3].addEventListener("mouseout", function(){
        divList[3].classList.remove("hover");
    });

    divList[4].addEventListener("mouseover", function(){
        divList[4].classList.add("hover");
    });

    divList[4].addEventListener("mouseout", function(){
        divList[4].classList.remove("hover");
    });

    divList[5].addEventListener("mouseover", function(){
        divList[5].classList.add("hover");
    });

    divList[5].addEventListener("mouseout", function(){
        divList[5].classList.remove("hover");
    });

    divList[6].addEventListener("mouseover", function(){
        divList[6].classList.add("hover");
    });

    divList[6].addEventListener("mouseout", function(){
        divList[6].classList.remove("hover");
    });

    divList[7].addEventListener("mouseover", function(){
        divList[7].classList.add("hover");
    });

    divList[7].addEventListener("mouseout", function(){
        divList[7].classList.remove("hover");
    });

    divList[8].addEventListener("mouseover", function(){
        divList[8].classList.add("hover");
    });

    divList[8].addEventListener("mouseout", function(){
        divList[8].classList.remove("hover");
    });

    //Implements Selection Functionality        
    divList[0].addEventListener("click", function(){
        if (count[0][0] == null && tracker == true){
            divList[0].classList.add("X");
            divList[0].textContent = "X";
            count[0][0] = "X";
            tracker = false;
        }
        else if (count[0][0] == null && tracker == false){
            divList[0].classList.add("O");
            divList[0].textContent = "O";
            count[0][0] = "O";
            tracker = true;
        }
    });

    divList[1].addEventListener("click", function(){
        if (count[0][1] == null && tracker == true){
            divList[1].classList.add("X");
            divList[1].textContent = "X";
            count[0][1] = "X";
            tracker = false;
        }
        else if (count[0][1] == null && tracker == false){
            divList[1].classList.add("O");
            divList[1].textContent = "O";
            count[0][1] = "O";
            tracker = true;
        }
    });

    divList[2].addEventListener("click", function(){
        if (count[0][2] == null && tracker == true){
            divList[2].classList.add("X");
            divList[2].textContent = "X";
            count[0][2] = "X";
            tracker = false;
        }
        else if (count[0][2] == null && tracker == false){
            divList[2].classList.add("O");
            divList[2].textContent = "O";
            count[0][2] = "O";
            tracker = true;
        }
    });

    divList[3].addEventListener("click", function(){
        if (count[1][0] == null && tracker == true){
            divList[3].classList.add("X");
            divList[3].textContent = "X";
            count[1][0] = "X";
            tracker = false;
        }
        else if (count[1][0] == null && tracker == false){
            divList[3].classList.add("O");
            divList[3].textContent = "O";
            count[1][0] = "O";
            tracker = true;
        }
    });

    divList[4].addEventListener("click", function(){
        if (count[1][1] == null && tracker == true){
            divList[4].classList.add("X");
            divList[4].textContent = "X";
            count[1][1] = "X";
            tracker = false;
        }
        else if (count[1][1] == null && tracker == false){
            divList[4].classList.add("O");
            divList[4].textContent = "O";
            count[1][1] = "O";
            tracker = true;
        }
    });

    divList[5].addEventListener("click", function(){
        if (count[1][2] == null && tracker == true){
            divList[5].classList.add("X");
            divList[5].textContent = "X";
            count[1][2] = "X";
            tracker = false;
        }
        else if (count[1][2] == null && tracker == false){
            divList[5].classList.add("O");
            divList[5].textContent = "O";
            count[1][2] = "O";
            tracker = true;
        }
    });

    divList[6].addEventListener("click", function(){
        if (count[2][0] == null && tracker == true){
            divList[6].classList.add("X");
            divList[6].textContent = "X";
            count[2][0] = "X";
            tracker = false;
        }
        else if (count[2][0] == null && tracker == false){
            divList[6].classList.add("O");
            divList[6].textContent = "O";
            count[2][0] = "O";
            tracker = true;
        }
    });

    divList[7].addEventListener("click", function(){
        if (count[2][1] == null && tracker == true){
            divList[7].classList.add("X");
            divList[7].textContent = "X";
            count[2][1] = "X";
            tracker = false;
        }
        else if (count[2][1] == null && tracker == false){
            divList[7].classList.add("O");
            divList[7].textContent = "O";
            count[2][1] = "O";
            tracker = true;
        }
    });

    divList[8].addEventListener("click", function(){
        if (count[2][2] == null && tracker == true){
            divList[8].classList.add("X");
            divList[8].textContent = "X";
            count[2][2] = "X";
            tracker = false;
        }
        else if (count[2][2] == null && tracker == false){
            divList[8].classList.add("O");
            divList[8].textContent = "O";
            count[2][2] = "O";
            tracker = true;
        }
    });

    //Reset Game Functionality
    btn = document.querySelector("button");
    btn.addEventListener("click", function(){
        //console.log("New game started.")
        newGame();
    });
});

//Initialises variables needed
function newGame(){
    //Array to track plays
    count = [
        [null,null,null],
        [null,null,null],
        [null,null,null]
    ];

    //Keeps track of which letter should be played
    tracker = false;

    //Initalises variables to null
    divList = document.querySelectorAll("div#board > div");
    divStatus = document.querySelector("div#status");

    for (const child of divList){
    try{
        child.className = "square";
        child.textContent = "";
        divStatus.textContent = "Move your mouse over a square and click to play an X or an O.";
        divStatus.classList.remove("you-won");
    } 
    catch (error){
        console.error("Error: Cannot add class 'square' to div.");
    }
}
}