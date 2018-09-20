INSERT INTO flights (`flight_id`, `flight_from`, `flight_to`, `flight_datetime`, `flight_special_comments`) VALUES (3, "Tel aviv", "Budapest", NOW(), null)


SELECT `flight_id`, `flight_to` FROM flights
SELECT * FROM `flights`


SELECT * FROM `flights` WHERE `flight_to` like 'B%' AND `flight_from` like 'T%'
SELECT * FROM `flights` WHERE `flight_to` like 'B%' OR `flight_from` like 'T%'


INSERT INTO `flights` (`flight_id`, `flight_from`, `flight_to`, `flight_datetime`, `flight_special_comments`) VALUES
(1, 'Tel aviv', 'London', '2018-09-20 19:23:24', NULL),
(2, 'Tel aviv', 'Paris', '2018-09-27 19:24:22', NULL),
(3, 'Tel aviv', 'Budapest', '2018-09-20 19:26:14', NULL),
(4, 'Tel aviv', 'Amsterdam', '2018-09-22 20:15:36', NULL),
(5, 'Tel aviv', 'Marseille', '2018-09-30 20:15:36', NULL),
(6, 'Tel aviv', 'Barcelona', '2018-09-20 20:15:36', NULL),
(7, 'Tel aviv', 'Lazio', '2018-10-17 20:15:36', NULL),
(8, 'Eilat', 'Milano', '2018-11-14 20:15:36', NULL),
(9, 'Eilat', 'Marseille', '2018-10-27 20:15:36', NULL),
(10, 'Eilat', 'Amsterdam', '2018-10-11 20:15:36', NULL);


UPDATE flights SET `flight_special_comments` = "Important: Check in 3 hours before" 
WHERE `flight_from` LIKE "Eilat"

/* auto icrement select id inserted */
INSERT INTO `flights` (`flight_from`, `flight_to`, `flight_datetime`, `flight_special_comments`) VALUES
('Tel aviv', 'London', '2018-09-20 19:23:24', NULL),
 SELECT LAST_INSERT_ID();


/* insert with auto increment */
    INSERT INTO `flights` (`flight_from`, `flight_to`, `flight_datetime`, `flight_special_comments`) VALUES
    ('Tel aviv', 'London', '2018-09-20 19:23:24', ""),
    ('Tel aviv', 'Paris', '2018-09-27 19:24:22', ""),
    ('Tel aviv', 'Budapest', '2018-09-20 19:26:14', ""),
    ('Tel aviv', 'Amsterdam', '2018-09-22 20:15:36', ""),
    ('Tel aviv', 'Marseille', '2018-09-30 20:15:36', ""),
    ('Tel aviv', 'Barcelona', '2018-09-20 20:15:36', ""),
    ('Tel aviv', 'Lazio', '2018-10-17 20:15:36', ""),
    ('Eilat', 'Milano', '2018-11-14 20:15:36', ""),
    ('Eilat', 'Marseille', '2018-10-27 20:15:36', ""),
    ( 'Eilat', 'Amsterdam', '2018-10-11 20:15:36', "");
