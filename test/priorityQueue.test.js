const chai = require('chai');
const priorQ = require('../src/priorityQueue');
const expect = chai.expect;

describe('Priority Queue', () => {
    it('Return empty', () => {
        expect(priorQ([])).deep.equals(null);
    });

    it('Return single element', () => {
        expect(priorQ([1])).deep.equals(1);
    });

    it('Return priority element when first', () => {
        expect(priorQ([1,2])).deep.equals(1);
    });

    it('Return priority element when not first', () => {
        expect(priorQ([3,1,2])).deep.equals(1);
    });

    it('Return priority element when not first', () => {
        expect(priorQ([3,4,1,5,9,7,1,8])).deep.equals(1);
    });

    it('Sort a shit ton of numbers', () => {
        const actual = priorQ([
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
        ]);
    
        const expected = 1;
       
        expect(actual).deep.equals(expected);
      });

});
