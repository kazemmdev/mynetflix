<?php

namespace Database\Seeders;

use App\Models\Subscription;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run()
    {
        collect(["standard", "basic", "premium"])->each(function($item) {
            Subscription::create([
                'name' => $item,
                'display_name' => "Netflix " . ucfirst($item),
                'period' => 30,
                'quality' => $this->getQuality($item),
                'price' => $this->getPrice($item)
            ]);
        });
    }


    protected function getQuality($name) {
        switch($name) {
            case "standard" :
                return "480p";
            case "basic":
                return "1080p";
            case "premium":
                return "4k";
        }
    }

    protected function getPrice($name) {
        switch($name) {
            case "standard" :
                return 49;
            case "basic":
                return 69;
            case "premium":
                return 99;
        }
    }
}
