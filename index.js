//BÀI 1
let el_click=document.getElementById("play").onclick=function(){
  let diem1=+document.getElementById("diem1").value; 
  let diem2=+document.getElementById("diem2").value; 
  let diem3=+document.getElementById("diem3").value; 
  let plus=+document.getElementById("plus").value;
  let diemcong=document.getElementById("region").value;
  let chuan=+document.getElementById("chuan").value;
  function regionGr(diemcong)
{
switch(diemcong)
  {
    case "A":
      return 2;
    case "B":
       return 1;
    case "C":
      return 0.5
      default:
        return 0;
        
  }
}
function typeGr(plus)
{
  switch(plus)
  {
    case 1:
      return 2.5;
    case 2:
       return 1.5;
    case 3:
      return 1;
      default:
        return 0;
  }
}
  let cong= typeGr(plus);
  let cong1=regionGr(diemcong) ;
  let tong=diem1+diem2+diem3+cong+cong1;
   document.getElementById("result-wrapper").style.display="block";
  if(tong>=chuan && diem1>0 && diem2>0 && diem3>0)
  {
    
    document.getElementById("result").innerHTML="đậu"
  }
  else
  {
    
    document.getElementById("result").innerHTML="rớt"
  }
}



//BÀI 2
document.getElementById("button").onclick=function(){
    let ten=document.getElementById("ten").value;
    let used=+document.getElementById("used").value;
    let tong=+0;
    if(used<=50)
    {
       tong=500*used
    }
    else if(used<=100&&used>50)
    {
       tong=(500*50)+(650*(used-50));
    }
    else if(used<=200 && used>100)
    {
       tong=(500*50)+(650*50)+(850*(used-100));
    }
    else if(used<=350 && used>200)
    {
       tong=(500*50)+(650*50)+(850*100)+(1100*(used-150));
    }
    else if(used>350)
    {
        tong=(500*50)+(650*50)+(850*100)+(1100*150)+(1300*(used-350));
    }
    document.getElementById("result-w").style.display="block";
    document.getElementById("show").innerHTML= tong + " vnd";
}