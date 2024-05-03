create database ticket;
use ticket;
create table tickets (
    user_name   char(32),
    today_child_permit  int(3),
    today_adult_permit  int(3),
    BIG3_child_permit   int(3),
    BIG3_adult_permit   int(3),
    free_child_permit   int(3),
    free_adult_permit   int(3),
    year_child_permit   int(3),
    year_adult_permit   int(3),
    total   int(3)
);

describe tickets;