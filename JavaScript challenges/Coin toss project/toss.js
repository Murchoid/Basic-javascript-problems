let strength = document.getElementById("toss-strength");
let start = document.getElementById("go");
let showStrength= document.getElementById("show-strength");
let spin = document.getElementById("face-without-animation");
let coinFace = document.getElementById("coin-face");
let results = document.getElementById("results");
let reset = document.getElementById("reset");
let head=0;
let tail=0;
let checker = false;

strength.addEventListener("click", ()=>{
    checker = true
    showStrength.innerText = strength.value;
    if(spin.getAttribute("id")== "face-with-animation")
            spin.setAttribute("id", "face-without-animation");
});

function showFace(){
    let randomiser = Math.floor(Math.random() * 999999 + strength.value );

    if (randomiser  % 2 == 0)  return true;
    else return false;
}

function check(){
    if(strength.value > 0){

        spin.setAttribute("id", "face-with-animation");

        if(showFace() == true){
            head++;
            coinFace.innerText='Heads';
            results.innerHTML = 'Heads: ' + head + '<br> Tails: ' + tail;
            
        }
        else 
            {   tail++;
                coinFace.innerText='Tails';
                results.innerHTML = 'Heads: ' + head + '<br> Tails: ' + tail;
            }

    }
}

start.addEventListener("click", ()=>{
    console.log('pressed');
    if(checker == true){
        check();
        checker = false;
    }

    else{
        alert("change the strength again");
    }
});

reset.addEventListener("click", ()=>{
    head=0;
    tail=0;
    results.innerHTML = 'Heads: ' + head + '<br> Tails: ' + tail;
    strength.value = 0;
    showStrength.innerText = strength.value;
})
