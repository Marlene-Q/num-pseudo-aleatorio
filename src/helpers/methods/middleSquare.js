const getMiddleNumber = ( number, digits ) => {
    
    if ( number !== 0 ) {
        let amountSides = 0;
        let numberStr = number.toString();
        let digitsOfNumber = numberStr.length;

        if ( ( ( digitsOfNumber % 2 === 0 ) || ( digits % 2 === 0 ) ) && !( ( digitsOfNumber % 2 === 0 ) && ( digits % 2 === 0 ) ) ) {
            numberStr = "0" + numberStr;
            digitsOfNumber += 1;
        }
        while ( ( amountSides * 2 ) + digits !== digitsOfNumber )
            amountSides += 1;

        const left   = numberStr.substr( 0, amountSides );
        const center = numberStr.substr( amountSides, digits );
        const right  = numberStr.substr( digits + amountSides, amountSides );

        return {
            left,
            center,
            right,
        };
    } else {
        return {
            "left": 0,
            "center": 0,
            "right": 0,
        };
    };
};

export const getMiddleSquare = ( seed, amount ) => {
    
    let randomNumbers = [];
    randomNumbers[ 0 ] = seed;
    let tableRandomNumbers = [];
    const seedStr = seed.toString();
    const digits = seedStr.length;

    for ( let i = 1; i <= amount; i++ ) {
        const square = Math.pow( randomNumbers[ i - 1 ], 2 );
        const middleNumber = getMiddleNumber( square, digits );
        const randomNumber = parseInt( middleNumber.center ) * Math.pow( 10, -digits );

        randomNumbers[ i ] = parseInt( middleNumber.center );
        tableRandomNumbers[ i - 1 ] = {
            i,
            "yi": square,
            "operaciones": middleNumber,
            "xi": middleNumber.center,
            "ri": "0." + middleNumber.center,
        };
    }

    return tableRandomNumbers;
}
