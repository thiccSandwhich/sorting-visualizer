import React from 'react';
import './SortingVisualizer.css';
import {getBubbleSortAnimations}  from '../SortingAlgorithms/BubbleSort';
import {getMergeSortAnimation} from '../SortingAlgorithms/MergeSort';
import {getQuickSortAnimations} from '../SortingAlgorithms/QuickSort'
import { getHeapSortAnimations } from '../SortingAlgorithms/HeapSort';

const PRIMARY_COLOR = 'green';
const SECONDARY_COLOR = 'red';

export default class SortingVisualizer extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            array: [],
            };
    }
componentDidMount(){
    this.resetArray();
    }

resetArray(){
    const array = [];
    // todo: find the size of the window to then calculate the number of bars to place here
    for(let i = 0; i < 10; i++){
        //calculate height of window so second value is never higher than that. So the bar doesn't go off screen
        array.push(randomIntFromInterval(5,730));
        }
        this.setState({array : array});
    }

    mergeSort(){
        let animations = getMergeSortAnimation(this.state.array);
        for (let i = 0; i < animations.length; i++){
            let arrayBars = document.getElementsByClassName("array-bar");
            let isColorChange = i % 3 !== 2;
                if (isColorChange){
                    let barOne = animations[i][0];
                    let barTwo = animations[i][0];
                    let barOneStyle = arrayBars[barOne].style;
                    let barTwoStyle = arrayBars[barTwo].style;
                    let color = i % 3 ===0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                    setTimeout(() =>{
                        barOneStyle.backgroundColor = color;
                        barTwoStyle.backgroundColor = color;
                    }, i * 10);
                } else{
                    setTimeout(()=> {
                        let barOneIdx = animations[i][0];
                        let newHeight = animations[i][0];
                        let barOneStyle = arrayBars[barOneIdx].style;
                        barOneStyle.height = `${newHeight}px`;
                    },i * 10)
                }
        }
    }

    quickSort(){
        let animations = getQuickSortAnimations(this.state.array);
        for( let i = 0; i < animations.length ; i++){

            const isColorChange = animations[i][0] ==='comparison1' ||  
                                  animations[i][0] === 'comparison2';
            let arrayBars = document.getElementsByClassName('array-bar');
            if (isColorChange){
                const color = animations[i][0] ==='comparison1' ?
                              SECONDARY_COLOR : PRIMARY_COLOR;
                //sets the variables to the second and third values in the subarray
                let [, barOneIndex, barTwoIndex] = animations[i];
                let barOneStyle = arrayBars[barOneIndex].style;
                let barTwoStyle = arrayBars[barTwoIndex].style;
                setTimeout(()=>{
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * 10);
            } else{
                let [, barIndex, newHeight] = animations[i];
                if (barIndex === -1){
                    continue;
                }
                let barStyle = arrayBars[barIndex].style;
                setTimeout(() =>{
                    barStyle.height = `${newHeight}px`;
                }, i * 10);
            }
        }
    }

    heapSort(){
        let animation = getHeapSortAnimations(this.state.array);
    }
 
    bubbleSort(){
        let animations = getBubbleSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++){
            let arrayBars = document.getElementsByClassName("array-bar");
            let isColorChange = animations[i][0] === 'comparison1' || 
                                animations[i][0] === 'comaprison2';
            if (isColorChange){
                let color = animations[i][0] === 'comparison1' ?
                SECONDARY_COLOR : PRIMARY_COLOR;
            let [, barOne, barTwo] = animations[i];
            let barOneStyle = arrayBars[barOne].style;
            let barTwoStyle = arrayBars[barTwo].style;
            setTimeout(() =>{
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
            }, i * 10);
            } else{
                let [, barIdx, newHeight] = animations[i];
                if (barIdx === -1){
                continue;}
                let barStyle = arrayBars[barIdx].style;
                setTimeout(() =>{
                    barStyle.height = `${newHeight}px`;
                }, i * 10);
            }
        }
    }
    

render() {
    const { array } = this.state;

    return (
        <div className='array-container'>
            {array.map((value, idx) => (
                <div className="array-bar" key={idx} style={{backgroundColor: PRIMARY_COLOR, height: `${value}px` }}></div>
            ))}
            <div className='button-container'>
            <button onClick={() => this.resetArray()}>Generate New Array</button>
            <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
            <button onClick={() => this.mergeSort()}>Merge Sort</button>
            <button onClick={() => this.quickSort()}>Quick Sort</button>
            <button onClick={() => this.heapSort()}>Heap Sort</button>
            </div>
        </div>
    );
}
}



function randomIntFromInterval(min, max){
   return Math.floor(Math.random() * (max - min + 1) + min);
   }

   function arraysAreEqual(arrOne, arrTwo){
    if (arrOne.length !== arrTwo.length) return false;
    for(let i = 0; i< arrOne.length; i++){
        if(arrOne[i] !== arrTwo[i]) return false;
    }
    return true;
   }