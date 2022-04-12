<!DOCTYPE html>
<html lang="en">
<head>


    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        *{
            margin:0;
            padding:0;
            box-sizing:0;
        }
        .parent{
            margin:0 auto;
            max-width:900px;
            display:flex;
            flex-wrap:wrap;
        }

        .box1{
            float:left;
            width:50%;
            height:500px;
            background: red;
        }
        .box2{
            float:left;
            width:50%;
            height:200px;
            background: orange;
        }
        
    </style>
    <title>Document</title>

</head>
<body>

<div class="parent">
    <div class="box1"></div>
    <div class="box2"></div>
    <div style="background:purple;" class="box2"></div>
</div>



</body>
</html>