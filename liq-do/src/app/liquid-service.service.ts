import { Injectable } from '@angular/core';
import { index, row, Matrix, fraction, matrix, number, identity, subtract, inv, multiply } from 'mathjs';

@Injectable({
  providedIn: 'root'
})
export class LiquidServiceService {

  constructor() { }

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

  private range(size: number, startAt: number = 0): number[] {
    return [...Array(size).keys()].map(i => i + startAt);
  }

  private decompose(myMatrix: Matrix): [Matrix, Matrix]{
    const qSize = this.numberOfTransients(myMatrix);
    const rSize = myMatrix.size()[1] - qSize;
    const q = myMatrix.subset(index(this.range(qSize), this.range(qSize)));
    const r = myMatrix.subset(index(this.range(qSize), this.range(rSize, qSize)));
    return [q, r];
  }

  private numberOfTransients(myMatrix: Matrix): number{
    let count = 0;
    for (let i = 0; i < myMatrix.size()[0]; i++) {
      const rowI = row(myMatrix, i);
      if (!this.isAbsorbingRow(row)){
        count++;
      }
    }
    return count;
  }

  private isAbsorbingRow(rowI: Matrix): boolean{
    for (let i = 0; i < rowI.size()[1]; i++) {
      const item = rowI.subset(index(0, i));
      if (number(item) === 1){
        return true;
      }
    }
    return false;
  }

  private swap(myMatrix, i, j): Matrix {
    const size = myMatrix.size()[0];
    const sizeVector = this.range(size);
    const ii = myMatrix.subset(index(i, i));
    const ij = myMatrix.subset(index(i, j));
    const ji = myMatrix.subset(index(j, i));
    const jj = myMatrix.subset(index(j, j));
    const rowI = myMatrix.subset(index(i, sizeVector));
    const rowJ = myMatrix.subset(index(j, sizeVector));
    const columnI = myMatrix.subset(index(sizeVector, i));
    const columnJ = myMatrix.subset(index(sizeVector, j));
    myMatrix.subset(index(i, sizeVector), rowJ);
    myMatrix.subset(index(j, sizeVector), rowI);
    myMatrix.subset(index(sizeVector, i), columnJ);
    myMatrix.subset(index(sizeVector, j), columnI);
    myMatrix.subset(index(i, j), ji);
    myMatrix.subset(index(j, i), ij);
    myMatrix.subset(index(i, i), jj);
    myMatrix.subset(index(j, j), ii);
    return myMatrix;
  }

  private sort(myMatrix: Matrix): Matrix {
    const size = myMatrix.size[0];
    let absorbingRow = -1;

    for (let i = 0; i < size; i++) {
      const rowI = row(myMatrix, i);
      if (this.isAbsorbingRow(rowI)){
        absorbingRow = i;
      } else if (absorbingRow > -1){
        const newMatrix = this.swap(myMatrix, i, absorbingRow);
        return this.sort(newMatrix);
      }
    }
    return myMatrix;
  }

  private normalize(myMatrix): Matrix{
    const newMatrix = matrix();
    for (let i = 0; i < myMatrix.size()[0]; i++) {
      const rowI = row(myMatrix, i);
      let sum = 0;
      for (let j = 0; j < rowI.size()[1]; j++) {
        const item: number = rowI.subset(index(0, j));
        sum = sum + item;
      }
      for (let j = 0; j < rowI.size()[1]; j++) {
        const item: number = rowI.subset(index(0, j));
        const fractionItem = fraction(item, sum);
        newMatrix.subset(index(i, j), fractionItem);
      }
    }
    return newMatrix;
  }

  public calculateSteadyState(data: number[][]): Matrix{
    const myMatrix = matrix(data);
    const normalized = this.normalize(myMatrix);
    const sorted = this.sort(normalized);
    const [q, r] = this.decompose(sorted);
    const i = identity(q.size()[0]);
    const s = subtract(i, q) as Matrix;
    const v = inv(s);
    const b = multiply(v, r);
    return b;
  }

  public printMatrix(myMatrix: Matrix): string[][]{
    const result: string[][] = [];
    for (let i = 0; i < myMatrix.size()[0]; i++) {
      const rowI = row(myMatrix, i);
      const newRow = [];
      for (let j = 0; j < rowI.size()[1]; j++) {
        const item = rowI.subset(index(0, j));
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
}
