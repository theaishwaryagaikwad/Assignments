function printStarPattern(rows) {
    for (let i = 1; i <= rows; i++) {
        let rowPattern = '';
        for (let j = 1; j <= i; j++) {
            rowPattern += '* ';
        }
        console.log(rowPattern.trim());
    }
}

const numberOfRows = 5;
printStarPattern(numberOfRows);
