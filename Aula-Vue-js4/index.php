<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>vue-js</title>
</head>
<body>
 
    <div id="app">
    <p>{{message}}</p>
    <button v-on:click="mostraAlerta">Mostrar alerta!</button>
    <button v-on:click="outroMetodo">Trocar back</button>
    <button v-on:click="outroMetodo2">Trocar back red</button>
    </div>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://unpkg.com/vue"></script>
<script>
    Vue.createApp({
        data(){
            
        },
        methods:{
            mostraAlerta:function(){
                alert('ola mundo');
            },
            outroMetodo:function(){
                $('body').css('background','green');
            },
            outroMetodo2:function(){
                $('body').css('background','red');
            }
        }
    }).mount('#app')
</script>
</body>
</html>