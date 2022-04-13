-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jan 10, 2022 at 08:11 PM
-- Server version: 10.4.10-MariaDB
-- PHP Version: 5.6.40

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mabrukalik`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
CREATE TABLE IF NOT EXISTS `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category_name` varchar(255) NOT NULL,
  `create_at` datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=34 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `category_name`, `create_at`) VALUES
(1, 'some value', '2021-12-19 22:58:59'),
(2, 'some value', '2021-12-20 19:29:59'),
(8, 'asdasdasd', '2021-12-31 13:11:27'),
(4, 'some value', '2021-12-20 19:31:56'),
(5, 'some value', '2021-12-20 19:34:28'),
(6, 'some value', '2021-12-20 19:34:40'),
(7, 'categprt', '2021-12-27 23:00:59'),
(9, 'asdasdasd', '2021-12-31 13:11:52'),
(10, 'asdasdasd', '2021-12-31 13:12:21'),
(11, 'asdasdasd', '2021-12-31 13:13:08'),
(12, 'asdasdasd', '2021-12-31 13:16:34'),
(13, 'asdasdasd', '2021-12-31 13:16:36'),
(14, 'asdasdasdasd', '2021-12-31 13:16:40'),
(15, 'asdasdasdasd', '2021-12-31 13:16:42'),
(16, 'asdasdasdasd', '2021-12-31 13:16:42'),
(17, 'asdasdasdasd', '2021-12-31 13:16:43'),
(18, 'asdasdasdasd', '2021-12-31 13:16:55'),
(19, 'asdasdasdasd', '2021-12-31 13:16:58'),
(20, 'asdasdasdasd', '2021-12-31 13:16:59'),
(21, 'asdasdasd', '2022-01-01 21:06:15'),
(22, 'asdasdasd', '2022-01-01 21:06:40'),
(23, 'asdasdasd', '2022-01-01 21:06:54'),
(24, 'asdasdasd', '2022-01-01 21:06:56'),
(25, 'asdasdasd', '2022-01-01 21:06:57'),
(26, 'asdasdasd', '2022-01-01 21:06:59'),
(27, 'asdasdasd', '2022-01-01 21:07:10'),
(28, 'asdasdasd', '2022-01-01 21:07:46'),
(29, 'asdasdasd', '2022-01-01 21:07:47'),
(30, 'asdasdasdasd', '2022-01-01 21:11:18'),
(31, 'asdasdasdasd', '2022-01-01 21:11:47'),
(32, 'asdasdasdasd', '2022-01-01 21:12:23'),
(33, 'asdasdasdasd', '2022-01-01 21:12:51');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `full_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `permissions` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=MyISAM AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `full_name`, `email`, `password`, `permissions`, `created_at`) VALUES
(16, 'Nir Saban', 'nirsa11@gmail.com', '$2b$10$rWsVETQHy9KeIp/jmN/5sOjn.lqn7bYSuN8UTFo1iwSDTaoRMGzYa', 1, '2021-12-31 12:44:10'),
(17, 'phphp hpphp', 'nirsa12@gmail.com', '$2b$10$ecP1wBU71Q0dbloUxkOC.e1ZIl3yOdKFraHk0K49jF6vEpu3sys0q', 1, '2022-01-01 20:56:56'),
(18, 'adasdas', 'nini@gmail.com', '$2b$10$oV8pSOZrSAuSiWGNwxahVe8zjxM0NFxVLPPQCdKS/5yonFaqugdHC', 1, '2022-01-01 21:19:50');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
