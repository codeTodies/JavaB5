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

//Bài 3
document.getElementById("On").onclick=function()
{
    let name=document.getElementById("name").value;
    let profit=+document.getElementById("profit").value;
    let depend=+document.getElementById("depend").value;
    let amount=+ profit - 4 - (depend*1.6);
    let final=+0;
    if(amount<=60)
    {
      final=amount*(5/100);
    }
    else if(amount>60 && amount<=120)
    {
      final=(60*(5/100))+((amount-60)*(10/100));
    }
    else if(amount>120 && amount<=210)
    {
      final=(60*(5/100))+(60*(10/100))+((amount-120)*(15/100));
    }
    else if(amount>210 && amount<=384)
    {
      final=(60*(5/100))+(60*(10/100))+(90*(15/100))+((amount-210)*(20/100));
    }
    else if(amount>384 && amount<=624)
    {
      final=(60*(5/100))+(60*(10/100))+(90*(15/100))+(174*(20/100))+((amount-384)*(25/100));
    }
    else if(amount>624 && amount<=960)
    {
      final=(60*(5/100))+(60*(10/100))+(90*(15/100))+(174*(20/100))+(240*(25/100))+((amount-624)*(30/100));
    }
    else if(amount>960)
    {
      final=(60*(5/100))+(60*(10/100))+(90*(15/100))+(174*(20/100))+(240*(25/100))+(336*(30/100))+((amount-960)*(35/100));
    }
    document.getElementById("result-wr").style.display="block";
    document.getElementById("magic").innerHTML= final +  " triệu vnd"
    console.log(final);
}

 
//Bài 4
document.getElementById("choose").onclick
=function(){
  let code=document.getElementById("code").value;
 let type=document.getElementById("Type").value;
 let connect=+document.getElementById("connect").value;
 let premium=+document.getElementById("premium").value;
 let tong=+0;
 let connectFee=+0;
 if(type=="B")
 {
   if(connect<=10)
   {
    connectFee=connect*7.5;
   }
   else
   {
    connectFee=75 + (connect-10)*5;
   }
   tong=15+connectFee+(premium*50);
 }

 if(type=="A")
 {
  tong=4.5+20.5+(premium*7.5);
 }
 
document.getElementById("result-wrap").style.display="block";
document.getElementById("boom").innerHTML=tong + " $"
  }