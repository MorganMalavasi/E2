function getArea(arr) {

    // some controls to check if it is an array and it respect the constraints imposed
    if (Array.isArray(arr)) {


        if (arr.lenght > 2 || arr.length < 2)
            return -1;

        if (!(check(arr, 0) && check(arr, 1)))
            return -1;


        if (arr[0] < 0 || arr[1] < 0)
            return -1;
        // if one side is undefined, it means that our area will be 0, so we can return 0 
        // without controls 
        if (arr[0] === undefined || arr[1] === undefined)
            return 0;
    } else
        return -1;

    return arr[0] * arr[1];
}

function check(arr, i) {
    if (Number.isInteger(arr[i]) || arr[i] === undefined)
        return true;
    return false;
}

module.exports = {
    getArea: getArea
}