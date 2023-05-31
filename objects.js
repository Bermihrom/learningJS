const object = {
    a: 23,
    b: "Misha",
    colors: {
        red: "red",
        green: "green"
    }
}
console.log(object.a);


object.game = "Man of Medan";
object.a = 23 + 85;
console.log(object.a);
console.log(object);

delete object.a;

let food = "berry";
object[food] = "strawberry";


console.log(object);