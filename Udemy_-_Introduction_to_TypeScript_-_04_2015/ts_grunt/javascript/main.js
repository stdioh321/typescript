var Helper;
(function (Helper) {
    var Language = (function () {
        function Language() {
        }
        Language.plusTwo = function (n) {
            return n * 2;
        };
        ;
        Language.prototype.instance = function () {
            return "My new Instance";
        };
        ;
        Language.greeting = "Bonjour";
        return Language;
    }());
    Helper.Language = Language;
})(Helper || (Helper = {}));
console.log(Helper.Language.greeting);
//# sourceMappingURL=main.js.map