module.exports = function reverse(n) {
    if (n < 0) {
        let newN = +n;
        let resultN = "";

        while (n > 0) {
            resultN = result + (newN % 10);
            newN = parseInt(newN / 10);
        }

        return resultN;
    } else {
        let result = "";

        while (n > 0) {
            result = result + (n % 10);
            n = parseInt(n / 10);
        }

        return result;
    }
};
