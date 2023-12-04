package api

import (
	db "Tech_Website/db/sqlc"

	"github.com/gin-gonic/gin"
)

// Server serve HTTP requests for Tech-Website services
type Server struct {
	store  db.Store
	router *gin.Engine
}

func NewServer(store db.Store) *Server {
	server := &Server{store: store}
	router := gin.Default()


	server.router = router
	return server
}

// Start run the HTTP server on a specific address
func (server *Server) Start(address string) error {
	return server.router.Run(address)
}

func errorResponse(err error) gin.H {
	return gin.H{"error": err.Error()}
}