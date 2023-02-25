<x-app-layout>
    <div class="max-w-3xl p-6 mx-auto text-slate-900">
        @include('partials.profile')

        <div class="space-y-8">
            @foreach ($posts as $post)
                <div>
                    <a href="{{ route('posts.show', $post) }}" class="transition-all hover:text-fuchsia-500" title="{{ $post->title }}">
                        <h2 class="font-semibold">{{ $post->title }}</h2>
                    </a>
                    <p class="mt-2 line-clamp-2">{{ $post->description }}</p>
                    <a href="{{ route('posts.show', $post) }}" class="mt-1.5 flex items-center font-medium text-sm group text-fuchsia-500 gap-0.5">
                        {{ __('Read more') }}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mt-0.5 transition-transform group-hover:translate-x-1">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </a>
                </div>
            @endforeach
        </div>
    </div>
</x-app-layout>
