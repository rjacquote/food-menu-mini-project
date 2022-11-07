window.onload = function (){

    let menu = {
        drinks: [
            "Water", "Tea", "Sweet Tea",
            "Coke", "Dr. Pepper", "Sprite"
        ],
        entrees: [
            "Hamburger w/ Fries",
            "Grilled Cheese w/ Tater Tots",
            "Grilled Chicken w/ Veggies",
            "Chicken Fried Steak w/ Mashed Potatoes",
            "Fried Shrimp w/ Coleslaw",
            "Veggie Plate"
        ],
        desserts: [
            "Cheesecake", "Chocolate Cake", "Snickerdoodle Cookie"
        ]
    };


    let selectMenu = document.getElementById('menuItems');
    selectMenu.onchange = changeMenuList;

    function changeMenuList() {
        let optionList = document.getElementById('options');
        let selectOption = selectMenu.options[selectMenu.selectedIndex].text;
        console.log(selectOption);
        while (optionList.options.length) {
            optionList.remove(0);
        }

        if (selectOption == 'Drinks') {
            for (let i = 0; i < menu.drinks.length; i++) {
                let drinkOption = new Option(menu.drinks[i]);
                optionList.appendChild(drinkOption);
            }
        }
        else if (selectOption == 'Entrees') {
            for (let i = 0; i < menu.entrees.length; i++) {
                let entreeOption = new Option(menu.entrees[i]);
                optionList.appendChild(entreeOption);
            }
        }
        else if (selectOption == 'Desserts') {
            for (let i = 0; i < menu.desserts.length; i++) {
                let dessertOption = new Option(menu.desserts[i]);
                optionList.appendChild(dessertOption);
            }
        }
    }
    // function displayDrinkOptions() {
    //     let selectOption = document.getElementById('options');
    //     while (modelList.options.length) {
    //         modelList.remove(0);
    //       }
    //     for (let i = 0; i < menu.drinks.length; i++) {
    //         let drinkOption = new Option(menu.drinks[i]);
    //         selectOption.appendChild(drinkOption);
    //     }
    // }

    // function displayEntreeOptions() {
    //     // let x = document.getElementById("selectOptions");
    //     // if (x.style.display === "none") {
    //     //     x.style.display = "block";
    //     // } else {
    //     //     x.style.display = "none";
    //     // }
    //     let selectOption = document.getElementById('options');
    //     for (let i = 0; i < menu.entrees.length; i++) {
    //         let entreeOption = new Option(menu.entrees[i]);
    //         selectOption.appendChild(entreeOption);
    //     }
    // }

    // function displayDessertOptions() {
    //     let selectOption = document.getElementById('options');
    //     for (let i = 0; i < menu.desserts.length; i++) {
    //         let dessertOption = new Option(menu.desserts[i]);
    //         selectOption.appendChild(dessertOption);
    //     }
    // }
}
