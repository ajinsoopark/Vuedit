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

## Subvuedits

* `GET /api/subvuedits`
    * Subvuedits index/search
* `GET /api/subvuedits/:id`
    * Fetches information about subvuedit(description)
* `POST /api/subvuedits`
    * Creates a new subvuedit

## Subscriptions

* `GET /api/subscriptions/:subvueditId`
    * Fetch subscriptions for specific Subvuedit
* `GET /api/subscriptions/:userId`
    * Fetch subscriptions for specific user

## Posts 

* `GET /api/posts`
    * Posts index/search
* `GET /api/posts/subvuedit/:id`
    * Posts from certain subvuedit
* `GET /api/posts/users/:id`
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
* `GET /api/comments/users/:id`
    * Comments from certain user
* `GET /api/comments/posts/:id`
    * Comments from certain post
* `GET /api/comments/comments/:id`
    * Comments from a certain comment
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
* `GET /api/votes/subvuedit/:subvueditId`
    * Votes for certain subvuedit
* `POST /api/votes/`
    * Creates upvote/downvote for comment/post/subvuedit
* `PATCH /api/votes/subvuedit/:subvueditId`
    * Adds or Subtracts vote count for a subvuedit
* `PATCH /api/votes/comment/:commentId`
    * Adds or Subtracts vote count for a comment
* `PATCH /api/votes/post/:postId`
    * Adds or Subtracts vote count for a post
