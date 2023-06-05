<?php

namespace App\Http\Controllers;

use App\Models\Game;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class GameController extends Controller
{

    public $navbarItems = [
        ['name' => 'Inicio', 'href' => '/'],
        ['name' => 'Acerca de', 'href' => '/about'],
        ['name' => 'Catalogo', 'href' => '/catalog']
    ];

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // SELECT id, name FROM games;
        $games = Game::all(['id', 'name'])->all();
        return Inertia::render('Admin/GameList', [
            'games' => $games,
            'navbarInfo' => [
                'isLoggedIn' => true,
                'items' => $this->navbarItems,
                'currentItem' => -1,
                'isAdmin' => true,
            ],
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/GameForm', [
            'navbarInfo' => [
                'isLoggedIn' => true,
                'items' => $this->navbarItems,
                'currentItem' => -1,
                'isAdmin' => true,
            ],
            'action' => 'create',
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'price' => 'required|numeric',
            'rating' => 'required|string|max:255',
            'image' => ['required', Rule::imageFile()],
        ]);

        $file = $request->file('image');
        $name = $file->getClientOriginalName();
        Storage::disk('public')->put($name, $file);

        $validated['image_url'] = asset("storage/{$name}");
        unset($validated['image']);

        // Equivale a hacer INSERT INTO games (name, price, rating, image_url) VALUES (?,?,?,?);
        // Donde cada signo de interrogación es un valor para evitar inyecciones de SQL
        // Laravel automáticamente asocia cada valor con su nombre, de ahi el nombre en las validaciones
        Game::create($validated);

        // SELECT id, name FROM games;
        $games = Game::all(['id', 'name'])->all();

        return Inertia::render('Admin/GameList', [
            'message' => [
                'type' => 'success',
                'message' => 'Registro exitoso'
            ],
            'games' => $games,
            'navbarInfo' => [
                'isLoggedIn' => true,
                'items' => $this->navbarItems,
                'currentItem' => -1,
                'isAdmin' => true,
            ],
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Game $game)
    {
        return Inertia::render('Admin/GameDetail', [
            'game' => $game,
            'navbarInfo' => [
                'isLoggedIn' => true,
                'items' => $this->navbarItems,
                'currentItem' => -1,
                'isAdmin' => true,
            ],
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Game $game)
    {
        return Inertia::render('Admin/GameForm', [
            'navbarInfo' => [
                'isLoggedIn' => true,
                'items' => $this->navbarItems,
                'currentItem' => -1,
                'isAdmin' => true,
            ],
            'action' => 'edit',
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Game $game)
    {
        $validated = $request->validate([
            'name' => 'sometimes|string|max:255',
            'price' => 'sometimes|numeric',
            'rating' => 'sometimes|string|max:255',
            'image_url' => ['sometimes', Rule::imageFile()],
        ]);

        if ($request->exists('image_url')) {
            // Solo almacenar la imagen si hubo un cambio en ella
            $file = $request->file('image');
            $name = $file->getClientOriginalName();
            Storage::disk('public')->put($name, $file);

            $validated['image_url'] = asset("storage/{$name}");
            unset($validated['image']);
        }

        // Equivalente a hacer UPDATE games SET (...) where id = ?
        // Donde (...) son los campos que se editaron y el `?` el ID del campo
        // Laravel automáticamente hace "binding" del juego al recurso especificado
        $game->update($validated);

        // SELECT id, name FROM games;
        $games = Game::all(['id', 'name'])->all();

        return Inertia::render('Admin/GameList', [
            'message' => [
                'type' => 'success',
                'message' => 'Registro exitoso'
            ],
            'games' => $games,
            'navbarInfo' => [
                'isLoggedIn' => true,
                'items' => $this->navbarItems,
                'currentItem' => -1,
                'isAdmin' => true,
            ],
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Game $game)
    {
        // Equivalente a hacer DELETE FROM games WHERE id = ?
        // Donde `?` corresponde al ID del juego a eliminar
        $game->delete();

        // SELECT id, name FROM games;
        $games = Game::all(['id', 'name'])->all();

        return Inertia::render('Admin/GameList', [
            'message' => [
                'type' => 'warning',
                'message' => "Dato eliminado (ID eliminado: {$game->id})"
            ],
            'games' => $games,
            'navbarInfo' => [
                'isLoggedIn' => true,
                'items' => $this->navbarItems,
                'currentItem' => -1,
                'isAdmin' => true,
            ],
        ]);
    }
}
