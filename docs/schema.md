# Schema Information

## Users
column name   | data type | details
--------------|-----------|----------
id            | integer   | primary key, not null
username      | string    | indexed, not null unique
email         | string    | indexed, not null unique
password      | string    | not null

*Users have posts, comments, and subscriptions to subvuedits.*

## Subvuedits
column name   | data type | details
--------------|-----------|-----------
id            | integer   | primary key, not null
name          | string    | not null, unique
descriptions  | string    | not null

*String of userIds that will be used to figure out if the current user is subbed.*

## Subscriptions
column name  | data type | details
-------------|-----------|-------------
id           | integer   | primary key, not null
sub_id       | integer   | not null, foreign key (references subvuedits), indexed
user_id      | integer   | not null, foreign key (references users), indexed

## Posts
column name   | data type | details
--------------|-----------|------------
id            | integer   | primary key, not null
user_id       | integer   | not null, foreign key (references users), indexed
title         | string    | not null
body          | string    | not null
subvudedit_id | integer   | not null, foreign key (references subvuedits), indexed

## Comments 
column name   | data type | details 
--------------|-----------|------------
id            | integer   | primary key, not null
user_id       | integer   | not null, foreign key (references users), indexed
commented_on  | string    | not null
body          | string    | not null
post_id       | integer   | not null, foreign key (references posts), indexed

## Voting
column name   | data type | details
--------------|-----------|----------
id            | integer   | primary key, no null
user_id       | integer   | not null, foreign key (references users), indexed
content_type  | string    | not null
post_id       | integer   | foreign key (references posts)
subvuedit_id  | integer   | foreign key (references subvuedits)
comment_id    | integer   | foreign key (references comments)

*Overall votes will be dealt with in frontend. Depending on the content type there will be one id out of the three different types of content.*



*Scalability issues*