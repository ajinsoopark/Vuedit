# API Endpoints

# HTML API

### Root

* `GET /` - loads React web app

## JSON API

### Users

* `GET /api/users`
    * Users index/search
* `POST /api/users`
    * Creates new user
* `GET /api/users/:userId`
    * Fetches single existing user profile
* `PATCH /api/users/:userId`
    * Allows user to update their profile
* `DELETE /api/users/:userId`
    * Deletes user profile

### Session

* `POST /api/session` 
    * logs in user / creates session
* `DELETE /api/session` 
    * logs out user

## Posts 

* `GET /api/posts`
    * Posts index/search
* `GET /api/posts/:subvueditId`
    * Posts from certain subreddit
* `GET /api/posts/:userId`
    * Posts from certain user
* `POST /api/posts`
    * Creates new post
* `PATCH /api/posts/:postId`
    * Allows user to update their post
* `DELETE /api/posts/:postId`
    * Deletes post

## Comments

* `GET /api/comments`
    * Comments index/search
* `GET /api/comments/:userId`
    * Comments from certain user
* `GET /api/comments/:postId`
    * Comments from certain post
* `POST /api/comments`
    * Creates new comment
* `PATCH /api/comments/:commentId`
    * Allows user to update their comment
* `DELETE /api/comments/:commentId`
    * Deletes comment

## Voting

* `GET /api/votes/comments/:commentId`
    * Votes for certain comment
* `GET /api/votes/posts/:postId`
    * Votes for certain post
* `POST /api/votes/comment`
    * Creates upvote/downvote for comment
* `PATCH /api/votes/comment/:commentId`
    * Adds or Subtracts vote count for a comment
* `Patch /api/votes/post/:postId`
    * Adds or Subtracts vote count for a post

## Subvuedits

* `GET /api/subvuedits`
    * Subvuedits index/search
* `GET /api/subvuedits/:userId`
    * Subvuedits from specific user
* `GET /api/subvuedits/:id/posts`
    * Posts from specific subvuedit
* `POST /api/subvuedits`
    * Creates a new subvuedit

## Avatars 

* `GET /api/avatars/:userId`
    * Get avatar for specific user