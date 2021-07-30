@extends('layouts.master')

@section('contenido')
        <div class="row mt-2">
            <div class="col-12 col-md-6 col-lg-6 mx-auto">
                <div class="card">
                    <div class="card-header bg-info text-white">
                        <span>Filtro</span>
                    </div>

                    <div class="card-body">
                        <select class="form-select" id="filtro-select">
                            <option value="Todos">Todos</option>
                            <option value="Kilowats">Kilowats</option>
                            <option value="Watts">Watts</option>
                            <option value="Temperatura">Temperatura</option>
                         </select>
                        
                    </div>
                </div>

            </div>
        </div>

        <div class="row mt-5">

            <div class="col-12 col-md-6 col-lg-5 mx-auto">
                <table class="table table-hover table-bordered table-stripped">
                    <thead class="bg-success">
                        <th>Fecha</th>
                        <th>Hora</th>
                        <th>Medidor</th>
                        <th>Direccion</th>
                        <th>Valor</th>
                        <th>Tipo</th>
                        <th>Acciones</th>
                    </thead>

                    <tbody id="tbody-mediciones">

                    </tbody>

                </table>

            </div>

        </div>
    
@endsection

@section('javascript')
    <script src="{{asset('js/servicios/lecturasService.js')}}"></script>
    <script src="{{asset('js/ver_mediciones.js')}}"></script>
    
@endsection