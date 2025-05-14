@echo off
FOR /F "tokens=*" %%i IN ('where python') DO SET PYTHON_PATH=%%i
FOR %%i IN ("%PYTHON_PATH%") DO SET PYTHON_DIR=%%~dpi
SET PY_SCRIPT="Run_Localhost.py"
"%PYTHON_PATH%" %PY_SCRIPT%
pause
