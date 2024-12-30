
let title=document.querySelector('.title1');
let turn='x';
const button =document.querySelector("button");
let win=document.querySelector(".win")
let msg=document.getElementById("msg")
let newgame=document.getElementById("newgame")

function game(id){
    let element=document.getElementById(id);
    if(turn==='x' && element.innerHTML=='')
    {
       element.innerHTML='X';
       turn='o';
       title.innerHTML='X';
       document.getElementById(id).style.color='#31c4be';
       document.querySelector('.title1').style.color='#31c4be';

    }
    else if(turn==='o' && element.innerHTML==''){
        element.innerHTML='O';
        turn='x';
        title.innerHTML='O';
        document.getElementById(id).style.color='#f2b237';
        document.querySelector('.title1').style.color='#f2b237';

    }

compare();
}
let squares =[];
function compare(){
    for(let i=1; i<10;i++){
        squares[i]=document.getElementById('item'+i).innerHTML
    }
    if(squares[1]==squares[2]&&squares[2]==squares[3]&&squares[1]!=''){
        end(1,2,3);
        win.style.display='flex';
       

    }
    else if(squares[4]==squares[5]&&squares[5]==squares[6]&&squares[6]!=''){
        end(4,5,6);
        win.style.display='flex';
        

    }
    else if(squares[7]==squares[8]&&squares[8]==squares[9]&&squares[7]!=''){
        end(7,8,9);
        win.style.display='flex';
        

    }
    else if(squares[1]==squares[4]&&squares[4]==squares[7]&&squares[4]!=''){
        end(1,4,7);
        win.style.display='flex';
        

    }

    else if(squares[2]==squares[5]&&squares[5]==squares[8]&&squares[8]!=''){
        end(2,5,8);
        win.style.display='flex';
       

    }
    else if(squares[3]==squares[6]&&squares[6]==squares[9]&&squares[9]!=''){
        end(3,6,9);
        win.style.display='flex';

    }
    else if(squares[1]==squares[5]&&squares[5]==squares[9]&&squares[5]!=''){
        end(1,5,9);
        win.style.display='flex';

    }
   else if(squares[3]==squares[7]&&squares[7]==squares[5]&&squares[7]!=''){
        end(3,5,7);
        win.style.display='flex';

    }
   
        

    }

  


function end( n1,n2,n3){
    msg.innerHTML=`${squares[n1]}     Takes The Round`
}


    function reload (){
        button.addEventListener("click" ,()=> {
            window.location.reload(); })
        }
        function newg (){
            newgame.addEventListener("click" ,()=> {
                window.location.reload(); })
            }
       
       




