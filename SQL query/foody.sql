create database foody;
create table User (
	ID int primary key auto_increment,
    Name varchar(255) not null,
    DOB datetime not null,
    Email varchar(255) not null,
    Height float not null,
	Weight float not null,
    TDEE float not null,
	acin float, # 1.2 1.375 1.55 1.725 1.9
    obeject int # -1 0 1
);

create table Account (
	ID int primary key auto_increment,
    Username varchar(255) not null unique,
    Pass varchar(255) not null,
    Ques varchar(255) not null,
    Ans varchar(255) not null, 
    Role bool not null default 1, #0 is admin and 1 is clinet
    UserID int not null references User(ID),
    AdminID int not null references Admin(ID)
);

create table Admin (
	ID int primary key auto_increment,
    Name varchar(255) not null,
    DOB datetime,
    Email varchar(255)
);

create table Food (
	ID int primary key auto_increment,
    Name varchar(255) not null,
    Calo int,
    Protein int,
    Fat int,
    Carb int,
    Des varchar(500)
);

create table Review (
	FoodID int references Food(ID),
    UserID int references User(ID),
    Comment varchar (255),
    Star int check (star >= 1 and star <= 5), #range in 1-5
    constraint Review_PK primary key (FoodID, UserID)
);

create table Ingredient (
	ID int primary key auto_increment,
    Name varchar (255),
    Type varchar (50)
);

create table Contain (
	IngredientID int references Ingredient(ID),
    FoodID int references Food(ID),
    constraint Contain_PK primary key (IngredientID, FoodID)
);

create table Manage (
	AccountID int references Account(ID),
    AdminID int references Admin(ID),
    Type varchar (100),
    constraint manage_PK primary key (AccountID, AdminID)
);

create table Edit (
	FoodID int references Food(ID),
    AdminID int references Admin(ID), 
    type varchar(100),
    constraint edit_PK primary key (FoodID, AdminID)
);

create table List (
	ID int primary key auto_increment,
    type varchar(255)
);

create function insertacc (email varchar(255), pass varchar(255), name varchar(255), dob datetime, ques varchar(255), ans varchar(255), role bool)
returns bool
DETERMINISTIC
begin
	if year(current_date()) - year(dob) < 8 then
		return false;
    insert into User(Name,DOB,email)
    values (name, dob, email);
    
    declare id = select Last_insert_ID();
    
    insert into account(username, Pass, Ques, Ans, Role, UserID)
    values (email, pass, ques, ans, role, id);
    return true
end;

