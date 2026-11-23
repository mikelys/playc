# playc

A small C playground, starting with a console program that prints `Hello, Mike!`.

## Project structure

- `hello-world/hello.c` — the program source.
- `hello-world/Makefile` — build, run, and clean targets.
- `hello-world/README.txt` — notes for the original Windows setup.

## Build and run

You need GCC with C17 support. GNU Make is optional. On Windows, you can use [w64devkit](https://github.com/skeeto/w64devkit), which includes both tools.

In PowerShell, clone the repository and enter its root directory:

```powershell
git clone https://github.com/mikelys/playc.git
cd playc
```

With `gcc` available on your PATH:

```powershell
cd hello-world
gcc -std=c17 -Wall -Wextra -Wpedantic -g hello.c -o hello.exe
.\hello.exe
```

Expected output:

```text
Hello, Mike!
```

### Portable Windows toolchain

If you extract w64devkit into `.tools/w64devkit` at the repository root, you can build without changing PATH. From the repository root:

```powershell
cd hello-world
& '..\.tools\w64devkit\bin\gcc.exe' -std=c17 -Wall -Wextra -Wpedantic -g hello.c -o hello.exe
.\hello.exe
```

### Using Make

With GCC and GNU Make on PATH, run these commands inside `hello-world`:

```text
make
make run
make clean
```

`make clean` also requires `rm`, included with w64devkit. To add the portable tools to the current PowerShell session from `hello-world`:

```powershell
$env:Path = "$((Resolve-Path '..\.tools\w64devkit\bin').Path);$env:Path"
```

The `.tools/` directory, compiled `hello.exe`, and object files are excluded from Git. Install the toolchain locally after cloning.
