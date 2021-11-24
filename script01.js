
function create (item)
{
    let id = item.id;
    let itemName = item.name;
    let itemPrice = item.price;
    let inStock = item.orderInfo.inStock;
    let inStockLink = "img/icons/like_green.svg";
    if (inStock == 0){
        inStockLink = "img/icons/close.svg";
    }
    
    let link = item.imgUrl;
    let insert = `
    <div class="item" id = "${id}">
                    <div class="item-fields">
                        <div class="item_photo"><img src="${link}" alt=""></div>
                        <div class="item_name">${itemName}</div>
                        <div class="item_left">
                            <img src=${inStockLink} alt="">
                            <p> ${inStock} left in stock</p>   
                        </div>
                        <div class="item_price">Price: ${itemPrice}</div>
                        <div class="item_addToChart"><button >Add to chart</button></div>
                    </div>
                    
                    <div class="item_NumPositRevues">6</div>
                </div>
    `;
    let source = document.querySelector('.items');
    source.insertAdjacentHTML('beforeend',insert);
    console.log(`${itemName} ${itemPrice} ${inStock}`);
}

for (let key in items){
    create(items[key])
}

let elemList = document.querySelectorAll('.item')

