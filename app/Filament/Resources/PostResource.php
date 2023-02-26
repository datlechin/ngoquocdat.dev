<?php

namespace App\Filament\Resources;

use App\Filament\Resources\PostResource\Pages;
use App\Models\Post;
use Closure;
use Filament\Forms\Components\Card;
use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\MarkdownEditor;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Resources\Form;
use Filament\Resources\Resource;
use Filament\Resources\Table;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class PostResource extends Resource
{
    protected static ?string $model = Post::class;

    protected static ?string $navigationIcon = 'heroicon-o-document-text';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Card::make()
                    ->schema([
                        TextInput::make('title')
                            ->translateLabel()
                            ->required()
                            ->autofocus()
                            ->reactive()
                            ->afterStateUpdated(function (Closure $set, $state) {
                                $set('slug', Str::slug($state));
                            }),

                        TextInput::make('slug')
                            ->unique(ignoreRecord: true)
                            ->required(),

                        Textarea::make('description')
                            ->translateLabel()
                            ->required()
                            ->rows(2)
                            ->columnSpanFull(),

                        MarkdownEditor::make('content')
                            ->translateLabel()
                            ->required()
                            ->columnSpanFull(),

                        Select::make('user_id')
                            ->relationship('author', 'name')
                            ->searchable()
                            ->default(fn (string|null $state) => $state ?? Auth::id())
                            ->preload(),

                        DateTimePicker::make('published_at')
                            ->translateLabel(),

                        FileUpload::make('image')
                            ->translateLabel()
                            ->image()
                            ->columnSpanFull(),
                    ])
                    ->columns()
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('author.name')
                    ->translateLabel()
                    ->searchable(),

                TextColumn::make('title')
                    ->translateLabel()
                    ->url(fn (Post $record) => route('posts.show', $record), true)
                    ->sortable()
                    ->searchable(),

                TextColumn::make('views')
                    ->translateLabel()
                    ->sortable(),

                TextColumn::make('created_at')
                    ->translateLabel()
                    ->sortable()
                    ->dateTime(),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\DeleteBulkAction::make(),
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListPosts::route('/'),
            'create' => Pages\CreatePost::route('/create'),
            'edit' => Pages\EditPost::route('/{record}/edit'),
        ];
    }
}
