DROP TABLE IF EXISTS `migrations`;

CREATE TABLE `migrations` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) NOT NULL,
  `batch` INT NOT NULL,
  PRIMARY KEY (`id`)
);

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
  `games_id` INT UNSIGNED NOT NULL,
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
    FOREIGN KEY (`games_id`)
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
  `consoles_id` INT UNSIGNED NOT NULL,
  `games_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`consoles_id`, `games_id`),
  CONSTRAINT `fk_consoles_has_games_consoles`
    FOREIGN KEY (`consoles_id`)
    REFERENCES `consoles` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_consoles_has_games_games1`
    FOREIGN KEY (`games_id`)
    REFERENCES `games` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
);

DROP TABLE IF EXISTS `games_has_categories`;

CREATE TABLE `games_has_categories` (
  `games_id` INT UNSIGNED NOT NULL,
  `categories_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`games_id`, `categories_id`),
  CONSTRAINT `fk_games_has_categories_games1`
    FOREIGN KEY (`games_id`)
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
  `games_id` INT UNSIGNED NOT NULL,
  `purchased_at` DATETIME NOT NULL,
  `consoles_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`users_id`, `games_id`),
  CONSTRAINT `fk_users_has_games_users1`
    FOREIGN KEY (`users_id`)
    REFERENCES `users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_users_has_games_games1`
    FOREIGN KEY (`games_id`)
    REFERENCES `games` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_users_has_games_consoles1`
    FOREIGN KEY (`consoles_id`)
    REFERENCES `consoles` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
);
