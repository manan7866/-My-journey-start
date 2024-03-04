type car = {
    manufacture : string
    model : string
    [key : string] : any;

}
function carcreater(manufacture: string, model  : string, optional : Record<string,any> ): car {
    return{
        manufacture,
        model,
        ...optional,

    }

}
const Mycar: car = carcreater("Honda","City",{colour : "Blue", year: "2024"})
console.log(Mycar)