const iniciarEliminacion = async function(){
    let id = this.idLectura;
    let resp = await Swal.fire({
        title:"¿Esta seguro?",
        text: "Esta operación es irreversible",
        icon: "error",
        showCancelButton:true
    });

    if(resp.isConfirmed){
        if(await eliminarLectura(id)){
            let lecturas = await getLecturas();
            cargarTabla(lecturas);
            Swal.fire("Registro Eliminado" , "Lectura eliminado" , "info");
        }else{

            Swal.fire("Error" , "No se pudo atender la solicitud" , "error");
        }

    }else{
        Swal.fire("Cancelado" , "Cancelado a petición del usuario" , "info");
    }

};



const cargarTabla = (lecturas)=>{
    let tbody = document.querySelector("#tbody-mediciones");
    tbody.innerHTML ="";

    for(let i = 0 ; i<lecturas.length;++i ){
        let l = lecturas[i];

        let tr = document.createElement("tr");
        
        let tdFecha = document.createElement("td");
        tdFecha.innerText = l.fecha;
        let tdHora = document.createElement("td");
        tdHora.innerText = l.hora;
        let tdMedidor = document.createElement("td");
        tdMedidor.innerText = l.medidor;
        let tdDir = document.createElement("td");
        tdDir.innerText = l.direccion;
        let tdValor = document.createElement("td");
        tdValor.innerText = l.valor;
        let tdTipo = document.createElement("td");
        tdTipo.innerText = l.tipos;
       

        let tdAcciones = document.createElement("td");

        let btnEliminar = document.createElement("button");
        btnEliminar.innerText = "Descartar Lectura";
        btnEliminar.classList.add("btn","btn-danger");
        btnEliminar.idLectura = l.id;

        btnEliminar.addEventListener("click" ,iniciarEliminacion);
        tdAcciones.appendChild(btnEliminar);
        
        tr.appendChild(tdFecha);
        tr.appendChild(tdHora);
        tr.appendChild(tdMedidor);
        tr.appendChild(tdDir);
        tr.appendChild(tdValor);
        tr.appendChild(tdTipo);
        tr.appendChild(tdAcciones);


        tbody.appendChild(tr);
    }



}




document.addEventListener("DOMContentLoaded",async ()=>{
   
    let lecturas = await getLecturas();
   
    cargarTabla(lecturas);

});

