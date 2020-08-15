function binary(arr,num){
   var l = 0;
   var r = arr.length-1;
   var mid = Math.floor((l+r)/2);
   while (l<=r){
    mid = Math.floor((l+r)/2);
       if (arr[mid] === num){
           return mid;
       }
       if (arr[mid]> num){
           r=mid-1;
       } else {
           l= mid+1;
       }
   }
   return -1;
}
console.log(binary([1,2,3,4,5,6],9));