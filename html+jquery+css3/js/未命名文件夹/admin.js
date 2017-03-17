/**
 * Created by admindyn on 2017/3/17.
 */

$(document).ready(function (){

    /*
    * page load
    * */

    onPageLoad();
    /*
    * init procedure
    * */
    init_userinfo();

} );

/*
* init userinfo
* */

function init_userinfo() {

    var i ,v_id,i_id;
    var no =0;
    for (i=localStorage.length-1;i>=0;i--){
        var data =JSON.parse(localStorage.getItem(localStorage.key(i)));

        var edit_id=data.id;
        var delete_id=data.id;

        no+=1;
        document.getElementById('id-userinfo').innerHTML+='<tr>'+
                '<td>'+no+'</td>'
            +'<td>'+data.id+'</td>'
            +'<td>'+data.userid+'</td>'
        +'<td>'+data.userid+'</td>'
        +'<td>'+data.name+'</td>'
        +'<td>'+data.pwd+'</td>'
        +'<td>'+data.level+'</td>'+"<td class='actions'>"
            +"<a href='#id-insert-forminfo' ><button class='btn btn-sm btn-primary' onclick='load_edit_userinfo("edit_id");'> Edit</button></a>"
        +'&nbsp;'+"<a href='#id-browser-forminfo' ><button class='btn btn-sm btn-primary' onclick='delete_userinfo("delete_id");'>Delete</button></a>"
        +'&nbsp;'+'</td>'+'</tr>';


        v_id=data.id;
        i_id=parseInt(v_id)+1;
        $('#id-form-insert-id').val(i_id.toString());



    }

}


/*
* page load
* */

function onPageLoad(){

    var v_name='null';
    var  v_level='null';
    for (var i=0;i<localStorage.length;i++){

        var data= JSON.parse(localStorage.getItem(localStorage.key(i)));

        if (GetQueryString('userid')==data.userid){
            v_name=data.name;
            v_level=data.level;
            break;
        }else {
            v_name='null';
            v_level='null';
        }
    }
    document.getElementById('id-a-name').innerHTML=v_name;
    document.getElementById('id-a-level').innerHTML=v_level;
}

/*
*
* insert info
* */


function insert_userinfo() {

    var user={};

    user.id=$('#id-form-insert-id').val();
    user.userid=$('#id-form-insert-userid').val();
    var v_pwd=$('#id-form-insert-pwd').val();
    user.pwd=v_pwd;
    user.pwdmd5=$.md5(v_pwd);
    user.name=$('#id-form-insert-name').val();
    user.level=$('#id-form-insert-level').val();
    user.reserved=$('#id-form-insert-reserved').val();

    localStorage.setItem(user.id,JSON.stringify(user));

}

/*
*
* load edit userinfo
* */


function load_edit_userinfo(editid){
    var data = JSON.parse(localStorage.getItem(editid));

    $('#id-form-edit-id').val(data.id);
    $('#id-form-edit-userid').val(data.userid);
    $('#id-form-edit-pwd').val(data.pwd);
    $('#id-form-edit-name').val(data.name);
    $('#id-form-edit-level').val(data.level);
    $('#id-form-edit-reserved').val(data.reserved);

}

/*
* edit userinfo
* */

function edit_userinfo(){
    var user= {};
    user.id=$('#id-form-edit-id').val();
    user.userid=$('#id-form-edit-userid').val();
    var v_pwd=$('#id-form-edit-pwd').val();
    user.pwd=v_pwd;
    user.pwdmd5=$.md5(v_pwd);
    user.name=$('#id-form-edit-level').val();
    user.reserved=$('#id-form-edit-reserved').val();
    localStorage.setItem(userid,JSON.stringify(user));

}

/*
* delete user info
* */

function delete_userinfo(deleteid) {

    var data= JSON.parse(localStorage.getItem(deleteid));

    var user={};
    user.id=data.id;
    localStorage.removeItem(user.id);
    window.location.reload();

}