function UserValue(val)
{
document.getElementById("ans").value+=val;
}

function clr()
{
document.getElementById("ans").value="";
}
function bck()
{
var back=document.getElementById("ans").value;
var res=back.slice(0,-1);
document.getElementById("ans").value=res;
}

function finalans()
{
    var x=document.getElementById("ans").value;
    var y=eval(x);
    document.getElementById("ans").value=y;
}


function sqroot()
{
    var num=document.getElementById("ans").value;
    var res=Math.pow(num,2);
    document.getElementById("ans").value=res;
} 
function sqr()
{
    var num=document.getElementById("ans").value;
    var res=Math.sqrt(num);
    document.getElementById("ans").value=res;
} 


