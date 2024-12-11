console.log("----Shubham & Muski----");

document.write("hello world");

// 9*1=9
// 9*2=18
// 9*3=27
// ...
//const userInput = 10;
//for(let i=1 ; i<10 ; i++ ) {
  //  const tableRow = userInput + "*" + i +"=" + userInput * i;
    //console.log(tableRow);
//}
//const userInput = 3;
//for(let i=1 ; i<=100 ; i++ ) {
   // if(i%3==0){
     //   console.log(i);
   // }

    //if(i%3==0&&i%5==0){
      //  console.log(i)
    //}

    //if((i%3==0&&i%5==0)||i%9==0){
      //  console.log(i)}

    //if(i%2==0){
    //    console.log("---even---");
    //}
    //else{
    //    console.log("--odd--");
    //}

    //console.log((i*i+i)/2);

//} 
/*let i = 1;
while(i<=100){
    if(i%2==0){
    console.log(i)}
    i++
}*/
let i = 1;
let ans = 0;
while(i<=100){
  if(i%2==0){
    ans = i+ans;
    console.log(ans)
  }
  i++
}