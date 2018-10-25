<?php
// Data access layer
final class DataAccessLayer
{

    private $host = '127.0.0.1';
    private $db = 'fares';
    private $user = 'root';
    private $pass = '';
    private $charset = 'utf8';
    private $dsn;
    private $opt = [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES => false,
    ];

    private static $inst;

    private function __construct()
    {
        $this->dsn = "mysql:host=$this->host;dbname=$this->db;charset=$this->charset";
    }

    public static function Instance() {
        if (DataAccessLayer::$inst === null) {
            DataAccessLayer::$inst = new DataAccessLayer();
        }
        return DataAccessLayer::$inst;
    }

    public function select($query)
    {
        $pdo = new PDO($this->dsn, $this->user, $this->pass, $this->opt);
        $stmt = $pdo->query($query);

        return $stmt;
    }

    public function insert($query, $params) {
        $pdo = new PDO($this->dsn, $this->user, $this->pass, $this->opt);
            // send data to sql
		$statement = $pdo->prepare($query);
		$statement->execute($params);
    }
}
