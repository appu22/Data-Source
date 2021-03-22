
console.log("welcome........");
document.write("<h1>Welcome to java Script</h1>")

// alert("hiiii i am appu")

/* how to decalare variable
 var variablename= value;

 Data Types in Java Script 
 Number
 String 
 boolean
 undefined
 null
*/


var b;
var a=10;
console.log(typeof(a))
console.log(a);
console.log(b);

a="java script"
console.log(typeof(a))
console.log(" A value is "+a)

a=true
console.log(typeof(a))
console.log(a)

var a;
console.log(typeof(a))
console.log(a)

a=10
if(a==10){
        console.log("equal")
}else{
    console.log(" not equal")
}
// for loop -------------------------------------
for(var i=0; i<=10; i++){
    console.log(i)
}
// alert(console.log);
// funtion  u can call fucntuon name 
function first(){
    console.log(" first function")
}
first() 
/* disp()
console.log(disp)--it will be print entier function
*/
//it is also give the output before decalare function u call 
//***************************************************************************** */
var x=function(){
    console.log("second function")
}
console.log((x))

console.log(d)
var d=10;
console.log(d)
//get data form html to java script
function upper(){
    var x = document.getElementById("email")
    x.value = x.value.toUpperCase();
}
 function register()
 {
     console.log("calling method");
     //emailid
     var email = document.getElementById("email")
     console.log(email) //get the data from html  to view in console
     console.log(email.value)
     if(email.value=="") 
        {
            var err = document.getElementById("errmessage")
            err.innerHTML = "Please Enter Email Id"
            err.style.color="red"
        }
     //password
     var pwd = document.getElementById("pwd") //get the data from html
     console.log(pwd)
     console.log(pwd.value)
     if(pwd.value=="") 
             { 
                 var pwderror = document.getElementById("pwderror")
                 pwderror.innerHTML = "Please Enter Password "
                 pwderror.style.color="rgb(255, 0, 0)"
             }
             //******************************************************************** */
             //19-03-2021 radio button
            // console.log(document.registeration.gender)//its synatx 

             if(document.registeration.gender[0].checked == false && 
                document.registeration.gender[1].checked == false &&
                document.registeration.gender[2].checked == false)
                {
                    console.log("Please enter gender")
                    var err = document.getElementById("errgender")
                    err.innerHTML = "Please enter gender"
                    err.style.color ="red"
                }

                if(document.registeration.city.value=="0")
                {
                    console.log("Please Select city")
                    var err = document.getElementById("errselect")
                    err.innerHTML = "Please enter select city"
                    err.style.color ="red"
                }
}
function validateEmail()
{
    console.log("Validate Email");
    //emailid
    var email = document.getElementById("email")
    console.log(email) //get the data from html  to view in console
    console.log(email.value)
    if(email.value=="") 
       {
           var err = document.getElementById("errmessage")
           err.innerHTML = "Please Enter Email Id"
           err.style.color="red"
       }
}
    function validatePassword()
    {
        console.log("Validate Password");
        var pwd = document.getElementById("pwd") //get the data from html
        console.log(pwd)
        console.log(pwd.value)
        if(pwd.value=="") 
            { 
                var pwderror = document.getElementById("pwderror")
                pwderror.innerHTML = "Please Enter Password "
                pwderror.style.color="rgb(255, 0, 0)"
            }
    }
    /*var is decalare multipLE of variable with same name 
    let is decalare only time one variable name
    var, let , const 
    var is keyword 
    var is conatin anthing of types like integer,float,string 
    *********************************************************************
    interview question tags nothing but elements ex : <table> </table>
    **********************************************************************
    Array
    syntax  -->  var a=[1,2,3,"java","event"]
    */
   var a=[]
   console.log(a)
    var a=[1,2,3,"java","event"]
    console.log(a)
    //for loop printing array elements
    for(var i=0;i<a.length;i++){
        console.log(a[i])
    }

    //array user
     // push will add element at last an Array
    var user=[]
    user.push("JAVA")
    console.log(user)
    // pop will remove element at last in an array
    user.push(1)
    user.push("HTML")
    console.log(user)

    user.push("CSS")
    console.log(user)

    //unshift will add Element at beginning of Array
   
   user.unshift("JAVA SCRIPT")
   console.log(user)
   // shift will remove of Element from beginning of array
   user.shift("JAVA SCRIPT")
   console.log(user)

   /*******************************************************
   in java creating object 
   { datamembername . datamember value} 
   */
  var tree = {
            name: "coconut" , lifeSpan :100,
            fruit: function getCoconut()
            {
                console.log("No coconut")
            }
        }
        console.log(tree)
        console.log(tree.name)
        console.log(tree.fruit)

        //date function 
        //write button get_date in side 
        var date = new Date()
        console.log(date)
        var currendate = document.getElementById("currendate").value =
        dcurrendate.innerHTML = "Date "

        /*Block level , inline element 
        div , p - new line 
        span a, img - will not create new line 
        *************************************************************************
        //what is difference between == and === in java script ?
        difference between let var 

        home WOrk -----------------------------Check The Events in java scripts
        */



