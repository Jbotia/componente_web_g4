<template>
    <div id="MisReservas">
        <h1>Mis Reservas</h1>
        
        <div class="tablaReservas">
            <table>
                <tr>
                    <th>Fecha</th>
                    <th>Espacio</th>
                    <th>Inicio</th>
                    <th>Fin</th>
                    <th>Costo</th>
                </tr>
                <tr v-for="reserva in reservaByUser" :key="reserva.id">
                    <td>{{ reserva.fechaReserva }}</td>
                    <td>{{ reserva.idInmueble }}</td>
                    <td>{{ reserva.fechaInicio }}</td>
                    <td>{{ reserva.fechaFin }}</td>
                    <td>{{ reserva.precioTotal }}</td>
                </tr>
            </table>
        </div>
    </div>        
</template>

<script>
    import gql from "graphql-tag"

    export default{
        name: "ReservaByUser",

        data: function (){
            return{
                username: localStorage.getItem("username") || "none",
                reservaByUser: [],
            }
        },
        apollo: {
            reservaByUser: {
                query: gql`
                    query Query($username: String!) {
                      reservaByUser(username: $username) {
                        id
                        idInmueble
                        propietario
                        inquilino
                        fechaInicio
                        fechaFin
                        precioTotal
                        fechaReserva
                      }
                    }
                `,
                variables() {
                    return{
                        username: this.username,
                    };
                },
            },
        },

        created: async function(){
            await this.$apollo.queries.reservaByUser.refetch();
        }
    };
</script>

<style>
#MisReservas {
  width: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
}

#MisReservas .tablaReservas{
    width:50%;    
    max-height: 250px;
    overflow-y: scroll;
    overflow-x: hidden;
}

#MisReservas table {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid rgba(0, 0, 0, 0.3);
  
}

#MisReservas table td,
#MisReservas table th {
  border: 1px solid #ddd;
  padding: 8px;
}

#MisReservas table tr:nth-child(even) {
  background-color: #f2f2f2;
}

#MisReservas table tr:hover {
  background-color: #ddd;
}

#MisReservas table th {
  padding-top: 3px;
  padding-bottom: 3px;
  text-align: left;
  background-color: rgb(220, 150, 20);
  color: white;
}

#MisReservas h1 {
  font-size: 25px;
  color: #283747;
}

</style>
