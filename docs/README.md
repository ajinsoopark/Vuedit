# Vuedit
[Trello Link](https://trello.com/b/8lPMYr7Z/reddit-clone)

# Minimum Viable Product

Vuedit is a minimalist-themed clone of Reddit, built using React/Redux, and Express.
The end product will have at least the following:

* **Users** - Creating/deleting/editing accounts, Logging in, Demo login
* **Posts** - Creating/deleting/editing, Comments on posts
* **Comments** - Creating/deleting/editing, Replying to comment
* **Subscriptions** - Will have a tie between users and Subvuedits
* **Voting** - Voting system on comments and posts
* **Subvuedit** - Subscriners, Posts, Rules
* Profiles to be viewed of users and their available information.
* Hosting on Heroku

# Design Docs
- [View Wireframes](/docs/wireframes)
- [React Components](component-hierarchy.md)
- [API endpoints](api-endpoints.md)
- [DB schema](schema.md)
- [Sample State](sample-state.md)

# Implementation Timeline

## Phase 1: Backend setup and Frontend User Authentication (3 days)
* **Objective:** Functioning Express project with frontend authentication

## Phase 2: User/Comment/Post Model, API, and components (3 days)
* **Objective:** Users/Comments/Posts can be created, deleted, edited, and viewed individually. Comments ability to have comments. 

## Phase 3: Subreddit components, and Subscriptions(4 days)
* **Objective:** Subreddits can be created (with requirements met), edited, and subscribed to. Subscriptions to subreddits tied to users.

## Phase 4: Voting system, Karma system (4 days)
* **Objective:** Posts/Comments will have a voting system to determine its worth. Karma system will be given to users depending on activity, and votes from the activities.

## Phase 5: Search engine for Users/Posts/Subreddits based on keywords.(4 days)
* **Objective:** Create component for search based on clients choice(user, post, subreddit). Organize search options through votes, and keywords.

## Phase 6: Design polishing (2 days)
* **Objective:** Finalize design of App.

## Bonus Features (TBD)
* Flairs for posts, and subreddits
* User roles
* Reporting 
* Saving feature for posts, and comments.
* Day Mode 
* Karma