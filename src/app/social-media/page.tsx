'use client';
import { useMemo } from 'react';
import parse, { Element, HTMLReactParserOptions } from 'html-react-parser';
import Mermaid from '@/components/Mermaid';

const htmlContent = `

<nav id="TOC" role="doc-toc">
<ul>
<li><a href="#social-media" id="toc-social-media">Social Media</a>
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
<li><a href="#phase-1-strategy-development"
id="toc-phase-1-strategy-development">Phase 1: Strategy
Development</a></li>
<li><a href="#phase-2-content-planning"
id="toc-phase-2-content-planning">Phase 2: Content Planning</a></li>
<li><a href="#phase-3-content-creation"
id="toc-phase-3-content-creation">Phase 3: Content Creation</a></li>
<li><a href="#phase-4-publishing-engagement"
id="toc-phase-4-publishing-engagement">Phase 4: Publishing &
Engagement</a></li>
<li><a href="#phase-5-analytics-optimization"
id="toc-phase-5-analytics-optimization">Phase 5: Analytics &
Optimization</a></li>
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
<h1 id="social-media">Social Media</h1>
<h2 id="process-overview">Process Overview</h2>
<p><strong>Purpose</strong>: Develop and execute effective social media
strategy<br />
<strong>Owner</strong>: Social Media Manager<br />
<strong>Duration</strong>: Ongoing (strategy: 2-3 weeks, execution:
ongoing)<br />
<strong>Client Sessions</strong>: 2-3 sessions (strategy phase)<br />
<strong>Category</strong>: Social/Communication</p>
<h2 id="process-map">Process Map</h2>
<h3 id="high-level-process-flow">High-Level Process Flow</h3>
<div data-mermaid-id="mermaid-1"></div>
<hr />
<h2 id="detailed-process-steps">Detailed Process Steps</h2>
<h3 id="phase-1-strategy-development">Phase 1: Strategy Development</h3>
<p><strong>Duration</strong>: 2-3 weeks<br />
<strong>Objective</strong>: Develop comprehensive social media
strategy</p>
<h4 id="step-1.1-platform-selection">Step 1.1: Platform Selection</h4>
<ul className="task-list">
<li><label><input type="checkbox" / />Assess target audience</label></li>
<li><label><input type="checkbox" / />Identify relevant
platforms</label></li>
<li><label><input type="checkbox" / />Evaluate platform fit</label></li>
<li><label><input type="checkbox" / />Select primary platforms
(2-3)</label></li>
<li><label><input type="checkbox" / />Select secondary platforms (if
applicable)</label></li>
</ul>
<p><strong>Deliverables</strong>: - Platform selection document -
Platform rationale</p>
<h4 id="step-1.2-content-strategy">Step 1.2: Content Strategy</h4>
<ul className="task-list">
<li><label><input type="checkbox" / />Define content pillars
(3-5)</label></li>
<li><label><input type="checkbox" / />Define content mix</label></li>
<li><label><input type="checkbox" / />Plan content themes</label></li>
<li><label><input type="checkbox" / />Define brand voice for
social</label></li>
<li><label><input type="checkbox" / />Create content calendar
framework</label></li>
</ul>
<p><strong>Deliverables</strong>: - Content strategy document - Content
calendar template</p>
<h4 id="step-1.3-engagement-strategy">Step 1.3: Engagement Strategy</h4>
<ul className="task-list">
<li><label><input type="checkbox" / />Define engagement goals</label></li>
<li><label><input type="checkbox" / />Plan engagement tactics</label></li>
<li><label><input type="checkbox" / />Define response
protocols</label></li>
<li><label><input type="checkbox" / />Plan community building</label></li>
</ul>
<p><strong>Deliverables</strong>: - Engagement strategy document</p>
<p><strong>Quality Checkpoint</strong>: Client approval of social media
strategy</p>
<hr />
<h3 id="phase-2-content-planning">Phase 2: Content Planning</h3>
<p><strong>Duration</strong>: Ongoing (weekly/monthly)<br />
<strong>Objective</strong>: Plan content calendar</p>
<h4 id="step-2.1-content-calendar-creation">Step 2.1: Content Calendar
Creation</h4>
<ul className="task-list">
<li><label><input type="checkbox" / />Plan content for each
platform</label></li>
<li><label><input type="checkbox" / />Schedule posts</label></li>
<li><label><input type="checkbox" / />Plan content themes</label></li>
<li><label><input type="checkbox" / />Coordinate campaigns</label></li>
<li><label><input type="checkbox" / />Plan seasonal content</label></li>
</ul>
<p><strong>Deliverables</strong>: - Content calendar
(monthly/quarterly)</p>
<h4 id="step-2.2-content-briefs">Step 2.2: Content Briefs</h4>
<ul className="task-list">
<li><label><input type="checkbox" / />Create content briefs for each
post</label></li>
<li><label><input type="checkbox" / />Define objectives</label></li>
<li><label><input type="checkbox" / />Specify requirements</label></li>
<li><label><input type="checkbox" / />Plan visuals</label></li>
</ul>
<p><strong>Deliverables</strong>: - Content briefs</p>
<hr />
<h3 id="phase-3-content-creation">Phase 3: Content Creation</h3>
<p><strong>Duration</strong>: Ongoing<br />
<strong>Objective</strong>: Create social media content</p>
<h4 id="step-3.1-content-creation">Step 3.1: Content Creation</h4>
<ul className="task-list">
<li><label><input type="checkbox" / />Create written content</label></li>
<li><label><input type="checkbox" / />Create/select visuals</label></li>
<li><label><input type="checkbox" / />Create videos (if
applicable)</label></li>
<li><label><input type="checkbox" / />Optimize for each
platform</label></li>
<li><label><input type="checkbox" / />Review and approve
content</label></li>
</ul>
<p><strong>Deliverables</strong>: - Social media content (posts, images,
videos)</p>
<h4 id="step-3.2-content-scheduling">Step 3.2: Content Scheduling</h4>
<ul className="task-list">
<li><label><input type="checkbox" / />Schedule posts using
tool</label></li>
<li><label><input type="checkbox" / />Set optimal posting
times</label></li>
<li><label><input type="checkbox" / />Coordinate across
platforms</label></li>
<li><label><input type="checkbox" / />Set up automation (if
applicable)</label></li>
</ul>
<p><strong>Deliverables</strong>: - Scheduled content</p>
<hr />
<h3 id="phase-4-publishing-engagement">Phase 4: Publishing &
Engagement</h3>
<p><strong>Duration</strong>: Ongoing<br />
<strong>Objective</strong>: Publish content and engage with audience</p>
<h4 id="step-4.1-publishing">Step 4.1: Publishing</h4>
<ul className="task-list">
<li><label><input type="checkbox" / />Monitor scheduled posts</label></li>
<li><label><input type="checkbox" / />Publish real-time content (if
applicable)</label></li>
<li><label><input type="checkbox" / />Ensure posts go live as
scheduled</label></li>
</ul>
<h4 id="step-4.2-engagement">Step 4.2: Engagement</h4>
<ul className="task-list">
<li><label><input type="checkbox" / />Monitor comments and
messages</label></li>
<li><label><input type="checkbox" / />Respond to engagement (within 2
hours)</label></li>
<li><label><input type="checkbox" / />Engage with community</label></li>
<li><label><input type="checkbox" / />Manage negative
feedback</label></li>
<li><label><input type="checkbox" / />Build relationships</label></li>
</ul>
<p><strong>Deliverables</strong>: - Published content - Engagement
records</p>
<hr />
<h3 id="phase-5-analytics-optimization">Phase 5: Analytics &
Optimization</h3>
<p><strong>Duration</strong>: Ongoing (weekly/monthly)<br />
<strong>Objective</strong>: Measure performance and optimize</p>
<h4 id="step-5.1-analytics">Step 5.1: Analytics</h4>
<ul className="task-list">
<li><label><input type="checkbox" / />Track key metrics</label></li>
<li><label><input type="checkbox" / />Analyze performance</label></li>
<li><label><input type="checkbox" / />Identify trends</label></li>
<li><label><input type="checkbox" / />Measure ROI</label></li>
</ul>
<h4 id="step-5.2-optimization">Step 5.2: Optimization</h4>
<ul className="task-list">
<li><label><input type="checkbox" / />Adjust strategy based on
data</label></li>
<li><label><input type="checkbox" / />Optimize content</label></li>
<li><label><input type="checkbox" / />Optimize posting times</label></li>
<li><label><input type="checkbox" / />Test new approaches</label></li>
</ul>
<p><strong>Deliverables</strong>: - Analytics reports - Optimization
recommendations</p>
<hr />
<h2 id="success-metrics">Success Metrics</h2>
<ul>
<li><strong>Engagement Rate</strong>: Industry benchmark +10%</li>
<li><strong>Follower Growth</strong>: Consistent growth</li>
<li><strong>Reach</strong>: Increasing reach</li>
<li><strong>Click-Through Rate</strong>: Platform benchmarks</li>
<li><strong>ROI</strong>: Measurable business impact</li>
</ul>
<h2 id="review-continuous-improvement">Review & Continuous
Improvement</h2>
<ul>
<li>Weekly performance reviews</li>
<li>Monthly strategy reviews</li>
<li>Quarterly platform assessments</li>
<li>Annual strategy refresh</li>
</ul>
<hr />
<h2 id="related-processes">Related Processes</h2>
<ul>
<li><a
href="../01_BRANDING_POSITIONING/01_Branding_Strategy.md">Branding
Strategy</a> - Brand voice and visual identity</li>
<li><a href="../02_PLATFORM_PRESENCE/01_Website_Development.md">Website
Development</a> - Website integration</li>
</ul>
<hr />
<p><em>Part of the Kaizen Digital Strategy Blueprint -
Social/Communication Category</em></p>

`;

const mermaidDiagrams: Record<string, string> = {
  "mermaid-1": `flowchart TD
    A[Start: Social Media Project] --> B[Phase 1: Strategy Development]
    B --> B1[Platform Selection]
    B1 --> B2[Content Strategy]
    B2 --> B3[Engagement Strategy]
    B3 --> C{Client Approval}
    C -->|Approved| D[Phase 2: Content Planning<br>Ongoing]
    C -->|Revisions| B
    D --> D1[Content Calendar Creation]
    D1 --> D2[Content Briefs]
    D2 --> E[Phase 3: Content Creation<br>Ongoing]
    E --> E1[Content Creation<br>Written, Visual, Video]
    E1 --> E2[Content Scheduling]
    E2 --> F[Phase 4: Publishing & Engagement<br>Ongoing]
    F --> F1[Publishing<br>Monitor Scheduled Posts]
    F1 --> F2[Engagement<br>Respond within 2 hours]
    F2 --> G[Phase 5: Analytics & Optimization<br>Ongoing]
    G --> G1[Analytics<br>Track Metrics]
    G1 --> G2[Optimization<br>Adjust Strategy]
    G2 --> H{Continue?}
    H -->|Yes| D
    H -->|No| I[End: Strategy Complete]
    
    style A fill:#D62828,stroke:#1E1E1E,color:#fff
    style I fill:#D62828,stroke:#1E1E1E,color:#fff
    style C fill:#C9C9C9,stroke:#1E1E1E
    style H fill:#C9C9C9,stroke:#1E1E1E
    style D fill:#F5F5F5,stroke:#1E1E1E,stroke-dasharray: 5 5
    style E fill:#F5F5F5,stroke:#1E1E1E,stroke-dasharray: 5 5
    style F fill:#F5F5F5,stroke:#1E1E1E,stroke-dasharray: 5 5
    style G fill:#F5F5F5,stroke:#1E1E1E,stroke-dasharray: 5 5`
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
