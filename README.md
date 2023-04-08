# API-graphQL
Primera API utilizando nodejs + graphql + jwt

## Notas importantes de GraphQL

Graph esta fuertemente tipado, lo que significa que tenemos que especificar que es lo que enviara: si es tipo **string**, **int**, **date**, etc.

No es igual a una API REST, la grna diferencia esta en que graph solo envia peticiones **POST** Y **GET** y como estado siempre regresara un **201**

## Mutations

Son cualquier cosa que cambie los datos. Entonces toda un **POST**, **PUT**, **PATCH** Y **DELETE** -> Mutations, son las cosas que va a cambiar en los datos.

## Querys

Son las que obtienen los datos. Entonce un GET -> Query