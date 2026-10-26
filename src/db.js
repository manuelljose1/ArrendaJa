const Database = require('better-sqlite3');
const path = require('path');
const fs = require('fs');
fs.mkdirSync(path.join(__dirname, '..', 'data'), { recursive: true });
const db = new Database(path.join(__dirname, '..', 'data', 'arrendaja.sqlite'));
db.pragma('journal_mode = WAL');
db.exec(`
CREATE TABLE IF NOT EXISTS users (
 id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, email TEXT NOT NULL UNIQUE,
 password_hash TEXT NOT NULL, phone TEXT DEFAULT '', role TEXT NOT NULL CHECK(role IN ('owner','seeker','admin')),
 verified INTEGER DEFAULT 0, created_at TEXT DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE IF NOT EXISTS properties (
 id INTEGER PRIMARY KEY AUTOINCREMENT, owner_id INTEGER NOT NULL REFERENCES users(id),
 title TEXT NOT NULL, description TEXT NOT NULL, type TEXT NOT NULL,
 province TEXT NOT NULL, municipality TEXT NOT NULL, neighborhood TEXT NOT NULL,
 address TEXT DEFAULT '', price REAL NOT NULL, bedrooms INTEGER DEFAULT 0, bathrooms INTEGER DEFAULT 0,
 area REAL DEFAULT 0, images TEXT DEFAULT '', status TEXT DEFAULT 'pending',
 featured INTEGER DEFAULT 0, views INTEGER DEFAULT 0, created_at TEXT DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE IF NOT EXISTS settings(key TEXT PRIMARY KEY,value TEXT NOT NULL);
CREATE TABLE IF NOT EXISTS favorites(user_id INTEGER,property_id INTEGER,PRIMARY KEY(user_id,property_id));
CREATE TABLE IF NOT EXISTS reports(id INTEGER PRIMARY KEY AUTOINCREMENT,property_id INTEGER,reason TEXT,details TEXT,created_at TEXT DEFAULT CURRENT_TIMESTAMP);
CREATE TABLE IF NOT EXISTS inquiries(id INTEGER PRIMARY KEY AUTOINCREMENT,property_id INTEGER,name TEXT,phone TEXT,message TEXT,created_at TEXT DEFAULT CURRENT_TIMESTAMP);
CREATE TABLE IF NOT EXISTS verifications(id INTEGER PRIMARY KEY AUTOINCREMENT,property_id INTEGER,owner_id INTEGER,scope TEXT,status TEXT DEFAULT 'pending',report TEXT DEFAULT '',verified_at TEXT,valid_until TEXT,created_at TEXT DEFAULT CURRENT_TIMESTAMP);
`);
const insert = db.prepare('INSERT OR IGNORE INTO settings(key,value) VALUES(?,?)');
insert.run('featured_price','3000'); insert.run('verification_price','6500');
insert.run('featured_duration_days','30'); insert.run('max_free_active','1');
module.exports = db;
