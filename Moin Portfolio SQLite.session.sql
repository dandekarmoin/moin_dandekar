CREATE TABLE contact_messages (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    submission_date TIMESTAMP WITHOUT TIME ZONE DEFAULT NOW()
);

INSERT INTO contact_messages (name, email, message)
VALUES ($1, $2, $3)
RETURNING id, submission_date;

SELECT * FROM contact_messages;

drop TABLE contact_messages;