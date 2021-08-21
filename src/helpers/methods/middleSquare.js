const getMiddleNumber = ( number, digits ) => {
    
    let amountSides = 0;
    let numberStr = number.toString();
    let digitsOfNumber = numberStr.length;

    if ( ( ( digitsOfNumber % 2 === 0 ) || ( digits % 2 === 0 ) ) && !( ( digitsOfNumber % 2 === 0 ) && ( digits % 2 === 0 ) ) ) {
        numberStr = "0" + numberStr;
        digitsOfNumber += 1;
    }

    while ( ( amountSides * 2 ) + digits !== digitsOfNumber )
        amountSides += 1;

    const left = parseInt( numberStr.substr( 0, amountSides ) );
    const center = parseInt( numberStr.substr( amountSides, digits ) );
    const rigth = parseInt( numberStr.substr( digits + amountSides, amountSides ) );

    return {
        left,
        center,
        rigth,
        // complete: numberStr,
    };
};

export const getMiddleSquare = ( seed, amount ) => {
    
    let randomNumbers = [];
    randomNumbers[ 0 ] = seed;
    let tableRandomNumbers = {};
    const seedStr = seed.toString();
    const digits = seedStr.length;

    for ( let i = 1; i < amount; i++ ) {
        const line = {};
        const square = Math.pow( randomNumbers[ i - 1 ], 2 );
        const middleNumber = getMiddleNumber( square, digits );
        const randomNumber = middleNumber.center * Math.pow( 10, -digits );

        randomNumbers[ i ] = middleNumber.center;
        tableRandomNumbers[ i ] = {
            "yi": square,
            "Operaciones": middleNumber,
            "xi": middleNumber.center,
            "ri": randomNumber,
        };
    }

    return tableRandomNumbers;
}

console.log( getMiddleSquare( 12345, 5 ) );
