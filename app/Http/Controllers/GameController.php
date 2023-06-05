<?php

namespace App\Http\Controllers;

use App\Models\Game;
use Illuminate\Http\Request;
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
        $validated = $request->validate([]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Game $game)
    {
        return Inertia::render('Admin/GameDetail', []);
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
        $validated = $request->validate([]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Game $game)
    {
        $game->delete();

        return Inertia::render('Admin/GameList', []);
    }
}
