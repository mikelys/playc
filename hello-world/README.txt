playc - C Hello World
====================

A small C playground, starting with a console program that prints "Hello, Mike!".
See ../README.md for the repository overview and Markdown instructions.

Project structure (paths relative to the repository root)
-------------------------------------------------------

- hello-world/hello.c: the program source.
- hello-world/Makefile: build, run, and clean targets.
- hello-world/README.txt: these Windows setup and usage instructions.

Build and run
-------------

You need GCC with C17 support. GNU Make is optional. On Windows, you can use
w64devkit, which includes both tools: https://github.com/skeeto/w64devkit

In PowerShell, clone the repository and enter its root directory:

git clone https://github.com/mikelys/playc.git
cd playc

With gcc available on your PATH:

cd hello-world
gcc -std=c17 -Wall -Wextra -Wpedantic -g hello.c -o hello.exe
.\hello.exe

Expected output:

Hello, Mike!

Portable Windows toolchain
--------------------------

If you extract w64devkit into .tools/w64devkit at the repository root, you can
build without changing PATH. From the repository root:

cd hello-world
& '..\.tools\w64devkit\bin\gcc.exe' -std=c17 -Wall -Wextra -Wpedantic -g hello.c -o hello.exe
.\hello.exe

Using Make
----------

With GCC and GNU Make on PATH, run these commands inside hello-world:

make
make run
make clean

make clean also requires rm, included with w64devkit. To add the portable tools
to the current PowerShell session from hello-world:

$env:Path = "$((Resolve-Path '..\.tools\w64devkit\bin').Path);$env:Path"

The .tools/ directory, compiled hello.exe, and object files are excluded from
Git. Install the toolchain locally after cloning.
