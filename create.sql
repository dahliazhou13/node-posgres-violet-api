
CREATE TABLE account(
    username VARCHAR(30) PRIMARY KEY,
    latitude NUMERIC,
    longitude NUMERIC
);
CREATE TABLE item(
    name VARCHAR(20) PRIMARY KEY
);
CREATE TABLE orders(
    username VARCHAR(30),
    item VARCHAR(20),
    latitude NUMERIC,
    longitude NUMERIC,
    timePlaced TIMESTAMP NOT NULL,
    timeFinished TIMESTAMP,
    PRIMARY kEY(username, item, timePlaced),
    Foreign Key(username) REFERENCES Account(username),
    
    Foreign Key(item) REFERENCES Item(name)
    
);
