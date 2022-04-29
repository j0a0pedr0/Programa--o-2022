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
      
        <ol>
            <li v-for="item in items">
                {{item.text}}
            </li>
        </ol>
    </div>

<script src="https://unpkg.com/vue"></script>
<script>
    Vue.createApp({
        data(){
            return {
                items:[
                    {text:'favela venceu1'},
                    {text:'favela venceu-2'},
                    {text:'favela venceu-3'}
                ]
            }
        }
    }).mount('#app')
</script>
</body>
</html>