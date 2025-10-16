document.addEventListener("DOMContentLoaded", function(){
    function newGame(){
        const divList = document.querySelectorAll("div#board > div");

        for (const child of divList){
            try{
                child.classList.add("square");
            } 
            catch (error){
                console.error("Error: Cannot add class 'square' to div.");
            }
        }

        //Keeps track of which letter should be played
        let tracker = false;

        //Array to track plays
        let count = [
            [null,null,null],
            [null,null,null],
            [null,null,null]
        ];

        document.addEventListener("click", function(event){
            let x = event.clientX;
            let y = event.clientY;
            let div;

            //console.log("Position clicked was: ", x, " ", y);

            //Determines which square was clicked
            if (x > 397 && x < 545 && y > 270 && y < 414){
                div = divList[0];
                
                if (tracker == true){
                    count[0][0] = "O";
                }
                else{
                    count[0][0] = "X";
                }
            }
            else if (x > 567 && x < 715 && y > 270 && y < 414){
                div = divList[1];

                if (tracker == true){
                    count[0][1] = "O";
                }
                else{
                    count[0][1] = "X";
                }
            }
            else if (x > 738 && x < 886 && y > 270 && y < 414){
                div = divList[2];

                if (tracker == true){
                    count[0][2] = "O";
                }
                else{
                    count[0][2] = "X";
                }
            }
            else if (x > 397 && x < 545 && y > 445 && y < 589){
                div = divList[3];

                if (tracker == true){
                    count[1][0] = "O";
                }
                else{
                    count[1][0] = "X";
                }
            }
            else if (x > 567 && x < 715 && y > 445 && y < 589){
                div = divList[4];

                if (tracker == true){
                    count[1][1] = "O";
                }
                else{
                    count[1][1] = "X";
                }
            }
            else if (x > 738 && x < 886 && y > 445 && y < 589){
                div = divList[5];

                if (tracker == true){
                    count[1][2] = "O";
                }
                else{
                    count[1][2] = "X";
                }
            }
            else if (x > 397 && x < 545 && y > 613 && y < 759){
                div = divList[6];

                if (tracker == true){
                    count[2][0] = "O";
                }
                else{
                    count[2][0] = "X";
                }
            }
            else if (x > 567 && x < 715 && y > 613 && y < 759){
                div = divList[7];

                if (tracker == true){
                    count[2][1] = "O";
                }
                else{
                    count[2][1] = "X";
                }
            }
            else if (x > 739 && x < 886 && y > 613 && y < 759){
                div = divList[8];

                if (tracker == true){
                    count[2][2] = "O";
                }
                else{
                    count[2][2] = "X";
                }
            }

            //console.log(count);

            try{
                //If tracker is true, an O should be played. If tracker is false, a X should be played.
                if (tracker){
                    //Adds appropriate class to the square
                    div.classList.add("O");

                    //Puts an O in the square
                    div.textContent = "O";

                    //toggle tracker so O is played next
                    tracker = false;
                }
                else{
                    //Adds appropriate class to the square
                    div.classList.add("X");

                    //Puts an O in the square
                    div.textContent = "X";

                    //toggle tracker so O is played next
                    tracker = true;
                }  
            }
            catch (error){
                console.error("Error: div undefined for this area.");
            }              
        }); 
    }

    newGame();
});