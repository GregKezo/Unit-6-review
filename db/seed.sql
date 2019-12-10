create table users (
    user_id serial primary key
    ,user_email varchar(100)
    ,user_password varchar(255)
);

create table post (
    post_id serial primary key
    ,user_id integer REFERENCES users(user_id)
    ,image_url varchar(250)
);


