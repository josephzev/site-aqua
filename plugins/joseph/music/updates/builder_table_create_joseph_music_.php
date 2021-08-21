<?php namespace Joseph\Music\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateJosephMusic extends Migration
{
    public function up()
    {
        Schema::create('joseph_music_', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->string('title');
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('joseph_music_');
    }
}
