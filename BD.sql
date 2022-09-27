create database CustomPC

create table TipoProcesador 
(
TipoProcesadorID int primary key identity,
Marca nvarchar (20) not null
)

create table Procesadores 
(
ProcesadorID int primary key identity,
nombre nvarchar (20) not null,
precio int not null,
details nvarchar (60) null,
img nvarchar (60) null,
TipoProcesadorID int null
)

alter table Procesadores
add constraint fk_TP foreign key (TipoProcesadorID) references  TipoProcesador(TipoProcesadorID)

create table TarjetaMadre 
(
ID int primary key identity,
nombre nvarchar (20) not null,
precio int not null,
details nvarchar (60) null,
img nvarchar (60) null,
TipoProcesadorID int null
)

alter table TarjetaMadre
add constraint fk_TM foreign key (TipoProcesadorID) references  TipoProcesador(TipoProcesadorID)

--TipoProcesador
insert into TipoProcesador(Marca) 
     values('AMD')
insert into TipoProcesador(Marca) 
     values('INTEL')

--Procesadores
insert into Procesadores(nombre,precio,details,img,TipoProcesadorID) 
     values('Procesador Intel Core i3 10100F 4 Cores 8 Threads 6MB',329,'https://www.infotec.com.pe/procesadores/19047-procesador-intel-core-i3-10100f-bx8070110100f-3-6ghz-6-0mb-lga-1200-5032037192620.html','https://www.infotec.com.pe/56593-large_default/procesador-intel-core-i3-10100f-bx8070110100f-3-6ghz-6-0mb-lga-1200.jpg',2)