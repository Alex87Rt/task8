//Не выполняя код, ответить, что выведет браузер и почему:
//a.
if (!( "a" in window )) {
    var a = 1 ;
    }
    alert(a);
    //а в window нет и его нету, поэтому ни чего не ваведет alert
//b.
var b = function a (x) {
    x && a(--x);
    };
    alert(a);;
    // не понял записи, но кажется ответ такой же как и первом случае
//c.
function a (x) {
    return x * 2 ;
    }
    var a;
    alert(a);
    //по идее должен выдать функицю х * 2 (тело функции)
//d.
function b (x, y, a) {
    arguments [ 2 ] = 10 ;
    alert(a);
    }
    b( 1 , 2 , 3 );
    // 10
//e.
function a () {
    alert( this );
    }
    a.call( null );
    // не понял что выдаст
