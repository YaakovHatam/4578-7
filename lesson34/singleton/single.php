<?php
final class UserFactory
{
    public $userName;
    private static $inst;
    /**
     * Call this method to get singleton
     *
     * @return UserFactory
     */
    public static function Instance()
    {
        if (UserFactory::$inst === null) {
            UserFactory::$inst = new UserFactory("student");
        }
        return UserFactory::$inst;
    }

    /**
     * Private ctor so nobody else can instantiate it
     *
     */
    private function __construct($un)
    {
        $this->userName = $un;

    }
}

echo '1';
echo UserFactory::Instance()->userName;
echo '<br>2';
UserFactory::Instance()->userName = 'student2';
echo UserFactory::Instance()->userName;
echo '<br>3';
echo UserFactory::Instance()->userName;
?>


