# Aplicație - Portofoliu Artist

Această aplicație web este un portofoliu de lucrări pentru un artist digital. Include funcționalități pentru a vizualiza, adăuga, edita, șterge și ascunde lucrări individuale.

## Cerințe

- Node.js (v18.x sau mai recent)
- npm (disponibil implicit cu Node.js)
- PostgreSQL (sau altă bază de date compatibilă cu TypeORM)

## Instalare

### 1. Clonează Repository-ul

Clonează repository-ul folosind Git:

```bash
git clone https://github.com/username/repository-name.git
cd repository-name
```

### 2. Configurare Backend

Navighează în directorul backend:

```bash
cd portfolio-backend
```

Instalează dependențele:

```bash
npm install
```

### 3. Configurează Variabilele de Mediu

Creează un fișier .env în directorul backend și configurează-l cu detaliile bazei de date. Exemplu pentru PostgreSQL:

```bash
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=yourusername
DB_PASSWORD=yourpassword
DB_DATABASE=portfolio
```

### 4. Migrează Baza de Date

Execută migrarea bazei de date:

```bash
npm run typeorm migration:run
```

### 5. Pornește Serverul Backend

Pornește serverul backend:

```bash
npm run start
```
Serverul back-end ar trebui să ruleze pe http://localhost:3000.


### 6. Configurare Frontend

Navighează în directorul frontend:

```bash
cd ../portfolio-frontend
```

Instalează dependențele:

```bash
npm install
```

### 7. Pornește Serverul Frontend

Pornește serverul frontend:

```bash
npm start
```

Aplicația front-end ar trebui să fie accesibilă pe http://localhost:3001.
