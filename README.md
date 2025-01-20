# json-to-excel-converter

该项目用于将给定的 JSON 文件转换为 Excel 文件。它读取 JSON 数据，处理数据，并生成包含多个工作表的 Excel 文件，每个工作表对应 JSON 数据的一个第一级。

## 项目结构

```
json-to-excel-converter
├── src
│   ├── index.ts               # 应用程序的入口点
│   ├── types
│   │   ├── JsonData.ts        # 定义 JSON 数据结构的接口
│   │   └── SchoolData.ts      # 定义学校数据结构的接口
│   ├── utils
│   │   ├── excelGenerator.ts   # 处理 Excel 文件创建的函数
│   │   └── jsonParser.ts       # 解析 JSON 数据的函数
│   └── services
│       └── dataTransformer.ts  # 转换 JSON 数据为 Excel 输出格式的函数
├── data
│   └── input.json             # 输入的 JSON 数据文件
├── package.json                # npm 配置文件
├── tsconfig.json              # TypeScript 配置文件
└── README.md                   # 项目文档
```

## 安装和运行

1. 克隆该项目到本地：
   ```bash
   git clone <repository-url>
   ```

2. 进入项目目录：
   ```bash
   cd json-to-excel-converter
   ```

3. 安装依赖：
   ```bash
   npm install
   ```

4. 运行应用程序：
   ```bash
   npm start
   ```

## 贡献

欢迎任何形式的贡献！请提交问题或拉取请求。