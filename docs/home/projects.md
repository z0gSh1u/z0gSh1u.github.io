---
group:
  name: home
---

# Projects

## [typed-webgl](https://github.com/z0gSh1u/typed-webgl)

| Status           | Language/Tech Stack |
| ---------------- | ------------------- |
| Completed (Team) | TypeScript + WebGL  |

This is our undergraduate course project for "Computer Graphics". The main content includes implementing basic 2D/3D model rendering, transformations, shaders, trackball, first-person 3D space roaming, skybox, materials, lighting, etc., using WebGL. We built a basic framework with TypeScript and completed all requirements, achieving high scores. The project can be played at [zxuuu.tech/seucg](https://zxuuu.tech/typed-webgl/).

![img](/projects/webgl.png)

## [chinadle](https://github.com/z0gSh1u/chinadle)

| Status    | Language/Tech Stack         |
| --------- | --------------------------- |
| Completed | Vue 3 + mitt + Tailwind CSS |

Inspired by the popularity of the word-guessing game [Wordle](https://www.powerlanguage.co.uk/wordle/) and [Worldle](https://worldle.teuteuf.fr/), this project allows you to guess famous Chinese landmarks within a limited number of attempts based on direction and distance hints. It was developed when Vue 3 was still maturing, utilizing some of its features, mitt for event bus communication, and Tailwind CSS for quick page layout.

![chinadle](/projects/chinadle.png)

## [seu-viz](https://github.com/z0gSh1u/seu-viz)

| Status    | Language/Tech Stack |
| --------- | ------------------- |
| Completed | C++ & OpenGL        |

This is my graduate course project for "Information Visualization" - implementing volume rendering based on ray casting in OpenGL. It includes parallel light volume rendering, transfer functions, normal vector calculation, lighting, ray-box intersection tests, and multi-threading acceleration.

![seuviz](/projects/seuviz.png)

## [nlm-cuda](https://github.com/z0gSh1u/nlm-cuda)

| Status    | Language/Tech Stack |
| --------- | ------------------- |
| Completed | CUDA + CMake        |

Implemented a CUDA-based parallel Non-Local Means (NLM) denoising algorithm, saving 99% of the time compared to non-parallel CPU implementation.

![nlmcuda](/projects/nlmcuda.png)

## [seu-lex-yacc](https://github.com/z0gSh1u/seu-lex-yacc)

| Status           | Language/Tech Stack |
| ---------------- | ------------------- |
| Completed (Team) | TypeScript          |

This is our undergraduate course project for "Compiler Principles". We implemented a Lex-like lexical analyzer generator, including constructing from regular expressions to NFA to DFA; a Yacc-like syntax analyzer generator, including LR(1) syntax analysis; and visualizations of automata and abstract syntax trees (AST) using D3.js. The results of this project served as the foundation for the later [minisys-minicc-ts](https://github.com/seu-cs-class2/minisys-minicc-ts).

![Introduction](/projects/Introduction.png)

## [VCampus](https://github.com/z0gSh1u/VCampus)

| Status           | Language/Tech Stack |
| ---------------- | ------------------- |
| Completed (Team) | Java + MyBatis      |

This is our undergraduate course project for "Software Practice". We implemented a Client/Server architecture program simulating various campus life scenarios, including:

- Building a request-response mechanism and message queue using Sockets, with JSON serialization and deserialization for request-response
- Implementing a simple RPC mechanism on the server side using reflection to call backend functions
- Constructing the DAO layer to MySQL using MyBatis
- Utilizing design patterns such as Singleton

![vcampus](/projects/vcampus.jpg)

## [expshell](https://github.com/z0gSh1u/expshell)

| Status    | Language/Tech Stack |
| --------- | ------------------- |
| Completed | C++ & Linux         |

This is my undergraduate course project for "Operating Systems". Implemented a simple Linux Shell supporting features like redirection and pipelines, using Linux system APIs such as fork, pipe, dup2, and open.

![expshell](/projects/expshell.png)

## [vscode-ts-getset](https://github.com/z0gSh1u/vscode-ts-getset)

| Status    | Language/Tech Stack |
| --------- | ------------------- |
| Completed | TypeScript          |

This is a [VSCode extension](https://marketplace.visualstudio.com/items?itemName=z0gSh1u.vscode-ts-getset) for automatically generating Getter and Setter methods for TypeScript (.ts) class declarations, developed based on the TypeScript Compiler API to analyze AST.

![tsgetset](/projects/tsgetset.gif)

## [minisys-minicc-ts](https://github.com/seu-cs-class2/minisys-minicc-ts)

| Status           | Language/Tech Stack |
| ---------------- | ------------------- |
| Completed (Team) | TypeScript          |

This is one of our course projects for "Comprehensive Design of Computer Systems". It implements a compiler that compiles [MiniC language](https://github.com/seu-cs-class2/minisys-minicc-ts/blob/master/docs/MiniC.md) (a subset of C) to [Minisys architecture](http://www.icourse163.org/course/SEU-1003566002) (MIPS-like) assembly, including:

- Self-designed Lex tool (Lexer: regex → NFA → DFA)
- Self-designed Yacc tool (Parser: grammar → LR(0) → LR(1) → LALR)
- Intermediate code (IR) generation
- Target code (assembly) generation
- Code optimization
- 100% TypeScript

![minicc](/projects/minicc.png)

## [minisys-asm](https://github.com/seu-cs-class2/minisys-asm)

| Status           | Language/Tech Stack    |
| ---------------- | ---------------------- |
| Completed (Team) | TypeScript + Travis CI |

This is one of our course projects for "Comprehensive Design of Computer Systems". It implements an assembler that converts [Minisys architecture](http://www.icourse163.org/course/SEU-1003566002) (MIPS-like) assembly to Minisys architecture machine code. The project supports both Node.js and browser (based on Webpack) environments, with continuous integration using Travis CI and automatic deployment to the web [here](seu-cs-class2.github.io/minisys-asm/).

![asm](/projects/asm.png)

## [minisys-1a-cpu](https://github.com/seu-cs-class2/minisys-1a-cpu)

| Status           | Language/Tech Stack |
| ---------------- | ------------------- |
| Completed (Team) | Verilog             |

This is one of our course projects for "Comprehensive Design of Computer Systems". It implements a system on chip (SoC; CPU + external interfaces) using Verilog. The CPU supports five-stage pipeline, single issue, Harvard architecture, interrupts, and 57 MIPS instructions; peripherals are connected via a bus.

The design can be programmed to run on Xilinx FPGA.

## [SEU History and Knowledge Competition System](https://github.com/z0gSh1u/seu-history-competition-2018)

| Status           | Language/Tech Stack |
| ---------------- | ------------------- |
| Completed (Team) | PHP + MySQL         |

![seuhistory](/projects/seuhistory.png)

This project implements a knowledge competition system used in the 2018 SEU History and Knowledge Competition. It was my introductory project, very amateurish. It uses non-separated front-end and back-end PHP for page rendering mixed with back-end logic; native PHP mysqli API for MySQL data read/write; Bootstrap and other CSS frameworks for layout; and Session + Cookie for authentication.

## [lib-seat-manage](https://github.com/z0gSh1u/lib-seat-manage)

| Status           | Language/Tech Stack        |
| ---------------- | -------------------------- |
| Completed (Team) | Python + Node.js (Express) |

This project uses Arduino Uno development board and PIR sensors for hardware, and Vue.js (front-end framework) + Node.js (back-end) + Python (software-hardware interaction listening) for software. The main functions include library seat reservation, heat statistics, and seat occupancy detection.

![iot](/projects/iot.jpg)

## [crip](https://github.com/SEU-CT-Recon/crip)

| Status    | Language/Tech Stack |
| --------- | ------------------- |
| Iterating | Python (numpy etc.) |

This project implements an all-in-one toolkit for CT data IO, preprocessing, postprocessing, and provides capabilities for related research physical calculations, dual-energy, and low-dose simulations.

## [dijkstra-manyjs](https://github.com/z0gSh1u/dijkstra-manyjs)

| Status    | Language/Tech Stack                |
| --------- | ---------------------------------- |
| Completed | Vanilla JS / WASM / WebGL / WebGPU |

Compare different implementations of Dijkstra's shortest path algorithm on the browser.
