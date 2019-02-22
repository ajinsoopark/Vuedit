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
    comment_id INT REFERENCES comments(id),
    vote_type VARCHAR NOT NULL
);

INSERT INTO users (username, email, avatar)
VALUES ('apark93', 'alexpark@pursuit.org', 'https://banner2.kisspng.com/20180526/cro/kisspng-emote-twitch-emoticon-dogecoin-5b092170c14fd7.9889892015273250407918.jpg'),
       ('Joereigns', 'joeReed@gaines.com', 'https://i.imgur.com/vK4ONBE.png'),
       ('LadCorey', 'coreylad@morty.org', 'https://vignette.wikia.nocookie.net/rickandmorty/images/1/19/Pickle_rick_transparent.png/revision/latest?cb=20171025014216'),
       ('jazzmind', 'jasmineescargot@des,com', 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Soccerball.svg'),
       ('jz', 'yaBoy@roc', 'https://cdn.blackenterprise.com/wp-content/blogs.dir/1/files/2014/08/roc-nation-boxing-promoters-black-enterprise.jpg'),
       ('goku9001', 'lastone@namek.org', 'https://i.pinimg.com/originals/64/91/3d/64913dd80f965ab83fb21cc170623ffe.png'),
       ('ironmikey', 'boxingbeast@bedstuy.io', 'https://www.sportphotogallery.com/content/images/cmsfiles/product/27360/27737-list.jpg');

INSERT INTO subvuedits (name, descriptions) 
VALUES ('/gaming', 'A subreddit for (almost) anything related to games - video games, board games, card games, etc. (but not sports).'),
       ('/programming', 'Computer Programming'),
       ('/anime', 'Vuedits premiere anime neighborhood'),
       ('/korea', 'Welcome to everyone, including native Koreans, Korean diaspora, and foreigners.'),
       ('/nba', 'All things NBA basketball'),
       ('/food', 'Cooking, restaurants, recipes, food network, foodies, talk about it here!'),
       ('/rantsandrandom', 'anything you wanna talk about, rants or random stuff is welcome'),
       ('/championsleagure', 'News, posts, opinions, and facts all about the Champions League or football');

INSERT INTO posts (user_id, title, body, sub_id)
VALUES (1, 'My first post', 'I love games', 1),
       (1, 'Thoughts on dororo?', 'its a bit simplistic but I like it a lot because its a breath of fresh air', 3),
       (3, 'clapping syndrome', 'sometimes I ask the waitress to clap once if she can hear my voice, to take my order', 7),
       (2, 'green errthang', 'I can probably drink green smoothies and juices for the rest of eternity', 6),
       (4, 'Female Messi', 'I would like to just put out there I can take any challenger cause as a youngin I was called Fessi(female messi)',8);

INSERT INTO comments(user_id, commented_on, body, post_id, comment_id)
VALUES (1, 'post', 'OMG thats amazing I never knew that!', 1, null),
       (3, 'post', 'Yeah, pass me that IGN and imma be right there!', 1, null),
       (1, 'comment', 'yeah dude lets go', 1, 1),
       (4, 'post', 'yasssss uwu', 2, null),
       (2, 'post', 'nah I dont like it its just not for me meh', 1, null),
       (7, 'post', 'I thought it was awesome but the ending was so terrible', 2, null);

INSERT INTO voting (user_id, content_type, post_id, sub_id, comment_id, vote_type)
VALUES (2, 'post', 1, null, null, 'up'),
       (1, 'post', 3, null, null, 'up'),
       (1, 'post', 4, null, null, 'up'),
       (2, 'sub', null, 2, null, 'up'),
       (4, 'sub', null, 2, null, 'down'),
       (6, 'post', 1, null, null, 'up');
