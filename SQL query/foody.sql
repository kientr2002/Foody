create database foody;
create table User (
	ID int not null primary key,
    Name varchar(255) not null,
    DOB datetime not null,
    Email varchar(255) not null,
    Height float not null,
	Weight float not null,
    TDEE float not null
);
