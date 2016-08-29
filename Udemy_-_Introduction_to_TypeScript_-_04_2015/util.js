var Utility;
(function (Utility) {
    var useful = (function () {
        function useful() {
        }
        useful.prototype.timesTwo = function (n) {
            return n * 2;
        };
        return useful;
    }());
    Utility.useful = useful;
})(Utility || (Utility = {}));
var use = new Utility.useful();
console.log(use.timesTwo(4));
