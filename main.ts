#!  /usr/bin/env node


import inquirer from 'inquirer';

console.log("Hi Sir, how may I help you?");

async function showMenu() {
    // Ask if the user wants to see the menu
    let response = await inquirer.prompt({
        name: "viewMenu",
        message: "Yeah, can you please show me your menu?",
        type: "confirm"
    });

    if (response.viewMenu) {
        // Simulate fetching the menu
        console.log('Yeah sure sir, give me 3 seconds!');
        await new Promise(resolve => setTimeout(resolve, 3000));
        console.log('Here you go sir!');
        await displayMenu();
    } else {
        console.log("Alright, let me know if you need anything else.");
    }
}

async function displayMenu() {
    // Mock menu items
    const menuItems = [
        { name: 'Grilled Chicken Sandwich', value: 'Grilled_Chicken_Sandwich' },
        { name: 'Vegan Burger', value: 'Vegan_Burger' },
        { name: 'Caesar Salad', value: 'Caesar_Salad' },
        { name: 'Margarita Pizza', value: 'Margarita_Pizza' }
    ];

    // Ask the user to select a menu item
    let order = await inquirer.prompt({
        name: 'menuItem',
        message: 'Please choose an item from our menu:',
        type: 'list',
        choices: menuItems
    });

    await serveMenu(order.menuItem);
    setTimeout(() => {
        console.log("Your food was awesome! We will come again.");
    }, 4000);
 }

async function serveMenu(menuItem: string) {
    console.log('Preparing your order...');
    await new Promise(resolve => setTimeout(resolve, 3000));
    console.log(`Here is your ${menuItem.replace(/_/g, ' ')}. Enjoy your meal!`);
    thankYouNote();
}

function thankYouNote() {
    console.log('Thank you for dining with us, miss!');
}

// Start the interaction
showMenu();
