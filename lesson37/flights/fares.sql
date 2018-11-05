-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 01, 2018 at 08:03 PM
-- Server version: 10.1.30-MariaDB
-- PHP Version: 7.2.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `fares`
--

-- --------------------------------------------------------

--
-- Table structure for table `flights`
--

CREATE TABLE `flights` (
  `flight_id` int(11) NOT NULL,
  `flight_from` int(50) NOT NULL,
  `flight_to` int(50) NOT NULL,
  `flight_datetime` datetime NOT NULL,
  `flight_special_comments` varchar(500) COLLATE utf8_bin NOT NULL,
  `pilot_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `flights`
--

INSERT INTO `flights` (`flight_id`, `flight_from`, `flight_to`, `flight_datetime`, `flight_special_comments`, `pilot_id`) VALUES
(23, 1, 2, '2018-09-20 19:23:24', '', 1),
(24, 2, 1, '2018-09-27 19:24:22', '', 2),
(25, 3, 4, '2018-09-20 19:26:14', '', 2),
(26, 1, 2, '2018-10-09 00:00:00', 'Not real', 1),
(27, 1, 2, '2222-02-22 00:00:00', '123', 1),
(28, 2, 3, '2222-02-22 00:00:00', 'comment', 1),
(29, 2, 3, '2222-02-22 00:00:00', 'comment', 1),
(30, 2, 3, '2222-02-22 00:00:00', 'comment', 1),
(31, 2, 3, '2222-02-22 00:00:00', 'comment', 1),
(32, 1, 2, '2222-02-22 00:00:00', 'asdasd', 1),
(33, 1, 2, '2222-02-22 00:00:00', '123123123', 3);

-- --------------------------------------------------------

--
-- Table structure for table `pilots`
--

CREATE TABLE `pilots` (
  `pilot_id` int(11) NOT NULL,
  `pilot_name` varchar(50) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `pilots`
--

INSERT INTO `pilots` (`pilot_id`, `pilot_name`) VALUES
(1, 'David'),
(2, 'Itzik'),
(3, 'Benny'),
(4, 'Alehandro');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(50) COLLATE utf8_bin NOT NULL,
  `password` varchar(32) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`) VALUES
(1, 'test@test.com', '827ccb0eea8a706c4c34a16891f84e7b');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `flights`
--
ALTER TABLE `flights`
  ADD PRIMARY KEY (`flight_id`),
  ADD KEY `pilot_id` (`pilot_id`);

--
-- Indexes for table `pilots`
--
ALTER TABLE `pilots`
  ADD PRIMARY KEY (`pilot_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `flights`
--
ALTER TABLE `flights`
  MODIFY `flight_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `pilots`
--
ALTER TABLE `pilots`
  MODIFY `pilot_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `flights`
--
ALTER TABLE `flights`
  ADD CONSTRAINT `flight_pilot` FOREIGN KEY (`pilot_id`) REFERENCES `pilots` (`pilot_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
