const menu=[
    {
        id:1,
        title:"chicken biryani",
        category:"lunch",
        price:13,
        img:"food1.jpg",
        desc:"This is the best, you have ever tasted trust me",
    },
    {
        id:2,
        title:"alo daal",
        category:"dinner",
        price:13,
        img:"alodaal.jpg",
        desc:"This is the best, you have ever tasted trust me",
    },
    {
        id:3,
        title:"daal chawal",
        category:"lunch",
        price:13,
        img:"daalchawal.jfif",
        desc:"This is the best, you have ever tasted trust me",
    },
    {
        id:4,
        title:"paye",
        category:"breakfast",
        price:13,
        img:"paye.jfif",
        desc:"This is the best, you have ever tasted trust me",
    },
    {
        id:5,
        title:"tamri kabab",
        category:"dinner",
        price:13,
        img:"tamrikabab.jpg",
        desc:"This is the best, you have ever tasted trust me",
    }
]
const sectionCenter=document.querySelector(".section-center");
const filterBtns=document.querySelectorAll(".filter-btn");

window.addEventListener("DOMContentLoaded",function(){
    displayMenuItems(menu);
});

filterBtns.forEach(function(btn){
    btn.addEventListener("click" , function(e){
        const category=e.currentTarget.dataset.id;
        const menuCategory=menu.filter(function(menuItem){
            if(menuItem.category==category){
                return menuItem;
            }
        });
        if(category=="all"){
            displayMenuItems(menu);
        }
        else{
            displayMenuItems(menuCategory);
        }
    });
});

function displayMenuItems(menuItems){
    let displayMenu=menuItems.map(function(item){
        return `<article class="menu-item">
        <img src=${item.img} alt=${item.title}>
        <div class="item-info">
            <header>
                <h4>${item.title}</h4>
                <h4 class=${item.price}>$15</h4>
            </header>
            <p class="item-text">${item.desc}</p>
        </div>
    </article>`;
    });
    displayMenu=displayMenu.join("");
    sectionCenter.innerHTML=displayMenu;
}