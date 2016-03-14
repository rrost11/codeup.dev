<?php

function square($num) {
	reutrn $num * $num;

}

function sum($a, $b) {
	echo $a + $b;
}

function sumOfSquares($a, $b) {
	return sum(square($a), square ($b));
}

function getThirdSideLengthOfTriangle($a, $b){
	$aSquaredPlusBSquared = sumOfSquares($a, $b){
		$localVariable = sumOfSquares($a, $b);
		$squareRoot = sqrt($localVariable);
		return $squareRoot;
	}
}