'use client';
import { useMemo } from 'react';
import parse, { Element, HTMLReactParserOptions } from 'html-react-parser';
import Mermaid from '@/components/Mermaid';

const htmlContent = `

<nav id="TOC" role="doc-toc">
<ul>
<li><a href="#website-development" id="toc-website-development">Website
Development</a>
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
<li><a href="#phase-1-discovery-session-1"
id="toc-phase-1-discovery-session-1">Phase 1: Discovery Session
1</a></li>
<li><a href="#phase-2-design-development"
id="toc-phase-2-design-development">Phase 2: Design &
Development</a></li>
<li><a href="#phase-3-review-session-2"
id="toc-phase-3-review-session-2">Phase 3: Review Session 2</a></li>
<li><a href="#phase-4-launch" id="toc-phase-4-launch">Phase 4:
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
<h1 id="website-development">Website Development</h1>
<h2 id="process-overview">Process Overview</h2>
<p><strong>Purpose</strong>: Create modern, cohesive, high-quality
websites<br />
<strong>Owner</strong>: Web Development Lead<br />
<strong>Duration</strong>: 3-6 weeks (varies by complexity)<br />
<strong>Client Sessions</strong>: 2 sessions minimum<br />
<strong>Category</strong>: Platform/Presence</p>
<h2 id="process-map">Process Map</h2>
<h3 id="high-level-process-flow">High-Level Process Flow</h3>
<div data-mermaid-id="mermaid-1"></div>
<hr />
<h2 id="detailed-process-steps">Detailed Process Steps</h2>
<h3 id="phase-1-discovery-session-1">Phase 1: Discovery Session 1</h3>
<p><strong>Duration</strong>: 2-3 hours<br />
<strong>Objective</strong>: Extract assets, define requirements,
establish vision</p>
<h4 id="step-1.1-asset-collection-assessment">Step 1.1: Asset Collection
& Assessment</h4>
<ul className="task-list">
<li><label><input type="checkbox" / /><strong>Images</strong>: Inventory
existing images</label>
<ul className="task-list">
<li><label><input type="checkbox" / />Assess image quality and
resolution</label></li>
<li><label><input type="checkbox" / />Document image sources and
licensing</label></li>
<li><label><input type="checkbox" / />Identify image gaps</label></li>
<li><label><input type="checkbox" / />Plan image acquisition
(client-provided, stock, custom photography)</label></li>
</ul></li>
<li><label><input type="checkbox" / /><strong>Logo</strong>: Assess logo
availability</label>
<ul className="task-list">
<li><label><input type="checkbox" / />If logo exists: Collect all logo
files and variations</label></li>
<li><label><input type="checkbox" / />If no logo: Recommend Brand Kit +
Logo Package (discount rate)</label></li>
<li><label><input type="checkbox" / />Document logo
specifications</label></li>
</ul></li>
<li><label><input type="checkbox" / /><strong>Graphics</strong>: Inventory
existing graphics</label>
<ul className="task-list">
<li><label><input type="checkbox" / />Collect brand graphics, icons,
illustrations</label></li>
<li><label><input type="checkbox" / />Assess graphic quality and
format</label></li>
<li><label><input type="checkbox" / />Document graphic usage
rights</label></li>
</ul></li>
<li><label><input type="checkbox" / /><strong>Animations</strong>: Assess
animation needs</label>
<ul className="task-list">
<li><label><input type="checkbox" / />Identify animation
requirements</label></li>
<li><label><input type="checkbox" / />Document animation style
preferences</label></li>
</ul></li>
<li><label><input type="checkbox" / /><strong>Typography</strong>: Collect
font information</label>
<ul className="task-list">
<li><label><input type="checkbox" / />Identify existing brand
fonts</label></li>
<li><label><input type="checkbox" / />Document typography
preferences</label></li>
<li><label><input type="checkbox" / />Plan typography system</label></li>
</ul></li>
<li><label><input type="checkbox" / /><strong>Color Palette</strong>:
Collect color information</label>
<ul className="task-list">
<li><label><input type="checkbox" / />Identify brand colors</label></li>
<li><label><input type="checkbox" / />Document color codes (HEX,
RGB)</label></li>
<li><label><input type="checkbox" / />Assess color
accessibility</label></li>
</ul></li>
<li><label><input type="checkbox" / /><strong>Favicon</strong>: Assess
favicon availability</label>
<ul className="task-list">
<li><label><input type="checkbox" / />Collect existing favicon or plan
creation</label></li>
</ul></li>
<li><label><input type="checkbox" / /><strong>Icons</strong>: Inventory
icon needs</label>
<ul className="task-list">
<li><label><input type="checkbox" / />Identify required icons</label></li>
<li><label><input type="checkbox" / />Plan icon system</label></li>
</ul></li>
<li><label><input type="checkbox" / /><strong>Copy</strong>: Collect
existing copy</label>
<ul className="task-list">
<li><label><input type="checkbox" / />Gather all existing website
copy</label></li>
<li><label><input type="checkbox" / />Document copy tone and
style</label></li>
<li><label><input type="checkbox" / />Identify copy gaps</label></li>
</ul></li>
</ul>
<p><strong>Deliverables</strong>: - Asset inventory document - Asset
quality assessment - Asset gap analysis - Recommendations for missing
assets</p>
<h4 id="step-1.2-visual-research-lookbook-creation">Step 1.2: Visual
Research & Lookbook Creation</h4>
<ul className="task-list">
<li><label><input type="checkbox" / /><strong>Pinterest Lookbook
Creation</strong></label>
<ul className="task-list">
<li><label><input type="checkbox" / />Create Pinterest board for
project</label></li>
<li><label><input type="checkbox" / />Research websites in client’s
niche</label></li>
<li><label><input type="checkbox" / />Collect 15-20 visual
references</label></li>
<li><label><input type="checkbox" / />Organize by category (layout, color,
typography, etc.)</label></li>
</ul></li>
<li><label><input type="checkbox" / /><strong>Competitive
Analysis</strong></label>
<ul className="task-list">
<li><label><input type="checkbox" / />Identify 5-10 competitor
websites</label></li>
<li><label><input type="checkbox" / />Document 2-3 likes per
competitor</label></li>
<li><label><input type="checkbox" / />Document 2-3 dislikes per
competitor</label></li>
<li><label><input type="checkbox" / />Analyze design patterns in
niche</label></li>
<li><label><input type="checkbox" / />Identify differentiation
opportunities</label></li>
</ul></li>
</ul>
<p><strong>Deliverables</strong>: - Pinterest lookbook (shared with
client) - Competitive analysis document - Visual direction summary</p>
<h4 id="step-1.3-website-type-definition">Step 1.3: Website Type
Definition</h4>
<ul className="task-list">
<li><label><input type="checkbox" / /><strong>Determine Website
Type</strong>:</label>
<ul className="task-list">
<li><label><input type="checkbox" / />E-commerce (online
store)</label></li>
<li><label><input type="checkbox" / />Webpage
(informational/brochure)</label></li>
<li><label><input type="checkbox" / />Portfolio (showcase
work)</label></li>
<li><label><input type="checkbox" / />Lead Funnel
(conversion-focused)</label></li>
<li><label><input type="checkbox" / />Custom Site (unique
requirements)</label></li>
<li><label><input type="checkbox" / />Service Site (service-based
business)</label></li>
</ul></li>
<li><label><input type="checkbox" / /><strong>Document Website Type
Rationale</strong></label></li>
<li><label><input type="checkbox" / /><strong>Define Website
Goals</strong> (primary and secondary)</label></li>
</ul>
<p><strong>Deliverables</strong>: - Website type definition document -
Website goals and objectives</p>
<h4 id="step-1.4-site-structure-definition">Step 1.4: Site Structure
Definition</h4>
<ul className="task-list">
<li><label><input type="checkbox" / /><strong>Define Number of
Pages</strong></label>
<ul className="task-list">
<li><label><input type="checkbox" / />List all required pages</label></li>
<li><label><input type="checkbox" / />Categorize as static or
dynamic</label></li>
<li><label><input type="checkbox" / />Document page hierarchy</label></li>
<li><label><input type="checkbox" / />Create sitemap</label></li>
</ul></li>
<li><label><input type="checkbox" / /><strong>Define Page
Types</strong></label>
<ul className="task-list">
<li><label><input type="checkbox" / />Static pages (Home, About, Services,
Contact, etc.)</label></li>
<li><label><input type="checkbox" / />Dynamic pages (Blog, Products,
Portfolio items, etc.)</label></li>
<li><label><input type="checkbox" / />Special pages (Landing pages, Thank
you pages, etc.)</label></li>
</ul></li>
<li><label><input type="checkbox" / /><strong>Define Navigation
Structure</strong></label>
<ul className="task-list">
<li><label><input type="checkbox" / />Primary navigation</label></li>
<li><label><input type="checkbox" / />Secondary navigation</label></li>
<li><label><input type="checkbox" / />Footer navigation</label></li>
<li><label><input type="checkbox" / />Mobile navigation</label></li>
</ul></li>
</ul>
<p><strong>Deliverables</strong>: - Sitemap document - Page structure
document - Navigation plan</p>
<h4 id="step-1.5-technical-requirements">Step 1.5: Technical
Requirements</h4>
<ul className="task-list">
<li><label><input type="checkbox" / /><strong>Domain &
Hosting</strong></label>
<ul className="task-list">
<li><label><input type="checkbox" / />Assess domain
availability</label></li>
<li><label><input type="checkbox" / />Plan domain
registration</label></li>
<li><label><input type="checkbox" / />Select hosting provider</label></li>
<li><label><input type="checkbox" / />Plan hosting requirements (traffic,
storage, etc.)</label></li>
</ul></li>
<li><label><input type="checkbox" / /><strong>CMS/Builder
Selection</strong></label>
<ul className="task-list">
<li><label><input type="checkbox" / />Evaluate CMS options (WordPress,
Webflow, custom, etc.)</label></li>
<li><label><input type="checkbox" / />Select appropriate
platform</label></li>
<li><label><input type="checkbox" / />Document platform
rationale</label></li>
</ul></li>
<li><label><input type="checkbox" / /><strong>Third-Party
Integrations</strong></label>
<ul className="task-list">
<li><label><input type="checkbox" / />Identify required integrations (CRM,
email, payment, etc.)</label></li>
<li><label><input type="checkbox" / />Document integration
requirements</label></li>
<li><label><input type="checkbox" / />Plan integration
approach</label></li>
</ul></li>
</ul>
<p><strong>Deliverables</strong>: - Technical requirements document -
Platform selection document - Integration plan</p>
<h4 id="step-1.6-content-strategy">Step 1.6: Content Strategy</h4>
<ul className="task-list">
<li><label><input type="checkbox" / /><strong>Content Audit</strong> (if
existing site)</label>
<ul className="task-list">
<li><label><input type="checkbox" / />Review existing content</label></li>
<li><label><input type="checkbox" / />Assess content quality</label></li>
<li><label><input type="checkbox" / />Identify content gaps</label></li>
</ul></li>
<li><label><input type="checkbox" / /><strong>Content
Plan</strong></label>
<ul className="task-list">
<li><label><input type="checkbox" / />Define content for each
page</label></li>
<li><label><input type="checkbox" / />Plan content creation
(client-provided vs. created)</label></li>
<li><label><input type="checkbox" / />Document content tone and
style</label></li>
<li><label><input type="checkbox" / />Plan SEO content
strategy</label></li>
</ul></li>
</ul>
<p><strong>Deliverables</strong>: - Content strategy document - Content
plan by page</p>
<p><strong>Quality Checkpoint</strong>: Client approval of discovery
findings and project plan</p>
<hr />
<h3 id="phase-2-design-development">Phase 2: Design &
Development</h3>
<p><strong>Duration</strong>: 2-4 weeks (varies by complexity)<br />
<strong>Objective</strong>: Create and develop website</p>
<h4 id="step-2.1-design-phase">Step 2.1: Design Phase</h4>
<ul className="task-list">
<li><label><input type="checkbox" / /><strong>Wireframing</strong></label>
<ul className="task-list">
<li><label><input type="checkbox" / />Create wireframes for key
pages</label></li>
<li><label><input type="checkbox" / />Get client approval on
structure</label></li>
</ul></li>
<li><label><input type="checkbox" / /><strong>Design
Mockups</strong></label>
<ul className="task-list">
<li><label><input type="checkbox" / />Create design mockups for key
pages</label></li>
<li><label><input type="checkbox" / />Apply brand identity (colors,
typography, logo)</label></li>
<li><label><input type="checkbox" / />Ensure mobile
responsiveness</label></li>
<li><label><input type="checkbox" / />Get client approval on design
direction</label></li>
</ul></li>
<li><label><input type="checkbox" / /><strong>Design
System</strong></label>
<ul className="task-list">
<li><label><input type="checkbox" / />Create component
library</label></li>
<li><label><input type="checkbox" / />Document design
patterns</label></li>
<li><label><input type="checkbox" / />Establish design
consistency</label></li>
</ul></li>
</ul>
<p><strong>Deliverables</strong>: - Wireframes - Design mockups - Design
system documentation</p>
<h4 id="step-2.2-development-phase">Step 2.2: Development Phase</h4>
<ul className="task-list">
<li><label><input type="checkbox" / /><strong>Environment
Setup</strong></label>
<ul className="task-list">
<li><label><input type="checkbox" / />Set up development
environment</label></li>
<li><label><input type="checkbox" / />Configure CMS/platform</label></li>
<li><label><input type="checkbox" / />Set up version control</label></li>
</ul></li>
<li><label><input type="checkbox" / /><strong>Frontend
Development</strong></label>
<ul className="task-list">
<li><label><input type="checkbox" / />Build responsive
layouts</label></li>
<li><label><input type="checkbox" / />Implement design system</label></li>
<li><label><input type="checkbox" / />Integrate brand assets</label></li>
<li><label><input type="checkbox" / />Ensure cross-browser
compatibility</label></li>
<li><label><input type="checkbox" / />Optimize for
performance</label></li>
</ul></li>
<li><label><input type="checkbox" / /><strong>Backend Development</strong>
(if custom)</label>
<ul className="task-list">
<li><label><input type="checkbox" / />Set up database (if
needed)</label></li>
<li><label><input type="checkbox" / />Build custom
functionality</label></li>
<li><label><input type="checkbox" / />Implement integrations</label></li>
</ul></li>
<li><label><input type="checkbox" / /><strong>Content
Integration</strong></label>
<ul className="task-list">
<li><label><input type="checkbox" / />Add all content</label></li>
<li><label><input type="checkbox" / />Optimize images (WebP
conversion)</label></li>
<li><label><input type="checkbox" / />Set up SEO (meta tags, structured
data)</label></li>
<li><label><input type="checkbox" / />Configure analytics</label></li>
</ul></li>
</ul>
<p><strong>Deliverables</strong>: - Development site - Technical
documentation</p>
<h4 id="step-2.3-quality-assurance">Step 2.3: Quality Assurance</h4>
<ul className="task-list">
<li><label><input type="checkbox" / /><strong>Functionality
Testing</strong></label>
<ul className="task-list">
<li><label><input type="checkbox" / />Test all links and
navigation</label></li>
<li><label><input type="checkbox" / />Test forms and
interactions</label></li>
<li><label><input type="checkbox" / />Test integrations</label></li>
<li><label><input type="checkbox" / />Test on multiple
devices/browsers</label></li>
</ul></li>
<li><label><input type="checkbox" / /><strong>Performance
Testing</strong></label>
<ul className="task-list">
<li><label><input type="checkbox" / />Test page load speeds</label></li>
<li><label><input type="checkbox" / />Optimize images and
assets</label></li>
<li><label><input type="checkbox" / />Test mobile performance</label></li>
</ul></li>
<li><label><input type="checkbox" / /><strong>SEO Testing</strong></label>
<ul className="task-list">
<li><label><input type="checkbox" / />Verify meta tags</label></li>
<li><label><input type="checkbox" / />Test structured data</label></li>
<li><label><input type="checkbox" / />Check
mobile-friendliness</label></li>
<li><label><input type="checkbox" / />Verify sitemap</label></li>
</ul></li>
<li><label><input type="checkbox" / /><strong>Accessibility
Testing</strong></label>
<ul className="task-list">
<li><label><input type="checkbox" / />Test WCAG compliance</label></li>
<li><label><input type="checkbox" / />Test keyboard
navigation</label></li>
<li><label><input type="checkbox" / />Test screen reader
compatibility</label></li>
</ul></li>
</ul>
<p><strong>Deliverables</strong>: - QA report - Bug fix list (if
any)</p>
<p><strong>Quality Checkpoint</strong>: Internal QA approval before
client review</p>
<hr />
<h3 id="phase-3-review-session-2">Phase 3: Review Session 2</h3>
<p><strong>Duration</strong>: 1-2 hours<br />
<strong>Objective</strong>: Client review and feedback</p>
<h4 id="step-3.1-client-presentation">Step 3.1: Client Presentation</h4>
<ul className="task-list">
<li><label><input type="checkbox" / />Present website to
client</label></li>
<li><label><input type="checkbox" / />Walk through all pages and
features</label></li>
<li><label><input type="checkbox" / />Demonstrate responsive
design</label></li>
<li><label><input type="checkbox" / />Explain functionality</label></li>
</ul>
<h4 id="step-3.2-client-feedback-collection">Step 3.2: Client Feedback
Collection</h4>
<ul className="task-list">
<li><label><input type="checkbox" / />Document all client
feedback</label></li>
<li><label><input type="checkbox" / />Categorize feedback (design,
content, functionality)</label></li>
<li><label><input type="checkbox" / />Prioritize revisions</label></li>
<li><label><input type="checkbox" / />Create revision plan</label></li>
</ul>
<p><strong>Deliverables</strong>: - Client feedback document - Revision
plan</p>
<h4 id="step-3.3-revisions">Step 3.3: Revisions</h4>
<ul className="task-list">
<li><label><input type="checkbox" / />Implement approved
revisions</label></li>
<li><label><input type="checkbox" / />Get client approval on
revisions</label></li>
<li><label><input type="checkbox" / />Finalize website</label></li>
</ul>
<p><strong>Quality Checkpoint</strong>: Client final approval</p>
<hr />
<h3 id="phase-4-launch">Phase 4: Launch</h3>
<p><strong>Duration</strong>: 1-2 days<br />
<strong>Objective</strong>: Launch website live</p>
<h4 id="step-4.1-pre-launch-checklist">Step 4.1: Pre-Launch
Checklist</h4>
<ul className="task-list">
<li><label><input type="checkbox" / />Final content review</label></li>
<li><label><input type="checkbox" / />Final functionality
test</label></li>
<li><label><input type="checkbox" / />Backup existing site (if
applicable)</label></li>
<li><label><input type="checkbox" / />Set up domain DNS</label></li>
<li><label><input type="checkbox" / />Configure hosting</label></li>
<li><label><input type="checkbox" / />Set up SSL certificate</label></li>
<li><label><input type="checkbox" / />Configure analytics</label></li>
<li><label><input type="checkbox" / />Set up monitoring</label></li>
</ul>
<h4 id="step-4.2-launch">Step 4.2: Launch</h4>
<ul className="task-list">
<li><label><input type="checkbox" / />Deploy website to
production</label></li>
<li><label><input type="checkbox" / />Verify domain and
hosting</label></li>
<li><label><input type="checkbox" / />Test live site
functionality</label></li>
<li><label><input type="checkbox" / />Submit sitemap to search
engines</label></li>
<li><label><input type="checkbox" / />Set up Google Search
Console</label></li>
<li><label><input type="checkbox" / />Verify analytics
tracking</label></li>
</ul>
<h4 id="step-4.3-post-launch">Step 4.3: Post-Launch</h4>
<ul className="task-list">
<li><label><input type="checkbox" / />Monitor site
performance</label></li>
<li><label><input type="checkbox" / />Check for errors</label></li>
<li><label><input type="checkbox" / />Verify all integrations
working</label></li>
<li><label><input type="checkbox" / />Client training (if
CMS)</label></li>
</ul>
<p><strong>Deliverables</strong>: - Live website - Launch report -
Client training materials (if applicable)</p>
<hr />
<h3 id="phase-5-support-maintenance">Phase 5: Support &
Maintenance</h3>
<p><strong>Duration</strong>: Ongoing<br />
<strong>Objective</strong>: Ongoing website support</p>
<h4 id="step-5.1-handover">Step 5.1: Handover</h4>
<ul className="task-list">
<li><label><input type="checkbox" / />Provide client access
credentials</label></li>
<li><label><input type="checkbox" / />Deliver website
documentation</label></li>
<li><label><input type="checkbox" / />Provide training (if
CMS)</label></li>
<li><label><input type="checkbox" / />Set up support channels</label></li>
</ul>
<h4 id="step-5.2-maintenance-plan">Step 5.2: Maintenance Plan</h4>
<ul className="task-list">
<li><label><input type="checkbox" / />Define maintenance
scope</label></li>
<li><label><input type="checkbox" / />Set up update schedule</label></li>
<li><label><input type="checkbox" / />Plan security
monitoring</label></li>
<li><label><input type="checkbox" / />Plan backup schedule</label></li>
</ul>
<p><strong>Deliverables</strong>: - Website documentation - Maintenance
plan - Support contact information</p>
<hr />
<h2 id="success-metrics">Success Metrics</h2>
<ul>
<li><strong>Client Satisfaction</strong>: 4.8/5.0</li>
<li><strong>Page Load Speed</strong>: &lt;3 seconds</li>
<li><strong>Mobile Performance</strong>: 90+ score (PageSpeed
Insights)</li>
<li><strong>SEO Score</strong>: 90+ (SEO tools)</li>
<li><strong>Accessibility</strong>: WCAG 2.1 AA compliance</li>
<li><strong>Launch Timeline</strong>: On-time delivery</li>
</ul>
<h2 id="review-continuous-improvement">Review & Continuous
Improvement</h2>
<ul>
<li>Post-launch review (30 days)</li>
<li>Performance monitoring</li>
<li>Client feedback integration</li>
<li>Technology updates and improvements</li>
</ul>
<hr />
<h2 id="related-processes">Related Processes</h2>
<ul>
<li><a
href="../01_BRANDING_POSITIONING/01_Branding_Strategy.md">Branding
Strategy</a> - Brand identity for website</li>
<li><a
href="../01_BRANDING_POSITIONING/02_Graphic_Logo_Design.md">Graphic/Logo
Design</a> - Logo and graphics for website</li>
<li><a href="../04_SOCIAL_COMMUNICATION/01_Social_Media.md">Social
Media</a> - Social media integration</li>
</ul>
<hr />
<p><em>Part of the Kaizen Digital Strategy Blueprint - Platform/Presence
Category</em></p>

`;

const mermaidDiagrams: Record<string, string> = {
  "mermaid-1": `flowchart TD
    A[Start: Client Engagement] --> B[Phase 1: Discovery Session 1]
    B --> B1[Asset Collection & Assessment]
    B1 --> B2[Visual Research & Lookbook]
    B2 --> B3[Website Type Definition]
    B3 --> B4[Site Structure Definition]
    B4 --> B5[Technical Requirements]
    B5 --> B6[Content Strategy]
    B6 --> C{Client Approval}
    C -->|Approved| D[Phase 2: Design & Development]
    C -->|Revisions| B
    D --> D1[Design Phase<br>Wireframes & Mockups]
    D1 --> D2[Development Phase<br>Frontend & Backend]
    D2 --> D3[Quality Assurance<br>Testing]
    D3 --> E{Internal QA Pass?}
    E -->|Yes| F[Phase 3: Review Session 2]
    E -->|No| D
    F --> F1[Client Presentation]
    F1 --> F2[Client Feedback]
    F2 --> F3[Revisions]
    F3 --> G{Client Final Approval}
    G -->|Approved| H[Phase 4: Launch]
    G -->|Revisions| F
    H --> H1[Pre-Launch Checklist]
    H1 --> H2[Deploy to Production]
    H2 --> H3[Post-Launch Monitoring]
    H3 --> I[Phase 5: Support & Maintenance]
    I --> J[End: Website Live]
    
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
