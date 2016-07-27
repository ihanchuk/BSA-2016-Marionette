<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Models\Books\Book;
use App\User;

class BooksController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $allBooks = Book::all()->toArray();
        return response()->json($allBooks);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $this->validate($request, [
            'author'  => 'required|string',
            'genre'     => 'required|string',
            'year'     => 'required|Integer|Min:4',
            'title'     => 'required',
        ]);

        Book::create($request->all());
        return response()->json(["created"=>true]);
    }


    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id,Request $request)
    {
        $allBooks = Book::find($id)->toArray();
        return response()->json($allBooks);
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
       Book::destroy($id);
    }
}
