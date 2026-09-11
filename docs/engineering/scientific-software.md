# Scientific Software

Scientific algorithms become much more useful when packaged as maintainable software.

## C++ / Qt / Python

```text
             Qt GUI
                ↓
        Application layer
          ↓           ↓
      Python       C++ engine
          ↓           ↓
       Numerical / visualization libraries
```

My stack includes C++, Python, Qt, VTK, ITK, OpenCV, pybind11, Cython, CMake, OpenMP and numerical libraries.

## Deployment

Python/C++ applications can depend on Python runtimes, extension modules, native DLLs, Qt libraries/plugins, numerical libraries and application resources. A robust deployment process should identify the actual runtime dependency graph.
