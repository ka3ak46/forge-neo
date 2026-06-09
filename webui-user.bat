@echo off

 set PYTHON=C:\Python\Python314\python.exe
 set GIT=
 set VENV_DIR=

set COMMANDLINE_ARGS= --uv --cuda-malloc --skip-version-check

 --xformers --sage --uv
 --pin-shared-memory --cuda-malloc --cuda-stream
 --skip-python-version-check --skip-torch-cuda-test --skip-version-check --skip-prepare-environment --skip-install

call webui.bat
