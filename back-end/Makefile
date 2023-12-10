migratefilesup: # nc_0
	migrate create -ext sql -dir db/migration -seq init_schema

postgres: # nc_1
	docker run --name postgresTech -p 5432:5432 -e POSTGRES_USER=mosleh -e POSTGRES_PASSWORD=1234 -d postgres:latest

postgresstop:
	docker stop postgresTech

postgresstart:
	docker start postgresTech

postgresdown:
	docker rm postgresTech

createdb: # nc_2
	docker exec -it postgresTech createdb --username=mosleh --owner mosleh tech_heim

dropdb:
	docker exec -it postgresTech dropdb --username=mosleh tech_heim

execdb: # access to database psql command line
	docker exec -it postgresTech psql -U mosleh -n tech_heim

migrateup: # nc_3
	migrate -path db/migration -database "postgres://mosleh:1234@localhost:5432/tech_heim?sslmode=disable" -verbose up

migratedown:
	migrate -path db/migration -database "postgres://mosleh:1234@localhost:5432/tech_heim?sslmode=disable" -verbose down

sqlc: # nc_4
	sqlc generate

.PHONY: migratefilesup postgres postgresstop postgresstart postgresdown createdb dropdb execdb migrateup migratedown sqlc