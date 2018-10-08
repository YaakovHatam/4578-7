# SQL Tables

## Pilot
- `id`
- `name`
- `level`
- `picture_src`
 
`Pilot`.`id` auto increment PK

## Country
- `id`
- `name`

`Country`.`id` auto increment PK

## Airport
- `id`
- `name`
- `contry_id`

`Airport`.`id` auto increment PK

## Flight
- `id`
- `no`
- `flight_datetime`
- `from`
- `to`
- `pilot_id`

`Flight`.`id` auto increment PK
`Flight`.`from` FK to Airport
`Flight`.`to` FK to Airport
`Flight`.`pilot_id` FK to Pilot
