var l1=document.querySelector("#l1");
var fi=document.querySelector("#first");
var sec=document.querySelector("#second");
var timer=document.querySelector("#timer");
var win=document.querySelector("#window");
var res=document.querySelector("#res");
var tim=10;
l1.addEventListener("click",()=>{
  fi.style.display='none';
})
var cnt=document.querySelector("#count");
var count=0;


var insect='';
var elem=document.querySelectorAll(".elem");
elem.forEach(function(val){
    // console.log(val) 
    var u=val.getAttribute("data-i");
    // console.log(u);
    // console.log()
    val.style.backgroundImage=`url('${u}')`;

    val.addEventListener("click",function(){
        insect=val.getAttribute("data-i");
        // console.log("heyy "+insect);
        sec.style.display='none';
    })
   
});
  var war=document.querySelector('#war');
  var btn=document.querySelector('#btn');

var dp=document.querySelector('.fir');
btn.addEventListener("click",()=>{
     dp.src=`${insect}`;
     let rNum=Math.random()*90;
     let num2=Math.random()*90;
     dp.style.position="absolute"
     dp.style.top=`${rNum}%`;
     dp.style.left=`${num2}%`;
     dp.style.display='initial';
     var a=setInterval(function(){
        tim--;
        timer.innerHTML=`timer:${tim}`;
        console.log("me chal rha hun")
     },1000)
     setTimeout(function(){
        win.style.top="0";
        res.innerHTML=`Your Score is : ${count}`;
       clearInterval(a);
     },10100)
     
})


var dd=document.createElement("img")

dp.addEventListener("click",()=>{
    count++;
    cnt.innerHTML=`${count}`;
    dp.style.display="none";
    dd.setAttribute(`src`,`${insect}`);
    dd.setAttribute(`class`,`spl`);
    let rNum=Math.random()*90;
     let num2=Math.random()*90;
     dd.style.position="absolute"
     dd.style.top=`${rNum}%`;
     dd.style.left=`${num2}%`;
    war.appendChild(dd);
})

var spl=document.querySelectorAll('.spl');

war.addEventListener("click",(ev)=>{
    if((ev.target.classList.contains('spl'))){
      
        // console.log(" maza aa gya");
    var baccha=document.createElement("img");
    baccha.setAttribute(`src`,`${insect}`);
    baccha.setAttribute(`class`,`spl`);

    var bac=document.createElement("img");
    bac.setAttribute(`src`,`${insect}`);
    bac.setAttribute(`class`,`spl`);

    let rNum=Math.random()*90;
     let num2=Math.random()*90;
     let r1=Math.random()*100;
     let r2=Math.random()*100;
     baccha.style.position="absolute"
     baccha.style.top=`${rNum+10}%`;
     baccha.style.left=`${num2-10}%`;

     bac.style.position="absolute"
     bac.style.top=`${r1+10}%`;
     bac.style.left=`${r2-10}%`;
    war.appendChild(baccha);
    war.appendChild(bac);

    ev.target.style.display="none";
    count++;
    cnt.innerHTML=`${count}`;
    }
})


// spl.forEach((z)=>{

//     z.addEventListener("click",function()
// {
//     
//     // war.appendChild(baccha);
//     // z.style.display="none";
    
// })
// })





