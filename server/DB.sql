CREATE TABLE courses
(
    classroom_id    INT NOT NULL,
    title           VARCHAR(30),
    lecture         VARCHAR(10),
    enroll_total    SMALLINT,
    enroll_capacity SMALLINT,
    meet_bdg        VARCHAR(20),
    meet_rm         VARCHAR(10),
    subj_area       VARCHAR(10),
    days_in_week    VARCHAR(6),
    strt_time       TIME,
    stop_time       TIME,
    fac_capacity    SMALLINT
    -- primary key (classroom_id, strt_time, ) ?? there are duplicates in csv
);

DROP TABLE courses;

COPY courses FROM '/Users/emmettcocke/hackSpace/BEmpty/db_formatted_courses.csv' WITH (FORMAT csv);


CREATE TABLE classrooms
(
    id    INT NOT NULL,
    name  VARCHAR(30),
    value VARCHAR(30),
    PRIMARY KEY (id)
);

COPY classrooms FROM '/Users/emmettcocke/hackSpace/BEmpty/data_formatted_classrooms.csv' WITH (FORMAT csv);

CREATE TABLE reviews (
    id SERIAL, --max 2 bil.
    txt CHAR(300),
    classroom_id INT,
    rating SMALLINT,
    primary key (id)
);

DROP TABLE reviews;
