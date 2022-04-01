function timeConversion(time){
// dada la hora en formato hora AM/PM , convertir a la hora militar (24-horas).
// Recordar: las 12:00:00AM en un reloj de 12 horas son las 00:00:00 en un reloj de 24 horas
//las 12:00:00PM en un reloj de 12 horas son las 12:00:00 en un reloj de 24 horas 

        // "12:15:24PM"
        // 00:15:24
        // let hora=time.slice(0,2)
        // let minutos=time.slice(3,5)
        // let segundos=time.slice(6,8)
        // "12:15:24PM" -> ["12", "15", "24"]
        // todo lo que esta arriab es igual a la variable de aca abajo
        let amPm = time.slice(8,10)
        let [hora, minutos, segundos] = time.split(":")
        
        segundos = segundos.subString(0,2)

        if(hora > 12 || minutos > 59 || segundos > 59 || time.length === 0 || time.length === 8 ){
            return false
        }
        if(amPm === "Am") {
            if(hora === "12") {
                let newHour = parseInt(hora) - 12;
                return `${newHour}0 : ${minutos}: ${segundos}`
                
            }
            return `${hora} : ${minutos} : ${segundos}`
        }

        if (amPm === "Pm"){
            if( hora === "12") {
                return `${hora} : ${minutos} : ${segundos}`
            }
            let newHour = parseInt(hora) + 12
            return `${newHour} : ${minutos} : ${segundos}`
        }

}

module.exports = {
    timeConversion
}