# Curriculum Vitae

## Dr. Harsh Kumar Narula

**Computational scientist, scientific software engineer, and materials-science researcher**  
Jaipur, Rajasthan, India | +91 9167768594 | narula.harsh.kumar@gmail.com | www.harshkumarnarula.com | github.com/harshn05

## Professional summary

Computational scientist with expertise in mathematical modeling, numerical methods, and scientific software development. Educated entirely at IIT Bombay (B.Tech., M.Tech., and Ph.D.), with over a decade of experience building computational algorithms in C++ and Python for complex engineering and materials-science problems, including stochastic simulation, parameter estimation, and physics-informed modeling.

Interested in applying advanced data analytics and machine learning to accelerate industrial R&D.

## Key technical themes

- **Stochastic & deterministic optimization** — parameter estimation from noisy/indirect measurements (solar-cell circuit parameters from I-V data, microstructure reconstruction from grain statistics, SEM image registration)
- **Physics-informed modeling** — coupling mechanistic (thermal, flow, phase-transformation) models with empirical/statistical corrections to match real-world behavior
- **Scientific software development** — cross-platform GUI tools and simulation engines in C++, Qt, and Python for research and industrial use
- **Signal & sensor data analysis** — diagnosing and correcting systematic bias in closed-loop control systems: deriving calibration models from manufacturer data, solving for analytical failure/crossover points, and quantifying uncertainty via bootstrap resampling and parameter sensitivity analysis

## Education

**Ph.D., Mechanical Engineering — IIT Bombay, 2014–2024**  
Thesis: *Mathematical Modeling of Microstructure and Microtexture Evolution*  
CGPA: **9.86/10**

- Developed physics-informed stochastic and mechanistic models for reconstructing structured information from sparse, indirect measurements (grain volumes and centroids), applying deterministic and stochastic optimization to high-dimensional inverse problems.
- Built **EvoSim**, a generic algorithm and cross-platform GUI software (C++, Qt, Python) to simulate stochastic nucleation-growth kinetics in discretized spatial domains.
- Developed **REvoSim**, a novel recursive algorithm to reconstruct 3D polycrystalline structure purely from grain-volume and centroid statistics — an inverse parameter-estimation problem under uncertainty.
- Derived a unified tessellation model quantifying the significance of fitting parameters in existing tessellation approaches.

**M.Tech. (Dual Degree), Metallurgical Process Engineering — IIT Bombay, 2005–2010**  
Thesis: *Modeling Process during Hot Rolling*  
CGPA: **10/10**

- Built a coupled 2D thermo-mechanical model (C++, MATLAB) for mass flow, strain, and thermal fields, integrating dynamic recrystallization and empirical grain-size relationships; results validated against literature.

**B.Tech. (Dual Degree), Metallurgical Engineering and Materials Science — IIT Bombay, 2005–2010**  
CGPA: **8.79/10**

## Professional experience

**Project Research Scientist — IIT Bombay**, Nov 2024 – Jun 2025 (Jaipur, remote)

- Explored applying PhD-developed nucleation-growth and tessellation models to spatial mineral prediction, using multi-angle, multi-depth borehole assay data to predict subsurface mineral distribution across a mining region.

**Project Research Associate — IIT Bombay**, Jun 2023 – Nov 2024 (remote)

- Successfully defended Ph.D. thesis, *Mathematical Modeling of Microstructure and Microtexture Evolution*, while simultaneously serving as primary caregiver, managing home-based ICU-level care for a family member with ALS.
- Maintained, extended, and documented EvoSim, a scientific simulation software developed during PhD research, on a hydrogen pressure-vessel manufacturing project (TeCoPV India).

**Home ICU Caregiver-Engineer**, 2019 – Jun 2026

- Independently designed, built, and managed a home-based invasive ventilation ICU (tracheostomy care, ventilator monitoring, emergency response) for a family member on long-term invasive mechanical ventilation, while concurrently completing PhD research and short-term technical projects remotely.
- Diagnosed a systematic tidal-volume measurement bias in a closed-loop ventilator control system (ResMed iVAPS) caused by exhalation-valve substitution: derived power-law flow calibration models from manufacturer data (including pixel-level digitization of a published curve), analytically solved for the pressure at which the two valves' flow characteristics cross over, and quantified prediction uncertainty via bootstrap resampling and parameter sensitivity analysis. Proposed a bedside correction heuristic (Pressure-Anchored VT Correction, PAVC) that re-anchors the closed-loop controller on a physical variable unaffected by the sensor bias; published as an engineering case report, ["When the Machine Lies"](https://livewithals.github.io/when-the-machine-lies).

**Project Engineer — NCAIR, IIT Bombay**, Jan 2013 – Dec 2013

- Developed a MATLAB algorithm and GUI combining stochastic search and steepest-descent methods to automatically generate montages of multiple SEM images; presented at IMTEX-2014.

**Senior Research Fellow — Powder Metallurgy Lab, IIT Bombay**, Apr 2011 – Jun 2011

- Developed a stochastic-search algorithm to estimate five equivalent-circuit parameters for dye-sensitized solar cells directly from noisy experimental current-voltage data; results confirmed the existence of multiple valid solution sets, consistent with subsequent literature.

**Researcher — TRDDC, Pune**, Aug 2010 – Mar 2011

- Built an integrated, physics-based FEM model for carburizing and quenching of steels to predict phase distribution and hardness, with time-resolved visualization of phase evolution.
- Developed a MATLAB tool to generate TTT/CCT diagrams for arbitrary steel compositions using the Kirkaldy-Venugopalan phase-kinetics model.

**Teaching Assistant — IIT Bombay**, 2011–2019, multiple terms

- Computational Methods in Metal Forming, Stereology and Image Analysis, Engineering Data Mining and Applications, Mechanics of Materials, and other UG/PG courses.

## Selected publications

- Vasavada, J., Narula, H.K., Mishra, S., Nandy, T.K., Tewari, A. *Development of novel Moving Wave Front image processing algorithm and microstructural quantification of Tungsten Heavy Alloy.* Computational Materials Science, 170 (2019): 109181.
- Prita, P., Sushil, M., Shanta, C., Harsh, N. *Development of materials model based on microstructure evolution for formability analysis of low-Ni austenitic stainless steel.* IOP Conference Series: Materials Science and Engineering, 82.1 (2015): 012-017.
- Jena, A., et al. *Dye sensitized solar cells: a review.* Transactions of the Indian Ceramic Society, 71.1 (2012): 1-16.

See the [Publications](publications.md) page for full details and DOIs.

## Technical skills

**Programming & numerical computing:** Python, C++, MATLAB, Octave, Maxima, Maple, Cython, pybind11  
**Modeling & optimization:** finite element methods, stochastic & deterministic optimization, PDE solvers, numerical methods  
**Imaging & vision:** OpenCV, VTK, ITK  
**Tools:** PyQt5, LaTeX, shell scripting, Git  
**Platforms:** Ubuntu, openSUSE, Windows

## Scholastic achievements

- IIT-JEE 2005 — All India Rank 2645
- AIEEE 2005 — All India Rank 4056
- Rajasthan Pre-Engineering Test 2005 — State Rank 7

## PDF CV

[Here](assets/CV_Harsh_Kumar_Narula.pdf) is the original PDF version of my curriculum vitae.