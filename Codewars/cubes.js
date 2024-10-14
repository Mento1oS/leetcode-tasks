class Cuboid {
    constructor(length, width, height){
        this.length = Number(length);
        this.width = Number(width);
        this.height = Number(height);
    }
    get surfaceArea(){
        return 2 * this.length * this.width + 2 * this.length * this.height + 2 * this.height * this.width;
    }
    get volume(){
        return this.length*this.width*this.height;
    }
}
class Cube extends Cuboid {
    constructor(length){
        super(length, length, length);
    }
}