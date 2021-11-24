
// 4dispBox
function func01(e){
    
    let targNode = e.parentNode.parentNode.id;
    console.log(e.parentNode.parentNode.id)
    let targ = targNode + 'filter';
    let a = document.getElementById(targ);

    if (a.style.display == 'none'){
        a.style.display = 'block';
        e.style.transform = 'rotate(90deg)';
    } else {
    if (a.style.display == 'block'){
        a.style.display = 'none'
        e.style.transform = 'rotate(0deg)';
    }}
       
}
// 4dispFlex
function func02(e){
    let targNode = e.parentNode.parentNode.id;
    console.log(e.parentNode.parentNode.id)
    let targ = targNode + 'filter';
    let a = document.getElementById(targ);

    if (a.style.display == 'none'){
        a.style.display = 'flex'
        e.style.transform = 'rotate(90deg)';
    } else {
    if (a.style.display == 'flex'){
        a.style.display = 'none'
        e.style.transform = 'rotate(0deg)';
    }}
       
}