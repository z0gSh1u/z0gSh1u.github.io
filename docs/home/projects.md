---
group:
  name: home
---

# Projects

Please visit my [GitHub](https://github.com/z0gSh1u) for the full list of active projects.

## [typed-webgl](https://github.com/z0gSh1u/typed-webgl)

_Completed (Team) / TypeScript + WebGL_

Course project for "Computer Graphics". Implementing basic 2D/3D model rendering, transformations, shaders, trackball, first-person 3D space roaming, skybox, materials, lighting, etc., using WebGL. We built a basic framework with TypeScript and completed all requirements, achieving high scores. The project can be played at [zxuuu.cloud/seucg](https://zxuuu.cloud/typed-webgl/).

<img src="/projects/webgl.png" width="400px">

## [chinadle](https://github.com/z0gSh1u/chinadle)

_Completed / Vue 3 + mitt + Tailwind CSS_

Inspired by the popularity of the word-guessing game [Wordle](https://www.powerlanguage.co.uk/wordle/) and [Worldle](https://worldle.teuteuf.fr/), this project allows you to guess famous Chinese landmarks within a limited number of attempts based on direction and distance hints. It was developed when Vue 3 was still maturing, utilizing some of its features, mitt for event bus communication, and Tailwind CSS for quick page layout.

<img src="/projects/chinadle.png" width="200px">

## [seu-viz](https://github.com/z0gSh1u/seu-viz)

_Completed / C++ & OpenGL_

Course project for "Information Visualization" - implementing volume rendering based on ray casting in OpenGL. It includes parallel light volume rendering, transfer functions, normal vector calculation, lighting, ray-box intersection tests, and multi-threading acceleration.

<img src="/projects/seuviz.png" width="400px">

## [nlm-cuda](https://github.com/z0gSh1u/nlm-cuda)

_Completed / CUDA + CMake_

Implemented a CUDA-based parallel Non-Local Means (NLM) denoising algorithm, saving 99% of the time compared to non-parallel CPU implementation.

<img src="/projects/nlmcuda.png" width="240px">

## [seu-lex-yacc](https://github.com/z0gSh1u/seu-lex-yacc)

_Completed (Team) / TypeScript_

Our undergraduate course project for "Compiler Principles". We implemented a Lex-like lexical analyzer generator, including constructing from regular expressions to NFA to DFA; a Yacc-like syntax analyzer generator, including LR(1) syntax analysis; and visualizations of automata and abstract syntax trees (AST) using D3.js. The results of this project served as the foundation for the later [minisys-minicc-ts](https://github.com/seu-cs-class2/minisys-minicc-ts).

<img src="/projects/Introduction.png" width="400px">

## [VCampus](https://github.com/z0gSh1u/VCampus)

_Completed (Team) / Java + MyBatis_

Our undergraduate course project for "Software Practice". We implemented a Client/Server architecture program simulating various campus life scenarios, including:

- Building a request-response mechanism and message queue using Sockets, with JSON serialization and deserialization for request-response
- Implementing a simple RPC mechanism on the server side using reflection to call backend functions
- Constructing the DAO layer to MySQL using MyBatis
- Utilizing design patterns such as Singleton

<img src="/projects/vcampus.jpg" width="400px">

## [expshell](https://github.com/z0gSh1u/expshell)

_Completed / C++ & Linux_

My undergraduate course project for "Operating Systems". Implemented a simple Linux Shell supporting features like redirection and pipelines, using Linux system APIs such as fork, pipe, dup2, and open.

<img src="/projects/expshell.png" width="400px">

## [vscode-ts-getset](https://github.com/z0gSh1u/vscode-ts-getset)

_Completed / TypeScript_

A [VSCode extension](https://marketplace.visualstudio.com/items?itemName=z0gSh1u.vscode-ts-getset) for automatically generating Getter and Setter methods for TypeScript (.ts) class declarations, developed based on the TypeScript Compiler API to analyze AST.

<img src="/projects/tsgetset.gif" width="400px">

## [minisys-minicc-ts](https://github.com/seu-cs-class2/minisys-minicc-ts)

_Completed (Team) / TypeScript_

One of our course projects for "Comprehensive Design of Computer Systems". It implements a compiler that compiles [MiniC language](https://github.com/seu-cs-class2/minisys-minicc-ts/blob/master/docs/MiniC.md) (a subset of C) to [Minisys architecture](http://www.icourse163.org/course/SEU-1003566002) (MIPS-like) assembly, including:

- Self-designed Lex tool (Lexer: regex → NFA → DFA)
- Self-designed Yacc tool (Parser: grammar → LR(0) → LR(1) → LALR)
- Intermediate code (IR) generation
- Target code (assembly) generation
- Code optimization

<img src="/projects/minicc.png" width="400px">

## [minisys-asm](https://github.com/seu-cs-class2/minisys-asm)

_Completed (Team) / TypeScript + Travis CI_

One of our course projects for "Comprehensive Design of Computer Systems". It implements an assembler that converts [Minisys architecture](http://www.icourse163.org/course/SEU-1003566002) (MIPS-like) assembly to Minisys architecture machine code. The project supports both Node.js and browser (based on Webpack) environments, with continuous integration using Travis CI and automatic deployment to the web [here](seu-cs-class2.github.io/minisys-asm/).

<img src="/projects/asm.png" width="400px">

## [minisys-1a-cpu](https://github.com/seu-cs-class2/minisys-1a-cpu)

_Completed (Team) / Verilog_

One of our course projects for "Comprehensive Design of Computer Systems". It implements a system on chip (SoC; CPU + external interfaces) using Verilog. The CPU supports five-stage pipeline, single issue, Harvard architecture, interrupts, and 57 MIPS instructions; peripherals are connected via a bus. The design can be programmed to run on Xilinx FPGA.

## [SEU History and Knowledge Competition System](https://github.com/z0gSh1u/seu-history-competition-2018)

_Completed (Team) / PHP + MySQL_

<img src="/projects/seuhistory.png" width="400px">

This project implements a knowledge competition system used in the 2018 SEU History and Knowledge Competition. It was my introductory project, very amateurish. It uses non-separated front-end and back-end PHP for page rendering mixed with back-end logic; native PHP mysqli API for MySQL data read/write; Bootstrap and other CSS frameworks for layout; and Session + Cookie for authentication.

## [lib-seat-manage](https://github.com/z0gSh1u/lib-seat-manage)

_Completed (Team) / Python + Node.js (Express)_

This project uses Arduino Uno development board and PIR sensors for hardware, and Vue.js (front-end framework) + Node.js (back-end) + Python (software-hardware interaction listening) for software. The main functions include library seat reservation, heat statistics, and seat occupancy detection.

<img src="/projects/iot.jpg" width="400px">

## [crip](https://github.com/SEU-CT-Recon/crip)

_Iterating / Python (numpy etc.)_

This project implements an all-in-one toolkit for CT data IO, preprocessing, postprocessing, and provides capabilities for related research physical calculations, dual-energy, and low-dose simulations.

## [SecretNote](https://github.com/secretflow/secretnote)

_Iterating (Job work) / TypeScript, Python_

A multiparty Jupyter Notebook, designed for Privacy Computing teaching.

## [Cloud-native SecretNote](https://studio.secretflow.com/secretnote)

_Iterating (Job work) / TypeScript, Python, K8s_

Deploy SecretNote to ACK Serverless K8s swarm, using an Ingress that automatically affines two Pods to a user.
