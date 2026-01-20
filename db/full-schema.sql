CREATE TABLE IF NOT EXISTS movies(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    genres TEXT NOT NULL,
    created_at DATATIME DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO movies (title, genres)
VALUES
("test", "test"),
("The matrix", "SciFi, Action"),
("Toy Story", "Adventure"),
("Shrek", "Adventure, Action")
;

UPDATE movies
SET title = "peliculas", genres = "generos"
WHERE id=1
; 

DELETE FROM movies
WHERE id=1
;