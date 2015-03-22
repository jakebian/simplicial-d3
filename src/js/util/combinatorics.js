/**
 * Generates all nC2 combinations of arr.
 * @param  {Array}    arr      : The array to choose from
 * @param  {function} formatFn : A function thatformats the result, takes 2 arguments.
 * @return {Array}
 */

function getAllPairs(arr, formatFn) {

    var formatter = formatFn || defaultFormatter;
    var result = [];

    for (var i = 0; i < arr.length; i++) {

        var first = arr[i];

        for (var j = i; j < arr.length; j++) {

            var second = arr[j];
            result.push(formatFn(first, second));

        }
    }

    return result;
}

function defaultFormatter(first, second) {
    return [first, second];
}