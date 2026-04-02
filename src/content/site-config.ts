import type { SiteConfig } from "@/content/content-types";

// =========================================
// Global Brand
// =========================================
// 站点品牌名、品牌短语等全局基础信息。
//
// 常改字段：
// - brand.name
// - brand.tagline

// =========================================
// Global SEO
// =========================================
// 站点标题和描述，供 metadata 使用。
//
// 常改字段：
// - seo.title
// - seo.description

// =========================================
// Global Contact
// =========================================
// 全站统一联系方式，首页联系区和页脚会复用这里的值。
//
// 常改字段：
// - contact.phone
// - contact.email
// - contact.address

// =========================================
// Global Footer
// =========================================
// 站点底部版权和政策链接。
//
// 常改字段：
// - footer.copyright
// - footer.legalLinks

export const siteConfig: SiteConfig = {
  // Brand
  brand: {
    name: "登途云",
    tagline: "物流数字化平台",
  },

  // SEO
  seo: {
    title: "登途云 | 物流数字化平台",
    description:
      "面向物流企业的数字化平台型官方网站，展示平台能力、技术架构、业务场景与合作方式。",
  },

  // Contact
  contact: {
    phone: "010-87531570",
    email: "dengtu@dntu.net",
    address: "北京市大兴区金星路芦东路北京登途云物流科技有限公司",
  },

  // Footer
  footer: {
    copyright: "© 2026 DNTUYUN. All rights reserved.",
    legalLinks: [
      { label: "隐私政策", href: "#" },
      { label: "服务条款", href: "#" },
    ],
  },
};
