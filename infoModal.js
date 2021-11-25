let parent = document.querySelector('.items')

parent.onclick = function(event){
    let parent = document.querySelector('.items')
    let pcn = event.target.closest('.item');
    let closest = event.target.closest('.items');

    if (!closest) return; 
    if (!parent.contains(closest)) return;
    console.log(pcn.id)
    let tmpName;
    let tmpDisplay;
    let tmpimg;
    let tmpPrice, tmpRam;
    for (let key of items){
        if(pcn.id==key.id){
            console.log(`${pcn.id} ${key.id} ${key.price}`)
                tmpName = key.name;
                tmpDisplay = key.display;
                tmpimg = key.imgUrl;
                tmpPrice = key.price;
                tmpRam= key.ram
            console.log(`${tmpName}==${tmpPrice}==${tmpDisplay}==${tmpimg} `)
            }    
    }
    console.log(`${tmpName}==${tmpPrice}==${tmpDisplay}==${tmpRam}gb `)


    // let popUpWrap = document.querySelector('#popUpWrap')
    // popUpWrap.style.display = 'block'
    
    // function func2(event){
    //     if (event.target.className=='out'){
    //     popUpWrap.style.display = 'none' 
    //     }
    // }
    // popUpWrap.addEventListener('click', func2)


}

