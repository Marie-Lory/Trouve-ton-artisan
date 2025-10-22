CREATE DATABASE `trouve-ton-artisan`
CHARACTER SET utf8mb4
COLLATE utf8mb4_general_ci;

CREATE TABLE artisanentreprise (
  id_artisan INT(17) NOT NULL AUTO_INCREMENT COMMENT 'id de chaque artisant/entreprise',
  nom VARCHAR(100) NOT NULL COMMENT 'Nom unique de chaque artisant/entreprise',
  specialite VARCHAR(100) NOT NULL COMMENT 'Spécialité de chaque artisant/entreprise',
  note DECIMAL(3,1) NOT NULL COMMENT 'Note de chaque artisant/entreprise',
  ville VARCHAR(100) NOT NULL COMMENT 'La localisation de chaque artisant/entreprise',
  a_propos VARCHAR(500) NOT NULL COMMENT 'Information supplémentaires de chaque artisant/entreprise',
  email VARCHAR(100) NOT NULL COMMENT 'Email unique de chaque artisant/entreprise',
  site_web VARCHAR(100) NULL COMMENT 'Le site web de chaque artisant/entreprise',
  categorie VARCHAR(100) NOT NULL COMMENT 'La catégorie de chaque artisant/entreprise',
  top BOOLEAN NOT NULL COMMENT 'Le top de chaque artisant/entreprise',
  PRIMARY KEY (id_artisan),
  UNIQUE (email)
)
ENGINE = InnoDB COMMENT = 'Table des différents artisans ou entreprises';