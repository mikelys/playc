# playc

[![CI status](https://github.com/mikelys/playc/actions/workflows/ci-cd.yml/badge.svg?branch=main)](https://github.com/mikelys/playc/actions/workflows/ci-cd.yml?query=branch%3Amain)
[Latest release](https://github.com/mikelys/playc/releases/latest)

A small C playground, starting with a console program that prints `Hello, Mike!`.

## Project structure

- `hello-world/hello.c` — the program source.
- `hello-world/Makefile` — build, run, and clean targets.
- `hello-world/README.txt` — the plain-text setup guide.

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

## CI/CD

The [GitHub Actions pipeline](https://github.com/mikelys/playc/actions/workflows/ci-cd.yml) runs on branch pushes, pull requests, version tags (`v*`), and manual runs from the Actions tab.

Each run builds the program with GCC on Windows and Linux, treats compiler warnings as errors, and checks that the program exits successfully and prints `Hello, Mike!`. Successful builds provide `playc-windows-x64.zip` and `playc-linux-x64.tar.gz` as workflow artifacts, retained for 14 days. Each package contains the executable and the plain-text setup guide.

To publish a GitHub Release, tag the commit you want to release and push the tag. For example, from an up-to-date `main` branch:

```powershell
git tag v0.1.0
git push origin v0.1.0
```

After both platform checks pass, the pipeline publishes the packages on the [Releases page](https://github.com/mikelys/playc/releases) with generated release notes. Choose a new version tag for each release. Re-running a tag workflow replaces that release's package files.

The pipeline uses GitHub-hosted runners and the built-in `GITHUB_TOKEN`; no custom secrets are required. Only the release job has permission to write repository contents.
