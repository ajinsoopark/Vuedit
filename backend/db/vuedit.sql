DROP DATABASE IF EXISTS vuedit;
CREATE DATABASE vuedit;

\c vuedit;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR NOT NULL UNIQUE,
    email VARCHAR NOT NULL UNIQUE,
    avatar VARCHAR,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE subvuedits (
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL UNIQUE,
    descriptions VARCHAR NOT NULL 
);

CREATE TABLE subscriptions (
    id SERIAL PRIMARY KEY,
    sub_id INT REFERENCES subvuedits(id) ON DELETE CASCADE NOT NULL,
    user_id INT REFERENCES users(id) ON DELETE CASCADE NOT NULL
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE NOT NULL,
    title VARCHAR NOT NULL,
    body TEXT NOT NULL,
    sub_id INT REFERENCES subvuedits(id) ON DELETE CASCADE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE NOT NULL,
    commented_on VARCHAR NOT NULL,
    body TEXT NOT NULL,
    post_id INT REFERENCES posts(id),
    comment_id INT REFERENCES comments(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE voting (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE NOT NULL,
    content_type VARCHAR NOT NULL,
    post_id INT REFERENCES posts(id),
    sub_id INT REFERENCES subvuedits(id),
    comment_id INT REFERENCES comments(id)
);

INSERT INTO users (username, email, avatar)
VALUES ('apark93', 'alexpark@pursuit.org', 'https://banner2.kisspng.com/20180526/cro/kisspng-emote-twitch-emoticon-dogecoin-5b092170c14fd7.9889892015273250407918.jpg');

INSERT INTO subvuedits (name, descriptions) 
VALUES ('/gaming', 'A subreddit for (almost) anything related to games - video games, board games, card games, etc. (but not sports).'),
       ('/programming', 'Computer Programming'),
       ('/anime', 'Vuedits premiere anime neighborhood'),
       ('/korea', 'Welcome to everyone, including native Koreans, Korean diaspora, and foreigners.'),
       ('/nba', 'All things NBA basketball'),
       ('/food', 'Cooking, restaurants, recipes, food network, foodies, talk about it here!');

INSERT INTO posts (user_id, title, body, sub_id)
VALUES (1, 'My first post', 'I love games', 1)