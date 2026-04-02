# DNTuyun Official Site

物流数字化平台公司官网前端项目。当前第一阶段已完成首页高保真实现，采用 `Next.js App Router + TypeScript + Tailwind CSS + Framer Motion`，用于品牌展示、对外背书与合作沟通场景。

## 技术栈

- Next.js 16（App Router）
- TypeScript
- Tailwind CSS 4
- Framer Motion
- lucide-react
- clsx
- tailwind-merge
- ESLint
- Prettier
- Vitest + Testing Library

## 本地启动

```bash
npm install
npm run dev
```

默认访问地址：

```bash
http://localhost:3000
```

## 常用命令

```bash
npm run dev
npm run lint
npm run test
npm run build
npm run format
```

## 项目结构

```text
src/
  app/
    globals.css
    layout.tsx
    page.tsx
  components/
    layout/
      site-footer.tsx
      site-header.tsx
    sections/
      about-section.tsx
      architecture-section.tsx
      capabilities-section.tsx
      contact-section.tsx
      hero-section.tsx
      scenarios-section.tsx
      value-section.tsx
    ui/
      brand-mark.tsx
      button.tsx
      container.tsx
      form-field.tsx
      reveal.tsx
      section-heading.tsx
      stat-item.tsx
  lib/
    site-data.ts
    utils.ts
  test/
    homepage.test.tsx
    setup.ts
```

## 页面拆分

- `Header`：顶部导航、品牌标识、移动端菜单
- `HeroSection`：首屏标题、按钮、统计数据、右侧系统结构视觉
- `ValueSection`：平台价值与平台底座说明
- `CapabilitiesSection`：六大能力主展示区
- `ArchitectureSection`：深色技术架构区
- `ScenariosSection`：典型业务场景
- `AboutSection`：公司介绍与企业概况
- `ContactSection`：联系信息与静态表单
- `Footer`：页脚导航与版权信息

## 设计实现说明

- 颜色、排版、边框、阴影通过 `src/app/globals.css` 中的 CSS 变量统一管理
- 页面文案优先复用设计稿截图内容，少量难以辨认的描述已按相近语义还原，并在 `src/lib/site-data.ts` 中标记 `TODO`
- 动效仅用于轻量入场与 hover 反馈，避免破坏官网的理性与克制感
- 首页按组件化结构组织，后续可继续扩展二级页面

## Git 建议提交节奏

```bash
chore: initialize official website project
feat: implement homepage layout and sections
style: refine visual details and responsive behavior
```

## 推送到 GitHub

补充远程仓库地址后执行：

```bash
git remote add origin <your-repository-url>
git branch -M main
git push -u origin main
```
