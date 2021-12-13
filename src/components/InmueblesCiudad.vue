<template>
    <div class="busqueda_por_ciudad">
        <div class="title"> <h3>Quiero hospedarme en:</h3> 
            <span>En: {{ciudadSeleccionada}} </span>
            <select v-model="ciudadSeleccionada">  <!--no he podido hacer que la ciudad seleccionada aquí, entre en la variable del query abajo "inmuebleByCiudad"-->
                <option disabled value="">Seleccionar</option>
                <option>Barranquilla</option>
                <option>Bogota</option>
                <option>Cali</option>
                <option>Cúcuta</option>
                <option>Leticia</option>
                <option>Montería</option>
                <option>Tunja</option>          
            </select>
        </div>   
        
        <div class="container">
            <div  v-for="inmueble in inmuebleByCiudad" :key="inmueble.id">
                <div class="thumbnail">
                    <button v-on:click="loadLogIn"> Reservar </button>
                    <img src="assets/Untitled.png" alt="" />
                    <p>{{ inmueble.descripcion }}</p>
                </div>

                <div class="descripcion">
                    <ul>
                        <li>{{ inmueble.precioDia  }}</li>
                        <li>{{ inmueble.tipo  }} en {{ i.ubicacionBarrio }}</li>
                        <li>{{ inmueble.habitaciones }}</li>
                        <li>{{ inmueble.numeroBanios }}</li>
                        <li>{{ inmueble.dimension }}</li>

                    </ul> 
                </div>             
            </div>                    
        </div> 
    </div>  
</template>

<script>
import gql from "graphql-tag"

export default{
    name: "InmuebleByCiudad",

    data: function(){
        return{
            ciudadSeleccionada:"", //aquí debería entrar el select de arriba, creo, o el input si se hace con form
            inmuebleByCiudad: [],
        }
    },

    
    apollo: {
        inmuebleByCiudad: {
            query: gql`
                query Query($city: String!) {
                    inmuebleByCity(city: $city)  {
                        id
                        propietario
                        ubicacionCiudad
                        ubicacionBarrio
                        habitaciones
                        numeroBanios
                        dimension
                        tipoInmueble
                        descripcion
                        precioDia
                        disponible
                    }
                }
            `,
            variables() {
                return{
                    city: this.ciudadSeleccionada, //y aquí
                }
            }
        }
    }
}
</script>

<style>
    .container {
        margin-left:50vmin;
        width: 50%;
        background-color: rgba(241, 154, 40, 0.76);
        position:absolute; 
        border: 10px solid green;
        padding: 25px;
    }
    .thumbnail {
        position: relative;
        width: 45%;
        height: 100%;
        float: left;
        font-weight: 700;
    }
    .thumbnail img {
        width: 100%;
        height: auto;
    }
    .thumbnail button {
        position: absolute;
        top: 20%;
        left: 50%;
        transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        background-color: rgb(67, 243, 61);
        color: white;
        font-size: 16px;
        padding: 12px 24px;
        border: none;
        cursor: pointer;
        border-radius: 5px;
    }
    .descripcion {
        width: 50%;
        float:right;
        font-weight: 700;
    }
    .title {    
        margin-left:50vmin;
        width: 55%;
        margin-top: 80px;
        color: rgb(182, 178, 178);    
        font-family:cursive;
        position:relative;
        display: flex;
        justify-content:space-around;
        align-items:center;
    }
</style>