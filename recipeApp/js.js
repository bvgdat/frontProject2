// View informations open/close.
const openButtons = document.querySelectorAll('.view_imformations_1, .view_imformations_2, .view_imformations_3, .view_imformations_4, .view_imformations_5, .view_imformations_6, .view_imformations_7, .view_imformations_8, .view_imformations_9');
const menus = document.querySelectorAll('.item__1_menu, .item__2_menu, .item__3_menu, .item__4_menu, .item__5_menu, .item__6_menu, .item__7_menu, .item__8_menu, .item__9_menu');
const items = document.querySelectorAll('.item__1, .item__2, .item__3, .item__4, .item__5, .item__6, .item__7, .item__8, .item__9');

openButtons.forEach((button, index) => {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        menus[index].style.display = 'flex';
        items[index].style.display = 'none';
    });
});

const closeButtons = document.querySelectorAll('.menu_close_1, .menu_close_2, .menu_close_3, .menu_close_4, .menu_close_5, .menu_close_6, .menu_close_7, .menu_close_8, .menu_close_9');
closeButtons.forEach((button, index) => {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        menus[index].style.display = 'none';
        items[index].style.display = 'flex';
    });
});
// View informations open/close.

// Basket menu open/close.
const basketContainer = document.querySelector('.container__basket');
const basketMenu = document.querySelector('.basket_menu');

basketContainer.addEventListener('click', function() {
  if (basketMenu.style.display === 'none' || basketMenu.style.display === '') {
    basketMenu.style.display = 'block';
  } else {
    basketMenu.style.display = 'none';
  }
});
// Basket menu open/close.

// add/drop favourite recipe
const favourites = document.querySelectorAll('.item_1_favourite img, .item_2_favourite img, .item_3_favourite img, .item_4_favourite img, .item_5_favourite img, .item_6_favourite img, .item_7_favourite img, .item_8_favourite img, .item_9_favourite img');
const basketList = document.querySelector('.basket__list');
const itemImages = document.querySelectorAll('.item_image_1 img, .item_image_2 img, .item_image_3 img, .item_image_4 img, .item_image_5 img, .item_image_6 img, .item_image_7 img, .item_image_8 img, .item_image_9 img');

favourites.forEach((fav, index) => {
    const defaultImage = 'image/favourite.png';
    const hoverImage = 'image/favourite_hover.png';
    fav.src = defaultImage;

    fav.addEventListener('click', () => {
        const itemInBasket = document.querySelector(`.basket-item-${index}`);
        if (fav.src.endsWith(defaultImage)) { 
            fav.src = hoverImage;
            
            const basketItem = document.createElement('div');
            basketItem.classList.add(`basket-item-${index}`);
            basketItem.innerHTML = `<img src="${itemImages[index].src}" alt="Item image" style="width: 120px; height: 120px;">`;
            basketList.appendChild(basketItem);
        } else {
            fav.src = defaultImage;
            if (itemInBasket) {
                basketList.removeChild(itemInBasket);
            }
        }
    });
});
// add/drop favourite recipe