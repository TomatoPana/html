<?php

use App\Http\Controllers\GameController;
use App\Models\Category;
use App\Models\Console;
use App\Models\Game;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

$navbarItems = [
    ['name' => 'Inicio', 'href' => '/'],
    ['name' => 'Acerca de', 'href' => '/about'],
    ['name' => 'Catalogo', 'href' => '/catalog']
];

Route::get('/', function (Request $request) use ($navbarItems) {
    return Inertia::render('Home', [
        'carouselInfo' => [
            ['imageUrl' => asset('storage/genshinimpact.jpg')],
            ['imageUrl' => asset('storage/fallguys.jpg')],
            ['imageUrl' => asset('storage/overwatch.jpg')],
        ],
        'navbarInfo' => [
            'isLoggedIn' => ($request->user() !== null),
            'items' => $navbarItems,
            'currentItem' => 0,
            'isAdmin' => $request->user()?->admin ?? false,
        ],
    ]);
})->name('home');

Route::get('about', function (Request $request) use ($navbarItems) {
    return Inertia::render('AboutUs', [
        'navbarInfo' => [
            'isLoggedIn' => ($request->user() !== null),
            'items' => $navbarItems,
            'currentItem' => 1,
            'isAdmin' => $request->user()?->admin ?? false,
        ],
    ]);
})->name('about');

Route::get('catalog', function (Request $request) use ($navbarItems) {

    $games = Game::all()->map(function (Game $game) {
        return [
            'name' => $game->name,
            'price' => $game->price,
            'rating' => $game->rating,
            'imageUrl' => $game->image_url,
            // @phpstan-ignore-next-line
            'platforms' => $game->consoles->map(fn (Console $platform) => $platform->name)->toArray(),
        ];
    })->toArray();

    return Inertia::render('Catalog', [
        'navbarInfo' => [
            'isLoggedIn' => ($request->user() !== null),
            'items' => $navbarItems,
            'currentItem' => 2,
            'isAdmin' => $request->user()?->admin ?? false,
        ],
        'categories' => Category::all(['id', 'name'])->all(),
        'games' => $games,
    ]);
})->name('catalog');

Route::get('login', function (Request $request) use ($navbarItems) {
    return Inertia::render('Login', [
        'navbarInfo' => [
            'isLoggedIn' => ($request->user() !== null),
            'items' => $navbarItems,
            'currentItem' => -1,
            'isAdmin' => $request->user()?->admin ?? false,
        ],
    ]);
})->name('login');

Route::post('login', function (Request $request) use ($navbarItems) {
    if ($request->user() !== null) return redirect(route('home'));
    $validated = $request->validate([
        'username' => 'required|string|max:255',
        'password' => 'required|string|max:255',
    ]);

    if (!Auth::attempt([
        'username' => $validated['username'],
        'password' => $validated['password']
    ])) {
        return Inertia::render('Login', [
            'navbarInfo' => [
                'isLoggedIn' => false,
                'items' => $navbarItems,
                'currentItem' => -1,
                'isAdmin' => false,
            ],
            'message' => [
                'type' => 'danger',
                'message' => 'Credenciales incorrectas'
            ]
        ]);
    }

    $user = User::where('username', $validated['username'])->first();

    Auth::login($user);

    return redirect(route('home'));
})->name('auth.login');

Route::post('register', function (Request $request) use ($navbarItems) {
    if ($request->user() !== null) return redirect(route('home'));
    $validated = $request->validate([
        'username' => 'required|string|max:255',
        'name' => 'required|string|max:255',
        'email' => 'required|string|email|max:255',
        'password' => 'required|string|confirmed|max:255',
    ]);

    User::create($validated);

    return Inertia::render('Login', [
        'navbarInfo' => [
            'isLoggedIn' => false,
            'items' => $navbarItems,
            'currentItem' => -1,
            'isAdmin' => false,
        ],
        'message' => [
            'type' => 'success',
            'message' => 'Registro exitoso'
        ]
    ]);
});

Route::post('logout', function (Request $request) {
    if ($request->user() === null) return redirect(route('home'));
});

Route::get('admin', function (Request $request) {
    if ($request->user() === null) return redirect(route('home'));
    $user = $request->user();
    if (!$user->admin) return redirect(route('home'));
    return Inertia::render('Admin/Dashboard');
});

Route::resource('admin/games', GameController::class);
