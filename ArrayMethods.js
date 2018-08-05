// create swap method for arrays. this will be utilized in our deck object's shuffle method.
Array.prototype.swap = function (one, two) {
    if (this[one] == undefined || this[two] == undefined) {
        throw new Error('error: one of the indices is out of range.');
    } else {
        const temp = this[one];
        this[one] = this[two];
        this[two] = temp;
        return this;
    }
}