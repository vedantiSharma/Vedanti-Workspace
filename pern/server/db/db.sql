       
    --    creating table
        CREATE TABLE restaurants (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  location VARCHAR(255) NOT NULL,
  price_range INTEGER
);

        SELECT * FROM restaurants;

        INSERT INTO restaurants(name , location , price_range) values (  'muffins', 'san francis'  , 4);


 


--  insert values in table
INSERT INTO restaurants (id, name, location, price_range)
VALUES (1, 'mcDonalds', 'dubai', 4),
      
       (2, 'pizzaHut', 'new york', 4);


-- DELETE data from the data
    DELETE FROM restaurants WHERE location = 'london';


-- insert and show data at the same time
    INSERT INTO restaurants (id, name, location, price_range)
VALUES (4, 'cheescake', 'hawai', 5) returning * ;



update restaurants set name = 'red losbter' , location = 'miami' , price_range = 2 where id = 'null'