
function CalculateTip(){
    billAmt=document.getElementById('i1').value;
    ServiceQual=document.getElementById('service').value;
    numOfPeople=document.getElementById('i2').value;
    if(billAmt==""||ServiceQual==0){
        alert("please enter the values");
        return;
    }
    if(numOfPeople==' '||numOfPeople<=1){
        numOfPeople=1;
        document.getElementById('each').style.display="none";
    }else{
        document.getElementById('each').style.display="block";}

    total=(billAmt*ServiceQual)/numOfPeople;
    total=Math.round(total*100)/100;
   total=total.toFixed(2);
   document.getElementById('totalTip').style.display="block";
    document.getElementById('tip').innerHTML=total;
}
