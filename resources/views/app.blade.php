<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Users</title>
</head>
<body>
    @yield('content')
</body>
@if (app()->environment('local', 'testing'))
    <script src="http://localhost:3000/static/js/bundle.js"></script>
    <script src="http://localhost:3000/static/js/vendors~main.chunk.js"></script>
    <script src="http://localhost:3000/static/js/main.chunk.js"></script>
@else
    <script>
        window.__WEBPACK_PUBLIC_PATH__ = '{{ config('app.asset_url').'/'.\App\Webpack::PUBLIC_DIRECTORY.'/' }}';
    </script>

    <script src="{{ webpack('runtime-main.js') }}"></script>
    <script src="{{ webpack('vendors~main.js') }}"></script>
    <script src="{{ webpack('main.js') }}"></script>
@endif
</html>
