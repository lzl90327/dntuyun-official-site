import type { HomePageContent } from "@/content/content-types";
import { siteConfig } from "@/content/site-config";

// =========================================
// Header
// =========================================
// 顶部导航与主 CTA。
//
// 常改字段：
// - header.navigation
// - header.contactButtonLabel

// =========================================
// Hero
// =========================================
// 首屏文案、按钮、背书数据与右侧结构图中的文案标签。
//
// 常改字段：
// - hero.titleLines
// - hero.description
// - hero.primaryButton
// - hero.secondaryButton
// - hero.stats

// =========================================
// Sections
// =========================================
// 各 section 的标题、正文、卡片内容、联系信息、表单文案。
//
// 常改字段：
// - sections.value
// - sections.capabilities
// - sections.architecture
// - sections.scenarios
// - sections.about
// - sections.contact

// =========================================
// Footer Content
// =========================================
// 页脚栏目信息与页脚介绍语。
//
// 常改字段：
// - footer.description
// - footer.columns

export const homePageContent: HomePageContent = {
  // Header
  header: {
    navigation: [
      { label: "平台能力", href: "#capabilities" },
      { label: "技术架构", href: "#architecture" },
      { label: "关于我们", href: "#about" },
      { label: "联系我们", href: "#contact" },
    ],
    contactButtonLabel: "联系我们",
  },

  // Hero
  hero: {
    eyebrow: siteConfig.brand.tagline,
    titleLines: ["连接物流全链路", "数字化平台体系"],
    description:
      "面向物流企业的全链路数字化平台，覆盖协同、运营与开放能力。",
    primaryButton: {
      label: "了解平台能力",
      href: "#capabilities",
    },
    secondaryButton: {
      label: "联系我们",
      href: "#contact",
    },
    stats: [
      { value: "50+", label: "服务物流企业" },
      { value: "6", label: "核心平台模块" },
      { value: "99.9%", label: "系统可用性" },
    ],
    structureCards: [
      {
        title: "L4 业务应用层",
        tags: ["调度中心", "运营看板", "门户", "移动端"],
      },
      {
        title: "L3 平台能力层",
        tags: ["运单引擎", "协同服务", "订单管理", "轨迹服务"],
      },
      {
        title: "L2 数据能力层",
        tags: ["数据仓库", "实时计算", "主数据", "分析看板"],
      },
      {
        title: "L1 平台基础层",
        tags: ["服务集群", "消息总线", "权限中心", "运维保障"],
      },
    ],
  },

  // Main sections
  sections: {
    // 平台定义 / 平台价值
    value: {
      titleCard: {
        titleLines: ["不只是软件，", "是物流业务的", "数字化平台底座"],
        highlightedLine: "数字化平台底座",
        description:
          "围绕物流企业真实业务链路构建，而非通用功能的简单堆叠。平台的价值，在于支撑协同、扩展与持续演进。",
        action: { label: "查看平台能力", href: "#capabilities" },
      },
      items: [
        {
          index: "01",
          title: "平台化能力",
          description:
            "统一承载物流企业全链路业务，支持多组织、多角色协同，形成可持续扩展的平台能力，而非单点工具集合。",
        },
        {
          index: "02",
          title: "技术可扩展",
          description:
            "以模块化架构和开放接口为基础，支持与现有系统集成，满足不同规模企业持续演进的建设需求。",
        },
        {
          index: "03",
          title: "业务导向",
          description:
            "围绕真实物流运营链路设计能力结构，让系统服务业务协同，而不是将通用功能简单迁移到物流场景。",
        },
      ],
    },

    // 平台能力
    capabilities: {
      eyebrow: "平台能力",
      title: "六大能力，共属一个平台体系",
      action: { label: "咨询平台能力", href: "#contact" },
      featured: {
        title: "业务协同",
        description:
          "贯通发货、承运、调度等多角色协同链路，支撑订单、运单与结算的全流程数字化协同。",
        tags: [
          "多角色协作",
          "业务流程贯通",
          "跨组织协同",
          "结算闭环",
        ],
        detailLink: { label: "了解该能力", href: "" },
      },
      cards: [
        {
          title: "运输管理",
          description:
            "覆盖运单创建、调度、跟踪与交付管理，支撑多运输模式下的过程控制与执行协同。",
        },
        {
          title: "组织协同",
          description:
            "支持多节点组织架构配置与权限管理，满足集团型物流企业的多主体协同运营需求。",
        },
        {
          title: "运营可视",
          description:
            "提供运营看板与核心指标分析能力，支持企业对运营状态、效率与结果进行持续观察与优化。",
        },
        {
          title: "开放接口",
          description:
            "通过标准接口与开放集成能力，支持与 ERP、WMS、财务系统及第三方平台灵活对接。",
        },
      ],
      base: {
        title: "平台底座",
        description:
          "以模块化架构、统一数据模型、消息总线与服务治理为基础，支撑上述能力在同一平台内持续演进。",
        tags: ["模块化", "多租户", "消息总线", "服务治理"],
      },
    },

    // 技术架构
    architecture: {
      eyebrow: "技术架构",
      title: "统一的平台架构，支撑业务持续演进",
      titleLines: ["统一的平台架构，", "支撑业务持续演进"],
      description:
        "以统一平台底座为基础，将业务应用、平台能力、数据能力与基础设施分层组织。在保证系统稳定运行的同时，支持物流企业按需扩展能力、持续迭代平台。",
      highlights: [
        "应用承载  ——  面向调度、运营、门户与移动端等业务场景统一承接",
        "能力沉淀  ——  将订单、运单、协同、轨迹等核心能力沉淀在平台层运行",
        "数据支撑  ——  让数据仓库、实时计算、主数据与分析能力形成统一支撑",
        "开放连接  ——  便于与现有系统及第三方平台灵活集成",
        "底座保障  ——  以服务集群、消息总线、权限与运维能力支撑持续运行",
      ],
      action: { label: "了解技术架构", href: "" },
      layers: [
        {
          level: "L4",
          name: "业务应用层",
          side: "应用",
          items: ["调度中心", "运营看板", "门户", "移动端"],
        },
        {
          level: "L3",
          name: "平台能力层",
          side: "能力",
          items: ["运单引擎", "协同服务", "订单管理", "轨迹服务"],
        },
        {
          level: "L2",
          name: "数据能力层",
          side: "数据",
          items: ["数据仓库", "实时计算", "主数据", "分析看板"],
        },
        {
          level: "L1",
          name: "平台基础层",
          side: "底座",
          items: ["服务集群", "消息总线", "权限中心", "运维保障"],
        },
      ],
    },

    // 业务场景
    scenarios: {
      eyebrow: "典型场景",
      title: "面向真实物流业务，适配不同经营形态",
      cards: [
        {
          index: "01",
          tag: "FTL",
          title: "整车物流企业",
          description:
            "面向以整车运输为核心业务的物流企业，覆盖从订单接入、调度分配到在途跟踪与回单结算的完整协同链路。",
          chips: ["订单接入", "调度分配", "在途跟踪", "回单结算"],
        },
        {
          index: "02",
          tag: "GROUP",
          title: "多组织物流集团",
          description:
            "面向集团下多公司、多业务线并行运营的物流企业，支持组织分权、业务协同、数据汇总与统一管控。",
          chips: ["集团分权", "业务协同", "数据汇总", "统一管控"],
        },
        {
          index: "03",
          tag: "PLATFORM",
          title: "平台型货运业务",
          description:
            "面向以平台撮合货主与承运资源为核心的业务模式，支持多方接入、在线协同、交易流转与平台化运营。",
          chips: ["多方接入", "在线协同", "交易流转", "平台运营"],
        },
      ],
    },

    // 关于我们
    about: {
      eyebrow: "关于我们",
      title: "专注物流数字化的平台型科技公司",
      titleLines: ["专注物流数字化的", "平台型科技公司"],
      paragraphs: [
        "我们专注于物流行业数字化平台建设，围绕真实业务场景，为物流企业提供覆盖全链路协同的平台能力。",
        "以模块化架构为基础，以业务协同为核心，以开放连接为边界，支持物流企业从单点数字化向平台化持续演进。",
      ],
      action: { label: "了解更多", href: "" },
      statsPanelTitle: "企业概况",
      stats: [
        {
          value: "2025",
          title: "成立年份",
          description: "专注物流数字化平台建设",
        },
        {
          value: "50+",
          title: "服务企业",
          description: "覆盖多类物流业务场景",
        },
        {
          value: "6",
          title: "核心平台模块",
          description: "平台核心能力覆盖",
        },
        {
          value: "99.9%",
          title: "系统可用性",
          description: "企业级稳定保障",
        },
      ],
    },

    // 联系我们
    contact: {
      eyebrow: "联系我们",
      title: "欢迎与我们探讨合作可能",
      titleLines: ["欢迎与我们", "探讨合作可能"],
      description:
        "无论是平台能力咨询、业务合作交流，还是技术架构沟通，我们都期待与您进一步对话。",
      items: [
        {
          title: "商务电话",
          value: siteConfig.contact.phone,
          meta: "工作日 09:00–18:00",
          type: "phone",
        },
        {
          title: "商务邮箱",
          value: siteConfig.contact.email,
          meta: "欢迎发送合作咨询与业务需求",
          type: "email",
        },
        {
          title: "公司地址",
          value: siteConfig.contact.address,
          meta: "",
          type: "address",
        },
      ],
      form: {
        title: "商务咨询",
        description: "请留下您的联系方式与合作需求，我们将在收到信息后尽快与您联系。",
        fields: {
          name: { label: "姓名", placeholder: "请输入您的姓名" },
          company: { label: "公司", placeholder: "请输入公司名称" },
          email: { label: "邮箱", placeholder: "请输入联系邮箱" },
          message: {
            label: "咨询内容",
            placeholder: "请简要说明您的合作需求或业务背景（选填）",
          },
        },
        submitLabel: "提交咨询",
      },
    },
  },

  // Footer
  footer: {
    description:
      "面向物流企业的数字化平台，支撑业务协同、平台能力建设与持续演进。",
    columns: [
      {
        title: "产品",
        links: [
          { label: "平台能力", href: "#capabilities" },
          { label: "技术架构", href: "#architecture" },
          { label: "开放接口", href: "#" },
          { label: "数据分析", href: "#" },
        ],
      },
      {
        title: "公司",
        links: [
          { label: "关于我们", href: "#about" },
          { label: "合作伙伴", href: "#" },
          { label: "媒体资讯", href: "#" },
        ],
      },
    ],
  },
};
