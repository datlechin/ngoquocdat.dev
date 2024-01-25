<?php

declare(strict_types=1);

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

        $post->increment('views');

        return view('posts.show', compact('post'));
    }
}
