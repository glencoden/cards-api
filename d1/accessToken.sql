DROP TABLE IF EXISTS AccessToken;

CREATE TABLE AccessToken
(
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    accessToken TEXT    NOT NULL,
    userId      INTEGER NOT NULL
);

INSERT INTO AccessToken (accessToken, userId)
VALUES ('test-token', 1);