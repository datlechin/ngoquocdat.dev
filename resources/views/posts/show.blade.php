<x-app-layout>
    <x-slot:title>{{ $post->title }}</x-slot:title>
    <x-slot:description>{{ $post->description }}</x-slot:description>
    <div class="max-w-3xl p-5 mx-auto">
        <div class="mb-3 -ml-1">
            <a wire:navigate href="{{ route('home') }}" class="flex items-center text-sm group text-fuchsia-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 transition-transform group-hover:-translate-x-1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
                {{ __('Back to home') }}
            </a>
        </div>
        <div class="mt-6 mb-10">
            <h1 class="mb-3 text-4xl font-extrabold leading-snug">{{ $post->title }}</h1>
            <p class="text-sm text-gray-600 dark:text-gray-400">
                {!! __('Posted by :name on :date', [
                    'name' => "<span class='font-semibold'>{$post->author->name}</span>",
                    'date' => "<span class='font-semibold'>{$post->created_at->translatedFormat('d M Y')}</span>",
                ]) !!}
            </p>
        </div>
        <div class="mb-10 prose dark:prose-invert">
            {{ \Illuminate\Mail\Markdown::parse($post->content) }}
        </div>
    </div>
</x-app-layout>
