let startNumber = prompt('Enter start number');
let stopNumber = prompt('Enter stop number');

if (+startNumber < +stopNumber) {
    let counter = startNumber;
    let timeOfPrint = (stopNumber - startNumber + 1) * 1000;

    function showNumber() {
        console.log(counter);
        counter++;
    }

    function stopInterval(id) {
        clearInterval(id);
    }

    let intervalId = setInterval(showNumber, 1000);


    setTimeout(stopInterval, timeOfPrint, intervalId);

} else {

    alert('"Start number" should be less what "Stop number"');

}