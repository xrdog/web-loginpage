let loginSuccessUrl='http://127.0.0.1:8081/loginsuccess'
function login() {
    let username=document.getElementById("loginUsername").value;
    let userpasswd=document.getElementById("loginUserpasswd").value;
    let xhr=new XMLHttpRequest();

    xhr.onreadystatechange = function(){
        //alert(xhr.status);
        if(xhr.readyState==4){
            if(xhr.status==200||xhr.status==304){
                let data = xhr.responseText;

                (function(win,doc) {
                    var alert = function(text, time, top) {
                        text = text || "???？",time = time || 3000,top = top || "15%";//增加默认值，增强健壮性
                        var body=doc.getElementsByTagName("body")[0];//优化dom
                        //实现alert
                        var div = doc.createElement("div");
                        div.style.backgroundColor = " #22b9ff";
                        div.style.color = " #fff";
                        div.style.position = " fixed";
                        div.style.zIndex = 9999999;
                        div.style.height = " 60px";
                        div.style.top = top;
                        div.style.left = "83%";
                        div.style.lineHeight = " 60px";
                        div.style.borderRadius = " 4px";
                        div.style.fontSize = " 20px";
                        div.style.textAlign = "center";
                        div.style.padding = "0 10px";
                        div.className = "animated  bounceInDown";
                        div.id = "alert";
                        div.innerHTML = text;
                        body.appendChild(div);
                        var selfObj = doc.getElementById("alert");
                        //动态调整位置
                        var alertWidth = win.getComputedStyle(selfObj, null).width;
                        div.style.marginLeft = -parseInt(alertWidth) / 2 + "px";
                        setTimeout(function() {
                            body.removeChild(div);
                            if (data==="登录成功")
                            {
                                console.log('登录成功');
                                window.location.href=loginSuccessUrl;
                            }
                        }, time);
                    }
                    win.alert=alert;//导出
                })(window,document);
                alert(data,1500);
            
                /* alert(data);
                window.location.href=loginSuccessUrl; */
            }
            else {
                alert("网络通讯错误-not 200|304");
            }
        }
        else {
            //alert("网络通讯错误-not ready");
        }
    }

    let sendStr='login?username='+username+'&'+'userpasswd='+userpasswd;
    xhr.open("GET",sendStr,true);
    console.log(sendStr);
    xhr.send();
}

function register() {
    let username=document.getElementById("loginUsername").value;
    let userpasswd=document.getElementById("loginUserpasswd").value;
    let xhr=new XMLHttpRequest();

    xhr.onreadystatechange = function(){
        //alert(xhr.status);
        if(xhr.readyState==4){
            if(xhr.status==200||xhr.status==304){
                let data = xhr.responseText;

                (function(win,doc) {
                    var alert = function(text, time, top) {
                        text = text || "???？",time = time || 3000,top = top || "15%";//增加默认值，增强健壮性
                        var body=doc.getElementsByTagName("body")[0];//优化dom
                        //实现alert
                        var div = doc.createElement("div");
                        div.style.backgroundColor = " #22b9ff";
                        div.style.color = " #fff";
                        div.style.position = " fixed";
                        div.style.zIndex = 9999999;
                        div.style.height = " 60px";
                        div.style.top = top;
                        div.style.left = "83%";
                        div.style.lineHeight = " 60px";
                        div.style.borderRadius = " 4px";
                        div.style.fontSize = " 20px";
                        div.style.textAlign = "center";
                        div.style.padding = "0 10px";
                        div.className = "animated  bounceInDown";
                        div.id = "alert";
                        div.innerHTML = text;
                        body.appendChild(div);
                        var selfObj = doc.getElementById("alert");
                        //动态调整位置
                        var alertWidth = win.getComputedStyle(selfObj, null).width;
                        div.style.marginLeft = -parseInt(alertWidth) / 2 + "px";
                        setTimeout(function() {
                            body.removeChild(div);
                            if (data==="passwdcorrect")
                                window.location.href=loginSuccessUrl;
                        }, time);
                    }
                    win.alert=alert;//导出
                })(window,document);
                alert(data,3000);
            
                /* alert(data);
                window.location.href=loginSuccessUrl; */
            }
            else {
                alert("网络通讯错误-not 200|304");
            }
        }
        else {
            //alert("网络通讯错误-not ready");
        }
    }

    let sendStr='register?username='+username+'&'+'userpasswd='+userpasswd;
    xhr.open("GET",sendStr,true);
    console.log(sendStr);
    xhr.send();
}

