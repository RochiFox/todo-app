<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Todo;
use App\Http\Requests\TodoStoreRequest;

class TodoController extends Controller
{
    public function index()
    {
        $todos = Todo::all();

        return response()->json([
            'results' => $todos
        ], 200);
    }

    public function store(TodoStoreRequest $request)
    {
        try {
            Todo::create([
                'description' => $request->description,
                'completed' => false,
            ]);

            return response()->json([
                'message' => "Task succesfully added!"
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Something went really wrong!'
            ], 500);
        }
    }

    public function update($id)
    {
        try {
            $todo = Todo::find($id);

            if (!$todo) {
                return $todo()->json([
                    'message' => 'Task Not Found.'
                ], 404);
            }

            $todo->completed = !$todo->completed;

            $todo->save();

            return response()->json([
                'message' => "Task succesfully updated!"
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Something went really wrong!'
            ], 500);
        }
    }

    public function destroy()
    {
        $todo = Todo::where('completed', true)->get();

        $todo->each->delete();

        return response()->json([
            'message' => 'Tasks succesfully deleted.'
        ], 200);
    }
}
