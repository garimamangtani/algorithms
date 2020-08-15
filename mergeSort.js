function merge(arr1,arr2) {
    var i=0;
    var j=0;
    var newarr=[];
    while(i<arr1.length && j<arr2.length){
        if(arr1[i] < arr2[j]){
            newarr.push(arr1[i]);
            i++;
        }
        if (arr1[i] > arr2[j]){
            newarr.push(arr2[j]);
            j++;
        }
        if(arr1[i] === arr2[j]){
            newarr.push(arr1[i]);
            i++;
            newarr.push(arr2[j]);
            j++;
        }
      
    }
    while (i<arr1.length){
        newarr.push(arr1[i]);
        i++;
    }
    while(j<arr2.length){
        newarr.push(arr2[j]);
        j++;
    }
    return newarr;
}
function mergesort(arr){
    if (arr.length<=1) return arr;
    var mid = Math.floor((arr.length)/2);
    var left = mergesort(arr.slice(0,mid));
    var right = mergesort(arr.slice(mid));
    return merge(left,right);
}

console.log(mergesort([1,3,5,1,2,4,6,8,10]));