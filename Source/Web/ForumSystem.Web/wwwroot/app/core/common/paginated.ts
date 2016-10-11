export class Paginated {
    public page: number = 0;
    public pagesCount: number = 0;
    public totalCount: number = 0;

    constructor(page: number, pagesCount: number, totalCount: number) {
        this.page = page;
        this.pagesCount = pagesCount;
        this.totalCount = totalCount;
    }

    range(): Array<any> {
        if (!this.pagesCount) { return []; }
        var step = 2;
        var doubleStep = step * 2;
        var start = Math.max(0, this.page - step);
        var end = start + 1 + doubleStep;
        if (end > this.pagesCount) { end = this.pagesCount; }

        var ret = [];
        for (var i = start; i != end; ++i) {
            ret.push(i);
        }

        return ret;
    };

    pagePlus(count: number): number {
        return + this.page + count;
    }
}