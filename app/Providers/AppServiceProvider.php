<?php

namespace App\Providers;

use App\Holiday;
use App\Observers\HolidayObserver;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
        \Validator::extend('spamfree', 'App\Rules\SpamFree@passes');
        Holiday::observe(HolidayObserver::class);

    }
}
