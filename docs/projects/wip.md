## [gomon](https://github.com/z0gSh1u/gomon)

| 状态                  | 语言/技术栈 |
| --------------------- | ----------- |
| **:construction:** 施工中 | Vue 3 + Go (Gin) + MongoDB         |

我计划实现一个可快速插拔部署的自托管评论系统。

- 用户在前端部分引入 Vue 组件，对于每篇被评论文章注入一个配置项 props 即可工作
- 后端采用 Gin 提供 API 接口，采用 MongoDB 进行持久化，支持 Docker 容器化部署

## [sxone](https://github.com/z0gSh1u/sxone)

| 状态                  | 语言/技术栈 |
| --------------------- | ----------- |
| **:construction:** 施工中 | Vue 3 + Go (Gin)      |

我注意到

- 如今，游戏的平台越来越多，但许多单机游戏玩过一次后便丢在一边，没有留下任何痕迹
- 动漫番剧大家也看得越来越多，但看完之后总想找个地方写点总结，不然好像没有看过
- 好像读书也有类似的情况…

所以，我希望构建一个平台，它能够

- 给大家一个写游戏评测、番剧观后感的集合处
- 有办法读取各种游戏平台的游戏时间等参数
- 支持外链到第三方创作平台（如知乎、豆瓣、百家号），构建创作私域矩阵，助力盈利
- Markdown 写作
- Docker 部署

## [gamo](https://github.com/z0gSh1u/gamo)

| 状态                  | 语言/技术栈 |
| --------------------- | ----------- |
| **:construction:** 施工中 | C# + WebSocket + Vue 3 |

在进行游戏时，常常希望可以监控 CPU、显卡、内存等硬件的使用情况。然而，退出到任务管理器太过麻烦，Afterburner 等工具又对画面有侵入性。

因此，我希望构建一个监视器，它在电脑端使用 C# 采集相关数据，使用 Websocket 推送到手机端，恰当显示。这样，手机便成为了一个外置的性能监视器。

选型使用 C# 的原因是它对 Windows API 的可操作性更好、更方便。

## [tinydragon](https://github.com/z0gSh1u/tinydragon)

| 状态                      | 语言/技术栈 |
| ------------------------- | ----------- |
| **:construction:** 施工中 | TypeScript  |

在已完成的 [minisys-minicc-ts](https://github.com/seu-cs-class2/minisys-minicc-ts) 项目中，如果将它的代码到编译部分进一步抽象，我们可以得到一个从词法描述文件+语法描述文件到词法分析器、语法分析器、AST 生成器的工具（类似于 [ANTLR](https://www.antlr.org/)）。这使得我们可以进行通用的词法、语法分析与处理。

## [kramup](https://github.com/z0gSh1u/kramup)

| 状态                      | 语言/技术栈      |
| ------------------------- | ---------------- |
| **:construction:** 施工中 | C# + WPF + ANTLR |

本项目计划制作一个非 WYSIWYG 的 Markdown 编辑器。使用 ANTLR 对 Markdown 文件进行词法、语法分析，使用 C# visit AST 结点转换为 HTML，使用 WPF（甚至考虑 UWP）构建 GUI。