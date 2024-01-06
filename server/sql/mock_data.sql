INSERT INTO Company(cname)
VALUES('SAP');
INSERT INTO Company(cname)
VALUES('Clio');
INSERT INTO Company(cname)
VALUES('Amazon');
INSERT INTO Company(cname)
VALUES('Microsoft');
INSERT INTO Company(cname)
VALUES('Copperleaf');

INSERT INTO Resume_Has(email, address)
VALUES('evan.clelia@gmail.com', '1670 DeHart Rd');
INSERT INTO Resume_Has(email, address)
VALUES('maria.gavino@gmail.com', '592 8 Ave');
INSERT INTO Resume_Has(email, address)
VALUES('arnold.emidio@gmail.com', '10690 135A St');
INSERT INTO Resume_Has(email, address)
VALUES('ilya.exactly@gmail.com', '1407 Government St');
INSERT INTO Resume_Has(email, address)
VALUES('donair.dude@gmail.com', '999 Canada Pl');

INSERT INTO Skill(title)
VALUES('Java');
INSERT INTO Skill(title)
VALUES('React');
INSERT INTO Skill(title)
VALUES('Public Speaking');
INSERT INTO Skill(title)
VALUES('Cooking');
INSERT INTO Skill(title)
VALUES('Writing');

INSERT INTO Award(title)
VALUES('Best Director');
INSERT INTO Award(title)
VALUES('Hackathon Winner');
INSERT INTO Award(title)
VALUES('ICPC Winner');
INSERT INTO Award(title)
VALUES('Academic Excellence');
INSERT INTO Award(title)
VALUES('Best Dog Costume');

INSERT INTO Education(school, degree)
VALUES ('UofA', 'Business');
INSERT INTO Education(school, degree)
VALUES ('UBC', 'Arts');
INSERT INTO Education(school, degree)
VALUES ('Waterloo', 'Computer Science');
INSERT INTO Education(school, degree)
VALUES ('UofT', 'Biology');
INSERT INTO Education(school, degree)
VALUES ('UBCO', 'Engineering');

INSERT INTO Job(job_id, job_title, cname)
VALUES(0,  'Accountant', 'SAP');
INSERT INTO Job(job_id, job_title, cname)
VALUES(1, 'Dog Walker', 'Clio');
INSERT INTO Job(job_id, job_title, cname)
VALUES(2, 'Zamboni Driver', 'Amazon');
INSERT INTO Job(job_id, job_title, cname)
VALUES(3, 'Technology Lead', 'Microsoft');
INSERT INTO Job(job_id, job_title, cname)
VALUES(4, 'Teaching Assistant', 'Copperleaf');
INSERT INTO Job(job_id, job_title, cname)
VALUES(5, 'Leetcode Professional', 'SAP');
INSERT INTO Job(job_id, job_title, cname)
VALUES(6, 'Distinguished Janitor', 'Clio');
INSERT INTO Job(job_id, job_title, cname)
VALUES(7, 'Senior Dishwasher', 'Amazon');
INSERT INTO Job(job_id, job_title, cname)
VALUES(8, 'Leetcode Professional II', 'Microsoft');
INSERT INTO Job(job_id, job_title, cname)
VALUES(9, 'Principal Procrastinator', 'Copperleaf');

INSERT INTO JobPosting(job_id, post_date)
VALUES(0, '2023-01-21');
INSERT INTO JobPosting(job_id, post_date)
VALUES(1, '2023-01-25');
INSERT INTO JobPosting(job_id, post_date)
VALUES(2, '2023-02-21');
INSERT INTO JobPosting(job_id, post_date)
VALUES(3, '2023-02-11');
INSERT INTO JobPosting(job_id, post_date)
VALUES(4, '2023-02-01');
INSERT INTO JobPosting(job_id, post_date)
VALUES(5, '2023-01-21');
INSERT INTO JobPosting(job_id, post_date)
VALUES(6, '2023-01-25');
INSERT INTO JobPosting(job_id, post_date)
VALUES(7, '2023-02-21');
INSERT INTO JobPosting(job_id, post_date)
VALUES(8, '2023-02-11');
INSERT INTO JobPosting(job_id, post_date)
VALUES(9, '2023-02-01');

INSERT INTO SchoolAddress_for(school, address)
VALUES ('UofA', '116 St & 85 Ave, Edmonton');
INSERT INTO SchoolAddress_for(school, address)
VALUES ('Waterloo', '200 University Ave. West');
INSERT INTO SchoolAddress_for(school, address)
VALUES ('UBC', 'Vancouver, BC V6T 1Z4');
INSERT INTO SchoolAddress_for(school, address)
VALUES ('UBCO', '3333 University Way, Kelowna');
INSERT INTO SchoolAddress_for(school, address)
VALUES ('UofT', '27 Kings College Cir, Toronto');

INSERT INTO Displays(school, degree, grad_date, email, honours)
VALUES ('UofA', 'Business', '2022-04-01', 'evan.clelia@gmail.com', true);
INSERT INTO Displays(school, degree, grad_date, email, honours)
VALUES ('UBC', 'Arts', '2023-03-01', 'maria.gavino@gmail.com', false);
INSERT INTO Displays(school, degree, grad_date, email, honours)
VALUES ('UBC', 'Arts', '2023-04-01', 'arnold.emidio@gmail.com', true);
INSERT INTO Displays(school, degree, grad_date, email, honours)
VALUES ('Waterloo', 'Computer Science', '2024-04-01', 'arnold.emidio@gmail.com', false);
INSERT INTO Displays(school, degree, grad_date, email, honours)
VALUES ('UofT', 'Biology', '2019-04-01', 'ilya.exactly@gmail.com', true);
INSERT INTO Displays(school, degree, grad_date, email, honours)
VALUES ('UBCO', 'Engineering', '2004-04-01', 'donair.dude@gmail.com', true);
INSERT INTO Displays(school, degree, grad_date, email, honours)
VALUES ('UBCO', 'Engineering', '2006-04-01', 'evan.clelia@gmail.com', true);
INSERT INTO Displays(school, degree, grad_date, email, honours)
VALUES ('UBCO', 'Engineering', '2010-04-02', 'arnold.emidio@gmail.com', false);

INSERT INTO Applicant(name, email)
VALUES('Evan Clelia', 'evan.clelia@gmail.com');
INSERT INTO Applicant(name, email)
VALUES('Maria Gavino', 'maria.gavino@gmail.com');
INSERT INTO Applicant(name, email)
VALUES('Arnold Emidio', 'arnold.emidio@gmail.com');
INSERT INTO Applicant(name, email)
VALUES('Ilya Exactly', 'ilya.exactly@gmail.com');
INSERT INTO Applicant(name, email)
VALUES('Donair Dude', 'donair.dude@gmail.com');

INSERT INTO Experience(job_id, end_date, start_date)
VALUES(0, '2019-01-01', '2017-01-01');
INSERT INTO Experience(job_id, end_date, start_date)
VALUES(1, '2022-06-12', '2017-06-01');
INSERT INTO Experience(job_id, end_date, start_date)
VALUES(2, '2020-12-01', '2014-01-09');
INSERT INTO Experience(job_id, end_date, start_date)
VALUES(3, '2019-02-01', '2018-01-21');
INSERT INTO Experience(job_id, end_date, start_date)
VALUES(4, '2024-12-01', '2011-07-22');

INSERT INTO Shows(email, job_id, description)
VALUES('evan.clelia@gmail.com', 0, 'Worked with updating excel tables');
INSERT INTO Shows(email, job_id, description)
VALUES('maria.gavino@gmail.com', 0, 'Worked with updating excel tables');
INSERT INTO Shows(email, job_id, description)
VALUES('maria.gavino@gmail.com', 1, 'Walked doggos');
INSERT INTO Shows(email, job_id, description)
VALUES('maria.gavino@gmail.com', 2, 'Zamboni Driver');
INSERT INTO Shows(email, job_id, description)
VALUES('arnold.emidio@gmail.com', 2, 'Zamboni Driver');
INSERT INTO Shows(email, job_id, description)
VALUES('ilya.exactly@gmail.com', 3, 'Repaired computers');
INSERT INTO Shows(email, job_id, description)
VALUES('donair.dude@gmail.com', 4, 'Teaching assistan');
INSERT INTO Shows(email, job_id, description)
VALUES('ilya.exactly@gmail.com', 4, 'Teaching assistant');

INSERT INTO Applies(name, job_id)
VALUES('Evan Clelia', 5);
INSERT INTO Applies(name, job_id)
VALUES('Evan Clelia', 6);
INSERT INTO Applies(name, job_id)
VALUES('Maria Gavino', 6);
INSERT INTO Applies(name, job_id)
VALUES('Arnold Emidio', 7);
INSERT INTO Applies(name, job_id)
VALUES('Ilya Exactly', 8);
INSERT INTO Applies(name, job_id)
VALUES('Donair Dude', 9);
INSERT INTO Applies(name, job_id)
VALUES('Donair Dude', 8);
INSERT INTO Applies(name, job_id)
VALUES('Donair Dude', 7);

INSERT INTO Contains(title, job_id)
VALUES('Java', 0);
INSERT INTO Contains(title, job_id)
VALUES('React', 2);
INSERT INTO Contains(title, job_id)
VALUES('Public Speaking', 6);
INSERT INTO Contains(title, job_id)
VALUES('Cooking', 3);
INSERT INTO Contains(title, job_id)
VALUES('Writing', 8);

INSERT INTO Exhibits(email, title, description, year)
VALUES('evan.clelia@gmail.com', 'ICPC Winner', 'Award for college programming',  2020);
INSERT INTO Exhibits(email, title, description, year)
VALUES('maria.gavino@gmail.com', 'Hackathon Winner', 'Won Hackathon', 2020);
INSERT INTO Exhibits(email, title, description, year)
VALUES('arnold.emidio@gmail.com', 'Best Dog Costume', 'Made really cute corgi costume', 2023);
INSERT INTO Exhibits(email, title, description, year)
VALUES('ilya.exactly@gmail.com', 'Best Director', 'Directed student film for UBC Film Show', 2022);
INSERT INTO Exhibits(email, title, description, year)
VALUES('donair.dude@gmail.com', 'Academic Excellence', 'Won scholarship for being in top 5% of class', 2020);

INSERT INTO Demonstrates(title, email)
VALUES('React', 'evan.clelia@gmail.com');
INSERT INTO Demonstrates(title, email)
VALUES('Java', 'evan.clelia@gmail.com');
INSERT INTO Demonstrates(title, email)
VALUES('Cooking', 'evan.clelia@gmail.com');
INSERT INTO Demonstrates(title, email)
VALUES('Public Speaking', 'evan.clelia@gmail.com');
INSERT INTO Demonstrates(title, email)
VALUES('Writing', 'evan.clelia@gmail.com');
INSERT INTO Demonstrates(title, email)
VALUES('Java', 'maria.gavino@gmail.com');
INSERT INTO Demonstrates(title, email)
VALUES('Public Speaking', 'arnold.emidio@gmail.com');
INSERT INTO Demonstrates(title, email)
VALUES('Java', 'arnold.emidio@gmail.com');
INSERT INTO Demonstrates(title, email)
VALUES('Cooking', 'ilya.exactly@gmail.com');
INSERT INTO Demonstrates(title, email)
VALUES('React', 'donair.dude@gmail.com');
INSERT INTO Demonstrates(title, email)
VALUES('Java', 'donair.dude@gmail.com');
