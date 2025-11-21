'use client';
import { useMemo } from 'react';
import parse, { Element, HTMLReactParserOptions } from 'html-react-parser';
import Mermaid from '@/components/Mermaid';

const htmlContent = `

<nav id="TOC" role="doc-toc">
<ul>
<li><a href="#process-optimization"
id="toc-process-optimization">Process Optimization</a>
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
<li><a href="#phase-1-process-mapping"
id="toc-phase-1-process-mapping">Phase 1: Process Mapping</a></li>
<li><a href="#phase-2-analysis" id="toc-phase-2-analysis">Phase 2:
Analysis</a></li>
<li><a href="#phase-3-optimization-design"
id="toc-phase-3-optimization-design">Phase 3: Optimization
Design</a></li>
<li><a href="#phase-4-implementation"
id="toc-phase-4-implementation">Phase 4: Implementation</a></li>
<li><a href="#phase-5-validation-documentation"
id="toc-phase-5-validation-documentation">Phase 5: Validation &
Documentation</a></li>
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
<h1 id="process-optimization">Process Optimization</h1>
<h2 id="process-overview">Process Overview</h2>
<p><strong>Purpose</strong>: Optimize business processes before
automation<br />
<strong>Owner</strong>: Process Optimization Lead<br />
<strong>Duration</strong>: 2-4 weeks<br />
<strong>Client Sessions</strong>: 2-3 sessions<br />
<strong>Category</strong>: Systems/Tools/Automation</p>
<blockquote>
<p><strong>Note</strong>: This process is CRITICAL before implementing
AI/Automation. Automation of broken processes only amplifies
problems.</p>
</blockquote>
<h2 id="process-map">Process Map</h2>
<h3 id="high-level-process-flow">High-Level Process Flow</h3>
<div data-mermaid-id="mermaid-1"></div>
<hr />
<h2 id="detailed-process-steps">Detailed Process Steps</h2>
<h3 id="phase-1-process-mapping">Phase 1: Process Mapping</h3>
<p><strong>Duration</strong>: 1 week<br />
<strong>Objective</strong>: Document current processes</p>
<h4 id="step-1.1-process-discovery">Step 1.1: Process Discovery</h4>
<ul className="task-list">
<li><label><input type="checkbox" / />Identify all business
processes</label></li>
<li><label><input type="checkbox" / />Interview stakeholders</label></li>
<li><label><input type="checkbox" / />Document process flows</label></li>
<li><label><input type="checkbox" / />Map process
dependencies</label></li>
<li><label><input type="checkbox" / />Identify process owners</label></li>
</ul>
<p><strong>Deliverables</strong>: - Process inventory - Process flow
diagrams</p>
<h4 id="step-1.2-process-documentation">Step 1.2: Process
Documentation</h4>
<ul className="task-list">
<li><label><input type="checkbox" / />Document each process
step-by-step</label></li>
<li><label><input type="checkbox" / />Document inputs and
outputs</label></li>
<li><label><input type="checkbox" / />Document decision
points</label></li>
<li><label><input type="checkbox" / />Document exceptions</label></li>
<li><label><input type="checkbox" / />Document time and
resources</label></li>
</ul>
<p><strong>Deliverables</strong>: - Process documentation - Process
flowcharts</p>
<hr />
<h3 id="phase-2-analysis">Phase 2: Analysis</h3>
<p><strong>Duration</strong>: 1 week<br />
<strong>Objective</strong>: Identify optimization opportunities</p>
<h4 id="step-2.1-process-analysis">Step 2.1: Process Analysis</h4>
<ul className="task-list">
<li><label><input type="checkbox" / />Identify bottlenecks</label></li>
<li><label><input type="checkbox" / />Identify waste (time,
resources)</label></li>
<li><label><input type="checkbox" / />Identify inefficiencies</label></li>
<li><label><input type="checkbox" / />Measure process metrics</label></li>
<li><label><input type="checkbox" / />Identify pain points</label></li>
</ul>
<p><strong>Deliverables</strong>: - Process analysis report - Bottleneck
identification - Waste analysis</p>
<h4 id="step-2.2-root-cause-analysis">Step 2.2: Root Cause Analysis</h4>
<ul className="task-list">
<li><label><input type="checkbox" / />Analyze root causes of
issues</label></li>
<li><label><input type="checkbox" / />Prioritize issues</label></li>
<li><label><input type="checkbox" / />Document improvement
opportunities</label></li>
</ul>
<p><strong>Deliverables</strong>: - Root cause analysis - Prioritized
improvement list</p>
<hr />
<h3 id="phase-3-optimization-design">Phase 3: Optimization Design</h3>
<p><strong>Duration</strong>: 1 week<br />
<strong>Objective</strong>: Design optimized processes</p>
<h4 id="step-3.1-solution-design">Step 3.1: Solution Design</h4>
<ul className="task-list">
<li><label><input type="checkbox" / />Design optimized process
flows</label></li>
<li><label><input type="checkbox" / />Eliminate waste</label></li>
<li><label><input type="checkbox" / />Streamline steps</label></li>
<li><label><input type="checkbox" / />Standardize processes</label></li>
<li><label><input type="checkbox" / />Design controls and
checkpoints</label></li>
</ul>
<p><strong>Deliverables</strong>: - Optimized process designs - Process
improvement plan</p>
<h4 id="step-3.2-implementation-plan">Step 3.2: Implementation Plan</h4>
<ul className="task-list">
<li><label><input type="checkbox" / />Create implementation
plan</label></li>
<li><label><input type="checkbox" / />Plan change management</label></li>
<li><label><input type="checkbox" / />Plan training</label></li>
<li><label><input type="checkbox" / />Plan validation</label></li>
</ul>
<p><strong>Deliverables</strong>: - Implementation plan</p>
<p><strong>Quality Checkpoint</strong>: Client approval of optimized
processes</p>
<hr />
<h3 id="phase-4-implementation">Phase 4: Implementation</h3>
<p><strong>Duration</strong>: 1 week<br />
<strong>Objective</strong>: Implement optimized processes</p>
<h4 id="step-4.1-process-implementation">Step 4.1: Process
Implementation</h4>
<ul className="task-list">
<li><label><input type="checkbox" / />Implement process
changes</label></li>
<li><label><input type="checkbox" / />Update systems (if
needed)</label></li>
<li><label><input type="checkbox" / />Update documentation</label></li>
<li><label><input type="checkbox" / />Communicate changes</label></li>
</ul>
<h4 id="step-4.2-training">Step 4.2: Training</h4>
<ul className="task-list">
<li><label><input type="checkbox" / />Train staff on new
processes</label></li>
<li><label><input type="checkbox" / />Provide process
documentation</label></li>
<li><label><input type="checkbox" / />Answer questions</label></li>
</ul>
<p><strong>Deliverables</strong>: - Implemented processes - Training
completion</p>
<hr />
<h3 id="phase-5-validation-documentation">Phase 5: Validation &
Documentation</h3>
<p><strong>Duration</strong>: 1 week<br />
<strong>Objective</strong>: Validate and document optimized
processes</p>
<h4 id="step-5.1-validation">Step 5.1: Validation</h4>
<ul className="task-list">
<li><label><input type="checkbox" / />Monitor process
performance</label></li>
<li><label><input type="checkbox" / />Measure improvements</label></li>
<li><label><input type="checkbox" / />Collect feedback</label></li>
<li><label><input type="checkbox" / />Adjust as needed</label></li>
</ul>
<h4 id="step-5.2-documentation">Step 5.2: Documentation</h4>
<ul className="task-list">
<li><label><input type="checkbox" / />Document final
processes</label></li>
<li><label><input type="checkbox" / />Create process manuals</label></li>
<li><label><input type="checkbox" / />Create training
materials</label></li>
<li><label><input type="checkbox" / />Update systems
documentation</label></li>
</ul>
<p><strong>Deliverables</strong>: - Final process documentation -
Process manuals - Training materials</p>
<hr />
<h2 id="success-metrics">Success Metrics</h2>
<ul>
<li><strong>Process Efficiency</strong>: 15-30% improvement</li>
<li><strong>Time Savings</strong>: Measurable reduction</li>
<li><strong>Error Reduction</strong>: 50%+ reduction</li>
<li><strong>Staff Satisfaction</strong>: Improved</li>
<li><strong>Process Compliance</strong>: 95%+</li>
</ul>
<h2 id="review-continuous-improvement">Review & Continuous
Improvement</h2>
<ul>
<li>Monthly process reviews</li>
<li>Quarterly optimization assessments</li>
<li>Annual process audit</li>
<li>Continuous improvement culture</li>
</ul>
<hr />
<h2 id="related-processes">Related Processes</h2>
<ul>
<li><a href="01_AI_Automation.md">AI/Automation</a> -
<strong>REQUIRES</strong> optimized processes first</li>
</ul>
<hr />
<p><em>Part of the Kaizen Digital Strategy Blueprint -
Systems/Tools/Automation Category</em></p>

`;

const mermaidDiagrams: Record<string, string> = {
  "mermaid-1": `flowchart TD
    A[Start: Process Optimization Project] --> B[Phase 1: Process Mapping]
    B --> B1[Process Discovery]
    B1 --> B2[Process Documentation]
    B2 --> C[Phase 2: Analysis]
    C --> C1[Process Analysis<br>Bottlenecks & Waste]
    C1 --> C2[Root Cause Analysis]
    C2 --> D[Phase 3: Optimization Design]
    D --> D1[Solution Design<br>Optimized Flows]
    D1 --> D2[Implementation Plan]
    D2 --> E{Client Approval}
    E -->|Approved| F[Phase 4: Implementation]
    E -->|Revisions| D
    F --> F1[Process Implementation]
    F1 --> F2[Training]
    F2 --> G[Phase 5: Validation & Documentation]
    G --> G1[Validation<br>Monitor Performance]
    G1 --> G2[Documentation<br>Final Processes]
    G2 --> H{Optimization Approved?}
    H -->|Yes| I[End: Ready for Automation]
    H -->|No| F
    
    style A fill:#D62828,stroke:#1E1E1E,color:#fff
    style I fill:#D62828,stroke:#1E1E1E,color:#fff
    style E fill:#C9C9C9,stroke:#1E1E1E
    style H fill:#D62828,stroke:#1E1E1E,color:#fff,stroke-width:3px`
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
