'use client';
import { useMemo } from 'react';
import parse, { Element, HTMLReactParserOptions } from 'html-react-parser';
import Mermaid from '@/components/Mermaid';

const htmlContent = `

<nav id="TOC" role="doc-toc">
<ul>
<li><a href="#web-appmobile-app" id="toc-web-appmobile-app">Web
App/Mobile App</a>
<ul>
<li><a href="#process-overview" id="toc-process-overview">Process
Overview</a></li>
<li><a href="#process-map" id="toc-process-map">Process Map</a>
<ul>
<li><a href="#high-level-process-flow"
id="toc-high-level-process-flow">High-Level Process Flow</a></li>
</ul></li>
<li><a href="#detailed-process-steps"
id="toc-detailed-process-steps">Detailed Process Steps</a>
<ul>
<li><a href="#phase-1-discovery-requirements"
id="toc-phase-1-discovery-requirements">Phase 1: Discovery &
Requirements</a></li>
<li><a href="#phase-2-design" id="toc-phase-2-design">Phase 2:
Design</a></li>
<li><a href="#phase-3-development" id="toc-phase-3-development">Phase 3:
Development</a></li>
<li><a href="#phase-4-deployment-launch"
id="toc-phase-4-deployment-launch">Phase 4: Deployment &
Launch</a></li>
<li><a href="#phase-5-support-maintenance"
id="toc-phase-5-support-maintenance">Phase 5: Support &
Maintenance</a></li>
</ul></li>
<li><a href="#success-metrics" id="toc-success-metrics">Success
Metrics</a></li>
<li><a href="#review-continuous-improvement"
id="toc-review-continuous-improvement">Review & Continuous
Improvement</a></li>
<li><a href="#related-processes" id="toc-related-processes">Related
Processes</a></li>
</ul></li>
</ul>
</nav>
<h1 id="web-appmobile-app">Web App/Mobile App</h1>
<h2 id="process-overview">Process Overview</h2>
<p><strong>Purpose</strong>: Develop custom web and mobile
applications<br />
<strong>Owner</strong>: Development Lead<br />
<strong>Duration</strong>: 8-24 weeks (varies by complexity)<br />
<strong>Client Sessions</strong>: 5-8 sessions<br />
<strong>Category</strong>: Platform/Presence</p>
<h2 id="process-map">Process Map</h2>
<h3 id="high-level-process-flow">High-Level Process Flow</h3>
<div data-mermaid-id="mermaid-1"></div>
<hr />
<h2 id="detailed-process-steps">Detailed Process Steps</h2>
<h3 id="phase-1-discovery-requirements">Phase 1: Discovery &
Requirements</h3>
<p><strong>Duration</strong>: 2-3 weeks<br />
<strong>Objective</strong>: Define project requirements</p>
<h4 id="step-1.1-requirements-gathering">Step 1.1: Requirements
Gathering</h4>
<ul className="task-list">
<li><label><input type="checkbox" / />Conduct stakeholder
interviews</label></li>
<li><label><input type="checkbox" / />Document functional
requirements</label></li>
<li><label><input type="checkbox" / />Document non-functional
requirements</label></li>
<li><label><input type="checkbox" / />Define user personas</label></li>
<li><label><input type="checkbox" / />Create user stories</label></li>
<li><label><input type="checkbox" / />Define success criteria</label></li>
</ul>
<p><strong>Deliverables</strong>: - Requirements document - User stories
- Success criteria</p>
<h4 id="step-1.2-technical-planning">Step 1.2: Technical Planning</h4>
<ul className="task-list">
<li><label><input type="checkbox" / />Define technology stack</label></li>
<li><label><input type="checkbox" / />Plan architecture</label></li>
<li><label><input type="checkbox" / />Plan integrations</label></li>
<li><label><input type="checkbox" / />Plan security</label></li>
<li><label><input type="checkbox" / />Plan scalability</label></li>
</ul>
<p><strong>Deliverables</strong>: - Technical specification -
Architecture document</p>
<p><strong>Quality Checkpoint</strong>: Client approval of
requirements</p>
<hr />
<h3 id="phase-2-design">Phase 2: Design</h3>
<p><strong>Duration</strong>: 3-4 weeks<br />
<strong>Objective</strong>: Design application</p>
<h4 id="step-2.1-ux-design">Step 2.1: UX Design</h4>
<ul className="task-list">
<li><label><input type="checkbox" / />Create user flows</label></li>
<li><label><input type="checkbox" / />Create wireframes</label></li>
<li><label><input type="checkbox" / />Design information
architecture</label></li>
<li><label><input type="checkbox" / />Create prototypes</label></li>
<li><label><input type="checkbox" / />Conduct user testing (if
applicable)</label></li>
</ul>
<p><strong>Deliverables</strong>: - User flows - Wireframes -
Prototypes</p>
<h4 id="step-2.2-ui-design">Step 2.2: UI Design</h4>
<ul className="task-list">
<li><label><input type="checkbox" / />Create visual design</label></li>
<li><label><input type="checkbox" / />Apply brand identity</label></li>
<li><label><input type="checkbox" / />Create design system</label></li>
<li><label><input type="checkbox" / />Design all screens</label></li>
<li><label><input type="checkbox" / />Create asset library</label></li>
</ul>
<p><strong>Deliverables</strong>: - UI designs - Design system - Asset
library</p>
<p><strong>Quality Checkpoint</strong>: Client approval of designs</p>
<hr />
<h3 id="phase-3-development">Phase 3: Development</h3>
<p><strong>Duration</strong>: 8-16 weeks<br />
<strong>Objective</strong>: Build application</p>
<h4 id="step-3.1-development-setup">Step 3.1: Development Setup</h4>
<ul className="task-list">
<li><label><input type="checkbox" / />Set up development
environment</label></li>
<li><label><input type="checkbox" / />Set up version control</label></li>
<li><label><input type="checkbox" / />Set up CI/CD</label></li>
<li><label><input type="checkbox" / />Set up testing
environment</label></li>
</ul>
<h4 id="step-3.2-feature-development">Step 3.2: Feature Development</h4>
<ul className="task-list">
<li><label><input type="checkbox" / />Develop features
(sprint-based)</label></li>
<li><label><input type="checkbox" / />Implement integrations</label></li>
<li><label><input type="checkbox" / />Implement security</label></li>
<li><label><input type="checkbox" / />Code reviews</label></li>
<li><label><input type="checkbox" / />Unit testing</label></li>
</ul>
<p><strong>Deliverables</strong>: - Development progress - Feature
completion</p>
<h4 id="step-3.3-testing">Step 3.3: Testing</h4>
<ul className="task-list">
<li><label><input type="checkbox" / />Unit testing</label></li>
<li><label><input type="checkbox" / />Integration testing</label></li>
<li><label><input type="checkbox" / />User acceptance testing</label></li>
<li><label><input type="checkbox" / />Performance testing</label></li>
<li><label><input type="checkbox" / />Security testing</label></li>
</ul>
<p><strong>Deliverables</strong>: - Test results - Bug fixes</p>
<p><strong>Quality Checkpoint</strong>: All tests passing</p>
<hr />
<h3 id="phase-4-deployment-launch">Phase 4: Deployment & Launch</h3>
<p><strong>Duration</strong>: 1-2 weeks<br />
<strong>Objective</strong>: Deploy and launch application</p>
<h4 id="step-4.1-pre-launch">Step 4.1: Pre-Launch</h4>
<ul className="task-list">
<li><label><input type="checkbox" / />Final testing</label></li>
<li><label><input type="checkbox" / />Performance
optimization</label></li>
<li><label><input type="checkbox" / />Security audit</label></li>
<li><label><input type="checkbox" / />Prepare deployment</label></li>
<li><label><input type="checkbox" / />Prepare launch
materials</label></li>
</ul>
<h4 id="step-4.2-deployment">Step 4.2: Deployment</h4>
<ul className="task-list">
<li><label><input type="checkbox" / />Deploy to production</label></li>
<li><label><input type="checkbox" / />Verify functionality</label></li>
<li><label><input type="checkbox" / />Monitor performance</label></li>
<li><label><input type="checkbox" / />Address issues</label></li>
</ul>
<h4 id="step-4.3-launch">Step 4.3: Launch</h4>
<ul className="task-list">
<li><label><input type="checkbox" / />Launch application</label></li>
<li><label><input type="checkbox" / />Announce launch</label></li>
<li><label><input type="checkbox" / />Monitor closely</label></li>
<li><label><input type="checkbox" / />Address launch issues</label></li>
</ul>
<p><strong>Deliverables</strong>: - Live application - Launch report</p>
<hr />
<h3 id="phase-5-support-maintenance">Phase 5: Support &
Maintenance</h3>
<p><strong>Duration</strong>: Ongoing<br />
<strong>Objective</strong>: Ongoing support</p>
<h4 id="step-5.1-support">Step 5.1: Support</h4>
<ul className="task-list">
<li><label><input type="checkbox" / />Monitor application</label></li>
<li><label><input type="checkbox" / />Address bugs</label></li>
<li><label><input type="checkbox" / />Provide user support</label></li>
<li><label><input type="checkbox" / />Collect feedback</label></li>
</ul>
<h4 id="step-5.2-maintenance">Step 5.2: Maintenance</h4>
<ul className="task-list">
<li><label><input type="checkbox" / />Regular updates</label></li>
<li><label><input type="checkbox" / />Security patches</label></li>
<li><label><input type="checkbox" / />Performance
optimization</label></li>
<li><label><input type="checkbox" / />Feature enhancements</label></li>
</ul>
<p><strong>Deliverables</strong>: - Support reports - Update logs</p>
<hr />
<h2 id="success-metrics">Success Metrics</h2>
<ul>
<li><strong>Functionality</strong>: 100% requirements met</li>
<li><strong>Performance</strong>: &lt;3 second load time</li>
<li><strong>Uptime</strong>: 99.9%</li>
<li><strong>User Satisfaction</strong>: 4.5/5.0</li>
<li><strong>Bug Rate</strong>: &lt;1% of features</li>
</ul>
<h2 id="review-continuous-improvement">Review & Continuous
Improvement</h2>
<ul>
<li>Post-launch review (30 days)</li>
<li>Quarterly performance reviews</li>
<li>Annual feature planning</li>
<li>Continuous user feedback integration</li>
</ul>
<hr />
<h2 id="related-processes">Related Processes</h2>
<ul>
<li><a
href="../01_BRANDING_POSITIONING/01_Branding_Strategy.md">Branding
Strategy</a> - Brand identity for app</li>
<li><a href="01_Website_Development.md">Website Development</a> -
Related web development</li>
<li><a
href="../05_SYSTEMS_AUTOMATION/01_AI_Automation.md">AI/Automation</a> -
AI features integration</li>
</ul>
<hr />
<p><em>Part of the Kaizen Digital Strategy Blueprint - Platform/Presence
Category</em></p>

`;

const mermaidDiagrams: Record<string, string> = {
  "mermaid-1": `flowchart TD
    A[Start: Client Engagement] --> B[Phase 1: Discovery & Requirements]
    B --> B1[Requirements Gathering]
    B1 --> B2[Technical Planning]
    B2 --> C{Client Approval}
    C -->|Approved| D[Phase 2: Design]
    C -->|Revisions| B
    D --> D1[UX Design<br>User Flows & Wireframes]
    D1 --> D2[UI Design<br>Visual Design & Design System]
    D2 --> E{Client Approval}
    E -->|Approved| F[Phase 3: Development]
    E -->|Revisions| D
    F --> F1[Development Setup]
    F1 --> F2[Feature Development<br>Sprint-based]
    F2 --> F3[Testing<br>Unit, Integration, UAT]
    F3 --> G{All Tests Pass?}
    G -->|Yes| H[Phase 4: Deployment & Launch]
    G -->|No| F
    H --> H1[Pre-Launch<br>Final Testing & Optimization]
    H1 --> H2[Deployment<br>Production]
    H2 --> H3[Launch<br>Announce & Monitor]
    H3 --> I[Phase 5: Support & Maintenance]
    I --> J[End: Application Live]
    
    style A fill:#D62828,stroke:#1E1E1E,color:#fff
    style J fill:#D62828,stroke:#1E1E1E,color:#fff
    style C fill:#C9C9C9,stroke:#1E1E1E
    style E fill:#C9C9C9,stroke:#1E1E1E
    style G fill:#C9C9C9,stroke:#1E1E1E`
};

export default function Page() {
  const processedContent = useMemo(() => {
    const options: HTMLReactParserOptions = {
      replace: (domNode) => {
        if (domNode instanceof Element && domNode.attribs?.['data-mermaid-id']) {
          const mermaidId = domNode.attribs['data-mermaid-id'];
          const chart = mermaidDiagrams[mermaidId];
          if (chart) {
            return <Mermaid chart={chart} id={mermaidId} />;
          }
        }
      },
    };
    return parse(htmlContent, options);
  }, []);

  return (
    <div className="document-container">
      {processedContent}
    </div>
  );
}
