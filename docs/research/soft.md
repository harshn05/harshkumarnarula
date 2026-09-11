# Scientific Software Engineering

I combine **scientific computing, mathematical modeling, numerical algorithms, and practical software engineering** to build computational tools for research and engineering problems.

My software work typically begins with a scientific problem rather than a software specification. I formulate the underlying physical or mathematical model, develop the numerical method required to solve it, and then turn that method into software that can be used to simulate, analyze, visualize, or reconstruct complex systems.

## From mathematical models to usable software

A major part of my work has involved implementing mathematical models as **efficient and reusable computational algorithms**. During my PhD, for example, I developed **EvoSim**, a generic simulation framework for stochastic nucleation-growth processes in discretized spatial domains. Rather than implementing a single predefined microstructure model, EvoSim was designed to represent arbitrary evolution functions and perform computational experiments with different nucleation and growth kinetics.

I developed the associated software as a **cross-platform application using C++, Qt, and Python**, combining the numerical simulation engine with a graphical interface for interacting with the models and generated microstructures.

This reflects how I generally approach scientific software: the code is not separate from the research. **The algorithm, mathematical formulation, data structures, visualization, and user interface are parts of the same computational workflow.**

## Numerical computing and simulation

My work spans several classes of numerical problems, including **PDE-based modeling, finite-element methods, stochastic simulation, deterministic and stochastic optimization, parameter estimation, and phase-transformation modeling**.

Earlier in my career, I developed a coupled two-dimensional thermo-mechanical model of the hot-rolling process, combining mass flow, strain, strain-rate and thermal fields with dynamic recrystallization and grain-size models.

I also developed an integrated physics-based FEM model for **carburizing and quenching of steels**, including time-resolved visualization of phase evolution, and built a computational tool for generating TTT/CCT diagrams for arbitrary steel compositions.

These projects have given me experience not only in writing numerical code, but also in translating physical assumptions and governing equations into computational procedures that can be tested and validated.

## Inverse problems and scientific data

Another recurring theme in my work is the computational treatment of **incomplete, indirect, or noisy data**.

For example, REvoSim approaches microstructure reconstruction as an inverse problem: given limited grain-level information such as volumes and centroids, the algorithm attempts to recover the underlying structure and evolution process.

I have also developed stochastic-search methods for estimating physical parameters directly from experimental data. One such project involved estimating equivalent-circuit parameters for dye-sensitized solar cells from noisy current-voltage measurements.

Similarly, my work in image analysis involved developing algorithms for automatically generating montages of SEM images using stochastic search and steepest-descent methods.

This has made **optimization, parameter estimation, uncertainty, and data analysis** an integral part of my scientific-computing workflow.

## Visualization and scientific interfaces

Scientific software is most useful when the numerical results can be inspected and understood. My work therefore also involves **visualization and interactive scientific interfaces**, particularly for computational models producing spatial or time-dependent data.

My technical stack includes **VTK, ITK, OpenCV, PyQt5, Qt, Python, C++, Cython, and Pybind11**, alongside numerical and scientific libraries and conventional development tools such as Git, shell scripting, and Linux/Windows environments.

I am comfortable working across the boundary between native C++ computation and Python-based analysis, allowing computationally intensive algorithms to be exposed through higher-level scientific workflows.

## Engineering mindset

What I enjoy most about scientific software is the combination of **first-principles thinking and implementation**.

I am interested in questions such as:

- How should a physical process be represented mathematically?
- What numerical method is appropriate for the resulting problem?
- How can stochasticity, uncertainty, or incomplete information be handled?
- How can an algorithm be made computationally efficient?
- How should the resulting data be represented and visualized?
- How can a research prototype become a reusable scientific tool?

Across my research and engineering projects, the common objective has been to move from:

**physical understanding → mathematical formulation → computational algorithm → working software**

That is the space in which I work best.

> **I do not see scientific software as code written around a mathematical model. I see the software itself as part of the scientific method: a way to formulate hypotheses, perform virtual experiments, solve inverse problems, explore parameter spaces, and make complex physical systems computationally accessible.**