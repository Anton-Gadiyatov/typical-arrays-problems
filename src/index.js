exports.min = function min(array) {
    if (array != null && array.length != 0) {
        return array.reduce((firstValue, secondValue) => {
            return Math.min(firstValue, secondValue);
        });
    } else {
        return 0;
    }
};

exports.max = function max(array) {
    if (array != null && array.length != 0) {
        return array.reduce((firstValue, secondValue) => {
            return Math.max(firstValue, secondValue);
        });
    } else {
        return 0;
    }
};

exports.avg = function avg(array) {
    if (array != null && array.length != 0) {
        return (
            array.reduce((firstValue, secondValue) => {
                return firstValue + secondValue;
            }) / array.length
        );
    } else {
        return 0;
    }
};
