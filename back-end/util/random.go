package util

import (
	"math/rand"
	"strings"
	"time"
)

const alphabet = "abcdefghijklmnopqrstuvwxyz"

func init() {
	rand.New(rand.NewSource(time.Now().UnixNano()))
}

// RandomInt generate a randon integer value between min and max
func RandomInt(min, max int64) int64 {
	return min + rand.Int63n(max-min+1)
}

// RandomInt32 generate a randon integer value between min and max
func RandomInt32(min, max int64) int32 {
	return int32(min + rand.Int63n(max-min+1))
}

// RandomFloat generate a random float value between min and max
func RandomFloat() float64 {
	return 5 * rand.Float64()
}

// RndomString generate a random string of length n
func RandomString(n int) string {
	var sb strings.Builder
	k := len(alphabet)
	for i := 0; i<n; i++ {
		c := alphabet[rand.Intn(k)]
		sb.WriteByte(c)
	}
	return sb.String()
}

// RndomBytes generate random bytes of length n
func RandomBytes(n int) []byte {
	random_bytes := make([]byte, n) 
	rand.Read(random_bytes)
	return random_bytes
}

// RandomName generate a random name
func RandomName() string {
	return RandomString(6)
}