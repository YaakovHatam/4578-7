# SQL Tables

SQL Database name `northwind`

## table `pilot`
- `id`
- `name`
- `level` (int)
- `picture_src`
 
`Pilot`.`id` auto increment PK

## table `country`
- `id`
- `name`

`Country`.`id` auto increment PK

## table `airport`
- `id`
- `name`
- `contry_id`

`Airport`.`id` auto increment PK

`Airport`.`contry_id` FK to Country


## table `flight`
- `id`
- `no` (varchar, 12)
- `flight_datetime`
- `flight_from` (int)
- `flight_to` (int)
- `pilot_id`

`Flight`.`id` auto increment PK

`Flight`.`flight_from` FK to Airport

`Flight`.`flight_to` FK to Airport

`Flight`.`pilot_id` FK to Pilot


# Server side
## Pilot view
- upload picture, the picture name should get GUID as file name
