const gameboard = (() => {
    
    let boardArray = [" "," "," "," "," "," "," "," "," "];
    const boardRef = document.querySelector("#boardContainer");
    
    const makeBoard = () => {
        for (let i = 0; i <= 8; i++) {
        const inGridbtn = Button(i, boardRef);
        //console.log(inGridbtn.getIndex());
        inGridbtn.setContent(boardArray[i]);
    }
};
    
    return {
        makeBoard,
        boardArray,
    };
    


})();


const Button = (index, boardRef) => {
    
    let checked = false;
    const getIndex = () => index;


    let btnRef = document.createElement('button');
        btnRef.classList.add('ButtonBoard');
        boardRef.append(btnRef);

    const setContent = (content) => {
        btnRef.textContent = content;
    };

    btnRef.addEventListener('click', () => {    //button clicked board
        if (checked == false) {
            
            gameboard.boardArray.splice(index, 1 , Gamemode.getMarker());
            setContent(Gamemode.getMarker())
            Gamemode.setTurn(Gamemode.getMarker());
            
            checked = true; 
            Gamemode.checkBoard();


            //console.table(gameboard.boardArray); 
        }
    }) 

    return {setContent, getIndex }
};
 
const Player = (nameP, marker) => {
    this.nameP = nameP;
    this.marker = marker;
    const getName = () => nameP;
    const getMarker = () => marker;
    return {nameP, marker, getName, getMarker}
};

const Gamemode = (() => {

    const XBtn = document.querySelector("#X");
    const YBtn = document.querySelector("#O");
    let turnMarker = "aa";
    const getMarker = () =>  {return turnMarker;};
    
    const playGame = () => {
        gameboard.makeBoard();
        setTurn("X");
    };

    const setTurn = (Turn) => {

        //console.log("setting turn");
        
        if (Turn == "O") {
        XBtn.classList.add("selected");
        YBtn.classList.remove("selected");
        turnMarker = "X";
    }
        if (Turn =="X") {
        YBtn.classList.add("selected");
        XBtn.classList.remove("selected");
        turnMarker = "O";
        }


        return turnMarker;
    };


    const checkForRows = (boardRef) => {
        for (let i = 0; i < 3; i++) {
            let row = [];
            for (let j = 0; j < 3; j++) {
                row.push(boardRef[j]);
            }

            if (row.every(field => field == "X") || row.every(field => field == "O" )){
                console.log(row[1] + ' has won');
                }
            };
        };


    const checkBoard = () => {
        console.log('checking');
        
        boardRef = gameboard.boardArray;

        console.table(boardRef);
        
        checkForRows(boardRef);
        
    };


    return {playGame, getMarker, setTurn, checkBoard, checkForRows}
})();

 
Gamemode.playGame();
console.log(Gamemode.getMarker());