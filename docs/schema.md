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
user_id       | integer   | not null
user_subbed   | string    | 

*String of userIds taht will be used to figure out if the current user is subbed.*

## Content
column name   | data type | details
--------------|-----------|-----------
id            | integer   | primary key, not null
user_id       | integer   | not null, foreign key (references users), indexed
content_type  | string    | not null
body          | string    | not null
title         | string    | 
subvuedit_id  | integer   | not null, foreign key (references subvuedits), indexed

*Contents can either be comments, or posts.*

## Voting
column name   | data type | details
--------------|-----------|----------
content_id    | integer   | not null, foreign key (references content), indexed
downvotes     | integer   | not null
upvotes       | integer   | not null
users_voted   | string    | 

*Overall votes will be dealt with in frontend. String of userIds that will be used to figure out if the current user has voted*

