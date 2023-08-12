let arr = [
    { id: 1, name: 'john', age: 18, profession: 'developer' },
    { id: 2, name: 'jack', age: 20, profession: 'developer' },
    { id: 3, name: 'karen', age: 19, profession: 'admin' },
  ];
  
  // Don't worry about consoling these functions, they are already being called on the button clicks.
  // Please don't change anything in the index.html file.
  
  function PrintDeveloper() {
    //Write your code here , just console.log

    for(let index in arr){
      if(arr[index].profession === "developer"){
        console.log(arr[index]);
      }
    }
  }
  
  function addData() {
    //Write your code here, just console.log
    let newEmp={id:4, name:'Pradeep', age:22, profession:'intern'}
    arr.splice(arr.length,0,newEmp);
    console.log("Updated Array : ", arr );
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    for(let i=0 ;i<arr.length;i++){
      if(arr[i].profession==='admin'){
        arr.splice(i,1);
      }
    }
    console.log("Updated Array :",arr);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let arr1=[
      {id:5,name:'Virat',age:23,profession:'Manager'},
      {id:6,name:'Rohit',age:25,profession:'HR'},
      {id:7,name:'Dhoni',age:29,profession:'CEO'},
    ];

    for(let item of arr1){
      arr.push(item);
    }
    console.log("Concatenated Array :",arr);
  }
  
  // Here is an example of how functions work,
  // basically a function is a block of code which can directly access your 'arr' variable since arr is global.
  // If I have a function called consoleArr(), that can directly access arr like this to console it.
  
  function consoleArr() {
    console.log('Consoling Array Variable', arr);
    // Over here I can directly access the variable.
  }