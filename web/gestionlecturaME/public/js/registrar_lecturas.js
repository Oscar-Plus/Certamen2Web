document.querySelector("#registrar-btn").addEventListener("click",async()=>{
    let fecha = document.querySelector("#fecha-txt").value;
    let hora  = document.querySelector("#hora-txt").value.trim();
    let medidor = document.querySelector("#medidor-txt").value.trim();
    let direccion = document.querySelector("#dir-txt").value.trim();
    let valor = document.querySelector("#valor-txt").value.trim();
    let tipos = document.querySelector("#tipos-select").value.trim();

    if(tipos == "Kilowats"){
        tipos = "kW"  + " " + tipos;   
    }else if(tipos == "Watts"){
        tipos = "W"  + " " + tipos; 
    }else{
        tipos = "C"  + " " + tipos;  
    }

    /*if (hora.charAt(2) != ":"){
        errores.push("Error campo Hora agregue los 2 puntos");
    }*/
    
    let errores = [];

    if((+valor <0) || (+valor >500)){
        errores.push("error el valor debe ser mayor a 0 y menor o igual a 500");
    }
    if(fecha === ""){
        errores.push("Error falta por rellenar campo Fecha");
    }
    if(hora===""){
        errores.push("Error falta por rellenar campo Hora");
    }
    if(medidor === ""){
        errores.push("Error falta por rellenar campo Medidor");
    }
    if(direccion ===""){
        errores.push("Error falta por rellenar campo Direccion");
    }
    if(valor ===""){
        errores.push("Error falta por rellenar campo Valor");
    }


    if(errores.length == 0){
        let lectura = {};
        lectura.fecha = fecha;
        lectura.hora = hora;
        lectura.medidor = medidor;
        lectura.direccion = direccion;
        lectura.valor = valor;
        lectura.tipos = tipos;

        let res = await crearLectura(lectura);

        await Swal.fire("Registro creado", "Exito al crear una lectura" , "info");

        window.location.href = "ver_mediciones";


    }else{
        Swal.fire({
            title:"Errores de validacion",
            icon: "warning",
            html: errores.join("<br />")
        });

    }







});