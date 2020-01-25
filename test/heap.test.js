const chai = require('chai');
const Heap = require('../src/heap');
const expect = chai.expect;

describe('Heap', () => {
    let newHeap;

    beforeEach(() => {
        newHeap = new Heap();

    });

    it('Heap is an object', () => {
        expect(new Heap()).to.be.an('object');
    });

    it('newHeap is accessible as an object', () => {
        expect(newHeap).to.be.an('object');
    });

    it('Return empty', () => {
        expect(newHeap.heap).deep.equals([]);
    });

    it('Return isEmpty', () => {
        expect(newHeap.isEmpty()).deep.equals(true);
    });

    it('Add one item to empty', () => {
        expect(newHeap.pushItem(2)).deep.equals([2]);
    });

    it('Add item in its correct place', () => {
        newHeap.pushItem(3);        
        expect(newHeap.pushItem(1)).deep.equals([1,3]);
    });

    it('Add multiple items in their correct place', () => {
        newHeap.pushItem(3);
        newHeap.pushItem(2);    
        expect(newHeap.pushItem(1)).deep.equals([1,3,2]);
    });

    it('Add not sorted array', () => {
        expect(newHeap.pushMultipleItems([5,3,4])).deep.equals([3,5,4]);
    });

    it('Add more than two layers', () => {
        newHeap.pushItem(0);
        expect(newHeap.pushMultipleItems([5,3,4,1])).deep.equals([0,1,3,5,4]);
    });

    it('Return the smallest item', () => {
        newHeap.pushMultipleItems([5,3,4,1,8,11,23,45,12,9]);
        expect(newHeap.popItem()).deep.equals(1);
    });

    it('Return the smallest item and remove it', () => {
        newHeap.pushMultipleItems([1,2]);
        newHeap.popItem();
        expect(newHeap.heap).deep.equals([2]);
    });

    it('Return the smallest item and remove it', () => {
        newHeap.pushMultipleItems([2]);
        newHeap.popItem();
        expect(newHeap.heap).deep.equals([]);
    });

    it('Return the smallest item and remove it', () => {
        newHeap.pushMultipleItems([1,3,5]);
        newHeap.popItem();
        expect(newHeap.heap).deep.equals([3,5]);
    });

    it('Return the smallest item and remove it', () => {
        newHeap.pushMultipleItems([1,5,3]);
        newHeap.popItem();
        expect(newHeap.heap).deep.equals([3,5]);
    });

    it('return the smallest item and reorder the rest', () => {
        newHeap.pushMultipleItems([5,3,4,1,8,11,23,45,12,9]);
        newHeap.popItem();
        expect(newHeap.heap).deep.equals([3,5,4,9,8,11,23,45,12]);
    });

    it('return the smallest item and reorder the rest', () => {
        newHeap.pushMultipleItems([6,3,4,1,8,11,23,45,12,5]);
        newHeap.popItem();
        expect(newHeap.heap).deep.equals([3,5,4,6,8,11,23,45,12]);
    });

    it('return the smallest item and reorder the rest', () => {
        const actual = [
            70,   96,   86,   13,   88,   41,   52,
            55,   68,   20,   34,   72,   75,   19,
            15,   64,   66,   36 ,  38,   63,   65,
            82,   25,   71,   83,   58,   93,   30,
            59,   51,    4,   87,   69 ,  99,   80,
            35,    2,   45,   27,   62,   48,   23,
             1,   73,   42,   29,   94,   12,   18,
            97,   85,   74,   84,    6,   77,   39,
             5,   78,   26,    8,   60,   95,   61,
            40,   90,    3,   33,   47,   98,   24,
            79,   16,   37,   57,   10,   76,   50,
            14,   67,   22,  100,   92,   46,   56,
            21,   91,   49 ,  53,   44,   31,   28,
            81,   89,    9,   17,   54,   43,   11,
            32,    7
        ];
        const expected = [
            2,  3,  5, 10,  4,  7,  6, 20,  14, 21,  9, 11,
           13, 15,  8, 33, 24, 16, 35, 23,  22, 29, 17, 18,
           12, 74, 71, 30, 26, 19, 41, 69,  40, 68, 47, 36,
           27, 50, 45, 62, 46, 25, 48, 44,  31, 55, 28, 54,
           32, 83, 85, 75, 84, 93, 77, 52,  39, 78, 59, 51,
           60, 95, 61, 96, 90, 87, 66, 99,  98, 80, 79, 70,
           37, 57, 38, 76, 64, 97, 67, 88, 100, 92, 63, 65,
           56, 91, 49, 82, 53, 73, 42, 81,  89, 94, 34, 86,
           58, 72, 43
         ];
        newHeap.pushMultipleItems(actual);
        newHeap.popItem();
        expect(newHeap.heap).deep.equals(expected);
    });
});