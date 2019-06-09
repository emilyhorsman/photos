create schema app_public;

create table app_public.photo (
  id serial primary key,
  created_at timestamp default current_timestamp,
  filepath text
);

create table app_public.collection (
  id serial primary key,
  created_at timestamp default current_timestamp,
  name text not null
);

create table app_public.photo_collection (
  id serial primary key,
  created_at timestamp default current_timestamp,
  photo_id int not null references app_public.photo(id),
  collection_id int not null references app_public.collection(id)
);
