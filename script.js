const gameboard = (() => {
    
    let boardArray = ["x","x","o","x","x","o","x","x","x","x"];
    const boardRef = document.querySelector("#boardContainer");
    
    const makeBoard = () => {
        for (let i = 1; i <= 9; i++) {
        const inGridbtn = Button(i, boardRef);
        console.log(inGridbtn.getIndex());
    }
};
    
    
    
    return {
        makeBoard
    };
    


})();
//aa

const Button = (index, boardRef) => {
    const getIndex = () => index;
    let btnRef = document.createElement('button');
        btnRef.classList.add('ButtonBoard');
        boardRef.append(btnRef);

    const setContent = (content) => {
        btnRef.textContent = content;
    };

    return {setContent, getIndex}
};
 
 gameboard.makeBoard();
 Button.getIndex;