<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\User::factory(1000)->create(['user_type' => 'admin']);
        \App\Models\User::factory(1000)->create(['user_type' => 'staff']);
        \App\Models\User::factory(1000)->create(['user_type' => 'customer']);
    }
}
