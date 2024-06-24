//quick sort. Pick a pivot number in the array. The sort then basically
//moves the other numbers based on whether or not they are higher or lower
//steps, 1: pick pivot. 2: partition, which is move numbers either above or below the pivot 3: the original pivot is now in it's correct spot,
//then recursively quicksort the numbers before the og pivot, and then after the og pivot. 

export function getQuickSortAnimations(array){
    let animations = [];
    console.log(array);
    quicksort(array, 0, array.length -1, animations);
    console.log(' complete' + array);
    return animations;
}

function quicksort(array, lowIndex, highIndex, animations){

    if( lowIndex >= highIndex) return;
   //choose a random pivot
    let pivotIndex = Math.floor(Math.random() * (highIndex - lowIndex + 1) + lowIndex)
    let pivot = array[pivotIndex];
    animations.push(['comparison1', pivotIndex, highIndex]);
    animations.push(['swap', pivotIndex, array[highIndex]]);
    animations.push(['swap', highIndex, array[pivotIndex]]);
    animations.push(['comparison2', pivotIndex, highIndex]);
    //move pivot to the end
    swap(array, pivotIndex, highIndex);
    console.log(array);

    //partitioning
    
    let lp = partition(array,lowIndex, highIndex, pivot, pivotIndex, animations);
    
   
    quicksort(array, lowIndex, lp - 1, animations);
    quicksort(array, lp + 1, highIndex, animations);
    
}

function partition(array,lowIndex, highIndex, pivot, pivotIndex, animations){
    let lp = lowIndex;
    let rp = highIndex -1;

    while (lp <= rp){
       
        while (array[lp] <= pivot && lp <= rp){
            //the pivot index needs to be pushed here
            animations.push(['comparison1', pivotIndex, lp]);
            animations.push(['comparison2', pivotIndex, lp]);
            lp++;
        }
    
        while (array[rp] >= pivot && rp >= lp){
            animations.push(['comparison1', pivotIndex, rp]);
            animations.push(['comparison2', pivotIndex, rp]);
            rp--;
        }
        if(lp < rp){
        animations.push(['swap', lp, array[rp]]);
        animations.push(['swap', rp, array[lp]]);
        swap(array, lp, rp);
        console.log(array);
        }

    }
    //swap pivot to its correct position
    animations.push(['swap', lp, array[highIndex]]);
    animations.push(['swap', highIndex, array[lp]]);
    swap(array, lp, highIndex);
    console.log(array);

    return lp;
}

function swap(array, index1, index2){
let temp = array[index1];
array[index1] = array[index2];
array[index2] = temp;
}