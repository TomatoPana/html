<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @property Collection<Console> $consoles
 */
class Game extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'price',
        'rating',
        'discounts_id',
        'image_url',
    ];

    public function consoles()
    {
        return $this->belongsToMany(Console::class, 'consoles_has_games');
    }
}
