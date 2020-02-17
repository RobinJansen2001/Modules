
const str = "name";
const arr = str.split(',');
let count = arr.length;
document.getElementById("uitkomst").innerHTML = count;

function myModule() {
    this.hello = function() {
        return 'hello!';
    }

    this.goodbye = function() {
        return 'goodbye!';
    }
}

module.exports = myModule;