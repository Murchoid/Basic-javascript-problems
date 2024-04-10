let table = document.getElementById("this-table");
let base = document.getElementById("base");
let multiplier = document.getElementById("multiplier");
let comment = document.getElementById("comment-invisible");
let ans = document.getElementById("ans");
const submit = document.getElementById("submit");
const next = document.getElementById("next");
let quiz = document.getElementById("quiz");

let score=0;
let submitter=false;

function checkAns(){
    let correctAns;
    correctAns = eval(base.value  * multiplier.value);
    console.log(multiplier.value);

    if(ans.value == correctAns)
    return true;
    else
    return false;
}

    submit.addEventListener("click", ()=>{
        submitter=true;

        if(ans.value != ""){
        submit.style.backgroundColor = "darkorange";
        next.style.backgroundColor = "darkorange";
        next.style.cursor="pointer";

        if(checkAns()== true){
            score++;
            comment.setAttribute("id", "comment-visible");
            comment.innerText = "Correct";
        }

        else{
            comment.setAttribute("id", "comment-wrong");
            comment.innerText = "Try again or press next";
        }
    }

    else alert('Please enter the answer first');
    });


    
    next.addEventListener("click", ()=>{
    
        if(ans.value != "" && submitter==true){
            if(base.innerText < 13) ++base.value;
            else {
                if(score > 9){
                    alert("Your score is " + score + " you have passed!! press ok to proceed");
                    multiplier.value++;
                    base.value = 1;
                    table.value++;
                    score=0;
                }
                else{
                    alert("Your score is " +  score + " you have to have at least a 9 to proceed");
                    base.value = 1;
                    score=0;
                }
            }
        
            ans.value = null;
            comment.setAttribute("id", "comment-invisible");
            submitter= false;
        }

        else alert('Please enter the answer first or press submit');
    });
 
