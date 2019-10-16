const na = document.querySelectorAll('.tic');

let counter = 0;
let audio = new Audio("Mario-coin-sound.mp3")
let score = document.querySelector ("#score");
let oldScore = localStorage.getItem('score')
let scoreC= parseInt(oldScore);

const winChance = 
[

    ["n0", 'n1', 'n2'],
    ["n3", "n4","n5"],
    ["n6", "n7","n8"],

    ["n0", "n3","n6"],
    ["n1", "n4", "n7"],
    ["n2", "n5", "n8"],

    ["n0", "n4", "n8"],
    ["n2", "n4", "n6"],
]


let plyerTurn = true;
const hadnleCick = function(){

    counter++
    console.log(this.id)
    if ( plyerTurn == true){
        this.innerText= "X"
    document.querySelector("#message").innerText = "X turn!"
        plyerTurn = false
        for(let i=0; i< winChance.length; i++){
           for (let j=0; j<winChance[i].length; j++){
               if ( this.id == winChance[i][j]){
                   winChance[i][j]="X"
               }
           }
        }

    }else {
        plyerTurn = true
        this.innerText = "O"
        document.querySelector("#message").innerText = "O TURN!"
        for(let i=0; i< winChance.length; i++){
            for (let j=0; j<winChance[i].length; j++){
                if ( this.id == winChance[i][j]){
                    winChance[i][j]="O"
                }
            }
         }



    }
    this.removeEventListener('click', hadnleCick)

    
console.log(winChance)
check()

}

const check= function(){

    const message = document.querySelector("#message")
            
            if(winChance[0][0] == winChance[0][1] && winChance[0][0] == winChance[0][2] ){
                // alert(winChance[0][0] + " WINS" )
                message.innerText = winChance[0][0] + " wins!"
              message.style.fontSize = "40px"
              message.style.fontStyle = "courier new "

                na[0].classList.add("winner");
                na[1].classList.add("winner");
                na[2].classList.add("winner");

                scoreC = scoreC + 1; 
                score.innerText = scoreC;
                
                remove()
                audio.play()


            } else if(winChance[1][0]== winChance[1][1] && winChance[1][0] == winChance[1][2]){
                // alert(winChance[1][0] + " WINS" )

                message.innerText = winChance[1][0] + " wins!"
              message.style.fontSize = "40px"
              message.style.fontStyle = "courier new"

                na[3].classList.add("winner");
                na[4].classList.add("winner");
                na[5].classList.add("winner");
                scoreC++
                 score.innerText=scoreC
                remove()
                audio.play()

            
            }else if(winChance[2][0]== winChance[2][1] && winChance[2][0] == winChance[2][2]){
                // alert(winChance[2][0] + " WINS" )
                message.innerText = winChance[2][0] + " wins!"
              message.style.fontSize = "40px"
              message.style.fontStyle = "courier new"

                na[6].classList.add("winner");
                na[7].classList.add("winner");
                na[8].classList.add("winner");
                scoreC++
                 score.innerText=scoreC
                remove()
                audio.play()
                
            } else if(winChance[3][0]== winChance[3][1] && winChance[3][0] == winChance[3][2]){
                // alert(winChance[3][0] + " WINS" )
                message.innerText = winChance[3][0] + " wins!"
              message.style.fontSize = "40px"
              message.style.fontStyle = "courier new"

                na[0].classList.add("winner");
                na[3].classList.add("winner");
                na[6].classList.add("winner");
                scoreC++
                 score.innerText=scoreC
                remove()
                audio.play()
            }else if(winChance[4][0]== winChance[4][1] && winChance[4][0] == winChance[4][2]){
                // alert(winChance[4][0] + " WINS" )
                message.innerText = winChance[4][0] + " wins!"
              message.style.fontSize = "40px"
              message.style.fontStyle = "courier new"

                na[1].classList.add("winner");
                na[4].classList.add("winner");
                na[7].classList.add("winner");
                scoreC++
                  score.innerText=scoreC
                remove()
                audio.play()
                    }else if(winChance[5][0]== winChance[5][1] && winChance[5][0] == winChance[5][2]){
                        // alert(winChance[5][0] + " WINS" )
                        message.innerText = winChance[5][0] + " wins!"
              message.style.fontSize = "40px"
              message.style.fontStyle = "courier new"

                na[3].classList.add("winner");
                na[5].classList.add("winner");
                na[8].classList.add("winner");
                scoreC++
                  score.innerText=scoreC
                        remove()
                        audio.play()
                    }else if(winChance[6][0]== winChance[6][1] && winChance[6][0] == winChance[6][2]){
                        // alert(winChance[6][0] + " WINS" )
                        message.innerText = winChance[6][0] + " wins!"
              message.style.fontSize = "40px"
              message.style.fontStyle = "courier new"

                na[0].classList.add("winner");
                na[4].classList.add("winner");
                na[8].classList.add("winner");
                scoreC++
                score.innerText=scoreC
                        remove()
                        audio.play()
                    }else if(winChance[7][0]== winChance[7][1] && winChance[7][0] == winChance[7][2]){
                        // alert(winChance[7][0] + " WINS" )
                        message.innerText = winChance[7][0] + " wins!"
              message.style.fontSize = "40px"
              message.style.fontStyle = "courier new"

                na[2].classList.add("winner");
                na[4].classList.add("winner");
                na[6].classList.add("winner");
                scoreC++
                 score.innerText=scoreC

                        remove()
                        audio.play()
                    }else if (counter== 9 ){
                        alert ("tie")
                    }
                    
               
                    



     



}


for ( let i=0; i<na.length; i++){
    na[i].addEventListener('click', hadnleCick)
}


const remove = function(){
    localStorage.setItem("score",  scoreC);
    for ( let i=0; i<na.length; i++){
        na[i].removeEventListener('click', hadnleCick)
    }
}


const tie = function(){
    

}

 const reset = document.querySelector("#reset")
 const playAgain = document.querySelector("#playAgain")

const refresh =function(){
    window.location.reload(true);
   

}

const resetScore = function(){
    localStorage.setItem('score', 0);
    location.reload();
}
playAgain.addEventListener('click', refresh)
reset.addEventListener('click', resetScore)
