@extends('layouts.master')

@section('contenido')
    
    <div class="row mt-5">
        <div class="col-12 col-md-6 col-lg-6 mx-auto">
            <div class="card">
                <div class="card-header bg-gradient bg-success text-warning">
                    <span>Registrar lectura</span>
                </div>

                <div class="card-body">
                    <div class="mb-3">
                        <label for="fecha-txt" class="form-label">Fecha</label>
                        <input type="date" id="fecha-txt" class="form-control">

                    </div>

                    <div class="mb-3">
                        <label for="hora-txt" class="form-label">Hora</label>
                        <input type="text" id="hora-txt" class="form-control">
                    </div>

                    <div class="mb-3">
                        <label for="medidor-txt" class="form-label">Medidor</label>
                        <input type="number" id="medidor-txt" value="0" class="form-control">
                    </div>

                    <div class="mb-3">
                        <label for="dir-txt" class="form-label">Direccion</label>
                        <input type="text" id="dir-txt" class="form-control">
                    </div>

                    <div class="mb-3">
                        <label for="valor-txt" class="form-label">Valor</label>
                        <input type="number"  id="valor-txt" min="0" max="500" value="0" class="form-control">

                    </div>

                    <div class="mb-3">
                        <label for="tipos-select" class="form-label"></label>
                        <select  id="tipos-select" class="form-select">
                            <option value="Kilowats">Kilowats</option>
                            <option value="Watts">Watts</option>
                            <option value="Temperatura">Temperatura</option>

                        </select>
                    </div>

                </div>

                <div class="card-footer d-grid gap-1">
                   <button id="registrar-btn" class="btn btn-info">Registrar</button>
                    
            
                </div>

            </div>
            
        </div>

    </div>


    
@endsection

@section('javascript')
   <script src="{{asset('js/servicios/lecturasService.js')}}"></script>
    <script src="{{asset('js/registrar_lecturas.js')}}"></script>
    
@endsection