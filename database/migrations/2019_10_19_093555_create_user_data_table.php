<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUserDataTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_data', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('user_id')->index();
            $table->integer('holiday_allowance')->nullable();
            $table->integer('approver')->index()->nullable();
            $table->text('role')->nullable();
            $table->integer('department')->index()->nullable();
            //  $table->boolean('is_supervisor')->nullable();
            $table->date('dob')->nullable();
            $table->text('tel')->nullable();
            $table->text('address')->nullable();
            $table->text('postcode')->nullable();
            $table->timestamps();
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_data');
    }
}
