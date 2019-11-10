<?php

namespace Tests;

use Illuminate\Foundation\Testing\TestCase as BaseTestCase;

abstract class TestCase extends BaseTestCase
{
    use CreatesApplication;
    protected function signIn($user = null)
    {
        $user = $user?: create('App\User');
        $this->actingAs($user);
        return $this;
    }

    protected function adminSignIn()
    {
        $user = factory('App\User')->states('admin')->create();
        $this->signIn($user);
        return $this;
    }
}
