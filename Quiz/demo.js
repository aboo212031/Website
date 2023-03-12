//Initialization
var count = 0;
var total= 0;
var mma = ["q1","q2","q3","q4","q5","q6","q7","q8","q9","q10"];

//Calculating Marks
function GetRadioValue()
{
   for (var i=0;i<mma.length;i++)
   {
      var abb = document.getElementsByName(mma[i]);
      abb.forEach(element => {
         if(element.checked)
         {
            var bh = element.value;
            if (bh=="correct")
            {
               total+=2;
            }
            else
            {
                total--;
            }
         } 
      });
   }
}

//Summary after marking
function Summary()
{
   document.getElementById("quiz").style.display = "none";
   for(var i=0;i<mma.length;i++)
   {
     var doo = document.forms["quiz"][mma[i]].value;
     for(var j=0;j<1;j++)
     {
        if(doo =="correct")
        {
         var create = document.createElement("p");
         create.innerHTML = "Question "+(i+1)+" "+ "\u2713";
         var ele = document.getElementById("demo1");
         ele.appendChild(create);
        }else
        {
         var create = document.createElement("p");
         create.innerHTML = "Question "+(i+1)+" "+ "\u2715"+ " "+ "Correct Answer is the 4th option";
         var ele = document.getElementById("demo1");
         ele.appendChild(create);
        }
       
     }   
 }
   let stime = document.getElementById("summaryTime"); 
   stime.style.position = "static";
   stime.style.marginTop = "-5%";
   document.getElementById("demo1").classList.add("results");
   document.body.style.height= "100%";
   let full = document.getElementById("full");
   full.style.marginTop = "50px";
   full.style.width = "50%";
   full.style.height = "85%";
   let body = document.body;
   body.style.backgroundImage = "url('../pictures/backGround.jpg')";
   body.style.height = "90%";
   if (total<10)
   {
      document.getElementById("results").innerHTML = "Marks =   "+total +"  Try Harder";
      document.getElementById("full").style.backgroundColor = "red";
      body.style.color = "white";
   }
   else if(total >= 10 && total<16)
   {
      document.getElementById("results").innerHTML = "Marks =   "+total +"  Good";
      full.style.backgroundColor = "yellow";
   }
   else
   {
      document.getElementById("results").innerHTML = "Marks =   "+total +"  Exellent";
      document.getElementById("full").style.backgroundColor = "green";
   }
}
var ttt;
//Seting up timer;
function startTest()
{
   ttt = setInterval(mytimer, 1000);
   document.getElementById("full").style.display = "block";
   document.getElementById("btn").style.display = "none";
   let body = document.body;
   body.style.backgroundImage = "url('../pictures/backGround1.jpg')";
   body.style.backgroundRepeat = "norepeat";
   body.style.backgroundSize = "100% 100%";
   body.style.backgroundColor = "white";
   document.getElementById("html").style.height = "138%";
   body.style.height = "100%";
   document.getElementById("down").style.display = "block";
}


//when time's up!!
function mytimer()
{
   if (count<60)
   {
       count++;
       var summ = document.getElementById("summaryTime");
       summ.innerHTML = "Time Spent to answer : "+count;
   }
   else
   {
    clearInterval(ttt);
    for(var i=0;i<mma.length;i++)
               {
                var doo = document.forms["quiz"][mma[i]].value;
                if (doo == "")
                {
                   total--;
                }
               }
     GetRadioValue();
     Summary();
   }
}

//When Submitting Form
function checkOfForm()
{
    for(var i=0;i<mma.length;i++)
           {
            var doo = document.forms["quiz"][mma[i]].value;
            if (doo == "")
            {
               alert("Answer all");
               return false;
            }
           }
    clearInterval(ttt);
    GetRadioValue();
    Summary();
}