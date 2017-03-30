/**
 * Created by admindyn on 2017/3/17.
 */
/*
* 定义全局变量
* */

 var g_userid,g_pwd,g_reserved;

var v_validata_userid= false;
var v_validata_pwd=false;

/*遍历localStorage键值*/

function index_item_userid(){

    var v_userid=document.getElementById('userid').value;


    for (var i=0; i<window.localStorage.length;i++){

        console.log(window.localStorage);
        var js=window.localStorage.key(i);
        console.log(js);
  /*
  * 原来写的一些demo中使用果localstorage 存储过一个键值对 和现在的格式不一样 尤其是之前存储的不是按照json格式存储的
  * */
        var data = JSON.parse(window.localStorage.getItem(window.localStorage.key(i)));

        if (v_userid == data.userid){

            g_userid= v_userid;

            v_validata_userid=true;
            break;
        }else {
            v_validata_userid=false;
        }
    }
    return v_validata_userid;
}
/*验证用户id*/
function on_userid_blur() {

    var v_userid=document.getElementById('userid').value;

    if (v_userid==""){
        document.getElementById('id-span-userid').innerHTML="Please enter your userid";

    }else {
        if (index_item_userid()){
            document.getElementById('id-span-userid').innerHTML="It is a right userid";
        }else {
            document.getElementById('userid').value='';
            document.getElementById('id-span-userid').innerHTML="Please check your userid ,and retry";
        }
    }

}

/*遍历localStorage的键值*/

 function index_item_pwd(){

     var v_userid =document.getElementById('userid').value;
     var  v_passwd=document.getElementById('password').value;
     console.log('--用户ID'+v_userid);

     var md5_password=$.md5(v_passwd);

     for (var i=0;i<localStorage.length;i++){

         var data = JSON.parse(localStorage.getItem(localStorage.key(i)));
         console.log('用户'+data+'用户ID'+data.userid);
         console.log('密码'+data+'用户ID'+data.userid);
         if ((v_userid==data.userid)&&(md5_password==data.pwdmd5)){
             g_userid=data.userid;
             g_pwd=data.pwdmd5;
             console.log('权限'+data.reserved);
             g_reserved=data.reserved;
             v_validata_pwd=true;
             return v_validata_pwd;

         }else {
             v_validata_pwd=false;
         }

     }

     return v_validata_pwd;

 }


 /*验证用户密码*/

 function  on_pwd_blur() {


     var v_password=document.getElementById('password').value;

     var md5_password=$.md5(v_password);

     if (v_password==""){
         document.getElementById('id-span-password').innerHTML="Please enter your password";

     }else {

         if (index_item_pwd()){
             document.getElementById('id-span-password').innerHTML="It is a right password";
             document.getElementById('password').value=md5_password;
         }else {
             document.getElementById('password').value='';
             document.getElementById('id-span-password').innerHTML="Please Check your password,and try";
         }
     }

     validateSubmit();

 }

 /*
 * 验证登陆
 * */

 function validateSubmit(){

     if (v_validata_userid&&v_validata_pwd){
         $('#id-submit').attr('disabled',false);
     }else {
         $('#id-submit').attr('disabled',true);
     }

 }

 /*
 * 页面跳转
 * */

 function  loginSubmit() {

     console.log(g_reserved);
     if (g_reserved=='1'){
         var url1 ='../CMS/admin.html?userid='+g_userid+'&password='+g_pwd;
         document.location.href=url1;
     }else if(g_reserved=='2'){
         var url2 ='../CMS/user.html?userid='+g_userid+'&password='+g_pwd;
         document.location.href=url2;
     }else if(g_reserved=='3'){
         var url3 ='../CMS/tour.html?userid='+g_userid+'&password='+g_pwd;
         document.location.href=url3;
     }else {
         document.location.href='404.html';
     }

    return false;

 }