La base de datos es una base de  datos realacional desarrollada en postGress sql
La estructira de la tabla es la siguiente:
tablacriptomonedas.png
tabla usuarios.png
usuarioscriptos tabla.png


El código de la tabla es el siguiente:
-- Table: criptos.criptomonedas

-- DROP TABLE IF EXISTS criptos.criptomonedas;

CREATE TABLE IF NOT EXISTS criptos.criptomonedas
(
    cripto_id uuid NOT NULL,
    cripto_name character varying(50) COLLATE pg_catalog."default" NOT NULL,
    stock numeric NOT NULL,
    value numeric NOT NULL,
    CONSTRAINT criptomonedas_pkey PRIMARY KEY (cripto_id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS criptos.criptomonedas
    OWNER to postgres;

    -- Table: criptos.usuario_criptos

-- DROP TABLE IF EXISTS criptos.usuario_criptos;

CREATE TABLE IF NOT EXISTS criptos.usuario_criptos
(
    amount numeric NOT NULL,
    user_id uuid NOT NULL,
    cripto_id uuid NOT NULL,
    movement uuid NOT NULL,
    CONSTRAINT usuario_criptos_pkey PRIMARY KEY (movement)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS criptos.usuario_criptos
    OWNER to postgres;

    -- Table: criptos.usuarios

-- DROP TABLE IF EXISTS criptos.usuarios;

CREATE TABLE IF NOT EXISTS criptos.usuarios
(
    email character varying(100) COLLATE pg_catalog."default" NOT NULL,
    password character varying(100) COLLATE pg_catalog."default" NOT NULL,
    full_name character varying(100) COLLATE pg_catalog."default" NOT NULL,
    birth_date character varying(50) COLLATE pg_catalog."default" NOT NULL,
    user_id uuid NOT NULL,
    amount numeric NOT NULL,
    CONSTRAINT usuarios_pkey PRIMARY KEY (user_id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS criptos.usuarios
    OWNER to postgres;

# CriptoSeller

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

