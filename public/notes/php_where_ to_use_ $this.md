Using $this.
```PHP
<?php

class Building
{
	// These variables are used in the scope of the class
	public $door;
	public $window;
	public $work;



	public function enter() {
		$this->door = 'front';
		
		// $this to call a function in this class
		$this->getReadyToWork();
	}

	public function freshAir() {
		$this->window = 'open';
	}

	public function getReadyToWork(){
		$this->work = 'now';

		// This variable's scope in only in this function
		// so it has a $. It is not a property on the class.
		$bossNotHere = 'party';
	}
}
?>
```

When declaring variables in the beginning of a class use the $ character.
Do NOT assign values to the variables at this location.

When inside a function in the same class use $this->door. Do not use the $ on the variable 'door'.
$this-> can be used on a variable (as a property) or to call a function inside the same class as
$this->getReadyToWork();

```PHP
<?php

	$vouge = new Building();

	public function enterBuilding() {
		$vouge->door = 'front';
		$vouge->getReadyToWork();
	}

?>
```
New Building() object is created named $vouge.
We are outside the class but want to use a the door property on the $vouge object.
We need to call the *** $vouge ***->door = 'front'. Not $this->door = 'front'.
Now we go to work, $vouge->getReadyToWork.

Remember all PHP magic methods are called with '__'magicMethod(); That is TWO underscores together with no spaces.


