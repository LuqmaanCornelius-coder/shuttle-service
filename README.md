# Shuttle Service - Fleet & Tourism Management (Starter)

This workspace contains a starter full-stack app scaffold for a Fleet & Tourism Management platform.

Folders:
- `backend/` - Node.js + Express API and SQL schema
- `frontend/` - React + Vite + Tailwind UI

Quick start (requires Node.js, npm, and PostgreSQL):

1. Backend

```bash
cd backend
npm install
cp .env.example .env
# edit .env to point to your PostgreSQL database and JWT secret
npm run dev
```

2. Database

```bash
# from your local machine with DATABASE_URL set
psql $DATABASE_URL -f backend/sql/schema.sql
```

3. Frontend

```bash
cd frontend
npm install
npm run dev
```

What this scaffold includes:

- Role-based auth endpoints (register/login)
- Core REST endpoints for bookings
- PostgreSQL schema for users, vehicles, drivers, bookings, inspections, incidents, documents, and audit logs
- React + Tailwind starter with Admin and Driver pages
- Socket.IO integrated in the backend for real-time notifications

Next steps to complete the platform:

- Implement full CRUD APIs for vehicles, drivers, inspections, incidents
- Add file storage integration (Supabase/AWS S3) for documents and photos
- Implement calendar UI (FullCalendar) with drag-and-drop
- Add analytics widgets and reporting export
- Harden authentication and authorization (role/permission checks)
- Add tests, CI, and deployment scripts
