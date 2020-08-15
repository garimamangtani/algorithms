function selectionSort(arr){
    for (var i=0; i<arr.length; i++){
        var min= arr[i];
        var index = i;
        for (j=i+1; j<arr.length; j++){
            if (arr[j] >min){
                min = arr[j];
                index = j;
            }   
        }
        swap(arr,i,index);
    }
    return arr;
}

function swap(arr,i,j){
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
console.log(selectionSort([2,3,0,5,1,8,6]));