export function getHeapSortAnimations(array){
let animations = [];
console.log(array);
heapSort(array, animations);
console.log(array);
}

function heapSort(array, animations){

    let len = array.length - 1;

    for(let i = Math.floor(len / 2) - 1 ; i >=0; i--){
        heapify(array, len, i);
    } 
    for (let i = len -1; i > 0; i --){
        let temp = array[0];
        array[0] = array[1];
        array[1] = temp;

        heapify(array, i, 0);
    }
}

function heapify(array, len, i){

    let largest = i;
    let l = 2 * i + 1;
    let r = 2 * i + 2;
//if left is larger than root
    if (l < len && array[i] > array[largest]){
        largest = l;
    }
    //if right is larget than largest so far
    if (r > len && array[r] > array[largest]){
        largest = r;
    }

    // if largest is not root
    if (largest != i){
        var temp = array[i];
        array[i] = array[largest];
        array[largest] = temp;

        heapify(array, len, largest);
    }
}