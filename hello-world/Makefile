CC = gcc
CFLAGS = -std=c17 -Wall -Wextra -Wpedantic -g

.PHONY: all run clean

all: hello.exe

hello.exe: hello.c
	$(CC) $(CFLAGS) hello.c -o hello.exe

run: hello.exe
	./hello.exe

clean:
	rm -f hello.exe
