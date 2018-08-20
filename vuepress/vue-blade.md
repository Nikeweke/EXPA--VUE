# Vue JS + Blade(Laravel)

```html
<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}" />

        <title>Laravel</title>

       <link rel="stylesheet" href="/css/app.css">

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">

    </head>
    <body>
      <br />
      <div id="app" class="container">

        {{ name }}      {{-- Laravel binding --}}
 
        @{{ title }}    {{-- VUEJS binding --}}

        <example></example>    {{-- VUEJS component --}}

     </div>

      <script src="/js/app.js" charset="utf-8"></script>

    </body>
</html>

```