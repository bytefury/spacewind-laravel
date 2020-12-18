<!DOCTYPE html>
<html lang="en" class="h-full">

<head>
    <title>Spacewind-Laravel</title>
    <link href="{{mix("/assets/css/app.css")}}" rel="stylesheet" type="text/css">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600&display=swap" rel="stylesheet">
    <link rel="icon" href="/assets/img/spacewind-favicon.png" type="image/gif" sizes="16x16">
    <meta name="csrf-token" content="{{ csrf_token() }}">
</head>

<body class="h-full overflow-x-hidden bg-gray-100 layout-default skin-crater font-base">
    <div id="app" class="h-full">
        <div class="fixed top-0 left-0 z-30 w-full h-full mobile-menu-overlay" @click.prevent="$utils.toggleSidebar()"></div>
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
    <script type="text/javascript" src="{{mix('/assets/js/app.js')}}"></script>
</body>

</html>
