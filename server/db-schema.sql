CREATE DATABASE tododb;

CREATE TABLE todos (
    todo_id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    status VARCHAR(10) CHECK (status IN ('active', 'completed'))
);