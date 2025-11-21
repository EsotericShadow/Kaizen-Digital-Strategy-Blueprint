'use client';
import { useMemo } from 'react';
import parse, { Element, HTMLReactParserOptions } from 'html-react-parser';
import Mermaid from '@/components/Mermaid';

const htmlContent = `

<nav id="TOC" role="doc-toc">
<ul>
<li><a href="#branding-strategy" id="toc-branding-strategy">Branding
Strategy</a>
<ul>
<li><a href="#document-control" id="toc-document-control">Document
Control</a></li>
<li><a href="#process-overview" id="toc-process-overview">Process
Overview</a></li>
<li><a href="#scope" id="toc-scope">Scope</a></li>
<li><a href="#responsibility-authority"
id="toc-responsibility-authority">Responsibility &
Authority</a></li>
<li><a href="#process-map" id="toc-process-map">Process Map</a>
<ul>
<li><a href="#high-level-process-flow"
id="toc-high-level-process-flow">High-Level Process Flow</a></li>
<li><a href="#detailed-phase-flow" id="toc-detailed-phase-flow">Detailed
Phase Flow</a></li>
</ul></li>
<li><a href="#detailed-process-steps"
id="toc-detailed-process-steps">Detailed Process Steps</a>
<ul>
<li><a href="#phase-1-discovery-assessment-session-1"
id="toc-phase-1-discovery-assessment-session-1">Phase 1: Discovery &
Assessment (Session 1)</a></li>
<li><a href="#phase-2-strategy-development-session-2"
id="toc-phase-2-strategy-development-session-2">Phase 2: Strategy
Development (Session 2)</a></li>
<li><a href="#phase-3-brand-identity-creation-session-3"
id="toc-phase-3-brand-identity-creation-session-3">Phase 3: Brand
Identity Creation (Session 3)</a></li>
<li><a href="#phase-4-brand-guidelines-session-4"
id="toc-phase-4-brand-guidelines-session-4">Phase 4: Brand Guidelines
(Session 4)</a></li>
<li><a href="#phase-5-implementation-support"
id="toc-phase-5-implementation-support">Phase 5: Implementation
Support</a></li>
</ul></li>
<li><a href="#success-metrics" id="toc-success-metrics">Success
Metrics</a></li>
<li><a href="#review-continuous-improvement"
id="toc-review-continuous-improvement">Review & Continuous
Improvement</a></li>
<li><a href="#records-documentation"
id="toc-records-documentation">Records & Documentation</a>
<ul>
<li><a href="#records-maintained" id="toc-records-maintained">Records
Maintained</a></li>
<li><a href="#record-retention" id="toc-record-retention">Record
Retention</a></li>
<li><a href="#record-storage" id="toc-record-storage">Record
Storage</a></li>
</ul></li>
<li><a href="#related-documents" id="toc-related-documents">Related
Documents</a>
<ul>
<li><a href="#related-processes" id="toc-related-processes">Related
Processes</a></li>
<li><a href="#related-policies-procedures"
id="toc-related-policies-procedures">Related Policies &
Procedures</a></li>
<li><a href="#related-forms-templates"
id="toc-related-forms-templates">Related Forms & Templates</a></li>
</ul></li>
</ul></li>
</ul>
</nav>
<h1 id="branding-strategy">Branding Strategy</h1>
<h2 id="document-control">Document Control</h2>
<ul>
<li><strong>Document ID</strong>: KDSB-01-BRAND-001</li>
<li><strong>Version</strong>: 1.0</li>
<li><strong>Last Updated</strong>: 2025-01-XX</li>
<li><strong>Next Review</strong>: 2025-04-XX</li>
<li><strong>Owner</strong>: Creative Director / Brand Strategist</li>
<li><strong>Approved By</strong>: [To be assigned]</li>
<li><strong>Approval Date</strong>: [To be assigned]</li>
<li><strong>Status</strong>: Approved</li>
<li><strong>ISO Compliance</strong>: ISO 9001:2015 Quality Management
Systems</li>
</ul>
<hr />
<h2 id="process-overview">Process Overview</h2>
<p><strong>Purpose</strong>: Develop cohesive brand identity and market
positioning<br />
<strong>Owner</strong>: Creative Director / Brand Strategist<br />
<strong>Duration</strong>: 2-4 weeks<br />
<strong>Client Sessions</strong>: 3-4 sessions<br />
<strong>Category</strong>: Branding/Positioning</p>
<hr />
<h2 id="scope">Scope</h2>
<p>This procedure applies to all branding strategy projects at Kaizen
Strategic AI.</p>
<p><strong>In Scope:</strong> - Brand strategy development - Brand
identity creation - Brand guidelines documentation - Brand positioning
and messaging</p>
<p><strong>Out of Scope:</strong> - Logo design (see <a
href="02_Graphic_Logo_Design.md">Graphic/Logo Design Process</a>) -
Website implementation (see <a
href="../02_PLATFORM_PRESENCE/01_Website_Development.md">Website
Development Process</a>) - Social media execution (see <a
href="../04_SOCIAL_COMMUNICATION/01_Social_Media.md">Social Media
Process</a>)</p>
<p><strong>Applicability</strong>: All clients requiring brand strategy
services</p>
<hr />
<h2 id="responsibility-authority">Responsibility & Authority</h2>
<p><strong>Process Owner</strong>: Creative Director / Brand Strategist
- Responsible for process execution and quality - Approves process
changes and improvements - Reviews process effectiveness quarterly -
Escalates issues beyond authority to CEO</p>
<p><strong>Team Members</strong>: - Execute process steps as assigned -
Report issues and suggest improvements - Maintain process
documentation</p>
<p><strong>Escalation</strong>: Issues beyond process owner authority
escalate to CEO/Management</p>
<h2 id="process-map">Process Map</h2>
<h3 id="high-level-process-flow">High-Level Process Flow</h3>
<div data-mermaid-id="mermaid-1"></div>
<h3 id="detailed-phase-flow">Detailed Phase Flow</h3>
<div data-mermaid-id="mermaid-2"></div>
<hr />
<h2 id="detailed-process-steps">Detailed Process Steps</h2>
<h3 id="phase-1-discovery-assessment-session-1">Phase 1: Discovery &
Assessment (Session 1)</h3>
<p><strong>Duration</strong>: 2-3 hours<br />
<strong>Objective</strong>: Understand client’s business, market, and
brand vision</p>
<h4 id="step-1.1-business-analysis">Step 1.1: Business Analysis</h4>
<ul className="task-list">
<li><label><input type="checkbox" / />Review company history and
mission</label></li>
<li><label><input type="checkbox" / />Analyze current market
position</label></li>
<li><label><input type="checkbox" / />Identify target audience and buyer
personas</label></li>
<li><label><input type="checkbox" / />Document competitive
landscape</label></li>
<li><label><input type="checkbox" / />Review existing brand assets (if
any)</label></li>
<li><label><input type="checkbox" / />Document brand values and
culture</label></li>
</ul>
<p><strong>Deliverables</strong>: - Business analysis document - Market
positioning assessment - Competitive analysis report</p>
<h4 id="step-1.2-brand-vision-workshop">Step 1.2: Brand Vision
Workshop</h4>
<ul className="task-list">
<li><label><input type="checkbox" / />Conduct brand visioning
session</label></li>
<li><label><input type="checkbox" / />Identify brand personality
traits</label></li>
<li><label><input type="checkbox" / />Define brand voice and
tone</label></li>
<li><label><input type="checkbox" / />Establish brand
differentiators</label></li>
<li><label><input type="checkbox" / />Document brand
aspirations</label></li>
<li><label><input type="checkbox" / />Capture brand “do nots” (what to
avoid)</label></li>
</ul>
<p><strong>Deliverables</strong>: - Brand vision document - Brand
personality profile - Brand voice guidelines (draft)</p>
<h4 id="step-1.3-asset-audit">Step 1.3: Asset Audit</h4>
<ul className="task-list">
<li><label><input type="checkbox" / />Inventory existing brand
assets</label></li>
<li><label><input type="checkbox" / />Assess asset quality and
consistency</label></li>
<li><label><input type="checkbox" / />Identify gaps in brand
assets</label></li>
<li><label><input type="checkbox" / />Document asset usage
patterns</label></li>
<li><label><input type="checkbox" / />Review brand
touchpoints</label></li>
</ul>
<p><strong>Deliverables</strong>: - Brand asset inventory - Asset
quality assessment - Gap analysis report</p>
<p><strong>Quality Checkpoint</strong>: Client approval of discovery
findings before proceeding</p>
<hr />
<h3 id="phase-2-strategy-development-session-2">Phase 2: Strategy
Development (Session 2)</h3>
<p><strong>Duration</strong>: 2-3 hours<br />
<strong>Objective</strong>: Develop comprehensive brand strategy</p>
<h4 id="step-2.1-brand-positioning">Step 2.1: Brand Positioning</h4>
<ul className="task-list">
<li><label><input type="checkbox" / />Define unique value
proposition</label></li>
<li><label><input type="checkbox" / />Develop brand positioning
statement</label></li>
<li><label><input type="checkbox" / />Create brand messaging
framework</label></li>
<li><label><input type="checkbox" / />Establish brand pillars (3-5 core
concepts)</label></li>
<li><label><input type="checkbox" / />Develop brand story
narrative</label></li>
</ul>
<p><strong>Deliverables</strong>: - Brand positioning statement -
Messaging framework - Brand story document</p>
<h4 id="step-2.2-visual-direction">Step 2.2: Visual Direction</h4>
<ul className="task-list">
<li><label><input type="checkbox" / />Create brand mood board
(Pinterest/visual collection)</label></li>
<li><label><input type="checkbox" / />Research competitor visual
identities</label></li>
<li><label><input type="checkbox" / />Identify 2-3 visual direction
concepts</label></li>
<li><label><input type="checkbox" / />Document visual preferences
(likes/dislikes)</label></li>
<li><label><input type="checkbox" / />Establish visual style
anchors</label></li>
</ul>
<p><strong>Deliverables</strong>: - Brand mood board - Visual direction
concepts (2-3) - Visual style guide (draft)</p>
<h4 id="step-2.3-brand-architecture">Step 2.3: Brand Architecture</h4>
<ul className="task-list">
<li><label><input type="checkbox" / />Define brand hierarchy (if
applicable)</label></li>
<li><label><input type="checkbox" / />Establish naming
conventions</label></li>
<li><label><input type="checkbox" / />Create brand extension
strategy</label></li>
<li><label><input type="checkbox" / />Document brand
relationships</label></li>
</ul>
<p><strong>Deliverables</strong>: - Brand architecture document - Naming
guidelines</p>
<p><strong>Quality Checkpoint</strong>: Client approval of brand
strategy before creative development</p>
<hr />
<h3 id="phase-3-brand-identity-creation-session-3">Phase 3: Brand
Identity Creation (Session 3)</h3>
<p><strong>Duration</strong>: 3-4 hours<br />
<strong>Objective</strong>: Develop visual brand identity</p>
<h4 id="step-3.1-logo-design">Step 3.1: Logo Design</h4>
<p><em>See <a
href="../01_BRANDING_POSITIONING/02_Graphic_Logo_Design.md">Graphic/Logo
Design Process</a></em> - [ ] Follow Graphic/Logo Design Process - [ ]
Ensure alignment with brand strategy - [ ] Integrate brand positioning
into logo</p>
<h4 id="step-3.2-color-palette-development">Step 3.2: Color Palette
Development</h4>
<ul className="task-list">
<li><label><input type="checkbox" / />Research color psychology for
brand</label></li>
<li><label><input type="checkbox" / />Develop primary color palette (3-5
colors)</label></li>
<li><label><input type="checkbox" / />Develop secondary color
palette</label></li>
<li><label><input type="checkbox" / />Create color usage
guidelines</label></li>
<li><label><input type="checkbox" / />Test color accessibility (WCAG
compliance)</label></li>
<li><label><input type="checkbox" / />Document color codes (HEX, RGB,
CMYK, Pantone)</label></li>
</ul>
<p><strong>Deliverables</strong>: - Color palette document - Color usage
guidelines - Color accessibility report</p>
<h4 id="step-3.3-typography-system">Step 3.3: Typography System</h4>
<ul className="task-list">
<li><label><input type="checkbox" / />Select primary typeface
(headings)</label></li>
<li><label><input type="checkbox" / />Select secondary typeface
(body)</label></li>
<li><label><input type="checkbox" / />Define typography
hierarchy</label></li>
<li><label><input type="checkbox" / />Create typography scale</label></li>
<li><label><input type="checkbox" / />Document font usage
guidelines</label></li>
<li><label><input type="checkbox" / />License and provide font
files</label></li>
</ul>
<p><strong>Deliverables</strong>: - Typography system document - Font
files and licenses - Typography usage guidelines</p>
<h4 id="step-3.4-visual-elements">Step 3.4: Visual Elements</h4>
<ul className="task-list">
<li><label><input type="checkbox" / />Design icon system (if
needed)</label></li>
<li><label><input type="checkbox" / />Create pattern/texture library (if
needed)</label></li>
<li><label><input type="checkbox" / />Develop illustration style (if
needed)</label></li>
<li><label><input type="checkbox" / />Design photography style
guide</label></li>
<li><label><input type="checkbox" / />Create graphic element
library</label></li>
</ul>
<p><strong>Deliverables</strong>: - Visual elements library - Style
guide for each element type</p>
<p><strong>Quality Checkpoint</strong>: Client approval of brand
identity elements</p>
<hr />
<h3 id="phase-4-brand-guidelines-session-4">Phase 4: Brand Guidelines
(Session 4)</h3>
<p><strong>Duration</strong>: 2 hours<br />
<strong>Objective</strong>: Create comprehensive brand guidelines
document</p>
<h4 id="step-4.1-brand-guidelines-compilation">Step 4.1: Brand
Guidelines Compilation</h4>
<ul className="task-list">
<li><label><input type="checkbox" / />Compile all brand
elements</label></li>
<li><label><input type="checkbox" / />Document logo usage
(correct/incorrect examples)</label></li>
<li><label><input type="checkbox" / />Document color usage
rules</label></li>
<li><label><input type="checkbox" / />Document typography
rules</label></li>
<li><label><input type="checkbox" / />Create brand application
examples</label></li>
<li><label><input type="checkbox" / />Document brand voice and
tone</label></li>
<li><label><input type="checkbox" / />Include brand story and
positioning</label></li>
</ul>
<p><strong>Deliverables</strong>: - Complete brand guidelines document
(PDF) - Brand guidelines presentation</p>
<h4 id="step-4.2-brand-asset-package">Step 4.2: Brand Asset Package</h4>
<ul className="task-list">
<li><label><input type="checkbox" / />Package all logo files (variations,
formats)</label></li>
<li><label><input type="checkbox" / />Package color palette
files</label></li>
<li><label><input type="checkbox" / />Package font files</label></li>
<li><label><input type="checkbox" / />Package icon/visual element
files</label></li>
<li><label><input type="checkbox" / />Create brand asset folder
structure</label></li>
<li><label><input type="checkbox" / />Document file naming
conventions</label></li>
</ul>
<p><strong>Deliverables</strong>: - Brand asset package (organized
folder) - Asset delivery document</p>
<p><strong>Quality Checkpoint</strong>: Final client approval of brand
guidelines</p>
<hr />
<h3 id="phase-5-implementation-support">Phase 5: Implementation
Support</h3>
<p><strong>Duration</strong>: Ongoing<br />
<strong>Objective</strong>: Support brand implementation</p>
<h4 id="step-5.1-implementation-planning">Step 5.1: Implementation
Planning</h4>
<ul className="task-list">
<li><label><input type="checkbox" / />Create brand rollout
plan</label></li>
<li><label><input type="checkbox" / />Prioritize brand
touchpoints</label></li>
<li><label><input type="checkbox" / />Schedule brand
implementation</label></li>
<li><label><input type="checkbox" / />Identify implementation
resources</label></li>
</ul>
<h4 id="step-5.2-quality-assurance">Step 5.2: Quality Assurance</h4>
<ul className="task-list">
<li><label><input type="checkbox" / />Review brand
applications</label></li>
<li><label><input type="checkbox" / />Ensure brand
consistency</label></li>
<li><label><input type="checkbox" / />Provide brand usage
feedback</label></li>
<li><label><input type="checkbox" / />Document brand violations (if
any)</label></li>
</ul>
<p><strong>Deliverables</strong>: - Brand rollout plan - Brand
implementation checklist</p>
<hr />
<h2 id="success-metrics">Success Metrics</h2>
<ul>
<li><strong>Brand Consistency Score</strong>: 95%+ across all
touchpoints</li>
<li><strong>Client Satisfaction</strong>: 4.8/5.0</li>
<li><strong>Brand Recognition</strong>: Measurable improvement in 6
months</li>
<li><strong>Implementation Timeline</strong>: On-time delivery</li>
</ul>
<h2 id="review-continuous-improvement">Review & Continuous
Improvement</h2>
<ul>
<li>Quarterly review of brand strategy effectiveness</li>
<li>Annual brand audit and refresh assessment</li>
<li>Client feedback integration</li>
<li>Market trend analysis and brand evolution</li>
</ul>
<hr />
<h2 id="records-documentation">Records & Documentation</h2>
<h3 id="records-maintained">Records Maintained</h3>
<ul>
<li>Client discovery documents</li>
<li>Brand strategy documents</li>
<li>Brand guidelines (final versions)</li>
<li>Approval records</li>
<li>Client feedback records</li>
<li>Process improvement notes</li>
</ul>
<h3 id="record-retention">Record Retention</h3>
<ul>
<li><strong>Client Documents</strong>: 7 years or as required by
contract</li>
<li><strong>Process Records</strong>: 5 years</li>
<li><strong>Approval Records</strong>: 7 years</li>
</ul>
<h3 id="record-storage">Record Storage</h3>
<ul>
<li><strong>Location</strong>: [Client project folders / Document
management system]</li>
<li><strong>Access</strong>: Authorized personnel only</li>
<li><strong>Backup</strong>: Regular backup schedule</li>
</ul>
<hr />
<h2 id="related-documents">Related Documents</h2>
<h3 id="related-processes">Related Processes</h3>
<ul>
<li><a href="02_Graphic_Logo_Design.md">Graphic/Logo Design</a> - Logo
creation for brand identity</li>
<li><a href="../02_PLATFORM_PRESENCE/01_Website_Development.md">Website
Development</a> - Brand implementation on website</li>
<li><a href="../04_SOCIAL_COMMUNICATION/01_Social_Media.md">Social
Media</a> - Brand voice and visual application</li>
</ul>
<h3 id="related-policies-procedures">Related Policies &
Procedures</h3>
<ul>
<li>Client Onboarding Procedure</li>
<li>Quality Assurance Procedures</li>
<li>Document Control Procedure</li>
</ul>
<h3 id="related-forms-templates">Related Forms & Templates</h3>
<ul>
<li>Client Intake Form</li>
<li>Brand Discovery Questionnaire</li>
<li>Approval Form</li>
<li>Feedback Form</li>
</ul>
<hr />
<p><em>Part of the Kaizen Digital Strategy Blueprint -
Branding/Positioning Category</em> <em>ISO 9001:2015 Compliant Process
Documentation</em></p>

`;

const mermaidDiagrams: Record<string, string> = {
  "mermaid-1": `flowchart TD
    A[Start: Client Engagement] --> B[Phase 1: Discovery & Assessment]
    B --> C{Client Approval}
    C -->|Approved| D[Phase 2: Strategy Development]
    C -->|Revisions| B
    D --> E{Client Approval}
    E -->|Approved| F[Phase 3: Brand Identity Creation]
    E -->|Revisions| D
    F --> G{Client Approval}
    G -->|Approved| H[Phase 4: Brand Guidelines]
    G -->|Revisions| F
    H --> I{Client Approval}
    I -->|Approved| J[Phase 5: Implementation Support]
    I -->|Revisions| H
    J --> K[End: Brand Delivered]
    
    style A fill:#D62828,stroke:#1E1E1E,color:#fff
    style K fill:#D62828,stroke:#1E1E1E,color:#fff
    style C fill:#C9C9C9,stroke:#1E1E1E
    style E fill:#C9C9C9,stroke:#1E1E1E
    style G fill:#C9C9C9,stroke:#1E1E1E
    style I fill:#C9C9C9,stroke:#1E1E1E`,
  "mermaid-2": `flowchart LR
    subgraph P1["Phase 1: Discovery & Assessment"]
        P1A[Business Analysis] --> P1B[Brand Vision Workshop]
        P1B --> P1C[Asset Audit]
    end
    
    subgraph P2["Phase 2: Strategy Development"]
        P2A[Brand Positioning] --> P2B[Visual Direction]
        P2B --> P2C[Brand Architecture]
    end
    
    subgraph P3["Phase 3: Brand Identity Creation"]
        P3A[Logo Design] --> P3B[Color Palette]
        P3B --> P3C[Typography System]
        P3C --> P3D[Visual Elements]
    end
    
    subgraph P4["Phase 4: Brand Guidelines"]
        P4A[Guidelines Compilation] --> P4B[Asset Package]
    end
    
    subgraph P5["Phase 5: Implementation Support"]
        P5A[Implementation Planning] --> P5B[Quality Assurance]
    end
    
    P1 --> P2
    P2 --> P3
    P3 --> P4
    P4 --> P5
    
    style P1 fill:#F5F5F5,stroke:#1E1E1E
    style P2 fill:#F5F5F5,stroke:#1E1E1E
    style P3 fill:#F5F5F5,stroke:#1E1E1E
    style P4 fill:#F5F5F5,stroke:#1E1E1E
    style P5 fill:#F5F5F5,stroke:#1E1E1E`
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
