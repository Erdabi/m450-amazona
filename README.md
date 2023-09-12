# M450 Prüfung

![amazona](/template/images/amazona.jpg)

# Amazona ECommerce Website

Dieses Projekt dient als Grundlage für die Prüfung im Modul 450 "Applikationen testen". Ihre Aufgabe wird es sein, die Applikation zu starten, danach die Funktionen der Applikation zu ermitteln und daraus ein Testkonzept mit passenden Testarten sowie Testfällen zu erstellen.

## Getting Started

### 1. Clone repo

```
$ git clone https://github.com/SwitzerChees/m450-amazona.git
$ cd amazona
```

### 2. Start MongoDB

```bash
$ docker compose up -d
```

### 3. Run Backend

```
$ npm install
$ npm start
```

### 4. Run Frontend

```
# open new terminal
$ cd frontend
$ npm install
$ npm start
```

### 5. Seed Users and Products

- Run this on chrome: http://localhost:9999/api/users/seed
- It creates 2 users
- Run this on chrome: http://localhost:9999/api/products/seed
- It creates 6 sample products

### 6. Login

- Run http://localhost:3000/signin
- Enter admin/user email and password and click signin

**Admin User**

- User: admin@example.com
- Password: 1234

**Normal User**

- User: user@example.com
- Password: 1234
