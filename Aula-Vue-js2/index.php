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
        <span v-html="html"></span>
        {{cpf}}{{message}}{{nome}}
    </div>

<script src="https://unpkg.com/vue"></script>
<script>
    Vue.createApp({
        data(){
            return{
                cpf:'32432323312',
                message:'hello Vue!',
                nome:'joao pedro',
                html:'<h1>ola mundo</h1>'
            }
        }
    }).mount('#app')
</script>
</body>
</html>