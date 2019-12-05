-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Dec 05, 2019 at 05:50 AM
-- Server version: 5.7.26
-- PHP Version: 7.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_gretzky`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_stats`
--

DROP TABLE IF EXISTS `tbl_stats`;
CREATE TABLE IF NOT EXISTS `tbl_stats` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `team` varchar(25) NOT NULL,
  `years_active` varchar(15) NOT NULL,
  `games` varchar(10) NOT NULL,
  `goals` varchar(10) NOT NULL,
  `assists` varchar(10) NOT NULL,
  `points` varchar(10) NOT NULL,
  `plus_minus` varchar(10) NOT NULL,
  `pim` varchar(10) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_stats`
--

INSERT INTO `tbl_stats` (`ID`, `team`, `years_active`, `games`, `goals`, `assists`, `points`, `plus_minus`, `pim`) VALUES
(1, 'NHL Career', '1979-1999', '1,487', '894', '1,963', '2,857', '520', '577'),
(2, 'Edmonton Oilers', '1979-1988', '696', '583', '1,086', '1,669', '553', '323'),
(3, 'Los Angeles Kings', '1988-1996', '539', '246', '672', '918', '-5', '182'),
(4, 'St. Louis Blues', '1996-1996', '18', '8', '13', '21', '-6', '2'),
(5, 'New York Rangers', '1996-1999', '234', '57', '192', '249', '-22', '70');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
