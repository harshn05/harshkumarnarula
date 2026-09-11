---
title: Numerical Algorithms & Methods
description: High-performance discrete solvers, finite difference/element schemes, and parallel execution.
---

# Numerical Algorithms & Methods

Translating continuum mathematical models into robust computational solvers requires stable temporal integration and efficient spatial discretization techniques.

## Spatial Discretization

* **Finite Difference Schemes:** Standard 5-point and 9-point central difference stencils on regular Cartesian grids for Laplacian and biharmonic operators.
* **Spectral & Pseudo-Spectral Methods:** Utilizing Fast Fourier Transforms (FFT) to convert spatial derivatives into algebraic operations:
  $$\mathcal{F}\{\nabla^2 \psi\} = -\vert{}\mathbf{k}\vert{}^2 \hat{\psi}(\mathbf{k})$$
  This formulation drastically speeds up the calculation of long-range elastic interactions and diffuse interfaces with periodic boundary conditions.

## Temporal Integration

| Method | Stability Regime | Computational Cost per Step | Typical Use Case |
| :--- | :--- | :--- | :--- |
| **Explicit Euler** | Conditionally stable ($\Delta t \le \frac{\Delta x^2}{2D}$) | Minimal (local stencils) | Highly parallel localized updates |
| **Semi-Implicit Spectral** | Unconditionally stable for linear terms | Moderate (forward/inverse FFTs) | Cahn-Hilliard & conserved equations |
| **Runge-Kutta 4th (RK4)** | Stable, high temporal precision | $4\times$ evaluation cost | Multi-variable non-linear systems |

## Parallel Architecture & HPC

To handle simulations with $10^8+$ grid nodes, our implementations leverage modern heterogeneous compute:

* **OpenMP:** Shared-memory loop-level threading with cache-line-aware domain tiling.
* **MPI:** Distributed-memory domain decomposition using non-blocking halo exchange (`MPI_Isend` / `MPI_Irecv`).
* **SIMD Vectorization:** Structure-of-Arrays (SoA) memory layouts enabling AVX-512 vectorization instructions across multi-core processors.