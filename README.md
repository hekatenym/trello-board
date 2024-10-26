# 使用Cursor-small 开发一个 Trello Board
> 拖动卡片的没有问题，但是拖动清单遇到问题了；
而且这个问题cursor修不了；
大概有思路修，但是有点折腾，相当于这个项目需要重新做一遍；
虽然重做一遍项目其实花的时间也不会太多；
所以问题大概就在这了，对人来说，大范围的局部修改是可行的，但是对于小模型，能处理的上下文始终是有限的；
所以只能把大项目分割成一个个局部模型；

一个简单的 Trello 风格的看板应用，使用 React 和 `react-beautiful-dnd` 实现拖放功能。

## 目录

- [功能](#功能)
- [技术栈](#技术栈)
- [安装与运行](#安装与运行)
- [使用](#使用)
- [部署](#部署)
- [贡献](#贡献)
- [许可证](#许可证)

## 功能

- 创建、删除和拖动清单
- 在清单中添加、删除和拖动卡片
- 响应式设计，适用于不同屏幕尺寸

## 技术栈

- [React](https://reactjs.org/)
- [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd)
- [react-icons](https://react-icons.github.io/react-icons/)
- [CSS](https://www.w3schools.com/css/)

## 安装与运行

1. 克隆这个仓库：

   ```bash
   git clone https://github.com/<username>/trello-board.git
   ```

2. 进入项目目录：

   ```bash
   cd trello-board
   ```

3. 安装依赖：

   ```bash
   npm install
   ```

4. 启动开发服务器：

   ```bash
   npm start
   ```

5. 在浏览器中访问 `http://localhost:3000` 查看应用。

## 使用

- 点击“添加清单”按钮创建新的清单。
- 点击清单顶部的拖拽图标来拖动清单。
- 在清单中点击“添加卡片”按钮来添加新的卡片。
- 拖动卡片以重新排序。

## 部署

要将应用程序部署到 GitHub Pages，请按照以下步骤操作：

1. 确保已安装 `gh-pages` 包：

   ```bash
   npm install gh-pages --save-dev
   ```

2. 在 `package.json` 中添加 `homepage` 字段：

   ```json
   "homepage": "https://<username>.github.io/trello-board"
   ```

3. 运行以下命令进行部署：

   ```bash
   npm run deploy
   ```

## 贡献

欢迎任何形式的贡献！请遵循以下步骤：

1. Fork 这个仓库。
2. 创建你的特性分支 (`git checkout -b feature/YourFeature`)。
3. 提交你的更改 (`git commit -m 'Add some feature'`)。
4. 推送到分支 (`git push origin feature/YourFeature`)。
5. 创建一个新的 Pull Request。

## 许可证

该项目使用 MIT 许可证。有关详细信息，请参阅 [LICENSE](LICENSE) 文件。
