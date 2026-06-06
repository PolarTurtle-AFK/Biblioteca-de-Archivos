function calcular(Años) {
    let Dias = Años * 365
    let Horas = Dias * 24;
    let Minutos = Horas * 60;
    let Segundos = Minutos * 60

    return `Dias: ${Dias} Horas ${Horas} Segundos: ${Segundos}`
}

const Perfil = {
}
Perfil.Nombre = "Nate";
Perfil.Apellido = "Higgerson";
Perfil.Años = 18;
Perfil.res = calcular(Perfil.Años)
 

console.log(Perfil);
