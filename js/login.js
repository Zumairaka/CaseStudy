$(document).ready(function(){
    $("input[type = 'submit']").click(function(){
        let uname = $("#uname").val();
        let password = $("#password").val();
        validateLogin(uname,password,function(flag){
            if (flag == 1)
                window.location.href = "index.html";
            else
                alert("Incorrect Username or Password");
        });
    });
    function validateLogin(uname,password,callback){
        var flag = 0;
        if(uname == "admin" && password == 12345){
            flag = 1;
        }
        else{
            flag = 0;
        }   
        callback(flag);
        }
});
