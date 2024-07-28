---
group:
  name: home
---

# 项目列表

## [typed-webgl](https://github.com/z0gSh1u/typed-webgl)

| 状态                            | 语言/技术栈        |
| ------------------------------- | ------------------ |
| **:sparkles:** 已完工(团队项目) | TypeScript + WebGL |

这是我们本科课程《计算机图形学》的课程实践项目。主要内容是使用 WebGL 实现图形学领域基础的 2D/3D 模型渲染、变换、着色器、跟踪球、第一人称三维空间漫游、天空盒、材质、光照等内容。我们使用 TypeScript 搭建了一个基本框架，并完成了各项要求，获得高分。项目成果可在 [zxuuu.tech/seucg](https://zxuuu.tech/typed-webgl/) 玩到。

![img](/webgl.png)

## [chinadle](https://github.com/z0gSh1u/chinadle)

| 状态                  | 语言/技术栈                 |
| --------------------- | --------------------------- |
| **:sparkles:** 已完工 | Vue 3 + mitt + Tailwind CSS |

在猜词游戏 [Wordle](https://www.powerlanguage.co.uk/wordle/) 很火的时候受 [Worldle](https://worldle.teuteuf.fr/) 启发制作的模仿项目。你可以通过方位和距离提示在有限步数内猜测中国的名胜景点。该项目在 Vue 3 尚未成熟时编写，使用了部分 Vue 3 特性，使用 mitt 事件总线完成组件通信，使用 Tailwind CSS 快速布局页面。

![chinadle](/chinadle.png)

## [seu-viz](https://github.com/z0gSh1u/seu-viz)

| 状态                  | 语言/技术栈  |
| --------------------- | ------------ |
| **:sparkles:** 已完工 | C++ & OpenGL |

这是我的研究生课程《信息可视化》的项目——在 OpenGL 上基于光线跟踪 (Ray Casting) 算法的体绘制 (Volume Rendering) 实现。实现了平行光体绘制、传递函数、法向量计算、光照、射线-包围盒相交测试、多线程加速等。

![seuviz](/seuviz.png)

## [nlm-cuda](https://github.com/z0gSh1u/nlm-cuda)

| 状态                  | 语言/技术栈  |
| --------------------- | ------------ |
| **:sparkles:** 已完工 | CUDA + CMake |

实现了基于 CUDA 并行的非局部均值去噪 (Non-Local Means, NLM) 算法，相较于非并行的 CPU 实现节省了 99% 的时间。

![nlmcuda](/nlmcuda.png)

## [seu-lex-yacc](https://github.com/z0gSh1u/seu-lex-yacc)

| 状态                             | 语言/技术栈 |
| -------------------------------- | ----------- |
| **:sparkles:** 已完工 (团队项目) | TypeScript  |

这是我们本科《编译原理》的课程设计。我们基于 TypeScript 语言实现了类似于 Lex 的词法分析器的生成器，包括从正则表达式到 NFA 到 DFA 的构建；实现了类似于 Yacc 的语法分析器的生成器，包括 LR(1) 语法分析；实现了自动机和抽象语法树 (AST) 基于 D3.js 的可视化。本项目的结果在后面的 [minisys-minicc-ts](https://github.com/seu-cs-class2/minisys-minicc-ts) 中作为基石。

![Introduction](/Introduction.png)

## [VCampus](https://github.com/z0gSh1u/VCampus)

| 状态                             | 语言/技术栈    |
| -------------------------------- | -------------- |
| **:sparkles:** 已完工 (团队项目) | Java + MyBatis |

这是我们本科《软件实践》课程的实践项目。我们使用 Java 实现了一个 Client/Server 架构的程序，模拟校园生活的各项情境。其中，

- 我们借助 Socket 底层构建了一套请求-响应机制及消息队列，请求-响应中使用 JSON 序列化与反序列化
- 在服务器端，利用反射调用后端处理函数，实现了一套简单的 RPC 机制
- 利用 MyBatis 构建到 MySQL 的 DAO 层
- 使用了单例模式等设计模式

![vcampus](/vcampus.jpg)

## [expshell](https://github.com/z0gSh1u/expshell)

| 状态                  | 语言/技术栈 |
| --------------------- | ----------- |
| **:sparkles:** 已完工 | C++ & Linux |

这是我本科《操作系统》课程的课程设计。实现了一个简单的 Linux Shell，支持重定向、管道等特性。使用了 Linux 的 fork / pipe / dup2 / open 等子进程相关操作系统 API。

![expshell](/expshell.png)

## [vscode-ts-getset](https://github.com/z0gSh1u/vscode-ts-getset)

| 状态                  | 语言/技术栈 |
| --------------------- | ----------- |
| **:sparkles:** 已完工 | TypeScript  |

这是一个用于给 TypeScript (.ts) 的类声明自动生成 Getter 和 Setter 的 [VSCode 扩展](https://marketplace.visualstudio.com/items?itemName=z0gSh1u.vscode-ts-getset)。基于 TypeScript Compiler API 分析 AST 开发。

![tsgetset](/tsgetset.gif)

## [minisys-minicc-ts](https://github.com/seu-cs-class2/minisys-minicc-ts)

| 状态                            | 语言/技术栈 |
| ------------------------------- | ----------- |
| **:sparkles:** 已完工(团队项目) | TypeScript  |

这是我们的《计算机系统综合设计》的课程项目之一。它实现了一个将 [MiniC 语言](https://github.com/seu-cs-class2/minisys-minicc-ts/blob/master/docs/MiniC.md)（部分特性 C） 编译到 [Minisys 体系](http://www.icourse163.org/course/SEU-1003566002)（类 MIPS）汇编的编译器。包括

- 自己设计的 Lex 工具（Lexer：正则 →NFA→DFA）
- 自己设计的 Yacc 工具（Parser：文法 →LR(0)→LR(1)→LALR）
- 中间代码（IR）生成
- 目标代码（汇编）生成
- 以及代码优化相关工作
- 100% TypeScript

![minicc](/minicc.png)

## [minisys-asm](https://github.com/seu-cs-class2/minisys-asm)

| 状态                            | 语言/技术栈            |
| ------------------------------- | ---------------------- |
| **:sparkles:** 已完工(团队项目) | TypeScript + Travis CI |

这是我们的《计算机系统综合设计》的课程项目之一。它实现了一个将 [Minisys 体系](http://www.icourse163.org/course/SEU-1003566002)（类 MIPS）汇编转换到 Minisys 体系机器码的汇编器。该项目支持 Node.js 和浏览器（基于 Webpack）双端运行，同时使用 Travis CI 进行持续集成，自动部署到 Web 上的[这里](seu-cs-class2.github.io/minisys-asm/)。

![asm](/asm.png)

## [minisys-1a-cpu](https://github.com/seu-cs-class2/minisys-1a-cpu)

| 状态                            | 语言/技术栈 |
| ------------------------------- | ----------- |
| **:sparkles:** 已完工(团队项目) | Verilog     |

这是我们的《计算机系统综合设计》的课程项目之一。它使用 Verilog 实现了一个片上系统（SoC；CPU + 外部接口）。CPU 支持五级流水、单发射、哈佛结构、可中断，支持 57 条 MIPS 指令；外设采用总线方式连接。

设计可烧录到 Xilinx (赛灵思) FPGA 上运行。

## [东南大学校史校情知识竞赛系统](https://github.com/z0gSh1u/seu-history-competition-2018)

| 状态                            | 语言/技术栈 |
| ------------------------------- | ----------- |
| **:sparkles:** 已完工(团队项目) | PHP + MySQL |

![seuhistory](/seuhistory.png)

该项目实现了一个知识竞赛系统，被用于 2018 年的东南大学校史校情知识竞赛。这是我的启蒙项目，极其业余。使用前后端不分离的 PHP 进行页面渲染混合后端逻辑；使用 PHP 原生 mysqli API 读写 MySQL 数据；使用 Bootstrap 等 CSS 框架帮助布局；使用 Session + Cookie 进行鉴权。

## [lib-seat-manage](https://github.com/z0gSh1u/lib-seat-manage)

| 状态                            | 语言/技术栈                |
| ------------------------------- | -------------------------- |
| **:sparkles:** 已完工(团队项目) | Python + Node.js (Express) |

本项目硬件使用 Arduino Uno 开发板与 PIR 传感器，软件基于 Vue.js (前端框架) + Node.js (后端) + Python (软硬件交互侦听)。主要功能是图书馆座位的预约、热度的统计和入/离座的检测。

![iot](/iot.jpg)

## [crip](https://github.com/SEU-CT-Recon/crip)

| 状态                  | 语言/技术栈         |
| --------------------- | ------------------- |
| **:sparkles:** 迭代中 | Python (numpy etc.) |

本项目实现了一个 all-in-one 的工具包，用于 CT 数据的 IO、预处理、后处理，并提供进行相关研究物理计算、双能、低剂量模拟的能力。

## [dijkstra-manyjs](https://github.com/z0gSh1u/dijkstra-manyjs)

| 状态                  | 语言/技术栈                    |
| --------------------- | ------------------------------ |
| **:sparkles:** 已完工 | PureJS / WASM / WebGL / WebGPU |

Compare different implementations of Dijkstra's shortest path algorithm on browser.
