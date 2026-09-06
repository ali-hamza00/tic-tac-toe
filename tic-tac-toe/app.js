let boxes = document.querySelectorAll("#one");
let reset = document.querySelector("#reset");
let msgContainer = document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO = true;

const resetGame = ()=>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

let winPattern = [[0,1,2], [3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText='O';
            turnO = false;
        }
        else{
            box.innerText='X';
            turnO=true;
        }
    box.disabled= true;

    checkWinner();
    })
})

const disableBoxes =() => {
    for(let box of boxes)
    {
        box.disabled=true;
    }
}

const enableBoxes =() => {
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner=(winner) => {
    msg.innerText=`Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();

}
const checkWinner = () => {
    for (let  pattern of winPattern){
        let pos1VAl = boxes [pattern[0]].innerText;
        let pos2VAl = boxes [pattern[1]].innerText;
        let pos3VAl = boxes [pattern[2]].innerText;

        if(pos1VAl !="" && pos2VAl !="" && pos3VAl!="")
            if(pos1VAl === pos2VAl && pos2VAl == pos3VAl)
            {
                console.log("WINNER",pos1VAl );
                showWinner(pos1VAl);
            }
    }
}

reset.addEventListener("click",resetGame);