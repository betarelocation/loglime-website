import type { Metadata } from "next";
import { CalendarCheck, CheckCircle, Smartphone } from "lucide-react";
import { DashboardMock } from "@/components/marketing/DashboardMock";
import { RequestDemoForm } from "@/components/marketing/RequestDemoForm";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { createMetadata, routeMeta } from "@/lib/seo";

export const metadata: Metadata = createMetadata(routeMeta("/demo"));

const demoHighlights = [
  {
    title: "Customer app preview",
    copy: "See the app the restaurant customer will actually use.",
    Icon: Smartphone
  },
  {
    title: "Launch checklist",
    copy: "Review brand, menu, customer flow and rollout assets.",
    Icon: CheckCircle
  }
];

export default function DemoPage() {
  return (
    <main>
      <section className="hero">
        <div className="container grid-2" style={{ alignItems: "center" }}>
          <div className="section-head">
            <Badge>Restaurant app demo</Badge>
            <h1 className="display">See a restaurant app package in action.</h1>
            <p className="sub">
              Walk through online ordering, digital menu, table booking, loyalty offers and customer updates in one clean app
              launch flow.
            </p>
            <div className="cta-row">
              <ButtonLink href="/app/dashboard" variant="outline" size="lg">
                View sample app
              </ButtonLink>
              <ButtonLink href="/pricing" size="lg">
                View packages
              </ButtonLink>
            </div>
          </div>
          <RequestDemoForm />
        </div>
      </section>
      <section className="nex-section nex-section-white">
        <div className="container grid-2" style={{ alignItems: "center" }}>
          <DashboardMock />
          <div className="grid-1" style={{ display: "grid", gap: 18 }}>
            {demoHighlights.map(({ title, copy, Icon }) => (
              <article className="nex-soft-card" key={title}>
                <span className="feature-icon">
                  <Icon size={22} />
                </span>
                <h2>{title}</h2>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
