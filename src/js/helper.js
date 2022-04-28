function randomColor(){
    const hexChars = '0123456789ABCDEF';
    let random = '#';
    
    for(let i=0;i<6;i++){
        random += hexChars[Math.floor(Math.random()*16)];
    }

    return random;
}

export {randomColor};