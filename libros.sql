-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 17-05-2023 a las 03:38:43
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `pi_app_web`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `libros`
--

CREATE TABLE `libros` (
  `id` int(11) NOT NULL,
  `titulo` varchar(45) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `imagen` varchar(45) NOT NULL,
  `precio` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `libros`
--

INSERT INTO `libros` (`id`, `titulo`, `descripcion`, `imagen`, `precio`) VALUES
(4, 'LOS AÑOS', 'A través de fotografías y recuerdos, de palabras, canciones, objetos… Annie Ernaux nos deja sentir el paso de los años, desde la posguerra hasta nuestros días, creando una nueva forma de autobiografía, impersonal y colectiva.', 'xxx.png', 149),
(7, 'SOBRE LA MUERTE DE UN PERRO', 'Tras la muerte de su querido perro Taiaut, el filósofo Jean Grenier consagró al animal que durante años conviviera con él este visionario y bellísimo tratado de corte intimista y caprichoso, \"entrecortado y jadeante como los latidos del corazón\", con el p', 'ZZZ.PNG', 215),
(8, 'LIBRO DEL DESASOSIEGO', 'Texto inagotable hacia el que no cabe la indiferencia, el Libro del desasosiego responde a la inquisición ferozmente subjetiva e individualista que Fernando Pessoa (1888-1935) ejerció sobre su propia persona. El tanteo, el titubeo, la propia extrañeza ant', 'XXX.png', 271);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `libros`
--
ALTER TABLE `libros`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `libros`
--
ALTER TABLE `libros`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
