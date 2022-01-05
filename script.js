const gameboard = (() => {
    
    let boardArray = ["","","","","","","","","",""];
    const boardRef = document.querySelector("#boardContainer");
    
    const makeBoard = () => {
        for (let i = 0; i <= 8; i++) {
        const inGridbtn = Button(i, boardRef);
        //console.log(inGridbtn.getIndex());
        inGridbtn.setContent(boardArray[i]);
    }
};
    
    return {
        makeBoard
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
            setContent(Gamemode.getMarker())
            Gamemode.setTurn(Gamemode.getMarker());
            checked = true;  
        }
    }) 

    return {setContent, getIndex }
};
 
const Player = (nameP, marker) => {
    this.nameP = nameP;
    this.marker = marker;
    const getName = () => nameP;
    const getMarker = () => marker
    return {nameP, marker, getName, getMarker}
};

const Gamemode = (() => {
    const XBtn = document.querySelector("#X");
    const YBtn = document.querySelector("#O");
    let turnMarker = "aa"
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

    
    return {playGame, getMarker, setTurn}
})();

 
Gamemode.playGame();
console.log(Gamemode.getMarker());