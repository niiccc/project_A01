document.addEventListener("DOMContentLoaded", () => {
    const pointerMenu = [...document.getElementsByClassName('pointer-menu-variant')];
    const container1 = document.getElementById('container-menu-1');
    const container2 = document.getElementById('container-menu-2');

    if(container1.hasChildNodes() && container2.hasChildNodes()){
        while(container1.lastElementChild){
            container1.removeChild(container1.lastElementChild);
        }
        while(container2.lastElementChild){
            container2.removeChild(container2.lastElementChild);
        }

        makeContent('./../image/lobster-bisque.jpg', 'Lobster Bisque', '$5.95', container1, false);
        makeContent('./../image/crab-cake.jpg', 'Crab Cake', '$4.44', container1, false);
        makeContent('./../image/tuscan-grilled.jpg', 'Tuscan Grilled', '$5.75', container1, false);
        makeContent('./../image/greek-salad.jpg', 'Greek Salad', '$3.45', container1, false);
        makeContent('./../image/lobster-roll.jpg', 'Lobster Roll', '$4.33', container1, false);
        makeContent('./../image/bread-barrel.jpg', 'Bread Barrel', '$4.55', container2, false);
        makeContent('./../image/caesar.jpg', 'Caesar Selections', '$5.45', container2, false);
        makeContent('./../image/mozzarella.jpg', 'Mozzarella Stick', '$3.33', container2, false);
        makeContent('./../image/spinach-salad.jpg', 'Spinach Salad', '$4.45', container2, false);

    }else{
        makeContent('./../image/lobster-bisque.jpg', 'Lobster Bisque', '$5.95', container1, false);
        makeContent('./../image/crab-cake.jpg', 'Crab Cake', '$4.44', container1, false);
        makeContent('./../image/tuscan-grilled.jpg', 'Tuscan Grilled', '$5.75', container1, false);
        makeContent('./../image/greek-salad.jpg', 'Greek Salad', '$3.45', container1, false);
        makeContent('./../image/lobster-roll.jpg', 'Lobster Roll', '$4.33', container1, false);
        makeContent('./../image/bread-barrel.jpg', 'Bread Barrel', '$4.55', container2, false);
        makeContent('./../image/caesar.jpg', 'Caesar Selections', '$5.45', container2, false);
        makeContent('./../image/mozzarella.jpg', 'Mozzarella Stick', '$3.33', container2, false);
        makeContent('./../image/spinach-salad.jpg', 'Spinach Salad', '$4.45', container2, false);
    }

    pointerMenu.forEach(elm => {
        elm.addEventListener('click', handleMenu);
    })
});

function handleMenu(){
    const containerMenu1 = document.getElementById('container-menu-1');
    const containerMenu2 = document.getElementById('container-menu-2');
    const evt = window.event.target;
    const targetMenu = evt.id;

    switch(targetMenu){
        case "menu-all":
            console.log("Menu All");
            handleMenuAll(containerMenu1, containerMenu2);
            break;
        case "menu-starters":
            console.log("Menu Starters");
            handleMenuStarters(containerMenu1, containerMenu2);
            break;
        case "menu-salads":
            console.log("Menu Salads");
            handleMenuSalads(containerMenu1, containerMenu2);
            break;
        case "menu-specialty":
            console.log("Menu Specialty");
            handleMenuSpecialty(containerMenu1, containerMenu2);
            break;
    }
}

function handleMenuAll(container1, container2){
    makeButtonActive("menu-all");

    if(container1.hasChildNodes() && container2.hasChildNodes()){
        while(container1.lastElementChild){
            container1.removeChild(container1.lastElementChild);
        }
        while(container2.lastElementChild){
            container2.removeChild(container2.lastElementChild);
        }

        makeContent('./../image/lobster-bisque.jpg', 'Lobster Bisque', '$5.95', container1, false);
        makeContent('./../image/crab-cake.jpg', 'Crab Cake', '$4.44', container1, false);
        makeContent('./../image/tuscan-grilled.jpg', 'Tuscan Grilled', '$5.75', container1, false);
        makeContent('./../image/greek-salad.jpg', 'Greek Salad', '$3.45', container1, false);
        makeContent('./../image/lobster-roll.jpg', 'Lobster Roll', '$4.33', container1, false);
        makeContent('./../image/bread-barrel.jpg', 'Bread Barrel', '$4.55', container2, false);
        makeContent('./../image/caesar.jpg', 'Caesar Selections', '$5.45', container2, false);
        makeContent('./../image/mozzarella.jpg', 'Mozzarella Stick', '$3.33', container2, false);
        makeContent('./../image/spinach-salad.jpg', 'Spinach Salad', '$4.45', container2, false);

    }else{
        makeContent('./../image/lobster-bisque.jpg', 'Lobster Bisque', '$5.95', container1, false);
        makeContent('./../image/crab-cake.jpg', 'Crab Cake', '$4.44', container1, false);
        makeContent('./../image/tuscan-grilled.jpg', 'Tuscan Grilled', '$5.75', container1, false);
        makeContent('./../image/greek-salad.jpg', 'Greek Salad', '$3.45', container1, false);
        makeContent('./../image/lobster-roll.jpg', 'Lobster Roll', '$4.33', container1, false);
        makeContent('./../image/bread-barrel.jpg', 'Bread Barrel', '$4.55', container2, false);
        makeContent('./../image/caesar.jpg', 'Caesar Selections', '$5.45', container2, false);
        makeContent('./../image/mozzarella.jpg', 'Mozzarella Stick', '$3.33', container2, false);
        makeContent('./../image/spinach-salad.jpg', 'Spinach Salad', '$4.45', container2, false);
    }
}

function handleMenuStarters(container1, container2){
    makeButtonActive("menu-starters");

    if(container1.hasChildNodes() && container2.hasChildNodes()){
        while(container1.lastElementChild){
            container1.removeChild(container1.lastElementChild);
        }
        while(container2.lastElementChild){
            container2.removeChild(container2.lastElementChild);
        }

        makeContent('./../image/lobster-bisque.jpg', 'Lobster Bisque', '$5.95', container1, false);
        makeContent('./../image/mozzarella.jpg', 'Mozzarella Stick', '$3.33', container1, false);
        makeContent('./../image/crab-cake.jpg', 'Crab Cake', '$4.44', container2, false);
        makeContent('','','',container2, true);
    }else{
        makeContent('./../image/lobster-bisque.jpg', 'Lobster Bisque', '$5.95', container1, false);
        makeContent('./../image/mozzarella.jpg', 'Mozzarella Stick', '$3.33', container1, false);
        makeContent('./../image/crab-cake.jpg', 'Crab Cake', '$4.44', container2, false);
        makeContent('','','',container2, true);
    }
}

function handleMenuSalads(container1, container2){
    makeButtonActive("menu-salads");

    if(container1.hasChildNodes() && container2.hasChildNodes()){
        while(container1.lastElementChild){
            container1.removeChild(container1.lastElementChild);
        }
        while(container2.lastElementChild){
            container2.removeChild(container2.lastElementChild);
        }

        makeContent('./../image/caesar.jpg', 'Caesar Selections', '$5.45', container1, false);
        makeContent('./../image/spinach-salad.jpg', 'Spinach Salad', '$4.45', container1, false);
        makeContent('./../image/greek-salad.jpg', 'Greek Salad', '$3.45', container2, false);
        makeContent('','','',container2, true);
    }else{
        makeContent('./../image/caesar.jpg', 'Caesar Selections', '$5.45', container1, false);
        makeContent('./../image/spinach-salad.jpg', 'Spinach Salad', '$4.45', container1, false);
        makeContent('./../image/greek-salad.jpg', 'Greek Salad', '$3.45', container2, false);
        makeContent('','','',container2, true);
    }
}

function handleMenuSpecialty(container1, container2){
    makeButtonActive("menu-salads");
    if(container1.hasChildNodes() && container2.hasChildNodes()){
        while(container1.lastElementChild){
            container1.removeChild(container1.lastElementChild);
        }
        while(container2.lastElementChild){
            container2.removeChild(container2.lastElementChild);
        }

        makeContent('./../image/bread-barrel.jpg', 'Bread Barrel', '$4.55', container1, false);
        makeContent('./../image/lobster-roll.jpg', 'Lobster Roll', '$4.33', container1, false);
        makeContent('./../image/tuscan-grilled.jpg', 'Tuscan Grilled', '$5.75', container2, false);
        makeContent('','','',container2, true);
    }else{
        makeContent('./../image/bread-barrel.jpg', 'Bread Barrel', '$4.55', container1, false);
        makeContent('./../image/lobster-roll.jpg', 'Lobster Roll', '$4.33', container1, false);
        makeContent('./../image/tuscan-grilled.jpg', 'Tuscan Grilled', '$5.75', container2, false);
        makeContent('','','',container2, true);
    }
}

function makeButtonActive(section){
    const pointerMenu = [...document.getElementsByClassName('pointer-menu-variant')];
    switch(section){
        case "menu-all":
            pointerMenu.forEach(elm => {
                if(elm.id == "menu-all"){
                    elm.classList.remove('cl-menu-white');
                    elm.classList.add('menu-variant-active');
                }else{
                    if(elm.classList.contains('menu-variant-active')){
                        elm.classList.remove('menu-variant-active');
                    }
                    
                    if(!elm.classList.contains('cl-menu-white')){
                        elm.classList.add('cl-menu-white');
                    }
                }
            });
            break;
        case "menu-starters":
            pointerMenu.forEach(elm => {
                if(elm.id == "menu-starters"){
                    elm.classList.remove('cl-menu-white');
                    elm.classList.add('menu-variant-active');
                }else{
                    if(elm.classList.contains('menu-variant-active')){
                        elm.classList.remove('menu-variant-active');
                    }
                    
                    if(!elm.classList.contains('cl-menu-white')){
                        elm.classList.add('cl-menu-white');
                    }
                }
            });
            break;
        case "menu-salads":
            pointerMenu.forEach(elm => {
                if(elm.id == "menu-salads"){
                    elm.classList.remove('cl-menu-white');
                    elm.classList.add('menu-variant-active');
                }else{
                    if(elm.classList.contains('menu-variant-active')){
                        elm.classList.remove('menu-variant-active');
                    }
                    
                    if(!elm.classList.contains('cl-menu-white')){
                        elm.classList.add('cl-menu-white');
                    }
                }
            });
            break;
        case "menu-specialty":
            pointerMenu.forEach(elm => {
                if(elm.id == "menu-specialty"){
                    elm.classList.remove('cl-menu-white');
                    elm.classList.add('menu-variant-active');
                }else{
                    if(elm.classList.contains('menu-variant-active')){
                        elm.classList.remove('menu-variant-active');
                    }
                    
                    if(!elm.classList.contains('cl-menu-white')){
                        elm.classList.add('cl-menu-white');
                    }
                }
            });
            break;
    }
}

function makeContent(urlPhoto, menuName, menuPrice, containerMenu, transparent){
    if(transparent){
        const containerPhoto = document.createElement('div');
        containerPhoto.classList.add('bg-photo-transparent');
        const innerPhoto = document.createElement('div');
        innerPhoto.classList.add('alg-slf-cnt');
        innerPhoto.classList.add('img-container');
        innerPhoto.style.backgroundImage = `url(${urlPhoto})`;
        const containerContent = document.createElement('div');
        containerContent.classList.add('menu-details');
        containerContent.classList.add('alg-slf-cnt');
        const content = `
            <div class="menu-price cl-menu-white pos-relative">
                <p class="pos-relative z-idx-top bg-cl-black pr-1 font-fam-poppins fw-700">${menuName}</p>
                <p class="pos-relative z-idx-top bg-cl-black pl-1 font-fam-poppins fw-700">${menuPrice}</p>
            </div>
            <div class="menu-content">
                <p class="font-fam-poppins cl-menu-secondary-light"></p>
            </div>
        `;
        containerPhoto.appendChild(innerPhoto);
        containerContent.innerHTML = content;
        containerMenu.appendChild(containerPhoto);
        containerMenu.appendChild(containerContent);
    }else{
        const containerPhoto = document.createElement('div');
        containerPhoto.classList.add('bg-photo');
        const innerPhoto = document.createElement('div');
        innerPhoto.classList.add('alg-slf-cnt');
        innerPhoto.classList.add('img-container');
        innerPhoto.style.backgroundImage = `url(${urlPhoto})`;
        const containerContent = document.createElement('div');
        containerContent.classList.add('menu-details');
        containerContent.classList.add('alg-slf-cnt');
        const content = `
            <div class="menu-price cl-menu-white pos-relative">
                <p class="pos-relative z-idx-top bg-cl-black pr-1 font-fam-poppins fw-700">${menuName}</p>
                <div class="dot-divider pos-abs alg-slf-btm font-fam-poppins"></div>
                <p class="pos-relative z-idx-top bg-cl-black pl-1 font-fam-poppins fw-700">${menuPrice}</p>
            </div>
            <div class="menu-content">
                <p class="font-fam-poppins cl-menu-secondary-light">lorem, ipsum, dolor, sit amet, okay!</p>
            </div>
        `;
        containerPhoto.appendChild(innerPhoto);
        containerContent.innerHTML = content;
        containerMenu.appendChild(containerPhoto);
        containerMenu.appendChild(containerContent);
    }
}