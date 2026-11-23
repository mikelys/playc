C Hello World for Windows
=========================

Portable toolchain: w64devkit 2.11.0 (GCC and GNU Make)
Official source: https://github.com/skeeto/w64devkit
The toolchain is in ..\.tools\w64devkit. No permanent PATH change is needed.

Open PowerShell and run:

cd 'C:\Users\mike.liu\OneDrive - MMC\Documents\ChatGPT\playc\hello-world'
& '..\.tools\w64devkit\bin\gcc.exe' -std=c17 -Wall -Wextra -Wpedantic -g hello.c -o hello.exe
.\hello.exe

Expected output:
Hello, World!

To use make, first add the tools to this PowerShell session's PATH:

$env:Path = "$((Resolve-Path '..\.tools\w64devkit\bin').Path);$env:Path"
make
make run

Edit hello.c with any text editor, then compile again.
