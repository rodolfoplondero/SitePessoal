<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Rodolfo Londero</title>
    @yield('css-view')
    
    <link rel="stylesheet" type="text/css" href="{{ asset('css/bootstrap.min.css') }}"/>
    <link rel="stylesheet" type="text/css" href="{{ asset('fonts/font-awesome.min.css') }}"/>
    <link rel="stylesheet" type="text/css" href="{{ asset('fonts/simple-line-icons.css') }}"/>
    <link rel="stylesheet" type="text/css" href="{{ asset('css/slicknav.css') }}"/>
    <link rel="stylesheet" type="text/css" href="{{ asset('css/menu_sideslide.css') }}"/>
    <link rel="stylesheet" type="text/css" href="{{ asset('css/slide-style.css') }}"/>
    <link rel="stylesheet" type="text/css" href="{{ asset('css/nivo-lightbox.css') }}"/>
    <link rel="stylesheet" type="text/css" href="{{ asset('css/animate.css') }}"/>
    <link rel="stylesheet" type="text/css" href="{{ asset('css/main.css') }}"/>  
    <link rel="stylesheet" type="text/css" href="{{ asset('css/responsive.css') }}"/>
    <link rel="stylesheet" type="text/css" href="{{ asset('css/about.css') }}"/>   
        
    {{-- <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Fredoka+One" rel="stylesheet">
    <script src="https://kit.fontawesome.com/23f8786974.js" crossorigin="anonymous"></script> --}}
</head>
<body>
    {{-- @include('templates.menu-lateral') --}}
    <header id="header-wrap">
        @include('templates.menu')
    </header>
    <section id="view-conteudo">
        @yield('conteudo-view')
    </section>

    <footer class="footer-area section-padding">
        @include('sections.footer')
    </footer>
    @yield('js-view')
    <script src="{{ asset('js/jquery-min.js') }}"></script>
    <script src="{{ asset('js/popper.min.js') }}"></script>
    <script src="{{ asset('js/bootstrap.min.js') }}"></script>
    <script src="{{ asset('js/jquery.mixitup.js') }}"></script>
    <script src="{{ asset('js/jquery.counterup.min.js') }}"></script>
    <script src="{{ asset('js/waypoints.min.js') }}"></script>
    <script src="{{ asset('js/wow.js') }}"></script>
    <script src="{{ asset('js/jquery.nav.js') }}"></script>
    <script src="{{ asset('js/jquery.easing.min.js') }}"></script>
    <script src="{{ asset('js/nivo-lightbox.js') }}"></script>
    <script src="{{ asset('js/jquery.slicknav.js') }}"></script>
    <script src="{{ asset('js/main.js') }}"></script>
    <script src="{{ asset('js/form-validator.min.js') }}"></script>
    <script src="{{ asset('js/contact-form-script.min.js') }}"></script>
    <script src="{{ asset('js/map.js') }}"></script>
</body>
</html>