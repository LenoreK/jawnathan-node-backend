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
GET  | /performances   | Places index 
POST  | /performances   | Create new Performance
GET  | /performances/new   | Form page for creating a new performance
GET  | /performances/:id   | Details about a particular performance
PUT  | /performances/:id   | Update a particular performance
GET  | /performances/:id/edit  | Form page for editing an existing performance
DELETE  | /performances/:id   | Delete a particular performance
GET  | *   | 404 Page

Database:

Performances:
Name  | Data-type  |   Properties
------------- | ------------- | -------------
performances_id  |  INT  |  primary key
start_time  |  TIME  |  NOT NULL
end_time  |  TIME  |  //
date  |  DATE  |  NOT NULL
place  |  VARCHAR(50)  |  NOT NULL
city  |  VARCHAR(50)  |  NOT NULL
state  |  VARCHAR(50)  |  NOT NULL