<?php

use App\Http\Controllers\InboxController;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\DashboardController;
use App\Models\Message;
use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
	return Inertia::render('Welcome', [
		'canLogin' => Route::has('login'),
		'canRegister' => Route::has('register'),
		'laravelVersion' => Application::VERSION,
		'phpVersion' => PHP_VERSION,
	]);
})->name('welcome');

Route::get('/dashboard', [DashboardController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware(['auth'])->group(function () {
	Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
	Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
	Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});



Route::get('/inbox', [InboxController::class, 'index'])->name('inbox.index');

Route::get('/messages', function () {
	return response()->json(['messages' => Message::where('user_id', auth()->id())->get()]);
})->name('messages.index');

Route::post('/send-message', function (Request $request) {
	$validator = Validator::make($request->all(), [
		'message' => 'required|string',
		'user_id' => 'required|exists:users,id',
		'recipient_id' => 'required|exists:users,id'
	]);

	if ($validator->fails()) {
		return response()->json(['error' => $validator->errors()], 422);
	}

	$message = Message::create([
		'message' => $request->input('message'),
		'user_id' => $request->input('user_id'),
		'recipient_id' => $request->input('recipient_id'),
	]);

	return response()->json(['message' => $message], 201);
});

require __DIR__ . '/auth.php';
require __DIR__ . '/users.php';
require __DIR__ . '/labels.php';
require __DIR__ . '/categories.php';
require __DIR__ . '/tickets.php';
