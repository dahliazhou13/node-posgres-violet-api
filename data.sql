-- insert account data
INSERT INTO account(username, latitude, longitude) VALUES
    ('zhoudoris13',43.78283060722152, -79.4143353267212);
INSERT INTO item(name) VALUES
    ('Pads'),
    ('Tampons'),
    ('Birth Control'),
    ('Antibiotic');
INSERT INTO orders(username,item,latitude,longitude,timePlaced) VALUES
    ('zhoudoris13', 'Pads', 43.78283060722152, -79.4143353267212, '2021-01-30 3:00 PM' );