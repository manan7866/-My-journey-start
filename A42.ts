function make_great2(magicians :string[]) : string {
    const great_magicians : string[] = [];
    for (let i = 0;i < magicians.length; i++){
        great_magicians.push("The great " + magicians [i] );

    }
    return great_magicians;
}
function show_magicians(magicians :string[]): void {
    for (let magician of magicians) {
        console.log (magician);
    }
}
const magicians3 :string[] = ["Bilal","Atif","saeed"]

const great_magicians :string[] = make_great2(magicians3)

show_magicians(great_magicians)
show_magicians