
create table users(
	username varchar(50),
	emailid varchar(50) primary key,
	password varchar(20)
)

insert into users values ('Sana Basharat','sana_basharat98@hotmail.com','12345678');
insert into users values ('Faiqa Basharat','whatever@hotmail.com','password');
insert into users values ('Maham Basharat','bunny@hotmail.com','abcdefg');
insert into users values ('hjg','fn@d.com','jk');

create table userfiles(
	fileid int,
	emailid varchar(50)
)

insert into userfiles values (122, 'fn@d.com');
insert into userfiles values (132, 'fn@d.com');
insert into userfiles values (142, 'fn@d.com');
insert into userfiles values (112, 'fn@d.com');

create table files(
	fileid int primary key,
	nameOfFile varchar(20),
	imagename varchar(30),
	filedata varchar(5000)
)


insert into files values (122,'MyFile','/images/doc_placeholder.png','Hello I am editing this file...');
insert into files values (132,'Another File','/images/doc_placeholder.png','nothing');
insert into files values (142,'Yoyoyo','/images/doc_placeholder.png','n the process');
insert into files values (112,'third file','/images/doc_placeholder.png','');

select * from files where fileid in (select fileid from userfiles where emailid='fn@d.com')

update files set filedata='YAAAAAAAAAAAAA!!!!' where fileid=112

select * from files

select * from userfiles