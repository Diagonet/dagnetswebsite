function randomGreeting() {
    const greeting = ['Gud\'ay', 'Goede dag', 'Bom dia', 'Hello there'];
    let chosenGreeting = greeting[Math.floor(Math.random() * greeting.length)];
    alert ('Here is you free* random greeting:\n\n'+chosenGreeting);

}