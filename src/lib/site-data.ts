// TODO: Replace a few section descriptions with the final approved copy if the
// original Figma text source becomes available. Current text is reconstructed
// from screenshots and keeps the intended structure and tone.

export const navigation = [
  { label: "平台能力", href: "#capabilities" },
  { label: "技术架构", href: "#architecture" },
  { label: "关于我们", href: "#about" },
  { label: "联系我们", href: "#contact" },
];

export const heroStats = [
  { value: "50+", label: "服务物流企业" },
  { value: "6", label: "核心平台模块" },
  { value: "99.9%", label: "系统可用性" },
];

export const valueItems = [
  {
    index: "01",
    title: "平台化能力",
    description:
      "统一承载覆盖物流全链路业务，支持多组织、多角色协同，具备持续扩展的平台化承载能力，而非单点工具的堆叠。",
  },
  {
    index: "02",
    title: "技术可扩展",
    description:
      "模块化架构设计，开放接口标准，支持与现有系统无缝集成，满足不同规模物流企业的个性化建设需求。",
  },
  {
    index: "03",
    title: "场景深度优先",
    description:
      "深度理解真实物流运营链路，每个功能模块均围绕真实业务流构建，而非泛化流程在物流领域的简单迁移。",
  },
];

export const capabilityCards = [
  {
    title: "运输管理",
    description:
      "覆盖运单创建、调度、在途跟踪与交付的全流程管理，支持多运输模式。",
  },
  {
    title: "组织协同",
    description:
      "更适于多节点组织架构配置，组织流程权限管理，满足集团型物流企业需求。",
  },
  {
    title: "运营可视化",
    description:
      "实时运营看板、核心指标透明可观测，支持运营决策与效率持续优化。",
  },
  {
    title: "开放接口",
    description:
      "标准 REST API 与 Webhook，支持与 ERP、WMS、财务系统灵活对接。",
  },
];

export const capabilityTags = [
  "多角色工作台",
  "业务流程建模",
  "跨组织协同",
  "结算闭环",
];

export const platformBaseTags = ["模块化", "多租户", "消息总线", "服务治理"];

export const architectureLayers = [
  {
    level: "L4",
    name: "应用层",
    side: "APP",
    items: ["调度中心", "运营看板", "门户", "移动端"],
  },
  {
    level: "L3",
    name: "业务层",
    side: "BIZ",
    items: ["运输引擎", "协同服务", "订单", "轨迹"],
  },
  {
    level: "L2",
    name: "数据层",
    side: "DATA",
    items: ["数仓", "实时计算", "主数据", "BI"],
  },
  {
    level: "L1",
    name: "基础设施",
    side: "INFRA",
    items: ["服务集群", "消息总线", "权限", "SRE"],
  },
];

export const architectureHighlights = [
  "模块化设计  —  按需组合，独立演进",
  "多端协同  —  统一数据模型与服务层",
  "开放集成  —  标准接口体系，无缝对接",
  "数据贯通  —  全链路可观测与分析",
  "稳定可靠  —  企业级安全与高可用保障",
];

export const scenarios = [
  {
    index: "01",
    tag: "FTL",
    title: "整车物流企业",
    description:
      "以整车运输为核心业务，覆盖从订单接入、调度分配、在途跟踪到回单结算的完整数字化运营链路。",
    chips: ["订单", "调度", "跟踪", "结算"],
  },
  {
    index: "02",
    tag: "GROUP",
    title: "多组织物流集团",
    description:
      "集团下多分公司、多业务线统一平台管理，兼顾属地化运作流程，满足集团化管控与独立运营双重诉求。",
    chips: ["集团", "分权", "汇总", "管控"],
  },
  {
    index: "03",
    tag: "PLATFORM",
    title: "平台型货运业务",
    description:
      "以平台模式撮合货主与承运商，支持多方接入、在线协同、交易结算的数字化运作，构建平台生态。",
    chips: ["撮合", "接入", "交易", "生态"],
  },
];

export const aboutStats = [
  {
    value: "2020",
    title: "成立年份",
    description: "专注物流数字化",
  },
  {
    value: "50+",
    title: "服务企业",
    description: "覆盖多类物流场景",
  },
  {
    value: "6",
    title: "核心平台模块",
    description: "全链路能力覆盖",
  },
  {
    value: "99.9%",
    title: "系统可用性",
    description: "企业级稳定保障",
  },
];

export const contactItems = [
  {
    title: "商务电话",
    value: "+86 021-0000-0000",
    meta: "工作日 09:00-18:00",
    type: "phone",
  },
  {
    title: "商务邮箱",
    value: "hello@logiplatform.com",
    meta: "通常 1 个工作日内回复",
    type: "email",
  },
  {
    title: "公司地址",
    value: "上海市浦东新区张江高科技园区",
    meta: "科苑路 88 号",
    type: "address",
  },
];

export const footerColumns = [
  {
    title: "产品",
    links: ["平台能力", "技术架构", "开放接口", "数据分析"],
  },
  {
    title: "公司",
    links: ["关于我们", "合作伙伴", "媒体资讯"],
  },
];
