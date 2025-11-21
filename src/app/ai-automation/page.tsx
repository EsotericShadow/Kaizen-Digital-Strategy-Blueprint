'use client';
import { useMemo } from 'react';
import parse, { Element, HTMLReactParserOptions } from 'html-react-parser';
import Mermaid from '@/components/Mermaid';

const htmlContent = `

<nav id="TOC" role="doc-toc">
<ul>
<li><a href="#aiautomation" id="toc-aiautomation">AI/Automation</a>
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
<li><a href="#iso-42001-compliance-flow"
id="toc-iso-42001-compliance-flow">ISO 42001 Compliance Flow</a></li>
</ul></li>
<li><a href="#detailed-process-steps"
id="toc-detailed-process-steps">Detailed Process Steps</a>
<ul>
<li><a href="#phase-1-discovery-assessment"
id="toc-phase-1-discovery-assessment">Phase 1: Discovery &
Assessment</a></li>
<li><a href="#phase-2-process-optimization-critical"
id="toc-phase-2-process-optimization-critical">Phase 2: Process
Optimization (CRITICAL)</a></li>
<li><a href="#phase-3-ai-solution-design"
id="toc-phase-3-ai-solution-design">Phase 3: AI Solution Design</a></li>
<li><a href="#phase-4-development" id="toc-phase-4-development">Phase 4:
Development</a></li>
<li><a href="#phase-5-deployment-training"
id="toc-phase-5-deployment-training">Phase 5: Deployment &
Training</a></li>
<li><a href="#phase-6-support-optimization"
id="toc-phase-6-support-optimization">Phase 6: Support &
Optimization</a></li>
</ul></li>
<li><a href="#success-metrics" id="toc-success-metrics">Success
Metrics</a></li>
<li><a href="#review-continuous-improvement"
id="toc-review-continuous-improvement">Review & Continuous
Improvement</a></li>
<li><a href="#records-documentation"
id="toc-records-documentation">Records & Documentation</a>
<ul>
<li><a href="#records-maintained-iso-9001-iso-42001"
id="toc-records-maintained-iso-9001-iso-42001">Records Maintained (ISO
9001 + ISO 42001)</a></li>
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
<li><a href="#related-policies-procedures-iso-42001"
id="toc-related-policies-procedures-iso-42001">Related Policies &
Procedures (ISO 42001)</a></li>
<li><a href="#related-forms-templates-iso-42001"
id="toc-related-forms-templates-iso-42001">Related Forms & Templates
(ISO 42001)</a></li>
<li><a href="#iso-42001-compliance" id="toc-iso-42001-compliance">ISO
42001 Compliance</a></li>
</ul></li>
</ul></li>
</ul>
</nav>
<h1 id="aiautomation">AI/Automation</h1>
<h2 id="document-control">Document Control</h2>
<ul>
<li><strong>Document ID</strong>: KDSB-05-AUTO-001</li>
<li><strong>Version</strong>: 1.0</li>
<li><strong>Last Updated</strong>: 2025-01-XX</li>
<li><strong>Next Review</strong>: 2025-04-XX</li>
<li><strong>Owner</strong>: AI/Automation Lead</li>
<li><strong>Approved By</strong>: [To be assigned]</li>
<li><strong>Approval Date</strong>: [To be assigned]</li>
<li><strong>Status</strong>: Approved</li>
<li><strong>ISO Compliance</strong>: ISO 9001:2015 Quality Management
Systems + ISO 42001:2023 AI Management Systems</li>
</ul>
<hr />
<h2 id="process-overview">Process Overview</h2>
<p><strong>Purpose</strong>: Implement AI solutions and automation
systems<br />
<strong>Owner</strong>: AI/Automation Lead<br />
<strong>Duration</strong>: 4-12 weeks (varies by complexity)<br />
<strong>Client Sessions</strong>: 3-5 sessions<br />
<strong>Category</strong>: Systems/Tools/Automation</p>
<hr />
<h2 id="scope">Scope</h2>
<p>This procedure applies to all AI and automation projects at Kaizen
Strategic AI.</p>
<p><strong>In Scope:</strong> - AI system development and deployment -
Process automation implementation - Third-party AI service integration -
AI risk management and impact assessment - AI system lifecycle
management</p>
<p><strong>Out of Scope:</strong> - Process optimization (see <a
href="02_Process_Optimization.md">Process Optimization Process</a>) -
General software development without AI components - IT infrastructure
management (non-AI)</p>
<p><strong>Applicability</strong>: All clients requiring AI/automation
services</p>
<hr />
<h2 id="responsibility-authority">Responsibility & Authority</h2>
<p><strong>Process Owner</strong>: AI/Automation Lead - Responsible for
process execution and quality - Approves process changes and
improvements - Reviews process effectiveness quarterly - Ensures ISO
42001 compliance for AI systems - Escalates issues beyond authority to
CEO</p>
<p><strong>AI Management Representative</strong>: [To be assigned] -
Oversees AI governance and compliance - Reviews AI risk assessments -
Approves AI system deployments</p>
<p><strong>Team Members</strong>: - Execute process steps as assigned -
Report issues and suggest improvements - Maintain process documentation
- Follow AI governance procedures</p>
<p><strong>Escalation</strong>: Issues beyond process owner authority
escalate to CEO/Management</p>
<h2 id="process-map">Process Map</h2>
<h3 id="high-level-process-flow">High-Level Process Flow</h3>
<div data-mermaid-id="mermaid-1"></div>
<h3 id="iso-42001-compliance-flow">ISO 42001 Compliance Flow</h3>
<div data-mermaid-id="mermaid-2"></div>
<hr />
<h2 id="detailed-process-steps">Detailed Process Steps</h2>
<h3 id="phase-1-discovery-assessment">Phase 1: Discovery &
Assessment</h3>
<p><strong>Duration</strong>: 1-2 weeks<br />
<strong>Objective</strong>: Understand business processes and identify
automation opportunities</p>
<h4 id="step-1.1-business-process-analysis">Step 1.1: Business Process
Analysis</h4>
<ul className="task-list">
<li><label><input type="checkbox" / />Map current business
processes</label></li>
<li><label><input type="checkbox" / />Identify manual, repetitive
tasks</label></li>
<li><label><input type="checkbox" / />Document process pain
points</label></li>
<li><label><input type="checkbox" / />Measure process time and
costs</label></li>
<li><label><input type="checkbox" / />Identify bottlenecks</label></li>
<li><label><input type="checkbox" / />Document process
dependencies</label></li>
</ul>
<p><strong>Deliverables</strong>: - Process maps - Pain point analysis -
Time/cost analysis</p>
<h4 id="step-1.2-aiautomation-opportunity-identification">Step 1.2:
AI/Automation Opportunity Identification</h4>
<ul className="task-list">
<li><label><input type="checkbox" / />Identify automation
opportunities</label></li>
<li><label><input type="checkbox" / />Assess AI feasibility for each
opportunity</label></li>
<li><label><input type="checkbox" / />Prioritize opportunities by
ROI</label></li>
<li><label><input type="checkbox" / />Document technical
requirements</label></li>
<li><label><input type="checkbox" / />Assess data availability and
quality</label></li>
</ul>
<p><strong>Deliverables</strong>: - Automation opportunity report - ROI
analysis - Prioritized opportunity list</p>
<h4 id="step-1.3-technical-assessment">Step 1.3: Technical
Assessment</h4>
<ul className="task-list">
<li><label><input type="checkbox" / />Assess current systems and
integrations</label></li>
<li><label><input type="checkbox" / />Evaluate data
infrastructure</label></li>
<li><label><input type="checkbox" / />Identify integration
points</label></li>
<li><label><input type="checkbox" / />Assess security and compliance
requirements</label></li>
<li><label><input type="checkbox" / />Document technical
constraints</label></li>
</ul>
<p><strong>Deliverables</strong>: - Technical assessment report -
Integration plan</p>
<h4 id="step-1.4-ai-risk-assessment-iso-42001-requirement">Step 1.4: AI
Risk Assessment (ISO 42001 Requirement)</h4>
<ul className="task-list">
<li><label><input type="checkbox" / /><strong>Identify AI-Related
Risks</strong></label>
<ul className="task-list">
<li><label><input type="checkbox" / />Data privacy and security
risks</label></li>
<li><label><input type="checkbox" / />AI bias and discrimination
risks</label></li>
<li><label><input type="checkbox" / />System reliability
risks</label></li>
<li><label><input type="checkbox" / />Compliance and legal
risks</label></li>
<li><label><input type="checkbox" / />Third-party vendor
risks</label></li>
<li><label><input type="checkbox" / />Human impact and safety
risks</label></li>
</ul></li>
<li><label><input type="checkbox" / /><strong>Assess Risk Impact and
Likelihood</strong></label>
<ul className="task-list">
<li><label><input type="checkbox" / />Use risk assessment matrix
(5x5)</label></li>
<li><label><input type="checkbox" / />Categorize risks
(Critical/High/Medium/Low)</label></li>
<li><label><input type="checkbox" / />Document risk scores</label></li>
</ul></li>
<li><label><input type="checkbox" / /><strong>Document Risk
Register</strong></label>
<ul className="task-list">
<li><label><input type="checkbox" / />Complete AI Risk Assessment
Form</label></li>
<li><label><input type="checkbox" / />Record all identified
risks</label></li>
<li><label><input type="checkbox" / />Assign risk owners</label></li>
</ul></li>
</ul>
<p><strong>Deliverables</strong>: - AI Risk Assessment Report - Risk
Register - Risk mitigation plan (for Critical/High risks)</p>
<p><strong>Quality Checkpoint</strong>: Client approval of automation
opportunities and priorities</p>
<hr />
<h3 id="phase-2-process-optimization-critical">Phase 2: Process
Optimization (CRITICAL)</h3>
<p><strong>Duration</strong>: 1-2 weeks<br />
<strong>Objective</strong>: Optimize processes before automation</p>
<blockquote>
<p><strong>CRITICAL</strong>: Processes must be optimized and validated
before automation. Automation of broken processes only amplifies
problems.</p>
</blockquote>
<h4 id="step-2.1-process-review">Step 2.1: Process Review</h4>
<ul className="task-list">
<li><label><input type="checkbox" / />Review identified
processes</label></li>
<li><label><input type="checkbox" / />Identify inefficiencies</label></li>
<li><label><input type="checkbox" / />Document process improvements
needed</label></li>
<li><label><input type="checkbox" / />Create optimized process
flows</label></li>
</ul>
<h4 id="step-2.2-process-refinement">Step 2.2: Process Refinement</h4>
<ul className="task-list">
<li><label><input type="checkbox" / />Implement process
improvements</label></li>
<li><label><input type="checkbox" / />Standardize processes</label></li>
<li><label><input type="checkbox" / />Document optimized
processes</label></li>
<li><label><input type="checkbox" / />Test optimized
processes</label></li>
<li><label><input type="checkbox" / />Get stakeholder buy-in</label></li>
</ul>
<p><strong>Deliverables</strong>: - Optimized process documentation -
Process improvement report</p>
<p><strong>Quality Checkpoint</strong>: Processes must be fully optimized and validated
before automation</p>
<hr />
<h3 id="phase-3-ai-solution-design">Phase 3: AI Solution Design</h3>
<p><strong>Duration</strong>: 1-2 weeks<br />
<strong>Objective</strong>: Design AI/automation solution</p>
<h4 id="step-3.1-solution-architecture">Step 3.1: Solution
Architecture</h4>
<ul className="task-list">
<li><label><input type="checkbox" / />Design system
architecture</label></li>
<li><label><input type="checkbox" / />Select AI/automation
tools</label></li>
<li><label><input type="checkbox" / />Design data flow</label></li>
<li><label><input type="checkbox" / />Plan integrations</label></li>
<li><label><input type="checkbox" / />Design user interface (if
applicable)</label></li>
</ul>
<p><strong>Deliverables</strong>: - Solution architecture document -
Technology selection document</p>
<h4 id="step-3.2-ai-impact-assessment-iso-42001-requirement">Step 3.2:
AI Impact Assessment (ISO 42001 Requirement)</h4>
<ul className="task-list">
<li><label><input type="checkbox" / /><strong>Conduct AI Impact
Assessment</strong></label>
<ul className="task-list">
<li><label><input type="checkbox" / />Evaluate stakeholder impacts
(clients, employees, partners)</label></li>
<li><label><input type="checkbox" / />Assess safety and security
impacts</label></li>
<li><label><input type="checkbox" / />Evaluate privacy and data protection
impacts</label></li>
<li><label><input type="checkbox" / />Assess fairness and discrimination
risks</label></li>
<li><label><input type="checkbox" / />Evaluate transparency and
explainability needs</label></li>
<li><label><input type="checkbox" / />Consider human rights and dignity
impacts</label></li>
</ul></li>
<li><label><input type="checkbox" / /><strong>Stakeholder
Consultation</strong></label>
<ul className="task-list">
<li><label><input type="checkbox" / />Engage affected parties</label></li>
<li><label><input type="checkbox" / />Gather feedback and
concerns</label></li>
<li><label><input type="checkbox" / />Document stakeholder
input</label></li>
</ul></li>
<li><label><input type="checkbox" / /><strong>Document Impact
Assessment</strong></label>
<ul className="task-list">
<li><label><input type="checkbox" / />Complete AI Impact Assessment
Form</label></li>
<li><label><input type="checkbox" / />Record findings and
decisions</label></li>
<li><label><input type="checkbox" / />Create mitigation plan (if
needed)</label></li>
</ul></li>
</ul>
<p><strong>Deliverables</strong>: - AI Impact Assessment Report -
Stakeholder consultation notes - Mitigation plan (if applicable)</p>
<h4 id="step-3.3-implementation-plan">Step 3.3: Implementation Plan</h4>
<ul className="task-list">
<li><label><input type="checkbox" / />Create detailed implementation
plan</label></li>
<li><label><input type="checkbox" / />Define development
phases</label></li>
<li><label><input type="checkbox" / />Plan testing strategy</label></li>
<li><label><input type="checkbox" / />Plan deployment
strategy</label></li>
<li><label><input type="checkbox" / />Plan training strategy</label></li>
<li><label><input type="checkbox" / />Plan human oversight procedures (ISO
42001)</label></li>
<li><label><input type="checkbox" / />Plan monitoring and control
measures</label></li>
</ul>
<p><strong>Deliverables</strong>: - Implementation plan - Project
timeline - Human oversight plan</p>
<p><strong>Quality Checkpoint</strong>: Client approval of solution
design and impact assessment</p>
<hr />
<h3 id="phase-4-development">Phase 4: Development</h3>
<p><strong>Duration</strong>: 2-6 weeks<br />
<strong>Objective</strong>: Build AI/automation solution</p>
<h4 id="step-4.1-development-setup">Step 4.1: Development Setup</h4>
<ul className="task-list">
<li><label><input type="checkbox" / />Set up development
environment</label></li>
<li><label><input type="checkbox" / />Configure tools and
platforms</label></li>
<li><label><input type="checkbox" / />Set up version control</label></li>
<li><label><input type="checkbox" / />Set up testing
environment</label></li>
</ul>
<h4 id="step-4.2-solution-development">Step 4.2: Solution
Development</h4>
<ul className="task-list">
<li><label><input type="checkbox" / />Build automation
workflows</label></li>
<li><label><input type="checkbox" / />Develop AI models (if
custom)</label></li>
<li><label><input type="checkbox" / />Integrate systems</label></li>
<li><label><input type="checkbox" / />Build user interface (if
applicable)</label></li>
<li><label><input type="checkbox" / />Implement error
handling</label></li>
<li><label><input type="checkbox" / />Implement logging and
monitoring</label></li>
<li><label><input type="checkbox" / /><strong>Implement AI Governance
Controls (ISO 42001)</strong></label>
<ul className="task-list">
<li><label><input type="checkbox" / />Bias detection and mitigation
measures</label></li>
<li><label><input type="checkbox" / />Transparency and explainability
features</label></li>
<li><label><input type="checkbox" / />Human oversight
mechanisms</label></li>
<li><label><input type="checkbox" / />Data quality controls</label></li>
<li><label><input type="checkbox" / />Security and privacy
protections</label></li>
</ul></li>
</ul>
<p><strong>Deliverables</strong>: - Development solution - Technical
documentation - AI governance documentation</p>
<h4 id="step-4.3-testing">Step 4.3: Testing</h4>
<ul className="task-list">
<li><label><input type="checkbox" / />Unit testing</label></li>
<li><label><input type="checkbox" / />Integration testing</label></li>
<li><label><input type="checkbox" / />User acceptance testing</label></li>
<li><label><input type="checkbox" / />Performance testing</label></li>
<li><label><input type="checkbox" / />Security testing</label></li>
<li><label><input type="checkbox" / /><strong>AI-Specific Testing (ISO
42001)</strong></label>
<ul className="task-list">
<li><label><input type="checkbox" / />Bias testing and
validation</label></li>
<li><label><input type="checkbox" / />Explainability testing</label></li>
<li><label><input type="checkbox" / />Human oversight testing</label></li>
<li><label><input type="checkbox" / />Data quality validation</label></li>
<li><label><input type="checkbox" / />Fairness assessment</label></li>
</ul></li>
</ul>
<p><strong>Deliverables</strong>: - Test results - Bug fixes - AI
testing report</p>
<p><strong>Quality Checkpoint</strong>: All tests passing before
deployment</p>
<hr />
<h3 id="phase-5-deployment-training">Phase 5: Deployment &
Training</h3>
<p><strong>Duration</strong>: 1 week<br />
<strong>Objective</strong>: Deploy solution and train users</p>
<h4 id="step-5.1-deployment">Step 5.1: Deployment</h4>
<ul className="task-list">
<li><label><input type="checkbox" / />Deploy to production</label></li>
<li><label><input type="checkbox" / />Verify functionality</label></li>
<li><label><input type="checkbox" / />Monitor performance</label></li>
<li><label><input type="checkbox" / />Address any issues</label></li>
</ul>
<h4 id="step-5.2-user-training">Step 5.2: User Training</h4>
<ul className="task-list">
<li><label><input type="checkbox" / />Create training
materials</label></li>
<li><label><input type="checkbox" / />Conduct training
sessions</label></li>
<li><label><input type="checkbox" / />Provide documentation</label></li>
<li><label><input type="checkbox" / />Set up support channels</label></li>
</ul>
<p><strong>Deliverables</strong>: - Deployed solution - Training
materials - User documentation</p>
<hr />
<h3 id="phase-6-support-optimization">Phase 6: Support &
Optimization</h3>
<p><strong>Duration</strong>: Ongoing<br />
<strong>Objective</strong>: Ongoing support and improvement</p>
<h4 id="step-6.1-monitoring">Step 6.1: Monitoring</h4>
<ul className="task-list">
<li><label><input type="checkbox" / />Monitor system
performance</label></li>
<li><label><input type="checkbox" / />Track automation success
rates</label></li>
<li><label><input type="checkbox" / />Collect user feedback</label></li>
<li><label><input type="checkbox" / />Identify optimization
opportunities</label></li>
</ul>
<h4 id="step-6.2-continuous-improvement">Step 6.2: Continuous
Improvement</h4>
<ul className="task-list">
<li><label><input type="checkbox" / />Implement improvements</label></li>
<li><label><input type="checkbox" / />Optimize performance</label></li>
<li><label><input type="checkbox" / />Add new features (if
needed)</label></li>
<li><label><input type="checkbox" / />Update documentation</label></li>
</ul>
<p><strong>Deliverables</strong>: - Performance reports - Improvement
recommendations</p>
<hr />
<h2 id="success-metrics">Success Metrics</h2>
<ul>
<li><strong>Automation Success Rate</strong>: 95%+</li>
<li><strong>Time Savings</strong>: 10-20 hours/month</li>
<li><strong>Error Reduction</strong>: 50%+</li>
<li><strong>User Adoption</strong>: 90%+</li>
<li><strong>ROI</strong>: Positive within 6 months</li>
</ul>
<h2 id="review-continuous-improvement">Review & Continuous
Improvement</h2>
<ul>
<li>Monthly performance reviews</li>
<li>Quarterly optimization assessments</li>
<li>Annual strategy review</li>
<li>Client feedback integration</li>
<li><strong>ISO 42001 Compliance Reviews</strong>
<ul>
<li>Quarterly AI risk assessment reviews</li>
<li>Annual AI impact assessment reviews</li>
<li>Continuous monitoring of AI system performance</li>
</ul></li>
</ul>
<hr />
<h2 id="records-documentation">Records & Documentation</h2>
<h3 id="records-maintained-iso-9001-iso-42001">Records Maintained (ISO
9001 + ISO 42001)</h3>
<ul>
<li>Client discovery documents</li>
<li>Process maps and analysis</li>
<li>AI risk assessment reports</li>
<li>AI impact assessment reports</li>
<li>Solution architecture documents</li>
<li>Development documentation</li>
<li>Test results and reports</li>
<li>Deployment records</li>
<li>Training records</li>
<li>Performance monitoring reports</li>
<li>Incident reports (if any)</li>
<li>Approval records</li>
<li>Client feedback records</li>
</ul>
<h3 id="record-retention">Record Retention</h3>
<ul>
<li><strong>Client Documents</strong>: 7 years or as required by
contract</li>
<li><strong>AI Risk Assessments</strong>: 5 years or life of system + 2
years</li>
<li><strong>AI Impact Assessments</strong>: Life of system + 5
years</li>
<li><strong>Process Records</strong>: 5 years</li>
<li><strong>Approval Records</strong>: 7 years</li>
<li><strong>Incident Reports</strong>: 7 years</li>
</ul>
<h3 id="record-storage">Record Storage</h3>
<ul>
<li><strong>Location</strong>: [Client project folders / Document
management system]</li>
<li><strong>Access</strong>: Authorized personnel only</li>
<li><strong>Backup</strong>: Regular backup schedule</li>
<li><strong>Security</strong>: Encrypted storage for sensitive AI
data</li>
</ul>
<hr />
<h2 id="related-documents">Related Documents</h2>
<h3 id="related-processes">Related Processes</h3>
<ul>
<li><a href="02_Process_Optimization.md">Process Optimization</a> -
<strong>REQUIRED</strong> before automation</li>
<li><a href="../02_PLATFORM_PRESENCE/01_Website_Development.md">Website
Development</a> - Integration opportunities</li>
</ul>
<h3 id="related-policies-procedures-iso-42001">Related Policies &
Procedures (ISO 42001)</h3>
<ul>
<li>AI Risk Management Procedure</li>
<li>AI Impact Assessment Procedure</li>
<li>AI System Development Procedure</li>
<li>Third-Party AI Service Management Procedure</li>
<li>Data Quality Management Procedure</li>
<li>AI Transparency & Explainability Procedure</li>
<li>Bias Detection & Mitigation Procedure</li>
<li>Human Oversight Procedure</li>
<li>AI Incident Response Procedure</li>
</ul>
<h3 id="related-forms-templates-iso-42001">Related Forms & Templates
(ISO 42001)</h3>
<ul>
<li>AI System Inventory Form</li>
<li>AI Risk Assessment Form</li>
<li>AI Impact Assessment Form</li>
<li>Third-Party AI Vendor Evaluation Form</li>
<li>AI Incident Report Form</li>
<li>Client Intake Form</li>
<li>Approval Form</li>
<li>Feedback Form</li>
</ul>
<h3 id="iso-42001-compliance">ISO 42001 Compliance</h3>
<p>This process implements the following ISO 42001:2023 requirements: -
<strong>Clause 6.1</strong>: Actions to address risks and opportunities
(AI Risk Management) - <strong>Clause 8.2</strong>: AI impact assessment
- <strong>Clause 8.3</strong>: AI system impact assessment -
<strong>Clause 8.4</strong>: AI system lifecycle - <strong>Clause
8.5</strong>: Transparency - <strong>Clause 8.6</strong>: Third-party AI
services - <strong>Clause 8.7</strong>: Data for AI systems</p>
<hr />
<p><em>Part of the Kaizen Digital Strategy Blueprint -
Systems/Tools/Automation Category</em> <em>ISO 9001:2015 + ISO
42001:2023 Compliant Process Documentation</em></p>

`;

const mermaidDiagrams: Record<string, string> = {
  "mermaid-1": `flowchart TD
    A[Start: Client Engagement] --> B[Phase 1: Discovery & Assessment]
    B --> B1[Business Process Analysis]
    B1 --> B2[AI Opportunity Identification]
    B2 --> B3[Technical Assessment]
    B3 --> B4[AI Risk Assessment<br>ISO 42001]
    B4 --> C{Client Approval}
    C -->|Approved| D[Phase 2: Process Optimization<br>CRITICAL]
    C -->|Revisions| B
    D --> E{Optimization Approved?}
    E -->|Yes| F[Phase 3: AI Solution Design]
    E -->|No| D
    F --> F1[Solution Architecture]
    F1 --> F2[AI Impact Assessment<br>ISO 42001]
    F2 --> F3[Implementation Plan]
    F3 --> G{Client Approval}
    G -->|Approved| H[Phase 4: Development]
    G -->|Revisions| F
    H --> H1[Development Setup]
    H1 --> H2[Solution Development<br>+ AI Governance Controls]
    H2 --> H3[Testing<br>+ AI-Specific Testing]
    H3 --> I{All Tests Pass?}
    I -->|Yes| J[Phase 5: Deployment & Training]
    I -->|No| H
    J --> J1[Deployment]
    J1 --> J2[User Training]
    J2 --> K[Phase 6: Support & Optimization]
    K --> L[End: AI System Live]
    
    style A fill:#D62828,stroke:#1E1E1E,color:#fff
    style L fill:#D62828,stroke:#1E1E1E,color:#fff
    style C fill:#C9C9C9,stroke:#1E1E1E
    style E fill:#D62828,stroke:#1E1E1E,color:#fff
    style G fill:#C9C9C9,stroke:#1E1E1E
    style I fill:#C9C9C9,stroke:#1E1E1E
    style B4 fill:#F5F5F5,stroke:#D62828,stroke-width:2px
    style F2 fill:#F5F5F5,stroke:#D62828,stroke-width:2px
    style D fill:#F5F5F5,stroke:#D62828,stroke-width:3px`,
  "mermaid-2": `flowchart LR
    subgraph ISO["ISO 42001 Requirements"]
        R1[AI Risk Assessment] --> R2[AI Impact Assessment]
        R2 --> R3[AI Governance Controls]
        R3 --> R4[AI-Specific Testing]
        R4 --> R5[Human Oversight]
        R5 --> R6[Monitoring & Review]
    end
    
    subgraph Process["Process Phases"]
        P1[Discovery] --> P2[Design]
        P2 --> P3[Development]
        P3 --> P4[Deployment]
        P4 --> P5[Support]
    end
    
    R1 -.->|Phase 1| P1
    R2 -.->|Phase 3| P2
    R3 -.->|Phase 4| P3
    R4 -.->|Phase 4| P3
    R5 -.->|Phase 5| P4
    R6 -.->|Phase 6| P5
    
    style ISO fill:#F5F5F5,stroke:#D62828,stroke-width:2px
    style Process fill:#F5F5F5,stroke:#1E1E1E`
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
