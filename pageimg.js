class PageImg {
    constructor(src, alt, page, index) {
        this.src = src;
        this.alt = alt;
        this.page = page;
        this.index = index;
    }

    getSrc() {
        return this.src;
    }

    getAlt() {
        return this.alt;
    }

    getIndex() {
        return this.index;
    }

    getPage() {
        return this.page;
    }
}