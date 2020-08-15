function bubblesort(arr){
  for (var i=arr.length-1; i>=0; i--){
      for (var j=0; j<i;j++){
          if(arr[j]>arr[j+1]){
              var temp= arr[j];
              arr[j] = arr[j+1];
              arr[j+1] = temp;
          }
       }
   }
   return arr;
}

function factorial(n) {
    if (n===0){
        return 1;
    }
    return n * factorial(n-1);
}
    


console.log(factorial(5));
//console.log(bubblesort([35,45,29,8,12,88]));