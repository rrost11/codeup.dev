<?php

$names = ['Marc Andreessen', 'Tim Berners-Lee', 'Len Bosack', 'Steve Case', 'Vint Cerf', 'Len Kleinrock', 'J.C.R. Licklider', 'Bob Metcalfe', 'Ray Tomlinson'];

$query = 'Tim';

$result = array_search($query, $names);

if ($result) {
    echo $names[$result];
}



