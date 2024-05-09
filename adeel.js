// setIntervel & clearInterval

let timer = 0;

function incTimer(){
timer++;
console.log(timer)
}
 let interval;
let play = false;
// //  console.log(interval)

// function startTimer(){
//     interval = setInterval(incTimer , 1000);
//     play = true;
// }

//  function stopTimer(){
//     clearInterval(interval)
//  }


function toggleTimer(){

    if(play){
        clearInterval(interval);
        play = false;
    event.target.innerText = "start"

    }
    else{
        interval = setInterval(incTimer , 1000);
        play = true;
    event.target.innerText = "stop"
    }
    }


    setTimeout (function(){
let name = "Adeel Hassan"
console.log(name)
foo(name)
    }, 2000)

    function foo(name){
console.log(name)
    }


// fakestore API website

    fetch('https://fakestoreapi.com/products')
    .then(function(res){
        return res.json();
            })
    .then(function(res){
console.log("then",res)
    })
    .catch(function(err){
console.log("catch",err)
    })


    