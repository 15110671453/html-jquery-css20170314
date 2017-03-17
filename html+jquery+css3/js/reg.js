/**
 * Created by admindyn on 2017/3/17.
 */
/*
* 验证用户密码
* */

function on_pwd_blur() {

    var v_password = document.getElementById('reg-password').value;

    var v_repassword = document.getElementById('reg-repassword').value;

    if (v_password != v_repassword){

        document.getElementById('id-span-reg-password').innerHTML='Please enter password in next blank again';

    }else {
        document.getElementById('id-span-reg-repassword').innerHTML='Password is correct';
    }

}

function on_repwd_blur() {

    var v_password = document.getElementById('reg-password').value;

    var  v_repassword = document.getElementById('reg-repassword').value;

    if (v_password==v_repassword){
        document.getElementById('id-span-reg-repassword').innerHTML='Password is correct';
    }else {
        document.getElementById('id-span-reg-repassword').innerHTML='Password is not correct,please try it again';
        document.getElementById('reg-repassword').value='';
    }

}

/*
* register new user
* */

function reg() {
    var user={};
    user.id = get_new_user_id();
    user.userid=$('#reg-userid').val();
    var  v_pwd=$('#reg-password').val();
    user.pwd=v_pwd;
    user.pwdmd5=$.md5(v_pwd);
    user.name=$('#reg-name').val();

    user.level='user';
    user.reserved='2';
    localStorage.setItem(user.id,JSON.stringify(user));
}

function get_new_user_id() {

    var v_id,i_id;
    var data = JSON.parse(localStorage.getItem(localStorage.key(0)));

    var  v_id= data.id;
    i_id=parseInt(v_id)+1;
    return i_id.toString();

}