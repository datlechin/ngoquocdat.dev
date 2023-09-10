<?php

namespace App\Filament\Resources;

use App\Filament\Resources\PostResource\Pages;
use App\Models\Post;
use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\MarkdownEditor;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Forms\Set;
use Filament\Resources\Resource;
use Filament\Tables\Table;
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
                Section::make()
                    ->schema([
                        TextInput::make('title')
                            ->required()
                            ->autofocus()
                            ->live(onBlur: true)
                            ->afterStateUpdated(fn (Set $set, ?string $state) =>  $set('slug', Str::slug($state))),

                        TextInput::make('slug')
                            ->unique(ignoreRecord: true)
                            ->required(),

                        Textarea::make('description')
                            ->required()
                            ->rows(2)
                            ->columnSpanFull(),

                        MarkdownEditor::make('content')
                            ->required()
                            ->columnSpanFull(),

                        Select::make('user_id')
                            ->relationship('author', 'name')
                            ->searchable()
                            ->default(fn (?string $state) => $state ?? Auth::id())
                            ->preload(),

                        DateTimePicker::make('published_at')
                            ->label(__('Published date'))
                            ->date(),

                        FileUpload::make('image')
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
                    ->searchable(),

                TextColumn::make('title')
                    ->url(fn (Post $record) => route('posts.show', $record), true)
                    ->sortable()
                    ->searchable(),

                TextColumn::make('views')
                    ->sortable(),

                TextColumn::make('created_at')
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
