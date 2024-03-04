function sandwich(...items : string[]): void {
    console.log("Sandwich order :")
    for(let i = 0; i < items.length; i++) {
        console.log(`- ${items}`)
    }
}
console.log("Enjoy your sandwich Abdul Manan")

sandwich('chicken','Beef','capsicum')
sandwich('tomato','cheese')
sandwich('garlic chicken','mayo sauce')