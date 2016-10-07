<?php

abstract class Model
{
    /** @var PDO|null Connection to the database */
    protected static $dbc = null;

    /** @var array Database values for a single record. Array keys should be column names in the DB */
    protected $attributes = array();

    /**
     * Constructor
     *
     * An instance of a class derived from Model represents a single record in the database.
     *
     * $param array $attributes Optional array of database values to initialize the model record with
     */
    public function __construct(array $attributes = array())
    {
        self::dbConnect();

        // @TODO: Initialize the $attributes property with the passed value
        $this->attributes = $attributes;
    }

    /**
     * Connect to the DB
     *
     * This method should be called at the beginning of any function that needs to communicate with the database
     */
    protected static function dbConnect()
    {
        if (!self::$dbc) {
            
            $dbc = new PDO('mysql:host=127.0.0.1;dbname=codeup_test_db', 'codeup', 'Els3vier');
            $dbc->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            self::$dbc = $dbc;

        }
    }

    // *
    //  * Get a value from attributes based on its name
    //  *
    //  * @param string $name key for attributes array
    //  *
    //  * @return mixed|null value from the attributes array or null if it is undefined
     
    public function __get($name)
    {
        if (array_key_exists($name, $this->attributes)) {
            
            return $this->attributes[$name];

        }

            return Null;

        // @TODO: Return the value from attributes for $name if it exists, else return null
    }

    // *
    //  * Set a new value for a key in attributes
    //  *
    //  * @param string $name  key for attributes array
    //  * @param mixed  $value value to be saved in attributes array
     
    public function __set($name, $value)
    {
        
        $this->attributes[$name] = $value;

        // @TODO: Store name/value pair in attributes array
    }

    /** Store the object in the database */
    public function save()
    {
        
        if(!empty($this->attributes)) {  
            
            if (array_key_exists('id', $this->attributes)) {
               
                $this->update();

            } else {

                $this->insert();
            }

        }
    }

    /**
     * Insert new entry into database
     *
     * NOTE: Because this method is abstract, any child class MUST have it defined.
     */
    protected abstract function insert();

    /**
     * Update existing entry in database
     *
     * NOTE: Because this method is abstract, any child class MUST have it defined.
     */
    protected abstract function update();

    public static function delete($id) {

        self::dbConnect();

        $stmt = self::$dbc->prepare('DELETE FROM Users WHERE id = :id');
        $stmt->bindValue(':id',  $id,  PDO::PARAM_INT);

        $stmt->execute();

    }
}