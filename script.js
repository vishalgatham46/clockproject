function clock(){


    var hours=document.getElementById("hours");
    var minutes=document.getElementById("minutes");
    var seconds=document.getElementById("seconds");
    
    var time=new Date();
    var a=time.getHours();
    if(a>12)
    document.getElementById("am").innerHTML="PM";
    a=(a%12)||12;
    var b=time.getMinutes();
    var c=time.getSeconds();

    hours.innerHTML=a;
    minutes.innerHTML=b;
    seconds.innerHTML=c;
    
}
setInterval(clock,1000);

function dynamicdiv(){
    var container=document.createElement('div');
    container.id="dynamic-block";

    document.getElementById("left-main-container").appendChild(container);

    var setvalue=document.getElementById('wakeup-time');
    var value=setvalue.options[setvalue.selectedIndex].text;
    document.getElementById('dynamic-block').innerHTML="WAKE UP TIME:  "+value;
}
function dynamicdiv2(){
    var container=document.createElement('div');
    container.id="dynamic-block2";

    document.getElementById("left-main-container").appendChild(container);

    var lvalue=document.getElementById('lunch-time');
    var value=lvalue.options[lvalue.selectedIndex].text;
    document.getElementById('dynamic-block2').innerHTML="LUNCH TIME:  "+value;
}
function dynamicdiv3(){
    var container=document.createElement('div');
    container.id="dynamic-block3";

    document.getElementById("left-main-container").appendChild(container);

    var nvalue=document.getElementById('nap-time');
    var value=nvalue.options[nvalue.selectedIndex].text;
    document.getElementById('dynamic-block3').innerHTML="NAP TIME:  "+value;
}

function settime(){
    var i=document.getElementById('wakeup-time').value;
    var j=document.getElementById('lunch-time').value;
    var k=document.getElementById('nap-time').value;
    var hour=new Date().getHours();
    if(i==hour){
        document.getElementById('dynamic-image').style.backgroundImage="url(./images/wakeup-right.png)";
        document.getElementById('dynamic-text').innerHTML="WAKE UP!!";
    }
    else if(j==hour){
        document.getElementById('dynamic-image').style.backgroundImage="url(./images/lunchtime-right.png)";
        document.getElementById('dynamic-text').innerHTML="LETS HAVE SOME LUNCH!!";
    }
    else if(k==hour){
        document.getElementById('dynamic-image').style.backgroundImage="url(./images/naptime-right.png)";
        document.getElementById('dynamic-text').innerHTML="LET'S SLEEP!!";
    }
    dynamicdiv();
    dynamicdiv2();
    dynamicdiv3();
}