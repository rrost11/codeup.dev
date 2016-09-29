<?php

define('DB_HOST', '127.0.0.1');
define('DB_NAME', 'national_parks');
define('DB_USER', 'parks_user');
define('DB_PASS', 'codeup');

require_once 'db_connect.php';

$truncateQuery = 'TRUNCATE national_parks';

$nationalParks = [
    [
        'name' => 'Acadia', 'location' => 'Maine', 'date_established' => '1919-02-26', 'area_in_acres'  => '47389.67', 'description' => 'Covering most of Mount Desert Island and other coastal islands, Acadia features the tallest mountain on the Atlantic coast of the United States, granite peaks, ocean shoreline, woodlands, and lakes. There are freshwater, estuary, forest, and intertidal habitats.'
    ],
    [
        'name' => 'American Samoa', 'location' => 'American Samoa', 'date_established' => '1988-10-31', 'area_in_acres'  => '9000.00', 'description' => 'The southernmost national park is on three Samoan islands and protects coral reefs, rainforests, volcanic mountains, and white beaches. The area is also home to flying foxes, brown boobies, sea turtles, and 900 species of fish.'
    ],
    [
        'name' => 'Arches', 'location' => 'Utah', 'date_established' => '1929-04-12', 'area_in_acres'  => '76518.98', 'description' => 'This site features more than 2,000 natural sandstone arches, including the famous Delicate Arch. In a desert climate, millions of years of erosion have led to these structures, and the arid ground has life-sustaining soil crust and potholes, which serve as natural water-collecting basins. Other geologic formations are stone columns, spires, fins, and towers.'
    ],
    [
        'name' => 'Badlands', 'location' => 'South Dakota', 'date_established' => '1978-11-10', 'area_in_acres'  => '242755.94', 'description' => 'The Badlands are a collection of buttes, pinnacles, spires, and grass prairies. It has the worlds richest fossil beds from the Oligocene epoch, and the wildlife includes bison, bighorn sheep, black-footed ferrets, and swift foxes.'
    ],
    [
        'name' => 'Big Bend', 'location' => 'Texas', 'date_established' => '1944-06-12', 'area_in_acres'  => '801163.21', 'description' => 'Named for the prominent bend in the Rio Grande along the US–Mexico border, this park encompasses a large and remote part of the Chihuahuan Desert. Its main attraction is backcountry recreation in the arid Chisos Mountains and in canyons along the river. A wide variety of Cretaceous and Tertiary fossils as well as cultural artifacts of Native Americans also exist within its borders.'
    ],
    [
        'name' => 'Biscayne', 'location' => 'Florida', 'date_established' => '1980-06-28', 'area_in_acres'  => '172924.07', 'description' => 'Located in Biscayne Bay, this park at the north end of the Florida Keys has four interrelated marine ecosystems: mangrove forest, the Bay, the Keys, and coral reefs. Threatened animals include the West Indian manatee, American crocodile, various sea turtles, and peregrine falcon.'
    ],
    [
        'name' => 'Black Canyon of the Gunnison', 'location' => 'Colorado', 'date_established' => '1999-10-21', 'area_in_acres'  => '32950.03', 'description' => 'The park protects a quarter of the Gunnison River, which slices sheer canyon walls from dark Precambrian-era rock. The canyon features incredibly steep descents, and is a popular site for river rafting and rock climbing. The deep, narrow canyon, made of gneiss and schist, is often in shadow and therefore appears black.'
    ],
    [
        'name' => 'Bryce Canyon', 'location' => 'Utah', 'date_established' => '1928-02-25', 'area_in_acres'  => '35835.08', 'description' => 'Bryce Canyon is a giant geological amphitheater on the Paunsaugunt Plateau. The unique area has hundreds of tall sandstone hoodoos formed by erosion. The region was originally settled by Native Americans and later by Mormon pioneers.'
    ],
    [
        'name' => 'Canyonlands', 'location' => 'Utah', 'date_established' => '1964-09-12', 'area_in_acres'  => '337597.83', 'description' => 'This landscape was eroded into a maze of canyons, buttes, and mesas by the combined efforts of the Colorado River, Green River, and their tributaries, which divide the park into three districts. There are rock pinnacles and other naturally sculpted rock formations, as well as artifacts from Ancient Pueblo peoples.'
    ],
    [
        'name' => 'Capitol Reef', 'location' => 'Utah', 'date_established' => '1971-12-18', 'area_in_acres'  => '241904.26', 'description' => 'The parks Waterpocket Fold is a 100-mile (160 km) monocline that exhibits the earths diverse geologic layers. Other natural features are monoliths, sandstone domes, and cliffs shaped like the United States Capitol.'
    ],
    [
        'name' => 'Carlsbad Caverns', 'location' => 'New Mexico', 'date_established' => '1930-05-14', 'area_in_acres'  => '46766.45', 'description' => 'Carlsbad Caverns has 117 caves, the longest of which is over 120 miles (190 km) long. The Big Room is almost 4,000 feet (1,200 m) long, and the caves are home to over 400,000 Mexican free-tailed bats and sixteen other species. Above ground are the Chihuahuan Desert and Rattlesnake Springs.'
    ],
    [
        'name' => 'Channel Islands', 'location' => 'California', 'date_established' => '1980-03-05', 'area_in_acres'  => '249561.00', 'description' => 'Five of the eight Channel Islands are protected, and half of the parks area is underwater. The islands have a unique Mediterranean ecosystem originally settled by the Chumash people. They are home to over 2,000 species of land plants and animals, and 145 are unique to them, including the island fox. Professional ferry services offer transportation to the islands from the mainland.'
    ],
    [
        'name' => 'Congaree', 'location' => 'South Carolina', 'date_established' => '2003-11-10', 'area_in_acres'  => '26545.86', 'description' => 'On the Congaree River, this park is the largest portion of old-growth floodplain forest left in North America. Some of the trees are the tallest in the Eastern US. An elevated walkway called the Boardwalk Loop guides visitors through the swamp.'
    ],
    [
        'name' => 'Crater Lake', 'location' => 'Oregon', 'date_established' => '1902-05-22', 'area_in_acres'  => '183224.05', 'description' => 'Crater Lake lies in the caldera of an ancient volcano called Mount Mazama that collapsed 7,700 years ago. It is the deepest lake in the United States and is famous for its vivid blue color and water clarity. There are two more recent volcanic islands in the lake, and, with no inlets or outlets, all water comes through precipitation.'
    ],
    [
        'name' => 'Cuyahoga Valley', 'location' => 'Ohio', 'date_established' => '2000-10-11', 'area_in_acres'  => '32860.73', 'description' => 'This park along the Cuyahoga River has waterfalls, hills, trails, and exhibits on early rural living. The Ohio and Erie Canal Towpath Trail follows the Ohio and Erie Canal, where mules towed canal boats. The park has numerous historic homes, bridges, and structures,[21] and also offers a scenic train ride.'
    ],
    [
        'name' => 'Death Valley', 'location' => 'California, Nevada', 'date_established' => '1994-10-31', 'area_in_acres'  => '3372401.96', 'description' => 'Death Valley is the hottest, lowest, and driest place in the United States. Daytime temperatures have topped 130 °F (54 °C) and it is home to Badwater Basin, the lowest elevation in North America. A diversity of colorful canyons, desolate badlands, shifting sand dunes, sprawling mountains, and over 1000 species of plants populate this geologic graben. Additional points of interest include salt flats, historic mines, and springs.'
    ],
    [
        'name' => 'Denali', 'location' => 'Alaska', 'date_established' => '1917-02-26', 'area_in_acres'  => '4740911.72', 'description' => 'Centered around Denali, the tallest mountain in North America, Denali is serviced by a single road leading to Wonder Lake. Denali and other peaks of the Alaska Range are covered with long glaciers and boreal forest. Wildlife includes grizzly bears, Dall sheep, caribou, and gray wolves.'
    ],
    [
        'name' => 'Dry Tortugas', 'location' => 'Florida', 'date_established' => '1992-10-26', 'area_in_acres'  => '64701.22', 'description' => 'The islands of the Dry Tortugas, at the westernmost end of the Florida Keys, are the site of Fort Jefferson, a Civil War-era fort that is the largest masonry structure in the Western Hemisphere. With most of the park being remote ocean, it is home to undisturbed coral reefs and shipwrecks and is only accessible by plane or boat.'
    ],
    [
        'name' => 'Everglades', 'location' => 'Florida', 'date_established' => '1934-05-30', 'area_in_acres'  => '1508537.90', 'description' => 'The Everglades are the largest tropical wilderness in the United States, and it encompasses a large expanse of tropical rainforest and savanna. This mangrove ecosystem and marine estuary is home to 36 protected species, including the Florida panther, American crocodile, and West Indian manatee. Some areas have been drained and developed; restoration projects aim to restore the ecology.'
    ],
    [
        'name' => 'Gates of the Arctic', 'location' => 'Alaska', 'date_established' => '1980-12-02', 'area_in_acres'  => '7523897.74', 'description' => 'The countrys northernmost park protects an expanse of pure wilderness in Alaskas Brooks Range and has no park facilities. The land is home to Alaska natives, who have relied on the land and caribou for 11,000 years.'
    ],
    [
        'name' => 'Glacier', 'location' => 'Montana', 'date_established' => '1910-05-11', 'area_in_acres'  => '1013572.41', 'description' => 'The U.S. half of Waterton-Glacier International Peace Park, this park hosts 26 glaciers and 130 named lakes beneath a stunning canopy of Rocky Mountain peaks. There are historic hotels and a landmark road in this region of rapidly receding glaciers. The local mountains, formed by an overthrust, expose the worlds best-preserved sedimentary fossils from the Proterozoic era.'
    ],
    [
        'name' => 'Glacier Bay', 'location' => 'Alaska', 'date_established' => '1980-12-02', 'area_in_acres'  => '3224840.31', 'description' => 'Glacier Bay has numerous tidewater glaciers, mountains, fjords, and a temperate rainforest, and is home to large populations of grizzly bears, mountain goats, whales, seals, and eagles. When discovered in 1794 by George Vancouver, the entire bay was covered in ice, but the glaciers have since receded more than 65 miles (105 km).'
    ],
    [
        'name' => 'Grand Canyon', 'location' => 'Arizona', 'date_established' => '1919-02-26', 'area_in_acres'  => '1217403.32', 'description' => 'The Grand Canyon, carved by the mighty Colorado River, is 277 miles (446 km) long, up to 1 mile (1.6 km) deep, and up to 15 miles (24 km) wide. Millions of years of erosion have exposed the colorful layers of the Colorado Plateau in countless mesas and canyon walls, visible from both the north and south rims, or from a number of trails that descend into the canyon itself.'
    ],
    [
        'name' => 'Grand Teton', 'location' => 'Wyoming', 'date_established' => '1929-02-26', 'area_in_acres'  => '309994.66', 'description' => 'Grand Teton is the tallest mountain in the Teton Range. The parks historic Jackson Hole and reflective piedmont lakes teem with unique wildlife and contrast with the dramatic mountains, which rise abruptly from the sage-covered valley below.'
    ],
    [
        'name' => 'Great Basin', 'location' => 'Nevada', 'date_established' => '1986-10-27', 'area_in_acres'  => '77180.00', 'description' => 'Based around Nevadas second tallest mountain, Wheeler Peak, Great Basin National Park contains 5,000-year-old bristlecone pines, a rock glacier, and the limestone Lehman Caves. It also enjoys some of the countrys darkest night skies. Animals which call the park home include Townsends big-eared bat, pronghorn, and Bonneville cutthroat trout.'
    ],
    [
        'name' => 'Great Sand Dunes', 'location' => 'Colorado', 'date_established' => '2004-09-13', 'area_in_acres'  => '42983.74', 'description' => 'The tallest sand dunes in North America, up to 750 feet (230 m) tall, were formed by deposits of the ancient Rio Grande in the San Luis Valley. Abutting a variety of grasslands, shrublands, and wetlands, the park also has alpine lakes, six 13,000-foot mountains, and old-growth forests.'
    ],
    [
        'name' => 'Great Smoky Mountains', 'location' => 'North Carolina, Tennessee', 'date_established' => '1934-06-15', 'area_in_acres'  => '521490.13', 'description' => 'The Great Smoky Mountains, part of the Appalachian Mountains, span a wide range of elevations, making them home to over 400 vertebrate species, 100 tree species, and 5000 plant species. Hiking is the parks main attraction, with over 800 miles (1,300 km) of trails, including 70 miles (110 km) of the Appalachian Trail. Other activities include fishing, horseback riding, and touring nearly 80 historic structures.'
    ],
    [
        'name' => 'Guadalupe Mountains', 'location' => 'Texas', 'date_established' => '1966-10-15', 'area_in_acres'  => '86415.97', 'description' => 'This park boasts Guadalupe Peak, the highest point in Texas; the scenic McKittrick Canyon filled with bigtooth maples; a corner of the arid Chihuahuan Desert; and a fossilized coral reef from the Permian era.'
    ],
    [
        'name' => 'Haleakalā', 'location' => 'Hawaii', 'date_established' => '1916-08-01', 'area_in_acres'  => '29093.67', 'description' => 'The Haleakalā volcano on Maui features a very large crater with numerous cinder cones, Hosmers Grove of alien trees, the Kipahulu sections scenic pools of freshwater fish, and the native Hawaiian goose. It is home to the greatest number of endangered species within a U.S. National Park.'
    ],
    [
        'name' => 'Hawaii Volcanoes', 'location' => 'Hawaii', 'date_established' => '1916-08-01', 'area_in_acres'  => '323431.38', 'description' => 'This park on the Big Island protects the famous Kīlauea and Mauna Loa volcanoes, two of the worlds most active geological features. Diverse ecosystems range from tropical forests at sea level to barren lava beds at more than 13,000 feet (4,000 m).'
    ],
];

$dbc->exec($truncateQuery);

$insertQuery = <<<'QUERY'
INSERT INTO national_parks (name, location, date_established, area_in_acres, description)
VALUES (:name, :location, :date_established, :area_in_acres, :description)
QUERY;

$stmt = $dbc->prepare($insertQuery);

foreach ($nationalParks as $park) {
    $stmt->bindValue('name',             $park['name'],             PDO::PARAM_STR);
    $stmt->bindValue('location',         $park['location'],         PDO::PARAM_STR);
    $stmt->bindValue('date_established', $park['date_established'], PDO::PARAM_STR);
    $stmt->bindValue('area_in_acres',    $park['area_in_acres'],    PDO::PARAM_STR);
    $stmt->bindValue('description',      $park['description'],      PDO::PARAM_STR);

    $stmt->execute();
}
