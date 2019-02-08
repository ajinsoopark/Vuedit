## Sample State

```js
{
    session: {
        id: 1,
        username: 'Alex',
        recentPosts:['url1','url2','url3','max 4 urls'],
        userInfo: {
            avatar: null,
            joinDate: 'February 5, 2018'
            email: 'woo@hoo.com'
        }
    },
    forms: {
        signUp: {errors: ['username already taken']},
        logIn: {errors: ["username can't be blank"]},
        comment: {
            id: null,
            body: ''
            errors: ['body cannot be empty'],
            commentType: null,
            voteSum: 0
        },
        subVueddit: {
            id: null,
            name: '',
            errors: ['must have name'],
            voteSum: 0
        },
        post: {
            subVuedditId: null
            id: null,
            name: '',
            body: '',
            voteSum: 0
        },
        search: {
        searched: '',
        sectionSearchedIn:['posts', 'users', 'subVueddits']
        errors: ['Cannot be empty']
    }},
    subvueddits: {
        games: {
            id: 1,
            posts: [{
                id: 1,
                subvueddit: 'v/games'
                title: 'This is difficult',
                body: 'But I love it',
                voteSum: 1,
                comments: [{
                    id: 1,
                    user: 'jinsoo',
                    body: 'wtf bro'
                    voteSum: 10
                }]
            },
            {
                id: 2,
                subvueddit: 'v/games'
                title: 'game mode impossible',
                body: 'new challenger',
                voteSum: 300,
                comments: [{
                    id:1,
                    user: 'Alex',
                    body: 'You got this bro',
                    voteSum: 3
                }]
            }]
        }
    },
    modal: {
    content: <SignUpForm />,
    active: false
  }
}