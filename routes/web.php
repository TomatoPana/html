<?php

use App\Models\User;
use Illuminate\Http\Request;
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

Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');

Route::get('about', function () {
    return Inertia::render('AboutUs');
})->name('about');

Route::get('catalog', function (Request $request) {
    return Inertia::render('Catalog');
})->name('catalog');

Route::get('login', function () {
    return Inertia::render('Login');
})->name('login');

Route::post('login', function (Request $request) {
    if ($request->user() !== null) return redirect(route('home'));
    $validated = $request->validate([
        'username' => 'required|string|max:255',
        'name' => 'required|string|max:255',
        'email' => 'required|string|email|max:255',
        'password' => 'required|string|confirmed|max:255',
    ]);
})->name('auth.login');

Route::post('register', function (Request $request) {
    if ($request->user() !== null) return redirect(route('home'));
    $validated = $request->validate([
        'username' => 'required|string|max:255',
        'name' => 'required|string|max:255',
        'email' => 'required|string|email|max:255',
        'password' => 'required|string|confirmed|max:255',
    ]);

    User::create($validated);

    return Inertia::render('Login', ['message' => [
        'type' => 'success',
        'message' => 'registro exitoso'
    ]]);
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

Route::get('admin/create', function () {
});

Route::post('admin/create', function () {
});
