<?php
// Data access layer
class DataAccessLayer {

	private $host = '127.0.0.1';
	private $db   = 'fares';
	private $user = 'root';
	private $pass = '';
	private $charset = 'utf8';
    private $dsn;
    private $opt = [
		PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
		PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
		PDO::ATTR_EMULATE_PREPARES   => false,
    ];
    
    function __construct() {
        $this->dsn = "mysql:host=$this->host;dbname=$this->db;charset=$this->charset";
    }

    function select($query) {
        $pdo = new PDO($this->dsn, $this->user, $this->pass, $this->opt);
        $stmt = $pdo->query($query);

        return $stmt;
    }
}
?>