<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" @class(['dark' => ($appearance ?? 'system') == 'dark'])>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        {{-- Inline script to detect system dark mode preference and apply it immediately --}}
        <script>
            (function() {
                const appearance = '{{ $appearance ?? "system" }}';

                if (appearance === 'system') {
                    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

                    if (prefersDark) {
                        document.documentElement.classList.add('dark');
                    }
                }
            })();
        </script>

        {{-- Inline style to set the HTML background color based on our theme in app.css --}}
        <style>
            html {
                background-color: oklch(1 0 0);
            }

            html.dark {
                background-color: oklch(0.145 0 0);
            }
        </style>

        <title inertia>{{ config('app.name', 'SISFOR Sekolah') }}</title>

        <!-- Favicon -->
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/images/Tutwurihandayani.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/images/Tutwurihandayani.png">
        <link rel="shortcut icon" type="image/png" href="/assets/images/Tutwurihandayani.png">

        <!-- Apple Touch Icon -->
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/images/Tutwurihandayani.png">

        <!-- PWA Meta Tags -->
        <meta name="theme-color" content="#3B82F6">
        <meta name="msapplication-TileColor" content="#3B82F6">
        <meta name="msapplication-TileImage" content="/assets/images/Tutwurihandayani.png">

        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=plus-jakarta-sans:400,500,600,700" rel="stylesheet" />

        @routes
        @viteReactRefresh
        @vite(['resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
