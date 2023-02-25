<?php

namespace App\Http\Controllers;

use App\Models\Post;

class PostController extends Controller
{
    public function show(string $slug)
    {
        $post = Post::query()
            ->where('slug', $slug)
            ->published()
            ->firstOrFail();

        return view('posts.show', compact('post'));
    }
}
