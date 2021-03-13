module.exports = function toReadable(n) {
    (A1 = [
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ]),
        (A2 = [
            "eleven",
            "twelve",
            "thirteen",
            "fourteen",
            "fifteen",

            "sixteen",
            "seventeen",
            "eighteen",
            "nineteen",
        ]),
        (A3 = [
            "ten",
            "twenty",
            "thirty",
            "forty",
            "fifty",

            "sixty",
            "seventy",
            "eighty",
            "ninety",
        ]);

    if (n == 0) {
        return "zero";
    }
    if (n == 10) {
        return "ten";
    }
    if (n == 20) {
        return "twenty";
    }
    if (n == 100) {
        return "one hundred";
    }

    if (n > 10 && n < 20) {
        let a = n % 10;
        let b = (n - a) / 10;

        return A2[a - 1];
    }

    if (n < 10 && n > 0) {
        let a = n % 10;

        return A1[a - 1];
    }

    if (n > 20 && n < 100 && n % 10 > 0) {
        let a = n % 10;
        let b = (n - a) / 10;

        return A3[b - 1] + " " + A1[a - 1];
    }

    if (n > 20 && n < 100 && n % 10 == 0) {
        let a = n % 10;
        let b = (n - a) / 10;

        return A3[b - 1];
    }

    if (n > 100 && n < 1000 && n % 10 != 0 && n % 100 > 20) {
        let c = n % 100;
        let d = c % 10;
        let e = (n - c) / 100;
        let f = (c - d) / 10;

        return A1[e - 1] + " hundred " + A3[f - 1] + " " + A1[d - 1];
    }
    if (n > 100 && n < 1000 && n % 10 == 0 && n % 100 >= 20) {
        let c = n % 100;
        let d = c % 10;
        let e = (n - c) / 100;
        let f = (c - d) / 10;

        return A1[e - 1] + " hundred " + A3[f - 1];
    }
    if (n > 100 && n < 1000 && n % 10 != 0 && n % 100 < 20 && n % 100 > 10) {
        let c = n % 100;
        let d = c % 10;
        let e = (n - c) / 100;
        let f = (c - d) / 10;

        return A1[e - 1] + " hundred " + A2[d - 1];
    }
    if (n > 100 && n < 1000 && n % 10 != 0 && n % 100 < 20 && n % 100 < 10) {
        let c = n % 100;
        let d = c % 10;
        let e = (n - c) / 100;
        let f = (c - d) / 10;

        return A1[e - 1] + " hundred " + A1[d - 1];
    }
    if (n > 100 && n < 1000 && n % 100 == 0) {
        let c = n % 100;
        let d = c % 10;
        let e = (n - c) / 100;
        let f = (c - d) / 10;

        return A1[e - 1] + " hundred";
    }
    if (n > 100 && n < 1000 && n % 100 == 10) {
        let c = n % 100;
        let d = c % 10;
        let e = (n - c) / 100;
        let f = (c - d) / 10;

        return A1[e - 1] + " hundred " + "ten";
    }
};
