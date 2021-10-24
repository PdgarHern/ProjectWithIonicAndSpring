-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: db_animes
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `characters`
--

DROP TABLE IF EXISTS `characters`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `characters` (
  `id_character` int NOT NULL AUTO_INCREMENT,
  `character_name` varchar(50) NOT NULL,
  `gender` enum('M','F') NOT NULL,
  `age` int NOT NULL,
  `id_anime` int NOT NULL,
  `image` varchar(70) NOT NULL,
  PRIMARY KEY (`id_character`),
  KEY `id_anime` (`id_anime`),
  CONSTRAINT `characters_ibfk_1` FOREIGN KEY (`id_anime`) REFERENCES `animes` (`id_anime`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=74 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `characters`
--

LOCK TABLES `characters` WRITE;
/*!40000 ALTER TABLE `characters` DISABLE KEYS */;
INSERT INTO `characters` VALUES (49,'Midoriya Izuku','M',16,1,'assets/img/midoriyaIzuku.jpg'),(50,'Bakugo katsuki','M',16,1,'assets/img/bakugoKatsuki.jpg'),(51,'Todoroki Shoto','M',16,1,'assets/img/todorokiShoto.jpg'),(52,'Izumi Shinichi','M',17,2,'assets/img/izumiShinichi.jpg'),(53,'Migi','F',0,2,'assets/img/migi.jpg'),(54,'Murano Satomi','F',18,2,'assets/img/muranoSatomi.jpg'),(55,'Eren Jaeger','M',19,3,'assets/img/erenJaeger.jpg'),(56,'Mikasa Ackerman','F',19,3,'assets/img/mikasaAckerman.jpg'),(57,'Armin Arlert','M',19,3,'assets/img/arminArlert.jpg'),(58,'Kujo Jotaro','M',17,4,'assets/img/kujoJotaro.jpg'),(59,'Jean Pierre Polnareff','M',24,4,'assets/img/jeanPierrePolnareff.jpg'),(60,'DIO','M',123,4,'assets/img/dio.jpg'),(61,'Uzumaki Naruto','M',32,5,'assets/img/uzumakiNaruto.jpg'),(62,'Uchiha Sasuke','M',32,5,'assets/img/uchihaSasuke.jpg'),(63,'Haruno Sakura','F',32,5,'assets/img/harunoSakura.jpg'),(64,'Gojo Satoru','M',28,18,'assets/img/gojoSatoru.jpg'),(65,'Kugisaki Nobara','F',16,18,'assets/img/kugisakiNobara.jpg'),(66,'Itadori Yuji','M',15,18,'assets/img/itadoriYuji.jpg'),(67,'All Might','M',49,1,'assets/img/allMight.jpg'),(68,'Tamura Reiko','F',0,2,'assets/img/tamuraReiko.jpg'),(69,'Levi Ackerman','M',31,3,'assets/img/leviAckerman.jpg'),(70,'Joseph Joestar','M',69,4,'assets/img/josephJoestar.jpg'),(71,'Hatake Kakashi','M',46,5,'assets/img/hatakeKakashi.jpg'),(72,'Fushiguro Megumi','M',15,18,'assets/img/FushiguroMegumi.jpg');
/*!40000 ALTER TABLE `characters` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-10-24 23:28:37
