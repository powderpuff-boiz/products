DROP TABLE IF EXISTS products CASCADE;

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name varchar(255),
  slogan varchar(127),
  description text,
  category varchar(31),
  default_price varchar(7)
);
CREATE INDEX products_id_index ON products(id);

COPY products(id, name, slogan, description, category, default_price)
FROM '/Users/ryanhorowitz/hack_reactor/RPP30/senior/sdc/products/data/product.csv'
DELIMITER ','
CSV HEADER;

DROP TABLE IF EXISTS carts;

CREATE TABLE carts (
  id SERIAL PRIMARY KEY,
  user_session varchar(5),
  product_id integer REFERENCES products,
  active smallint
);
CREATE INDEX cart_product_id_index ON carts(product_id);

COPY carts(id, user_session, product_id, active)
FROM '/Users/ryanhorowitz/hack_reactor/RPP30/senior/sdc/products/data/cart.csv'
DELIMITER ','
CSV HEADER;

DROP TABLE IF EXISTS relateds;

CREATE TABLE relateds (
  id SERIAL PRIMARY KEY,
  current_product_id integer REFERENCES products,
  related_product_id integer
);
CREATE INDEX current_product_id_index ON relateds(current_product_id);

COPY relateds (id, current_product_id, related_product_id)
FROM '/Users/ryanhorowitz/hack_reactor/RPP30/senior/sdc/products/data/related.csv'
DELIMITER ','
CSV HEADER;

DROP TABLE IF EXISTS characteristics;

CREATE TABLE characteristics (
  id SERIAL PRIMARY KEY,
  product_id integer REFERENCES products,
  name varchar(31)
);

CREATE INDEX charactistiscs_product_id_index ON characteristics(product_id);

COPY characteristics(id, product_id, name)
FROM '/Users/ryanhorowitz/hack_reactor/RPP30/senior/sdc/products/data/characteristics.csv'
DELIMITER ','
CSV HEADER;

DROP TABLE IF EXISTS features;

CREATE TABLE features (
  id SERIAL PRIMARY KEY,
  product_id integer REFERENCES products,
  feature varchar(31),
  value varchar(31)
);
CREATE INDEX features_product_id_index ON features(product_id);


COPY features(id, product_id, feature, value)
FROM '/Users/ryanhorowitz/hack_reactor/RPP30/senior/sdc/products/data/features.csv'
DELIMITER ','
CSV HEADER;

DROP TABLE IF EXISTS photos CASCADE;

CREATE TABLE photos (
  id SERIAL PRIMARY KEY,
  product_id integer,
  url text,
  thumbnail_url text
);

CREATE INDEX photos_product_id_index ON photos(product_id);

COPY photos(id, product_Id, url, thumbnail_url)
FROM '/Users/ryanhorowitz/hack_reactor/RPP30/senior/sdc/products/data/photos.csv'
DELIMITER ','
CSV HEADER;

DROP TABLE IF EXISTS styles Cascade;

CREATE TABLE styles (
  id SERIAL PRIMARY KEY,
  product_id integer REFERENCES products,
  name varchar(127),
  sale_price varchar(7),
  original_price varchar(15),
  default_style varchar(31)
);
CREATE INDEX styles_product_id_index ON styles(product_id);
CREATE INDEX styles_id_index ON styles(id);

COPY styles(id, product_id, name, sale_price, original_price, default_style)
FROM '/Users/ryanhorowitz/hack_reactor/RPP30/senior/sdc/products/data/styles.csv'
DELIMITER ','
CSV HEADER;

DROP TABLE IF EXISTS skus CASCADE;

CREATE TABLE skus (
  id SERIAL PRIMARY KEY,
  style_id integer REFERENCES styles,
  size varchar(31),
  quantity varchar(3)
);
CREATE INDEX skus_style_id_index ON skus(style_id);

COPY skus(id, style_id, size, quantity)
FROM '/Users/ryanhorowitz/hack_reactor/RPP30/senior/sdc/products/data/skus.csv'
DELIMITER ','
CSV HEADER;