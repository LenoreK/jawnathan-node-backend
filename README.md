#Project Jawnathan-Backend#

Jawnathan-Backend is a website where you can view Jawnathan's latest performances / music.

User Story:
As an Admin I need a protected page to create, read, update, and delete the following:
* Music (might be brought in and out through spotfiy)
* Videos (might be brought in and out through youtube)
* Performances (this is the most important aspect to complete)

Conditional that checks if user is an admin
edit button would only show up if user is an admin

Wireframe:
Method  | Path  | Purpose
------------- | -------------  | -------------
GET  | /   | Home Page
GET  | /performances   | Performances index 
POST  | /performances   | Create new Performance
GET  | /performances/new   | Form page for creating a new performance
GET  | /performances/:id   | Details about a particular performance
PUT  | /performances/:id   | Update a particular performance
GET  | /performances/:id/edit  | Form page for editing an existing performance
DELETE  | /performances/:id   | Delete a particular performance
GET  | *   | 404 Page

Database:

Gigs:
Name  | Data-type  |   Properties
------------- | ------------- | -------------
Gigs_id  |  INT  |  primary key
start_time  |  TIME  |  NOT NULL
end_time  |  TIME  |  //
date  |  DATE  |  NOT NULL
place  |  VARCHAR(50)  |  NOT NULL
city  |  VARCHAR(50)  |  NOT NULL
state  |  VARCHAR(50)  |  NOT NULL

User:
Name  | Data-type  |   Properties
------------- | ------------- | -------------
user_id  |  INT  |  primary key
username  |  STRING  |  NOT NULL
password  |  STRING  |  NOT NULL
is_admin  |  Boolean  |  NOT NULL
e-mail   |   String   |  NOT NULL

Video:
Name  | Data-type  |   Properties
------------- | ------------- | -------------
video_id  |  INT  |  primary key
path  |  STRING  |  NOT NULL
name  |  STRING  |  NOT Null

Music:
This will be connected to spotify. His music is not up there yet so I can not test it.

Reflection:
This was an accomplishment for me. The front-end comes easily to me, but the backend does not. Through this project I solidified my understanding of the backend. I discovered that the backend is actually simple. There are more things that can go wrong in the backend, but the steps are generally the same every time. This has made me more comfortable with tackling more complicated projects in the future. In the future, I hope to make something like a restaurant management system with a complicated database.

I have found that the more projects I do, the more confident I feel in my skills.