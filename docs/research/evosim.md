# EVOSIM: Spatio-Temporal Microstructure Evolution Simulator

**EVOSIM** (Evolution Simulator) is a cross-platform simulation engine and software suite designed to simulate multi-phase space-filling microstructure evolution under arbitrary, user-defined spatio-temporal nucleation rates $\dot{N}(\vec{r}, t)$ and growth rate functions $G(\vec{r}, t, \Phi)$ in discretized spatial domains [1-3]. 

Unlike traditional random spatial tessellations that rely on static geometric distance metrics, EVOSIM models physical phase transformation kinetics—allowing nuclei to nucleate, orient, and grow as parameterized geometrical envelopes in 2D pixel space and 3D voxel space [2, 4-6].

---

## Key Features & Capabilities

* **Arbitrary Kinetics:** Parses and evaluates complex mathematical expressions for spatial, temporal, and orientation-dependent nucleation and growth rates [2, 3, 7].
* **Parametric Nucleus Geometries:** Supports isotropic and anisotropic growth forms including circles, ellipses, squares ($N_4, N_8$), spheres, cuboids, cylinders, octahedrons, hexagonal cells, and superellipsoids [5, 8-11].
* **Arbitrary Domain Shapes:** Non-cuboidal physical domains (e.g., cylindrical or spherical reaction vessels) are modeled by blacklisting immutable voxels with label `-1` and 100% transparency [3, 6, 12, 13].
* **High-Performance Architecture:** Combines a parallelized C++ computational core using OpenMP with PyBind11 Python wrappers and an interactive PyQt5 scripting console [14-17].
* **XML-Driven Workflow:** Domain parameters, nucleation functions, and growth kinetics are fully configured using human-readable `.kin` XML files [16, 17].

---

## 2D Microstructure Evolution (EVOSIM2D)

EVOSIM2D continuously projects nucleating and growing grain geometries onto a 2D pixel grid (e.g., $1000 \times 1000$ pixels) [2, 18, 19]. Parent phase pixels are initialized to `0`, while growing grains are sequentially assigned unique integer labels [2].

### Algorithmic Variations
The 2D framework implements **28 distinct algorithmic workflows** categorized across nucleation regimes and growth shapes [2, 9]:

| Growth Type | Nucleus Geometry | Growth Parameters | Site-Saturated | Continuous Nucleation |
| :--- | :--- | :--- | :--- | :--- |
| **Isotropic** | Circular | Constant / Space-Dependent Rate | Supported [9] | Supported [9] |
| **Anisotropic** | Rotated Square ($N_4$) | $45^\circ$ Rotated Neighborhood Rules | Supported [9] | Supported [9] |
| **Anisotropic** | Square ($N_8$) | $90^\circ$ Standard Neighborhood Rules | Supported [9] | Supported [9] |
| **Elliptical** | Ellipse | Variable Orientation $\theta(\vec{r})$, Aspect Ratio $R(\vec{r})$, Growth Rate $\dot{a}(\vec{r})$ | Supported [9, 15] | Supported [9, 15] |

Phase transformation continues until all parent pixels attain a non-zero label or a preset transformed fraction (e.g., 95%) is met [2].

---

## 3D Spatial Voxel Evolution (EVOSIM3D)

EVOSIM3D extends envelope growth into 3D voxel space (e.g., $400 \times 400 \times 400$ voxels) [5, 20]. Growth in the absence of impingement is defined by an evolving parametric envelope $F(X, N, t, \dots) \le 0$, where $N$ denotes the nucleation centroid [6]. Impinged grain boundaries remain immobile [6].

### Supported 3D Nucleus Geometries
1. **Triaxial Geometries:** Spheres, ellipsoids, elliptical cylinders, cuboids, octahedrons, and hexagonal cells [5, 10].
2. **Superellipsoids & Supereggs:** Parameterized via shape exponents $p$ and $q$ [3, 11, 21]:
   $$\left\{ \left| \frac{y_1}{l_1} \right|^q + \left| \frac{y_2}{l_2} \right|^q \right\}^{\frac{p}{q}} + \left| \frac{y_3}{l_3} \right|^p \le 1$$
   By tuning $p$ and $q$, nuclei shapes can continuously vary from sharp octahedrons and cuboids to smooth spheres and supereggs ($p=2.5, q=2$) [11, 21].

### Grain Boundary Rectification
Due to dynamic thread scheduling in parallel OpenMP loops, minor boundary voxel labeling errors ($\approx 0.5\% - 1.1\%$) can occur [22-25]. EVOSIM addresses this using a fast post-processing **Grain Boundary Correction Algorithm** that evaluates the exact analytical *time of approach* ($T_o$) of neighboring nuclei to rectify boundary labels [22, 26-28]:

  Boundary Discrepancy Rectification Workflow
┌────────────────────────┐      ┌──────────────────────────────┐ │  EVOSIM 3D Growth Loop │ ───► │ Identify Grain Boundary Voxels│ └────────────────────────┘      └──────────────┬───────────────┘ │ ▼ ┌────────────────────────┐      ┌──────────────────────────────┐ │  Corrected Boundary    │ ◄─── │ Re-label Voxel to Nucleus    │ │  Microstructure        │      │ with Minimum Time-of-Approach│ └────────────────────────┘      └──────────────────────────────┘
---

## Configuration File Format (`.kin`)

Nucleation and growth kinetics are passed to EVOSIM3D via human-readable XML input files [16, 17]:

```xml
<Root>
  <Domain Nx="1000" Ny="1000" Nz="40" Type="1"/>
  <NucleiStats Ndot="20">
    <Ellipsoid PDF="1"
               Phi1_Expr="pi*rand()"
               Phi_Expr="0"
               Phi2_Expr="0"
               Adot_Expr="sin(Phi1)"
               Bdot_Expr="1"
               Cdot_Expr="1"
    />
  </NucleiStats>
</Root>

```
Software Architecture & Tech StackModule / ComponentPrimary Language / LibraryTechnical FunctionCore 2D EnginePython 3, Cython, PyQt512Fast 2D pixel growth inner loops and GUI12Core 3D EngineC++10.3, OpenMP 4.534Parallel 3D voxel growth and bounding-box evaluation3more_horizGUI & VisualizationQt 5.15, VTK 8.234Interactive 3D surface rendering & domain slicing34Image AnalysisITK 5.3343D segmentation and morphological quantification73Expression ParsingMuParser 2.3.4, TinyXML234Dynamic evaluation of user kinetic equations and XML input parsing3Python BindingsPyBind11 2.10.438Exposes C++ datastructures to Python scripting console38Computational EfficiencyBenchmark comparison against naive Voronoi tessellation distance inequalities shows that EVOSIM's bounding-box voxel space approach scales efficiently with high grain counts, outperforming direct Voronoi inequality evaluations when seed count exceeds a critical threshold ($> 70$ seeds)