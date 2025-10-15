document.addEventListener("DOMContentLoaded", function(){
    function newGame(){
        //main function

        const divList = document.querySelectorAll("div#board > div");
        
        for (const child of divList){
            try{
                child.classList.add("square");
            } 
            catch (Exception){
                console.log("Cannot add class 'square' to ", child);
            }
        }
    }

    newGame();
});