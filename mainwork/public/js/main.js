function login() {
    let username=document.getElementById("loginUsername").value;
    let userpasswd=document.getElementById("loginUserpasswd").value;
    let xhr=new XMLHttpRequest();

    xhr.onreadystatechange = function(){
        //alert(xhr.status);
        if(xhr.readyState==4){
            if(xhr.status==200||xhr.status==304){
                var data = xhr.responseText;
            }
        }
    }

    let sendStr='login?username='+username+'&'+'userpasswd='+userpasswd;
    xhr.open("GET",sendStr,true);
    console.log(sendStr);
    xhr.send();
}
