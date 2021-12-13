<!--aún me falta el estilo, probarla y actualizar los nombres de querys a los del apigateway que desplegó Cristian -->
<template>
    <div id="misReservasPorInquilino">
        <div class="container">
            <h1>Mis Reservas</h1>
        </div>
        <div class="tablaReservas">
            <table>
                <tr>
                    <th>Fecha</th>
                    <th>Espacio</th>
                    <th>Inicio</th>
                    <th>Fin</th>
                    <th>Costo</th>
                </tr>
                <tr v-for="r in reservaByInquilino" :key="r.id">
                    <td>{{ r.fechaReserva.substring(0,10) }}</td>
                    <td>{{ r.idInmueble }}</td>
                    <td>{{ r.fechaInicio.substring(0,10) }}</td>
                    <td>{{ r.fechaFin.substring(0,10) }}</td>
                    <td>{{ r.precioTotal }}</td>
                </tr>
            </table>
        </div>
    </div>        
</template>

<script>
    import gql from "graphql-tag"

    export default{
        name: "ReservaByInquilino",

        data: function(){
            return{
                inquilino: localStorage.getItem("username") || "none",
                reservaByInquilino: [],
            }
        },
        apollo: {
            reservaByInquilino: {
                query: gql`
                    query ReservaByInquilino($inquilino: String!) {
                        reservaByInquilino(inquilino: $inquilino) {
                            id
                            idInmueble
                            propietario
                            fechaInicio
                            fechaFin
                            precioTotal
                            fechaReserva
                      }
                    }
                `,
                variables() {
                    return{
                        inquilino: this.inquilino,
                    }
                }
            }
        },

        created: function(){
            this.$apollo.queries.reservaByInquilino.refresh();
        }
    }
</script>

<style>
    
</style>
