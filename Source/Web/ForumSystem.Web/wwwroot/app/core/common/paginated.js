"use strict";
var Paginated = (function () {
    function Paginated(page, pagesCount, totalCount) {
        this.page = 0;
        this.pagesCount = 0;
        this.totalCount = 0;
        this.page = page;
        this.pagesCount = pagesCount;
        this.totalCount = totalCount;
    }
    Paginated.prototype.range = function () {
        if (!this.pagesCount) {
            return [];
        }
        var step = 2;
        var doubleStep = step * 2;
        var start = Math.max(0, this.page - step);
        var end = start + 1 + doubleStep;
        if (end > this.pagesCount) {
            end = this.pagesCount;
        }
        var ret = [];
        for (var i = start; i != end; ++i) {
            ret.push(i);
        }
        return ret;
    };
    ;
    Paginated.prototype.pagePlus = function (count) {
        return +this.page + count;
    };
    return Paginated;
}());
exports.Paginated = Paginated;
//# sourceMappingURL=paginated.js.map