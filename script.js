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

    btnRef.addEventListener('click', () => {
        if (checked == false) {
            setContent(index)
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
    const playGame = () => {
        gameboard.makeBoard();
    };

    return {playGame,}
})();

 
Gamemode.playGame();