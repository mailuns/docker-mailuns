# Mailuns Docker Simple App

Simple App Docker menggunakan postgresql, apache, dan expressjs


## Getting Started
Pastikan Docker Engine sudah terinstall di environment Anda.

## Docker Compose

Untuk memulai build service docker

```php
docker-compose up --build
```

Web app akan running pada `http://localhost:8080`

API akan jalan running `http://localhost:3333`

## Database Setup

Jalankan endpoint API `GET` `http://localhost:3333/setup` pada browser untuk membuat table `employee`

## Endpoint API
- `GET` `http://localhost:3333` index api
- `GET` `http://localhost:3333/all` untuk melihat data
- `POST` `http://localhost:3333/create` create new data

body request 
```json
{
  "name": "ismail",
  "address": "bogor"
}

```


## Web app

Buka alamat `http://localhost:8080` untuk menjalankan web app. Simple app CRUD yang sudah terhubung dengan API expressjs

## Pages
![App Screenshot](https://github.com/mailuns/docker-mailuns/blob/main/docker-node.png)

