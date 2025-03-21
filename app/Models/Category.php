<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Category extends Model
{
	use HasFactory;

	protected $fillable = [
		'title',
		'slug',
		'visible',
		'user_id',
	];

	protected $casts = [
		'visible' => 'boolean',
	];

	public function user(): BelongsTo
	{
		return $this->belongsTo(User::class);
	}

	public function tickets(): BelongsToMany
	{
		return $this->belongsToMany(Ticket::class, 'category_ticket', 'category_id', 'ticket_id');
	}
}
