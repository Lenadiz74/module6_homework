let n = prompt('number', '5');
let res = true;
n = +n;
if (n > 1000) {

    alert('Введите число меньше 1000');

}else {

    if (n === 0 || n === 1) {

        if (n === 0) {
            console.log('null');
        } else {
            console.log('one');
        }

    } else {

        for (let i = 2; i < n; i++) {

            if (n % i === 0) {
                res = false;
                break;
            }

        }
        console.log(res);
    }

}