<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSubscriptionsTable extends Migration
{
    public function up()
    {
        Schema::create('subscriptions', function (Blueprint $table) {
            $table->id();
            $table->string("name")->unique();
            $table->string("display_name");
            $table->string("quality");
            $table->integer("price")->unsigned();
            $table->integer("period")->unsigned();
            $table->timestamps();
        });

        Schema::create('subscription_user', function (Blueprint $table) {  
            $table->unsignedInteger('user_id');
            $table->foreign('user_id')
                ->references('id')
                ->on('users')->onDelete('cascade');
            $table->unsignedInteger('subscription_id');
            $table->foreign('subscription_id')
                ->references('id')
                ->on('subscriptions')->onDelete('cascade');
            $table->timestamps();
        });

    }

    public function down()
    {
        Schema::dropIfExists('subscriptions');
        Schema::dropIfExists('subscription_user');
    }
}
