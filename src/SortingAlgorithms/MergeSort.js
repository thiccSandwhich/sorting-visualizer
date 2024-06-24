//split array in two equal halves
// split in each subarray in half
// split until they can't be split any more
//merge back together

export function getMergeSortAnimation(array){
let animations = [];
console.log(array)
 if (array.length ==1) return array;
 let aux = array.slice();

 mergeSortHelper(array, animations);
console.log(array);
 return animations;
}

function mergeSortHelper(array, animations){
// animations.push(['comparison1', ])
let arrLength = array.length;

if(arrLength < 2) return;

let mid = Math.floor(arrLength / 2);
let leftArr = array.slice(0, mid);
let rightArr = array.slice(mid);
mergeSortHelper(leftArr, animations);
mergeSortHelper(rightArr, animations);
merge(array, leftArr, rightArr, animations);

}

function merge(array, leftArr, rightArr, animations){

    let leftLen = leftArr.length;
    let rightLen = rightArr.length;

    let i = 0
    let j = 0
    let k = 0;
 
    //am I pushing the right value to the animations?
    while ( i < leftLen && j < rightLen){
        animations.push([i, j]);
        if (leftArr[i] <= rightArr[j]){
            array[k] = leftArr[i];
            animations.push([k, array[i++]]);
            // i++
        }else{
            array[k] = rightArr[j];
            animations.push([k, array[j++]]);
            // j++;
        }
        k++;
    }
    while (i < leftLen){
        animations.push([i, i]);
        animations.push([i,i]);
        array[k] = leftArr[i];
        animations.push([k, leftArr[i]]);
        i++;
        k++;
    }
    while(j < rightLen){
        animations.push([j,j]);
        animations.push([j, j]);
        array[k] = rightArr[j];
        animations.push([k, rightArr[j]]);
        j++;
        k++;
    }
}