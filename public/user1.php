<?php

// __DIR__ is a *magic constant* with the directory path containing this file.
// This allows us to correctly require_once Model.php, no matter where this file is being required from.
require_once __DIR__ . '/model1.php';

class User extends Model
{
    /** Insert a new entry into the database */
    protected function insert()
    {
    
        $stmt = self::$dbc->prepare('INSERT INTO Users (first_name, last_name, email, password) VALUES (:first_name, :last_name, :email, :password)');

            $stmt->bindValue(':first_name', $this->attributes['first_name'], PDO::PARAM_STR);
            $stmt->bindValue(':last_name',  $this->attributes['last_name'],  PDO::PARAM_STR);
            $stmt->bindValue(':email',  $this->attributes['email'],  PDO::PARAM_STR);
            $stmt->bindValue(':password',  $this->attributes['password'],  PDO::PARAM_STR);

            $stmt->execute();

        $this->attributes['id'] = self::$dbc->lastInsertId();

    }

    /** Update existing entry in the database */
    protected function update()
    {
        
        $stmt = self::$dbc->prepare('UPDATE Users SET first_name = :first_name, last_name = :last_name, email = :email, password = :password WHERE id = :id');

            $stmt->bindValue(':first_name', $this->attributes['first_name'], PDO::PARAM_STR);
            $stmt->bindValue(':last_name',  $this->attributes['last_name'],  PDO::PARAM_STR);
            $stmt->bindValue(':email',  $this->attributes['email'],  PDO::PARAM_STR);
            $stmt->bindValue(':password',  $this->attributes['password'],  PDO::PARAM_STR);
            $stmt->bindValue(':id',  $this->attributes['id'],  PDO::PARAM_INT);

            $stmt->execute();


    }

    // *
    //  * Find a single record in the DB based on its id
    //  *
    //  * @param int $id id of the user entry in the database
    //  *
    //  * @return User An instance of the User class with attributes array set to values from the database
     
    public static function find($id)
    {
        // Get connection to the database --- why?
        // self::dbConnect();

       
        $stmt = self::$dbc->prepare('SELECT * FROM Users WHERE id = :id');
        $stmt->bindValue(':id',  $id,  PDO::PARAM_INT);


        $stmt->execute();
        $result = $stmt->fetch(PDO::FETCH_ASSOC);

        // The following code will set the attributes on the calling object based on the result variable's contents
        $instance = null;
        if ($result) {
            $instance = new static($result);
        }
        return $instance;
    }

    // *
    //  * Find all records in a table
    //  *
    //  * @return User[] Array of instances of the User class with attributes set to values from database
     
    public static function all()
    {
        // self::dbConnect();
        $stmt = self::$dbc->query('SELECT * FROM Users');

        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

        return $result;
    }
    
}