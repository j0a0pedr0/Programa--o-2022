<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>vue-js</title>
</head>
<body>
 
    <div id="app" >
        <span v-if="visivel">Posso rodar meu aplicativo</span>
        <span v-else="visivel">agora estou akqiiqii</span>

    </div>

<script src="https://unpkg.com/vue"></script>
<script>
    Vue.createApp({
        data(){
            return{
              visivel:true
            }
        }
    }).mount('#app')
</script>
</body>
</html>