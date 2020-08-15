function frequency(str) {
    var obj ={};
    for (var i=0; i<str.length; i++){
    if (obj.var[i]>0){
        obj.var[i]++;
    } else{
        obj.var[i] = 1;
    }
    }
    console.log("hello");
    return obj;
}

console.log(frequency("Garima"));

