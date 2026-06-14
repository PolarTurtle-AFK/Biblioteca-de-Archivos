function calcular(años: number): string {
    let dias = años * 365
    let horas = dias * 24;
    let minutos = horas * 60;
    let segundos = minutos * 60

    return `Años: ${años} Dias: ${dias} Horas: ${horas} Minutos: ${minutos} Segundos: ${segundos}`;
}

class Perfil {
    nombre: string
    edad: number

    constructor(nombre: string, edad: number){
        this.nombre = nombre
        this.edad = edad
    }
}
const perfil: Perfil = new Perfil("admin", 18)
console.log(perfil);
console.log(calcular(perfil.edad))

