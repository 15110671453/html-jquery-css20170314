/**
 * Created by admindyn on 2017/3/17.
 */
/**
 * Created by admindyn on 2017/3/17.
 */

$(document).ready(

    function () {

        /*
         * page load
         * */
        onPageLoad();
        /*
         * init procedure
         * */
        init_userinfo();

    }
);

/*
 * init userinfo
 * */

function init_userinfo(){

    var i,v_id,i_id;

    var no = 0;

    for (i=localStorage.length-1;i>=0;i--){

        var data = JSON.parse(localStorage.getItem(localStorage.key(i)));

        var v_reserved = data.reserved;

        if (v_reserved=='3'){

            no+=1;
            document.getElementById('id-userinfo').innerHTML+=
                '<tr>'+'<td>'+no+'</td>'+'<td>'+data.id+'</td>'+'<td>'+data.userid+'</td>'+'<td>'+data.name+'</td>'+'<td>'+data.pwd+'</td>'
                +'<td>'+data.level+'</td>'+'</tr>';
        }else {

        }

    }





}

/*
 *
 * GetQueryString
 * */



function GetQueryString(name) {

    var reg = new RegExp('(^|&)'+name+'=([^&]*)(&|$)','i');
    var r = window.location.search.substr(1).match(reg);

    if (r!=null) return (r(2));return null;

}

/*
 * onPageLoad
 * */

function onPageLoad() {

    var  v_name='null';
    var  v_level='null';

    for (var i=0;i<localStorage.length;i++){
        var data = JSON.parse(localStorage.getItem(localStorage.key(i)));
        if (GetQueryString("userid")==data.userid){
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
