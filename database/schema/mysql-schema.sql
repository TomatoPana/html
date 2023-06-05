-- Tabla requerida por Laravel para la ejecución de migraciones.
DROP TABLE IF EXISTS `migrations`;

CREATE TABLE `migrations` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) NOT NULL,
  `batch` INT NOT NULL,
  PRIMARY KEY (`id`)
);

-- Inicia creación de tablas del sistema

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `email` varchar(255)  NOT NULL,
  `password` varchar(255)  NOT NULL,
  `fullname` varchar(255)  NOT NULL,
  `admin` TINYINT(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
);

DROP TABLE IF EXISTS `discounts`;

CREATE TABLE `discounts` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `percentage` INT NOT NULL,
  `from` DATETIME NOT NULL,
  `to` DATETIME NOT NULL,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `games`;

CREATE TABLE `games` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `price` DOUBLE NOT NULL,
  `rating` VARCHAR(255) NOT NULL,
  `discounts_id` INT UNSIGNED NULL,
  `image_url` VARCHAR(511) NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_games_discounts1`
    FOREIGN KEY (`discounts_id`)
    REFERENCES `discounts` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
);

DROP TABLE IF EXISTS `consoles`;

CREATE TABLE `consoles` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `manufacturer` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `comments`;

CREATE TABLE `comments` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `users_id` INT UNSIGNED NOT NULL,
  `game_id` INT UNSIGNED NOT NULL,
  `comment` TEXT NOT NULL,
  `published_at` DATETIME NOT NULL,
  `isLiked` TINYINT NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_comments_users1`
    FOREIGN KEY (`users_id`)
    REFERENCES `users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_comments_games1`
    FOREIGN KEY (`game_id`)
    REFERENCES `games` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
);

DROP TABLE IF EXISTS `categories` ;

CREATE TABLE `categories` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `isMatureContent` TINYINT NOT NULL,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `consoles_has_games` ;

CREATE TABLE `consoles_has_games` (
  `console_id` INT UNSIGNED NOT NULL,
  `game_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`console_id`, `game_id`),
  CONSTRAINT `fk_consoles_has_games_consoles`
    FOREIGN KEY (`console_id`)
    REFERENCES `consoles` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_consoles_has_games_games1`
    FOREIGN KEY (`game_id`)
    REFERENCES `games` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
);

DROP TABLE IF EXISTS `games_has_categories`;

CREATE TABLE `games_has_categories` (
  `game_id` INT UNSIGNED NOT NULL,
  `categories_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`game_id`, `categories_id`),
  CONSTRAINT `fk_games_has_categories_games1`
    FOREIGN KEY (`game_id`)
    REFERENCES `games` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_games_has_categories_categories1`
    FOREIGN KEY (`categories_id`)
    REFERENCES `categories` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
);

DROP TABLE IF EXISTS `users_has_games`;

CREATE TABLE IF NOT EXISTS `users_has_games` (
  `users_id` INT UNSIGNED NOT NULL,
  `game_id` INT UNSIGNED NOT NULL,
  `purchased_at` DATETIME NOT NULL,
  `console_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`users_id`, `game_id`),
  CONSTRAINT `fk_users_has_games_users1`
    FOREIGN KEY (`users_id`)
    REFERENCES `users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_users_has_games_games1`
    FOREIGN KEY (`game_id`)
    REFERENCES `games` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_users_has_games_consoles1`
    FOREIGN KEY (`console_id`)
    REFERENCES `consoles` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
);

-- Inicia el llenado de datos
START TRANSACTION;

INSERT INTO `users` (`id`, `username`, `email`, `password`, `fullname`, `admin`) VALUES (1, 'TomatoPana', 'mdlb.lobo@gmail.com', '12345678', 'Moises David', true);
INSERT INTO `users` (`id`, `username`, `email`, `password`, `fullname`, `admin`) VALUES (2, 'Nitto9711', 'janne.oman@gmail.com', '12345678', 'Janne Oman', true);
INSERT INTO `users` (`id`, `username`, `email`, `password`, `fullname`, `admin`) VALUES (3, 'SuperJacque', 'jaque.lopez@gmail.com', '12345678', 'Jacque', true);

INSERT INTO `discounts` (`id`, `name`, `percentage`, `from`, `to`) VALUES (1, 'Descuento Para Chinos', 10, '2023-01-01 00:00:00', '2023-07-30 23:59:59');

INSERT INTO `games` (`id`, `name`, `price`, `rating`, `discounts_id`, `image_url`) VALUES (1, 'Overwatch 2', 100, '+80%', NULL, 'overwatch.jpg');
INSERT INTO `games` (`id`, `name`, `price`, `rating`, `discounts_id`, `image_url`) VALUES (2, 'Halo Infinity', 900, '83%', NULL, 'Halo.png');
INSERT INTO `games` (`id`, `name`, `price`, `rating`, `discounts_id`, `image_url`) VALUES (3, 'Apex Legends', 89, '77%', 1, 'ApexLegends.png');
INSERT INTO `games` (`id`, `name`, `price`, `rating`, `discounts_id`, `image_url`) VALUES (4, 'Battlefield 1', 500, '78%', 1, 'Battlefield.png');
INSERT INTO `games` (`id`, `name`, `price`, `rating`, `discounts_id`, `image_url`) VALUES (5, 'Minecraft', 700, '79%', NULL, 'Minecraft.png');
INSERT INTO `games` (`id`, `name`, `price`, `rating`, `discounts_id`, `image_url`) VALUES (6, 'Terraria', 115, '81%', NULL, 'Terraria.png');
INSERT INTO `games` (`id`, `name`, `price`, `rating`, `discounts_id`, `image_url`) VALUES (7, 'The forest', 400, '67%', NULL, 'Forest.png');
INSERT INTO `games` (`id`, `name`, `price`, `rating`, `discounts_id`, `image_url`) VALUES (8, 'ARK', 350, '63%', NULL, 'ARK.png');
INSERT INTO `games` (`id`, `name`, `price`, `rating`, `discounts_id`, `image_url`) VALUES (9, 'Little Nightmares', 200, '63%', NULL, 'ARK.png');
INSERT INTO `games` (`id`, `name`, `price`, `rating`, `discounts_id`, `image_url`) VALUES (10, 'ARK', 89, '63%', NULL, 'ARK.png');
INSERT INTO `games` (`id`, `name`, `price`, `rating`, `discounts_id`, `image_url`) VALUES (11, 'ARK', 89, '63%', NULL, 'ARK.png');
INSERT INTO `games` (`id`, `name`, `price`, `rating`, `discounts_id`, `image_url`) VALUES (12, 'ARK', 89, '63%', NULL, 'ARK.png');

INSERT INTO `consoles` (`id`, `name`, `manufacturer`) VALUES (1, 'Nintendo Switch', 'Nintendo');
INSERT INTO `consoles` (`id`, `name`, `manufacturer`) VALUES (2, 'PS5', 'Sony');
INSERT INTO `consoles` (`id`, `name`, `manufacturer`) VALUES (3, 'Xbox Series S', 'Microsoft');
INSERT INTO `consoles` (`id`, `name`, `manufacturer`) VALUES (4, 'PC', 'PC');

INSERT INTO `categories` (`id`, `name`, `isMatureContent`) VALUES (1, 'Carreras', false);
INSERT INTO `categories` (`id`, `name`, `isMatureContent`) VALUES (2, 'shooter', true);
INSERT INTO `categories` (`id`, `name`, `isMatureContent`) VALUES (3, 'Survival', true);
INSERT INTO `categories` (`id`, `name`, `isMatureContent`) VALUES (4, 'Terror', false);

INSERT INTO `consoles_has_games` (`console_id`, `game_id`) VALUES (1, 1);
INSERT INTO `consoles_has_games` (`console_id`, `game_id`) VALUES (4, 2);
INSERT INTO `consoles_has_games` (`console_id`, `game_id`) VALUES (1, 3);
INSERT INTO `consoles_has_games` (`console_id`, `game_id`) VALUES (2, 3);
INSERT INTO `consoles_has_games` (`console_id`, `game_id`) VALUES (4, 3);

COMMIT;
