---
title: Mathematical & Physical Models
description: Formulation of governing equations, phase-field dynamics, and kinetic models.
---

# Mathematical & Physical Models

Predictive materials simulations rely on mathematically rigorous, thermodynamically consistent governing equations. This section outlines the analytical formulations driving our simulation codes.

## Phase-Field Formulations

Diffuse-interface (phase-field) models eliminate the need to explicitly track moving interfaces by using continuous order parameters $\eta_i(\mathbf{r}, t)$ to denote phase identity or grain orientation.

### Allen-Cahn Dynamics (Non-Conserved Order Parameters)

For structural transformations, grain growth, and antiphase boundaries where order parameters are not conserved:

$$\frac{\partial \eta_i}{\partial t} = -L_i \frac{\delta \mathcal{F}}{\delta \eta_i} = -L_i \left( \frac{\partial f_0}{\partial \eta_i} - \kappa_i \nabla^2 \eta_i \right)$$

Where:
* $L_i$ represents the interface kinetic mobility.
* $\mathcal{F}$ is the total free energy functional: $\mathcal{F} = \int_V \left( f_0(\{\eta_i\}) + \sum_i \frac{\kappa_i}{2} \vert{}\nabla \eta_i\vert{}^2 \right) dV$.
* $\kappa_i$ controls interface gradient energy and interfacial thickness.

### Cahn-Hilliard Dynamics (Conserved Fields)

For compositional segregation and spinodal decomposition:

$$\frac{\partial c}{\partial t} = \nabla \cdot \left[ M(c) \nabla \left( \frac{\delta \mathcal{F}}{\delta c} \right) \right]$$

## Grain Boundary Energy & Misorientation

Anisotropic grain boundary properties are incorporated via parameterizations of misorientation angle $\theta$ and inclination. For low-angle boundaries, energy transitions follow the Read-Shockley relation:

$$\gamma(\theta) = \gamma_0 \frac{\theta}{\theta_m} \left( 1 - \ln\left(\frac{\theta}{\theta_m}\right) \right) \quad \text{for } \theta \le \theta_m$$

## Multi-Physics Coupling

* **Elastic Strain Energy:** Incorporating coherency strains via Khachaturyan-Shtrakhman microelasticity theory solved in Fourier space.
* **Thermal Gradients:** Coupling interface mobility with local thermal diffusion fields during rapid solidification and additive manufacturing processes.