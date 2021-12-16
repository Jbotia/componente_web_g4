<template>
    <div class="todos_inmuebles">                   
        <div class= "card" v-for="inmueble in getInmuebles" :key="inmueble.id">
            <div class="inner">
                <div class="thumbnail">
                    <img src="../assets/fotoPlaceholder.jpg" alt="" style="width:300px;height:200px;">
                </div>
                <div class="descripcion">
                    
                    <h1>${{ inmueble.precioDia  }}/día</h1>  
                    <br>                  
                    <p>{{ inmueble.tipoInmueble  }} ubicado(a) en {{ inmueble.ubicacionBarrio }}
                    en la ciudad de {{ inmueble.ubicacionCiudad }}.</p>
                    <p>Consta de:
                    {{ inmueble.habitaciones }} habitaciones, 
                    {{ inmueble.numeroBanios }} baños, 
                    y tiene un área de {{ inmueble.dimension }}m2.</p>
                    <p>Destacado: {{ inmueble.descripcion }}</p>
                    <br>
                    <br>
                    <button v-on:click="loadLogIn"> Reservar </button>
                     
                </div>             
            </div> 
        </div>                   
    </div> 
    
</template>

<script>
import gql from "graphql-tag"

export default{
    name: "GetInmuebles",

    data: function(){
        return{
            getInmuebles: [],
        }
    },

    
    apollo: {
        getInmuebles: {
            query: gql`
                query Query {
                    getInmuebles {
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
                
            `
        }
    }
}
</script>

<style>
    
    .card {
        background-color:transparent;
        height: 300px;
        width:700px;
        border: 6px solid  #44996a; 
        perspective: 1000px;
        margin-left: 20%;
        margin-top:5px;
    }

    .inner {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.8s;
        transform-style: preserve-3d;
    }

    .card:hover .inner {
        transform: rotateY(180deg);
    }

    .thumbnail, .description {
        position: absolute;
        width: 700px;
        height: 260px;
        backface-visibility: hidden;
    }
    .thumbnail {       
        background-color: #3fe085;
        color: #44996a;
        line-height: 1;
        font-weight: 800;  
        font-size: 20px;      
    }

    .descripcion {
        background-color: transparent;
        color: white;
        transform: rotateY(180deg);
        line-height: 0,5;
        font-size: 20px;
    }

    .descripcion button {
        color:#162c1b;
        background: #e9b819;
        border: #E5E7E9;
        border-radius: 5px;
        padding: 10px 20px;
    }  

    .descripcion button:hover{
        color: black;
        background: #e9b819;
        border: 3px solid #E5E7E9;
        border-radius: 5px;
        font-size:20;
    } 
    
</style>