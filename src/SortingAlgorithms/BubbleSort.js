export function getBubbleSortAnimations(array){
    console.log('animations')
const animations = [];
if (array.length <= 1) return array;
let newArray = array.slice();
bubbleSort(newArray, animations);
return animations;
}


function bubbleSort(array, animations){
    if (array.length == 1) return array;
    console.log(array);
    let temp = 0;
    let swapped;
    let len = array.length -1;

    while(len > 0){
        
        for (let i = 0; i < len; i++){
            animations.push(['comparison1', i, i + 1]);
            animations.push(['comaprison2', i, i+1]);
            if (array[i] > array[i + 1]){
                swapped = true;
                animations.push(['swap', i, array[i + 1]]);
                animations.push(['swap', i + 1, array[i]]);
                temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
            }
        }
        if (!swapped) break;
        len--;

    }
    console.log(array);
        return array;
    }