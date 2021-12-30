// how does it works: This is very simple. Go through the array, find the index of the lowest element swap the lowest element with the first element. Hence first element is the lowest element in the array.

// Now go through the rest of the array (excluding the first element) and find the index of the lowest and swap it with the second element.

// thats how it continues to select (find out) the lowest element of the array and putting it on the left until it hits the last element.





function selectionSort(sortNums){

let arrayEl;
let  minInDex;


for (let i= 0; i < sortNums.length; i++) {

  minInDex=i;
 for (let j = i+1; j < sortNums.length; j++) {
     
    if (sortNums[j]<sortNums[minInDex]) {
       
        minInDex=j;//first of all ,we need to find minimum index of array element that we have inside.
    }
 }

 arrayEl= sortNums[i];//20 - 30 - 40 - 12 - like this going on 
 console.log("*******>>>> "+arrayEl);

 sortNums[i]=sortNums[minInDex];//[5,1,2,3,4,5,20] - [5,12,2,3,4,5,20] - [5,12,2,3,4,5,6] - [5,12,24,30,4,5,6] - [5,12,24,30,4,5,6] - ..like this going on 
 console.log("sort ==>> "+sortNums[i]);

 sortNums[minInDex]=arrayEl; //[0,1,2,3,4,5,20] - [0,1,2,30,4,5,20] - [0,1,2,40,4,5,20] -  [0,1,2,40,12,5,20] - ...like this going on 

 console.log("------->>> "+sortNums[minInDex]);






  
}


console.log(sortNums);





    return sortNums;
}


selectionSort([20,30,40,12,24,78,5]);



