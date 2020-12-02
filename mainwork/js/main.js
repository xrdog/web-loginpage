function click_but1() {
    var username=document.getElementById("user-name").value;
    var userpasswd=document.getElementById("user-passwd").value;
    var xhr=new XMLHttpRequest();
    var data=new Object();
    data.u=username;
    data.p=userpasswd;
    var jsondata=JSON.stringify(data);
    console.log(username); 
    console.log(userpasswd);
    xhr.open('GET','../py/work1.py',true);
    xhr.responseType='json';
    xhr.setRequestHeader('Content-Type','application/json');
    xhr.send(jsondata);

    xhr.onreadystatechange=function() {
        if (xhr.readyState===4 && xhr.status===200) {

        }
        else {
            console.log("GG");
        }
    }
    
}