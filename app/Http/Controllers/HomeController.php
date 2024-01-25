<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\Post;

class HomeController extends Controller
{
    public function index()
    {
        $posts = Post::query()
            ->published()
            ->latest()
            ->get();

        return view('home', compact('posts'));
    }
}
