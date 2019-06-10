alter table app_public.photo
  add column identify_command text not null,
  add column identify_verbose text not null;
