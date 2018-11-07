-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Nov 06, 2018 at 03:10 PM
-- Server version: 5.7.23
-- PHP Version: 7.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `SVG`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_svg`
--

CREATE TABLE `tbl_svg` (
  `ID` int(10) UNSIGNED NOT NULL,
  `rhino` varchar(100) NOT NULL,
  `headline` varchar(100) NOT NULL,
  `copy` varchar(600) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_svg`
--

INSERT INTO `tbl_svg` (`ID`, `rhino`, `headline`, `copy`) VALUES
(2, 'databaserhino2', 'Which rhinos are extinct?', 'West African Black Rhinos are presumed to become extinct in the VERY near future.');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_svg`
--
ALTER TABLE `tbl_svg`
  ADD PRIMARY KEY (`ID`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
