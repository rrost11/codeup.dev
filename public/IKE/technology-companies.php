<?php

// Download technology-companies.php to your exercises directory.

// Add code to output the $companies array in its current form.

// Sort the $companies array by company name and output the results.

// Sort the people in each company alphabetically. You will need to use a foreach loop and will need to reassign each inner array after sorting. Output the result.

// Sort the companies from "biggest" to "smallest". This may be easier than you think, but be sure you don't loose the company names!


$companies = [
    'Sun Microsystems' => [
        'Vinod Khosla',
        'Bill Joy',
        'Andy Bechtolsheim',
        'Scott McNealy'
    ],
    'Silicon Graphics' => [
        'Jim Clark',
        'Ed McCracken'
    ],
    'Cray' => [
        'William Norris',
        'Seymour Cray'
    ],
    'NeXT' => [
        'Steve Jobs',
        'Avie Tevanian',
        'Joanna Hoffman',
        'Bud Tribble',
        'Susan Kare'
    ],
    'Acorn Computers' => [
        'Steve Furber',
        'Sophie Wilson',
        'Hermann Hauser',
        'Jim Mitchell'
    ],
    'MIPS Technologies' => [
        'Skip Stritter',
        'John L. Hennessy'
    ],
    'Commodore' => [
        'Yash Terakura',
        'Bob Russell',
        'Bob Yannes',
        'David A. Ziembicki',
        'Jay Miner'
    ],
    'Be Inc' => [
        'Steve Sakoman',
        'Jean-Louis Gassée'
    ]
];


ksort($companies);



foreach($companies as $company=>$founders){
    asort($founders);
    $companies[$company] = $founders;
}



print_r($companies);

