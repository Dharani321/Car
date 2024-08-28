// document.querySelector(".score");
// var game_a= document.querySelector(".game_area");
//document.querySelector(".score").addEventListener("click",startscreen);
// let width=a.offsetWidth;
// let height=a.offsetHeight;
// console.log(width);
// console.log(height);
// for(var i=0;i<=10;i++){
//     height+=1;
//     document.querySelector(".ca").style.height='height';
//     console.log(width,height);
//     game_a.appendChild(a);.
document.querySelector(".score").addEventListener("click",startscreen);


let key1={
    ArrowUp:false,
    ArrowDown:false,
    ArrowLeft:false,
    ArrowRight:false,

}

document.addEventListener("keydown",check);
document.addEventListener("keyup",check1);
function check(e){
    e.preventDefault();
   // console.log(e.key);
   // console.log(key1);
   key1[e.key]=true;
   // console.log(key1[e.key]);
}
function check1(e){
    e.preventDefault();
   //  console.log(e.key);
   // console.log(key1);
   key1[e.key]=false;
   // console.log(key1[e.key]);
 }


//  var a=document.querySelector(".ca");
//  let width=a.offsetWidth;
// let height=a.offsetHeight;
// let width1=a.offsetLeft;
// let height1=a.offsetTop;
// console.log(width);
// console.log(height);
// console.log(width1);
// console.log(height1);



 


// for(i=0;i<3;i++){
//     let b=document.createElement('div');
//     b.setAttribute('class', 'enemy');
//    let gamearea=document.querySelector(".game_area");
//    gamearea.appendChild(b);
//    document.querySelectorAll(".enemy")[i].classList.add("eneall");
//    }

//   function move()
//   {
//      var line=document.querySelectorAll(".u");
//      line.y=line.offsetTop;
//      line.y=line.y+player.speed;
//      line. style .top=line.y+"px";
//   }

   let player={speed:8};
   let score={score:0};
   let gamearea=document.querySelector(".game_area");
    let v=gamearea.getBoundingClientRect();
   //  console.log(v);
   
   function endgame()
   {
     
     document.querySelector(".p").classList.remove("ph");
     document.querySelector(".p").innerHTML="Game over !Your Score is:"+score.score;
     //player.start=false;
     document.querySelector(".game_area").style.display="none";
     //player.start=true;
     player.start=false;
     //startscreen();
     //startscreen();
     document.addEventListener("keydown",function(e)
   {
      player.start=true;
       if(e.key=='Enter'){
         //alert("hi");
         player.start=true;
         document.querySelector(".game_area").style.display="block";
       

        startscreen();
       }
   });

   //   document.addEventListener("keydown",function(e)
   // {
   //     if(e.key=='Enter'){
   //       alert("hi");
   //       document.querySelector(".game_area").style.display="block";
   //       player.start=true;
   //       startscreen();
   //     }
   // });
   //   
   }



   function move()
    {
      var line=document.querySelectorAll(".u");
      line.forEach(function(item){
         // console.log(item.x,item.y)
         if(item.y>580)
         {
            item.y-=590;
         }
         //console.log(item);
         item.y=item.y+player.speed;
         item.style.top=item.y+"px";

      });
      //   line.y=line.offsetTop;
      //    line.y=line.y+player.speed;
      //    line. style .top=line.y+"px";
     }
     function emove1(car)
     {
      let n=document.querySelectorAll(".ecar");
      n.forEach(function(item1){
      if(collision(car,item1)){
         // console.log("collision");
         //player.start=false;
         
         endgame();
         
      }
         if(item1.y>580)
         {
            item1.y-=600;
            item1.style.left=Math.floor(Math.random()*350) +"px";
         }
         item1.y+=player.speed;
         item1.style.top=item1.y+"px";
      });
   }

   function collision(a,b)
   {
      arec=a.getBoundingClientRect();
      brec=b.getBoundingClientRect();
      return !((arec.top>brec.bottom)||(arec.bottom<brec.top)||(arec.left>brec.right)||(arec.right<brec.left));
      

   }

      // var line=document.querySelectorAll(".ecar");
      // line.forEach(function(item){
      //    // console.log(item.x,item.y)
      //    // if(item.y>580)
      //    // {
      //    //    item.y-=590;
      //    // }
      //    //console.log(item);
      //    item.y=item.y+player.speed;
      //    item.style.top=item.y+"px";
       
   //   })
   // }
   // document.addEventListener("keydown",gameplay);
      

   function gameplay(){
    console.log("I am");
    var car=document.querySelector(".car5");
    
    // let width1=car.offsetLeft;
    // let height1=car.offsetTop;
    // player.speed=5;
    
   //document.querySelector(".game_area").style.display="block";  
    if(player.start){
      
      //document.querySelector(".game_area").style.display="block";

        if(key1.ArrowRight && (player.x<330)){
            
             player.x+=player.speed;
         }
         if(key1.ArrowDown && (player.y<480)){
            
            player.y+=player.speed;
         }

         if(key1.ArrowLeft && (player.x>0)){
           
            player.x-=player.speed;
            }
         if(key1.ArrowUp && (player.y>70)){
            player.y-=player.speed;
         }


        car.style.top=player.y +"px"; 
        car.style.left=player.x +"px";
      //   console.log(player.x, player.y);


      move();
      emove1(car);
      document.querySelector(".score h").innerHTML=score.score++;
    window.requestAnimationFrame(gameplay);
    
   }

    // for(i=0;i<20;i++){
    //     let a=document.createElement('div');
    //     a.setAttribute('class', 'u');
    //    let gamearea=document.querySelector(".game_area");
    //    gamearea.appendChild(a);
    //    }
    }
   

   function startscreen(){
   document.querySelector(".p").classList.add("ph");
  document.querySelector(".game_area").style.display="block";
   
    player.start=true;
    score.score=0;
    document.querySelector(".score h").innerHTML=score.score;
    window.requestAnimationFrame(gameplay);

    for(i=0;i<5;i++){
    let ac=document.createElement('div');
        ac.setAttribute('class', 'u');
      //   ac.x=10;
         ac.y=(i*120);
        ac.style.top=ac.y +"px";
       let gamearea=document.querySelector(".game_area");
       gamearea.appendChild(ac);
    }

    
    let a=document.createElement('div');
    a.setAttribute('class', 'car5');
   let game_area=document.querySelector(".game_area");
   game_area.appendChild(a);
   
   for(z=0;z<3;z++){
   let ar=document.createElement('div');

    ar.setAttribute('class','ecar');
   //  ar.x=(z*155);
   ar.x=Math.floor(Math.random()*350);
    ar.y=(z*160);
   ar.style.top=ar.y+"px";
   ar.style.left=ar.x+"px";
   // function c(){
   //    function b(){
   //       let hex=Math.floor(Math.random()*256).toString(16);
   //       return ("0"+String(hex)).substring(-2);
   //    }
   //    return "#"+b()+b()+b();
   // }
   // ar.style.backgroundColor=c();
   ar.style.backgroundColor="green";
   let game_area3=document.querySelector(".game_area");
   game_area3.appendChild(ar);
   }

   // for(i=0;i<3;i++){
   //    let ac1=document.createElement('div');
   //        ac1.setAttribute('class', 'ecar');
   //      //   ac.x=10;
   //         ac1.y=(i*120);
   //        ac1.style.top=ac1.y +"px";
   //       let gamearea=document.querySelector(".game_area");
   //       gamearea.appendChild(ac1);
   //    }

   let car=document.querySelector(".car5");
    player.x=car.offsetLeft;
    player.y=car.offsetTop;
   //  console.log(player.x,player.y);

//     let b=document.createElement('div');
//     b.setAttribute('class', 'enemy');
//    let gamearea=document.querySelector(".game_area");
//    gamearea.appendChild(b);
//    document.querySelectorAll(".enemy")[i].classList.add("eneall");
   }

   document.querySelector(".text").addEventListener("click", function(e){
     
         
    startscreen();
      //document.querySelector(".game_area").style.display="block";
      
   });

 //startscreen();


    



