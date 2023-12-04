package db

import (
	"Tech_Website/util"
	"database/sql"

	"log"
	"os"
	"testing"

	_ "github.com/lib/pq"
)

var testQueries *Queries

func TestMain(m *testing.M) {
	config, err := util.LoadConfig("../..")
	if err != nil {
		log.Fatal("connot load config:", err)
	}

	conn, err := sql.Open(config.DBDriver, config.DBSource)
	if err != nil {
		log.Fatal("Connot connect to the database:", err)
	}
	testQueries = New(conn)

	os.Exit(m.Run())
}