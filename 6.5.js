function getSumma(a) {

    return function (b) {
        let x;
        x = a + b;
        return x;
    }
}

y = getSumma(5);
console.log(y(2));