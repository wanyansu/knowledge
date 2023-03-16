## SQL

*RDBMS* and *Non-relational*

`show databases;`

`create database roy;`

`use roy;`

`show tables;`

`create table coffee_table (id int not null auto_increment, name varchar(255), region varchar(255), roast varchar(255) primary key (id));`

`describe coffee_table;`

`insert into table coffee_table values (1, "default route", "ethiopia", "light");` add multiple values in a row.

`insert into bands (name) values ('Westlife');` add single entry.

`insert into bands (name) values ('Bsb'), ('Ankor');` add multiple values in a column

`select * from avengers where origin = "earth";`

`select * from avengers where origin = "earth" or origin = "asgard";`

`select * from avengers where not origin = "earth";`

`select * from avengers limit 2;`

`delete from avengers where first_name = "jeff";`

`update avengers set last_name = NULL where first_name = "groot";`

`select * from avengers order by age asc;`

`select * from avengers order by age desc;` in descending order.

`alter table avengers add beard boolean;`

`select distinct name from albums;`

`select * from albums where name like '%er%';` Any amount of charaters before and after string 'er'.

`select * from albums where release_year between 2000 and 2019;`

`select * from albums where release_year is null;`

`update avengers set beard = True where first_name = "thor";`

`select * from bands join albums on bands.id = albums.band_id;` Based on a one to many relationship. (same as inner join)

LEFT JOIN will ensure the table on the left is always shown even if they do not meet the condition. Those that are not meeting conditions will appear at the bottom. *Right join is lesser used*.

`drop database roy;`

`create table albums (id int not null auto_increment, band_id, int not null, primary key (id), foreign key(band_id) references bands(id));`

#### Aggregate functions

`select avg(release_year) from albums;` only one row.

e.g.

```SQL
sum
count
```

examples:

`select band_id, count(band_id) from albums group by band_id;`

`SELECT b.name AS band_name, COUNT(a.id) AS num_albums FROM bands as b LEFT JOIN albums AS a ON b.id = a.band_id GROUP BY b.id HAVING num_albums = 1;` 'Having' is exactly the same as 'WHERE', except that aggregate function 'COUNT' happens after the 'WHERE' command, while 'HAVING' happens after counting.
