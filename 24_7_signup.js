function datavalidate(){
    var f_name = document.getElementById("fname").value
    var res1 =/^[a-zA-Z]{4,}$/.test(f_name);

    var res2=document.getElementById("M")
    var res3=document.getElementById("F")
    var res4=document.getElementById("O")
    
    var e_mail = document.getElementById("eemail").value
    var res5 =/^[a-zA-Z0-9._]{3,}[@][a-zA-Z]{3,}[.][c][o][m]$/.test(e_mail);
    
    var p_number = document.getElementById("pnumber").value
    var res6 =/^[6-9]{1}[0-9]{9}$/.test(p_number);
    
    var p_assword = document.getElementById("pswrd").value
    var res7 =/^[a-zA-Z0-9@_#!$&]{8,}$/.test(p_assword);
    
    var cnf_password = document.getElementById("cnfmpswrd").value

    /////First NAme//////////////////////////////////////////////////////////////
    if(f_name==""){
        document.getElementById("firstnameid").innerHTML="**Please fill the username"
        return false;
    }
    else if(res1==false){
        document.getElementById("firstnameid").innerHTML="**Invalid First Name"
        return false;
    }
    else{
        document.getElementById("firstnameid").innerHTML=""
    }

    /////Gender//////////////////////////////////////////////////////////////////
    if(res2.checked==false && res3.checked==false && res4.checked==false){
        document.getElementById("genderid").innerHTML="**Select Gender"
        return false;
    }
    else{
        document.getElementById("genderid").innerHTML=""
        

    }

    /////Email///////////////////////////////////////////////////////////////////
    if(e_mail==""){
        document.getElementById("emailid").innerHTML="**Please fill the email"
        return false;
    }
    else if(res5==false){
        document.getElementById("emailid").innerHTML="**Invalid email"
        return false;
    }
     else{
        document.getElementById("emailid").innerHTML=""
    }

    /////Phone number//////////////////////////////////////////////////////////////
    if(p_number==""){
        document.getElementById("phonenumberid").innerHTML="**Please enter the Phone number"
        return false;
    }
    else if(res6==false){
        document.getElementById("phonenumberid").innerHTML="**Invalid Phone number"
        return false;
    }
     else{
        document.getElementById("phonenumberid").innerHTML=""
    }

    /////Password & Confirm Password//////////////////////////////////////////////////////////////////
    if(p_assword==""){
        document.getElementById("passwordid").innerHTML="**Please enter the password"
        return false;
    }
    else if(res7==false){
        document.getElementById("passwordid").innerHTML="**Invalid Password"
        return false;
    }
     else{
        document.getElementById("passwordid").innerHTML=""
    }
    if(cnf_password==""){
        document.getElementById("cpasswordid").innerHTML="**Password not confirmed"
        return false;
    }
    else if(cnf_password!=p_assword){
        document.getElementById("cpasswordid").innerHTML="**Confirmed password not same"
        return false;
    }
     else{
        document.getElementById("cpasswordid").innerHTML=""
    }





}