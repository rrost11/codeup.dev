<?php

class Request
{
    public static function isGet()
    {
        return $_SERVER['REQUEST_METHOD'] == 'GET';
    }

    public static function isPost()
    {
        return $_SERVER['REQUEST_METHOD'] == 'POST';
    }

    public static function isEmpty()
    {
        return empty($_REQUEST);
    }
}