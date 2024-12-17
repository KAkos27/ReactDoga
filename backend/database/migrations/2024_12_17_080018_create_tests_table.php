<?php

use App\Models\Category;
use App\Models\Test;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tests', function (Blueprint $table) {
            $table->id();
            $table->string('question');
            $table->string('a1');
            $table->string('a2');
            $table->string('a3');
            $table->string('a4');
            $table->foreignId('category_id')->references('id')->on('categories');
            $table->timestamps();
        });

        Test::create([
            "question" => "q1",
            "a1" => "jó",
            "a2" => "rossz",
            "a3" => "rossz",
            "a4" => "rossz",
            "category_id" => 1
        ]);

        Test::create([
            "question" => "q2",
            "a1" => "jó",
            "a2" => "rossz",
            "a3" => "rossz",
            "a4" => "rossz",
            "category_id" => 1
        ]);

        Test::create([
            "question" => "q3",
            "a1" => "jó",
            "a2" => "rossz",
            "a3" => "rossz",
            "a4" => "rossz",
            "category_id" => 2
        ]);

        Test::create([
            "question" => "q4",
            "a1" => "jó",
            "a2" => "rossz",
            "a3" => "rossz",
            "a4" => "rossz",
            "category_id" => 1
        ]);

        Test::create([
            "question" => "q5",
            "a1" => "jó",
            "a2" => "rossz",
            "a3" => "rossz",
            "a4" => "rossz",
            "category_id" => 3
        ]);

        Test::create([
            "question" => "q6",
            "a1" => "jó",
            "a2" => "rossz",
            "a3" => "rossz",
            "a4" => "rossz",
            "category_id" => 1
        ]);

        Test::create([
            "question" => "q7",
            "a1" => "jó",
            "a2" => "rossz",
            "a3" => "rossz",
            "a4" => "rossz",
            "category_id" => 1
        ]);

        Test::create([
            "question" => "q8",
            "a1" => "jó",
            "a2" => "rossz",
            "a3" => "rossz",
            "a4" => "rossz",
            "category_id" => 1
        ]);

        Test::create([
            "question" => "q9",
            "a1" => "jó",
            "a2" => "rossz",
            "a3" => "rossz",
            "a4" => "rossz",
            "category_id" => 2
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tests');
    }
};
