const str = "hola mundo"
const n = 123

console.log(str, typeof str)
console.log(n, typeof n)

const str1: string = "hola mundo"
const n1: number = "123"

console.log(n1)

function suma(a: number, b: number): number{
    return a + b
}

console.log(suma(1, 2), typeof suma(1, 2))

function saluda(nombre: string, edad: number, favorita: string){
    return "Hola soy " + nombre + ", tengo " + edad  + " y me gusta " + favorita
}

console.log(saluda("Antonio", 38, "jugar con cuchillos"))

type generoTipo = "Masculino" | "Femenino" | "Otro"

function generoUsuario(){
    const nombre: string = "user" + Math.floor(Math.random() + 999)
    const genero: generoTipo = "Masculino"
    return {nombre, genero}
}
