const math = require('mathjs');

data1 = [
  [0, 10, 10, 80, 0],
  [10, 0, 10, 0, 80],
  [10, 10, 0, 40, 40],
  [0, 0, 0, 1, 0],
  [0, 0, 0, 0, 1],
];

data2 = [
    [  1,   0,   0,   0,   0],
    [0.5,   0, 0.5,   0,   0],
    [  0, 0.5,   0, 0.5,   0],
    [  0,   0, 0.5,   0, 0.5],
    [  0,   0,   0,   0,   1],
];

function range(size, startAt= 0) {
    return [...Array(size).keys()].map(i => i + startAt);
}

function decompose(matrix){
    const qSize = numberOfTransients(matrix);
    const rSize = matrix.size()[1] - qSize;
    const q = matrix.subset(math.index(range(qSize), range(qSize)));
    const r = matrix.subset(math.index(range(qSize), range(rSize, qSize)));
    return [q, r];
}

function numberOfTransients(matrix){
    let count = 0;
    for (let i = 0; i < matrix.size()[0]; i++) {
        let row = math.row(matrix, i);
        if (!isAbsorbingRow(row)){
            count++;
        }
    }
    return count;
}

function isAbsorbingRow(row){
    for (let i = 0; i < row.size()[1]; i++) {
        let item = row.subset(math.index(0, i));
        if (item == 1){
            return true;
        }
    }
    return false;
}

function swap(matrix, i, j){
    const size = matrix.size()[0];
    const sizeVector = range(size);
    const ii = matrix.subset(math.index(i, i));
    const ij = matrix.subset(math.index(i, j));
    const ji = matrix.subset(math.index(j, i));
    const jj = matrix.subset(math.index(j, j));
    const rowI = matrix.subset(math.index(i, sizeVector));
    const rowJ = matrix.subset(math.index(j, sizeVector));
    const columnI = matrix.subset(math.index(sizeVector, i));
    const columnJ = matrix.subset(math.index(sizeVector, j));
    matrix.subset(math.index(i, sizeVector), rowJ);
    matrix.subset(math.index(j, sizeVector), rowI);
    matrix.subset(math.index(sizeVector, i), columnJ);
    matrix.subset(math.index(sizeVector, j), columnI);
    matrix.subset(math.index(i,j), ji);
    matrix.subset(math.index(j,i), ij);
    matrix.subset(math.index(i,i), jj);
    matrix.subset(math.index(j,j), ii);
    return matrix;
}

function sort(matrix){
    const size = matrix.size()[0];
    let absorbingRow = -1;

    for (let i = 0; i < size; i++) {
        let row = math.row(matrix, i);
        if(isAbsorbingRow(row)){
            absorbingRow = i;
        } else if (absorbingRow > -1){
            newMatrix = swap(matrix, i, absorbingRow);
            return sort(newMatrix);
        }
    }
    return matrix;
}

function normalize(matrix){
    let newMatrix = math.matrix();
    for (let i = 0; i < matrix.size()[0]; i++) {
        let row = math.row(matrix, i);
        let sum = 0;
        for (let j = 0; j < row.size()[1]; j++) {
            let item = row.subset(math.index(0, j));
            sum = sum + item;
        }
        for (let j = 0; j < row.size()[1]; j++) {
            let item = row.subset(math.index(0, j));
            let fractionItem = math.fraction(item, sum)
            newMatrix.subset(math.index(i, j), fractionItem);
        }
    }
    return newMatrix;
}

function calculateSteadyState(data){
    const matrix = math.matrix(data);
    const normalized = normalize(matrix);
    const sorted = sort(normalized);
    const [q, r] = decompose(sorted);
    const i = math.identity(q.size()[0]);
    const s = math.subtract(i, q);
    const v = math.inv(s);
    const b = math.multiply(v, r);
    return b;
}

function printMatrix(matrix){
    let result = [];
    for (let i = 0; i < matrix.size()[0]; i++) {
        let row = math.row(matrix, i);
        let newRow = [];
        for (let j = 0; j < row.size()[1]; j++) {
            let item = row.subset(math.index(0, j));
            let newItem = item;
            if (item.n){
                newItem = item.n.toString() + '/' + item.d.toString();
            }
            newRow.push(newItem);
        }
        result.push(newRow);
    }
    console.log(result);
    return result;
}

const test = calculateSteadyState(data2);
printMatrix(test);
