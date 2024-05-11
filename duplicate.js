const arr=[1,2,3,4,3,2,2]
const arr1=[]

const dupl=(el)=>{

    for(let i=0;i<arr.length;i++){
        if(!arr1.includes(arr[i])){
            for(let j=i+1;j<arr.length;j++){
                if(arr[i]===arr[j]){
                    arr1.push(arr[i]);
                    break;
                }
            }
        }
    }

}


dupl(arr);

console.log(arr1)