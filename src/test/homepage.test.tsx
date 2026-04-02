import { render, screen } from "@testing-library/react";
import Home from "@/app/page";
import { homePageContent } from "@/content/homepage-content";
import { siteConfig } from "@/content/site-config";

describe("homepage", () => {
  it("exposes editable homepage content through dedicated content files", () => {
    expect(siteConfig.brand.name).toBe("登途云");
    expect(siteConfig.seo.title).toBe("登途云 | 物流数字化平台");
    expect(homePageContent.hero.titleLines[0]).toBe("连接物流全链路");
    expect(homePageContent.sections.capabilities.title).toBe(
      "六大能力，共属一个平台体系",
    );
  });

  it("renders the core homepage sections from the design", () => {
    render(<Home />);

    expect(screen.getAllByText("登途云").length).toBeGreaterThan(0);
    expect(screen.getByText("连接物流全链路")).toBeInTheDocument();
    expect(screen.getByText("六大能力，共属一个平台体系")).toBeInTheDocument();
    expect(
      screen.getByText("统一的平台架构，支撑业务持续演进"),
    ).toBeInTheDocument();
    expect(screen.getByText("欢迎与我们探讨合作可能")).toBeInTheDocument();
  });
});
