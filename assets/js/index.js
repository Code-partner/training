var body  = document.getElementsByTagName('body')[0];
// console.log(body);
body.addEventListener('click',function(ev){
    // console.log(ev);
    body.innerHTML = "<h1>Hello</h1>";
});

