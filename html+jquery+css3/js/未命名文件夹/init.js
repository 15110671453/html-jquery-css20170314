/**
 * Created by admindyn on 2017/3/17.
 */

/*
* insert admin
* */

var useradmin={};

useradmin.id='10001';
useradmin.userid='admin';
useradmin.pwd='123456';
useradmin.pwdmd5=$.md5('123456');

useradmin.name='DYN';

useradmin.level='admin';

useradmin.reserved='1';

localStorage.setItem(useradmin.id,JSON.stringify(useradmin));


var useruser={};

useruser.id='10002';
useruser.userid='dyn';
useruser.pwd='123456';
useruser.pwdmd5=$.md5('123456');

useruser.name='DYNuser';

useruser.level='user';

useruser.reserved='2';

localStorage.setItem(useruser.id,JSON.stringify(useruser));


var userguest={};

userguest.id='10003';
userguest.userid='guest';
userguest.pwd='123456';
userguest.pwdmd5=$.md5('123456');

userguest.name='DYNguest';

userguest.level='guest';

userguest.reserved='3';

localStorage.setItem(userguest.id,JSON.stringify(userguest));