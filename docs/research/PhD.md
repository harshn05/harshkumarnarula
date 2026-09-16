# Mathematical Modeling of Microstructure & Microtexture Evolution

**Author:** Dr. Harsh Kumar Narula

**Degree:** Ph.D. in Mechanical Engineering, Indian Institute of Technology Bombay (Jan 2024)

**Advisors:** Prof. Asim Tewari & Prof. Sushil Mishra

---

## Executive Summary

Polycrystalline material properties are heavily dictated by two interconnected microstructural features: **morphological texture** (grain shape/size) and **crystallographic texture** (preferred lattice orientation). Because generating all possible microstructures experimentally under controlled conditions is practically impossible, this research bridges spatial tessellation models and first-principles physics through novel mathematical formulations and open-source simulation tools.

This PhD work introduces **EVOSIM** (a unified 2D/3D microstructure evolution engine), **REVOSIM** (a 3D microstructure reconstruction framework for DCT data), and groundbreaking theoretical extensions to **Centroidal Voronoi Tessellations (CVT)** and **Generalized Balanced Power Diagrams (GBPD)**.

---

## Key Research Highlights & Contributions

### 1. The EVOSIM Simulation Engine (2D & 3D)

* **Unified Voxel Domain Growth:** Developed generic algorithms to simulate space-filling multi-phase microstructure evolution under arbitrary, user-defined spatio-temporal nucleation rates $\dot{N}(\vec{r}, t)$ and growth rate functions $G(\vec{r}, t, \Phi)$.
* **Triaxial & Superellipsoidal Geometry:** Built parametric formulations for growing triaxial nuclei shapes including spheres, cuboids, cylinders, octahedrons, hexagonal cells, and superellipsoids.
* **Software Architecture:** Engineered a high-performance cross-platform application utilizing C++, OpenMP parallel processing, Qt5 GUI, VTK visualization, ITK segmentation, PyBind11 Python wrappers, and custom `.kin` XML kinetics configuration.

### 2. Microstructure Reconstruction from Experimental Data (REVOSIM)

* **Inverse Problem Solver:** Developed the **REVOSIM** recursive algorithm to reconstruct complete 3D microstructures using limited experimental descriptors (grain centroids, volumes, and orientations) obtained from Diffraction Contrast Tomography (DCT).
* **Anisotropic Reconstruction:** Formulated a non-recursive reconstruction algorithm leveraging grain **covariance matrices** to estimate ellipsoid orientations and growth rates under site-saturated conditions.

### 3. Advances in Crystallographic Texture & Probability

* **`xyz` and $\hat{n}xyz$ Sampling Algorithms:** Proposed two intuitive, fast algorithms for sampling uniform random 3D orientations that achieve high angular uniformity comparable to Mackenzie distributions.
* **Generalized Fiber & Sheet Textures:** Extended classical sheet and fiber texture definitions by introducing disorientation angle distributions $P(\gamma)$ and fiber axis deviation bounds $\omega$, establishing complete families of constrained random textures.

### 4. Novel Tessellation Theories & Physics-Bridging Models

* **Recursive Centroid Tessellations (RCT):** Extended Lloyd's CVT algorithm to arbitrary nucleation-growth kinetics, proving that recursive centroid refinement generates regular asymptotic microstructures with controllable multimodal grain size and morphological distributions.
* **GBPD Physical Significance:** Derived a unified tessellation model proving that fitting parameters ($M_i, w_i$) in Generalized Balanced Power Diagrams directly correspond to continuous nucleation and size-dependent growth velocities of ellipsoids.
* **3D-to-2D Kinetics Stereology:** Mathematically derived the transformation of 3D nucleation and growth rates onto 2D planar sections, proving that 2D sections of 3D Voronoi structures form Laguerre tessellations and establishing the non-uniqueness of kinetics for spatial tessellations.
* **Bounded Domain Surface Effects:** Discovered and quantified through-thickness variations in grain centroid density and grain size, revealing a characteristic depth-of-peak phenomenon near free surfaces.

---

## Technical Stack & Software Assets

| Framework / Tool | Core Technologies | Primary Function |
| --- | --- | --- |
| **EVOSIM 2D** | Python, PyQt5, Cython, OpenCV | Fast 2D nucleation & morphological growth sandbox |
| **EVOSIM 3D** | C++10.3, OpenMP 4.5, Qt5, VTK 8.2, ITK 5.3 | 3D voxel space evolution & interactive visualization |
| **REVOSIM** | C++ / Python, PyBind11 | Reconstruction of 3D microstructures from DCT data |
| **Texture Library** | C++, MTEX MATLAB Toolbox | Uniform random, sheet, and fiber texture generation |

---

## Thesis Reference

> **Narula, Harsh Kumar.** *Mathematical Modeling of Microstructure and Microtexture Evolution via Nucleation-Growth Kinetics.* Ph.D. Dissertation, Department of Mechanical Engineering, Indian Institute of Technology Bombay, January 2024. Supervised by Prof. Asim Tewari and Prof. Sushil Mishra.

