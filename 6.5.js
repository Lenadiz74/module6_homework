function getSumma(a) {

    return function (b) {
        let x;
        x = a + b;
        return x;
    }
}

numAplus = getSumma(5);

console.log(numAplus(2));