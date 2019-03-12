const { db } = require('./index');
const faker = require('faker');

let users = [];

for (let i = 0; i < 20; i++) {
    let username = faker.internet.userName();
    let email = faker.internet.email();
    let avatar = faker.image.avatar();
    let userStr = `('${username}','${email}','${avatar}')`

    users.push(userStr)
}

let posts = [];

for (let i = 0; i < 40; i++) {
    let title = faker.lorem.sentence();
    let body = faker.lorem.paragraph();
    let userId = Math.floor(Math.random() * 20) + 1;
    let subId = Math.floor(Math.random() * 6) + 1;
    let postStr = `(${userId},'${title}','${body}',${subId})`

    posts.push(postStr)
}

users = users.join(', ');
posts = posts.join(', ');

db.none(`INSERT INTO users(username, email, avatar) VALUES ${users};`)
    .then(() => {
        db.none(`INSERT INTO posts(user_id, title, body, sub_id) VALUES ${posts}`)
    })
    .catch(err => {
        console.log(err);
    })