<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\User;
use App\Models\Books\Book;

class BooksUsersController extends Controller
{
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $bookUser = Book::find($id)->owner->toArray();
        return response()->json($bookUser);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($bookid,$userid)
    {
        $match = ['id' => $bookid, 'book_user_id' => $userid];
        $book = Book::where($match)->firstOrFail();

        $book->book_user_id = null;
        $book->save();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $bookid,$userid)
    {
        $book = Book::find($bookid);
        $book->book_user_id = $userid;
        $book->save();
    }
}
