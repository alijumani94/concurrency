//here we have applied concurrency by doing work efficiently the way we do in real life.
//here we took example of a house wife she has to wake up kids, laundry clothes and make breakfast.
//the output will start with wake up children then start washing clothes meanwhile she makes breakfast during clothes are being washed.
function washing(callback) {
    console.log("Washing started...");
    setTimeout(function () {
        console.log("Washing done.");
        callback();
    }, 5000);
}
function soaking(callback) {
    console.log("Soaking started...");
    setTimeout(function () {
        console.log("Soaking done.");
        callback();
    }, 3000);
}
function drying() {
    console.log("Drying started...");
    setTimeout(function () {
        console.log("Drying done.");
    }, 2000);
}
console.log("Wake up children for school");
washing(function () {
    soaking(function () {
        drying();
    });
});
console.log("Make breakfast");
