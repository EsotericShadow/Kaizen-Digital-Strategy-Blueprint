'use client';
import { useMemo } from 'react';
import parse, { Element, HTMLReactParserOptions } from 'html-react-parser';
import Mermaid from '@/components/Mermaid';

const htmlContent = `

<nav id="TOC" role="doc-toc">
<ul>
<li><a href="#graphiclogo-design"
id="toc-graphiclogo-design">Graphic/Logo Design</a>
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
<li><a href="#phase-1-discovery-session"
id="toc-phase-1-discovery-session">Phase 1: Discovery Session</a></li>
<li><a href="#phase-2-creative-session-1"
id="toc-phase-2-creative-session-1">Phase 2: Creative Session 1</a></li>
<li><a href="#phase-3-client-approval"
id="toc-phase-3-client-approval">Phase 3: Client Approval</a></li>
<li><a href="#phase-4-refinement" id="toc-phase-4-refinement">Phase 4:
Refinement</a></li>
<li><a href="#phase-5-final-delivery-session"
id="toc-phase-5-final-delivery-session">Phase 5: Final Delivery
Session</a></li>
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
<h1 id="graphiclogo-design">Graphic/Logo Design</h1>
<h2 id="process-overview">Process Overview</h2>
<p><strong>Purpose</strong>: Create professional logo and graphic
designs<br />
<strong>Owner</strong>: Graphic Designer<br />
<strong>Duration</strong>: 2-3 weeks<br />
<strong>Client Sessions</strong>: 3 sessions<br />
<strong>Category</strong>: Branding/Positioning</p>
<h2 id="process-map">Process Map</h2>
<h3 id="high-level-process-flow">High-Level Process Flow</h3>
<div data-mermaid-id="mermaid-1"></div>
<hr />
<h2 id="detailed-process-steps">Detailed Process Steps</h2>
<h3 id="phase-1-discovery-session">Phase 1: Discovery Session</h3>
<p><strong>Duration</strong>: 1-2 hours<br />
<strong>Objective</strong>: Understand client preferences and establish
creative direction</p>
<h4 id="step-1.1-client-preference-discovery">Step 1.1: Client
Preference Discovery</h4>
<ul className="task-list">
<li><label><input type="checkbox" / /><strong>Learn What Client
Likes</strong></label>
<ul className="task-list">
<li><label><input type="checkbox" / />Show visual examples (logos,
graphics, styles)</label></li>
<li><label><input type="checkbox" / />Document client reactions
(likes/dislikes)</label></li>
<li><label><input type="checkbox" / />Identify style preferences (modern,
classic, playful, etc.)</label></li>
<li><label><input type="checkbox" / />Understand brand
personality</label></li>
</ul></li>
<li><label><input type="checkbox" / /><strong>Identify 2-3 Anchor
Concepts</strong></label>
<ul className="task-list">
<li><label><input type="checkbox" / />Extract key words/phrases that
describe client preferences</label></li>
<li><label><input type="checkbox" / />Examples: “bold and minimal”,
“organic and friendly”, “tech-forward and clean”</label></li>
<li><label><input type="checkbox" / />Document anchor concepts
clearly</label></li>
</ul></li>
<li><label><input type="checkbox" / /><strong>Explore Concepts
Horizontally</strong></label>
<ul className="task-list">
<li><label><input type="checkbox" / />Show variations within each anchor
concept</label></li>
<li><label><input type="checkbox" / />Explore different directions for
each anchor</label></li>
<li><label><input type="checkbox" / />Document client reactions to
variations</label></li>
</ul></li>
<li><label><input type="checkbox" / /><strong>Identify
Dislikes</strong></label>
<ul className="task-list">
<li><label><input type="checkbox" / />Document what client explicitly does
NOT like</label></li>
<li><label><input type="checkbox" / />Create “avoid” list for design
process</label></li>
<li><label><input type="checkbox" / />Understand boundaries and
constraints</label></li>
</ul></li>
</ul>
<p><strong>Deliverables</strong>: - Client preference document - 2-3
anchor concepts (written description) - Likes/dislikes list - Creative
direction summary</p>
<h4 id="step-1.2-lookbook-creation">Step 1.2: Lookbook Creation</h4>
<ul className="task-list">
<li><label><input type="checkbox" / /><strong>Pinterest
Lookbook</strong></label>
<ul className="task-list">
<li><label><input type="checkbox" / />Create Pinterest board for
project</label></li>
<li><label><input type="checkbox" / />Research logos/graphics in client’s
industry</label></li>
<li><label><input type="checkbox" / />Collect 20-30 visual
references</label></li>
<li><label><input type="checkbox" / />Organize by
style/concept</label></li>
<li><label><input type="checkbox" / />Share lookbook with
client</label></li>
</ul></li>
<li><label><input type="checkbox" / /><strong>Reference
Collection</strong></label>
<ul className="task-list">
<li><label><input type="checkbox" / />Collect competitor
logos</label></li>
<li><label><input type="checkbox" / />Collect inspirational
designs</label></li>
<li><label><input type="checkbox" / />Document design trends in
industry</label></li>
</ul></li>
</ul>
<p><strong>Deliverables</strong>: - Pinterest lookbook (shared with
client) - Reference collection document</p>
<h4 id="step-1.3-concept-vertical-planning">Step 1.3: Concept Vertical
Planning</h4>
<ul className="task-list">
<li><label><input type="checkbox" / /><strong>Define 2-3 Concept Verticals
to Explore</strong></label>
<ul className="task-list">
<li><label><input type="checkbox" / />Vertical 1: [Anchor concept
description]</label></li>
<li><label><input type="checkbox" / />Vertical 2: [Anchor concept
description]</label></li>
<li><label><input type="checkbox" / />Vertical 3: [Anchor concept
description] (optional)</label></li>
</ul></li>
<li><label><input type="checkbox" / /><strong>Document Exploration Plan
for Each Vertical</strong></label>
<ul className="task-list">
<li><label><input type="checkbox" / />Define variations to
explore</label></li>
<li><label><input type="checkbox" / />Plan design approaches</label></li>
</ul></li>
</ul>
<p><strong>Deliverables</strong>: - Concept vertical plan (2-3 concepts)
- Exploration strategy</p>
<h4 id="step-1.4-client-confidence-check">Step 1.4: Client Confidence
Check</h4>
<ul className="task-list">
<li><label><input type="checkbox" / /><strong>Verify Client
Understanding</strong></label>
<ul className="task-list">
<li><label><input type="checkbox" / />Confirm client understands
process</label></li>
<li><label><input type="checkbox" / />Confirm timeline
expectations</label></li>
<li><label><input type="checkbox" / />Confirm revision
process</label></li>
</ul></li>
<li><label><input type="checkbox" / /><strong>Set
Expectations</strong></label>
<ul className="task-list">
<li><label><input type="checkbox" / />Explain design process</label></li>
<li><label><input type="checkbox" / />Explain approval timeline (48 hours
max)</label></li>
<li><label><input type="checkbox" / />Explain revision
process</label></li>
</ul></li>
</ul>
<p><strong>Deliverables</strong>: - Process agreement document -
Timeline confirmation</p>
<p><strong>Quality Checkpoint</strong>: Client approval of creative
direction before proceeding</p>
<hr />
<h3 id="phase-2-creative-session-1">Phase 2: Creative Session 1</h3>
<p><strong>Duration</strong>: 5 hours total<br />
<strong>Objective</strong>: Create initial logo concepts</p>
<h4 id="step-2.1-inspiration-gathering">Step 2.1: Inspiration
Gathering</h4>
<p><strong>Duration</strong>: 1 hour maximum - [ ] <strong>Review
Lookbook</strong> - [ ] Review Pinterest lookbook - [ ] Identify key
design elements to explore - [ ] Note color, typography, and style
patterns - [ ] <strong>Browse Ideas</strong> - [ ] Research additional
inspiration - [ ] Explore design trends - [ ] Collect additional
references if needed - [ ] <strong>Plan Design Approach</strong> - [ ]
Decide on design tools and techniques - [ ] Plan sketching approach for
each concept vertical</p>
<p><strong>Deliverables</strong>: - Inspiration notes - Design approach
plan</p>
<h4 id="step-2.2-drawingsketching-session">Step 2.2: Drawing/Sketching
Session</h4>
<p><strong>Duration</strong>: 4 hours - [ ] <strong>Concept Vertical 1
Exploration</strong> - [ ] Create 5-10 rough sketches exploring Vertical
1 - [ ] Experiment with different layouts - [ ] Try different typography
approaches - [ ] Explore icon/symbol variations - [ ] <strong>Concept
Vertical 2 Exploration</strong> - [ ] Create 5-10 rough sketches
exploring Vertical 2 - [ ] Experiment with different layouts - [ ] Try
different typography approaches - [ ] Explore icon/symbol variations - [
] <strong>Concept Vertical 3 Exploration</strong> (if applicable) - [ ]
Create 5-10 rough sketches exploring Vertical 3 - [ ] Experiment with
different layouts - [ ] Try different typography approaches - [ ]
Explore icon/symbol variations - [ ] <strong>Select Best
Concepts</strong> - [ ] Review all sketches - [ ] Select 2-3 strongest
concepts per vertical - [ ] Refine selected sketches - [ ] Ensure
designs work at different sizes</p>
<p><strong>Deliverables</strong>: - Sketch collection (20-30+ sketches)
- 2-3 selected concepts per vertical (6-9 total concepts)</p>
<h4 id="step-2.3-mockup-creation">Step 2.3: Mockup Creation</h4>
<ul className="task-list">
<li><label><input type="checkbox" / /><strong>Create 2-3 Mockup
Designs</strong></label>
<ul className="task-list">
<li><label><input type="checkbox" / />Select 2-3 best concepts from
sketching session</label></li>
<li><label><input type="checkbox" / />Create clean mockups of selected
concepts</label></li>
<li><label><input type="checkbox" / />Present mockups in context (business
card, website header, etc.)</label></li>
<li><label><input type="checkbox" / />Ensure mockups show logo at
different sizes</label></li>
</ul></li>
<li><label><input type="checkbox" / /><strong>Prepare
Presentation</strong></label>
<ul className="task-list">
<li><label><input type="checkbox" / />Create presentation
document</label></li>
<li><label><input type="checkbox" / />Include concept
descriptions</label></li>
<li><label><input type="checkbox" / />Show logo variations (if
applicable)</label></li>
<li><label><input type="checkbox" / />Show logo in different
contexts</label></li>
</ul></li>
</ul>
<p><strong>Deliverables</strong>: - 2-3 mockup designs (digital files) -
Presentation document</p>
<p><strong>Quality Checkpoint</strong>: Internal review of mockups
before client presentation</p>
<hr />
<h3 id="phase-3-client-approval">Phase 3: Client Approval</h3>
<p><strong>Duration</strong>: 48 hours maximum<br />
<strong>Objective</strong>: Get client approval on direction</p>
<h4 id="step-3.1-client-presentation">Step 3.1: Client Presentation</h4>
<ul className="task-list">
<li><label><input type="checkbox" / /><strong>Present
Mockups</strong></label>
<ul className="task-list">
<li><label><input type="checkbox" / />Present 2-3 mockup designs to
client</label></li>
<li><label><input type="checkbox" / />Explain each concept</label></li>
<li><label><input type="checkbox" / />Show logo in different
contexts</label></li>
<li><label><input type="checkbox" / />Answer client questions</label></li>
</ul></li>
<li><label><input type="checkbox" / /><strong>Collect Client
Feedback</strong></label>
<ul className="task-list">
<li><label><input type="checkbox" / />Document client
preferences</label></li>
<li><label><input type="checkbox" / />Note which concepts client
likes</label></li>
<li><label><input type="checkbox" / />Document requested
changes</label></li>
<li><label><input type="checkbox" / />Identify elements to combine (if
applicable)</label></li>
</ul></li>
</ul>
<p><strong>Deliverables</strong>: - Client feedback document - Approval
or revision notes</p>
<h4 id="step-3.2-concept-selection">Step 3.2: Concept Selection</h4>
<ul className="task-list">
<li><label><input type="checkbox" / /><strong>Choose 2 Best Concepts for
Refinement</strong></label>
<ul className="task-list">
<li><label><input type="checkbox" / />Based on client feedback, select 2
concepts</label></li>
<li><label><input type="checkbox" / />May combine elements from multiple
concepts</label></li>
<li><label><input type="checkbox" / />Document refinement plan for each
concept</label></li>
</ul></li>
</ul>
<p><strong>Deliverables</strong>: - Selected concepts document (2
concepts) - Refinement plan</p>
<p><strong>Quality Checkpoint</strong>: Client approval of selected
concepts before refinement</p>
<hr />
<h3 id="phase-4-refinement">Phase 4: Refinement</h3>
<p><strong>Duration</strong>: 6 hours<br />
<strong>Objective</strong>: Refine selected concepts to final
designs</p>
<h4 id="step-4.1-drawing-with-grid-and-tools">Step 4.1: Drawing with
Grid and Tools</h4>
<p><strong>Duration</strong>: 4 hours - [ ] <strong>Refine Concept
1</strong> - [ ] Use grid system for precision - [ ] Ensure proper
proportions - [ ] Refine typography (if text included) - [ ] Refine
icon/symbol details - [ ] Ensure design works at small and large sizes -
[ ] Create clean, accurate drawing - [ ] <strong>Refine Concept
2</strong> - [ ] Use grid system for precision - [ ] Ensure proper
proportions - [ ] Refine typography (if text included) - [ ] Refine
icon/symbol details - [ ] Ensure design works at small and large sizes -
[ ] Create clean, accurate drawing</p>
<p><strong>Deliverables</strong>: - Refined drawings (2 concepts, on
paper with grid)</p>
<h4 id="step-4.2-digitization">Step 4.2: Digitization</h4>
<p><strong>Duration</strong>: 2 hours (1 hour per concept) - [ ]
<strong>Photograph Drawings</strong> - [ ] Take well-lit photos of each
drawing - [ ] Ensure even lighting, no shadows - [ ] Use high resolution
- [ ] Ensure drawing is flat and in focus - [ ] <strong>Image
Processing</strong> - [ ] Import photos to image editing software - [ ]
Increase black point (darken lines) - [ ] Increase whites (brighten
background) - [ ] Increase contrast (make lines crisp) - [ ] Remove
white background (extract logo as PNG) - [ ] Clean up any artifacts - [
] <strong>Vector Creation</strong> - [ ] Import processed PNG to vector
software (Illustrator, Inkscape, etc.) - [ ] Create vector paths
matching the drawing - [ ] Ensure smooth curves and clean lines - [ ]
Create proper vector shapes - [ ] Organize layers logically - [ ] Save
in vector format (SVG, AI, EPS)</p>
<p><strong>Deliverables</strong>: - Digitized vector logos (2 concepts)
- Vector files in multiple formats (SVG, AI, EPS, PDF)</p>
<p><strong>Quality Checkpoint</strong>: Internal review of digitized
logos</p>
<hr />
<h3 id="phase-5-final-delivery-session">Phase 5: Final Delivery
Session</h3>
<p><strong>Duration</strong>: 1-2 hours<br />
<strong>Objective</strong>: Present final designs and get approval</p>
<h4 id="step-5.1-final-presentation">Step 5.1: Final Presentation</h4>
<ul className="task-list">
<li><label><input type="checkbox" / /><strong>Present 2 Refined
Concepts</strong></label>
<ul className="task-list">
<li><label><input type="checkbox" / />Show both digitized logo
concepts</label></li>
<li><label><input type="checkbox" / />Present logos in various contexts
(business card, letterhead, website, etc.)</label></li>
<li><label><input type="checkbox" / />Show logo variations (horizontal,
vertical, icon-only, if applicable)</label></li>
<li><label><input type="checkbox" / />Show logo in different
sizes</label></li>
<li><label><input type="checkbox" / />Show logo in color and
black/white</label></li>
</ul></li>
<li><label><input type="checkbox" / /><strong>Explain Design
Rationale</strong></label>
<ul className="task-list">
<li><label><input type="checkbox" / />Explain design choices</label></li>
<li><label><input type="checkbox" / />Explain how logo represents
brand</label></li>
<li><label><input type="checkbox" / />Answer client questions</label></li>
</ul></li>
</ul>
<p><strong>Deliverables</strong>: - Final logo presentation - 2 refined
logo concepts (all formats)</p>
<h4 id="step-5.2-client-approval-revision-notes">Step 5.2: Client
Approval & Revision Notes</h4>
<ul className="task-list">
<li><label><input type="checkbox" / /><strong>Collect Client
Feedback</strong></label>
<ul className="task-list">
<li><label><input type="checkbox" / />Document client
preferences</label></li>
<li><label><input type="checkbox" / />Note which concept client
prefers</label></li>
<li><label><input type="checkbox" / />Document any revision
requests</label></li>
<li><label><input type="checkbox" / />Get final approval or revision
plan</label></li>
</ul></li>
<li><label><input type="checkbox" / /><strong>Finalize or
Revise</strong></label>
<ul className="task-list">
<li><label><input type="checkbox" / />If approved: Proceed to final
delivery</label></li>
<li><label><input type="checkbox" / />If revisions needed: Document
revision plan and timeline</label></li>
</ul></li>
</ul>
<p><strong>Deliverables</strong>: - Client approval document - Revision
plan (if applicable)</p>
<h4 id="step-5.3-final-logo-delivery-if-approved">Step 5.3: Final Logo
Delivery (if approved)</h4>
<ul className="task-list">
<li><label><input type="checkbox" / /><strong>Create Final Logo
Package</strong></label>
<ul className="task-list">
<li><label><input type="checkbox" / />Finalize chosen logo
concept</label></li>
<li><label><input type="checkbox" / />Create all logo variations (if
needed)</label></li>
<li><label><input type="checkbox" / />Export in all required
formats:</label>
<ul className="task-list">
<li><label><input type="checkbox" / />Vector formats: SVG, AI, EPS,
PDF</label></li>
<li><label><input type="checkbox" / />Raster formats: PNG (transparent),
PNG (white bg), JPG (white bg)</label></li>
<li><label><input type="checkbox" / />Different sizes: Large, medium,
small, favicon</label></li>
</ul></li>
<li><label><input type="checkbox" / />Create logo usage guidelines
document</label></li>
<li><label><input type="checkbox" / />Organize files in folder
structure</label></li>
</ul></li>
<li><label><input type="checkbox" / /><strong>Deliver to
Client</strong></label>
<ul className="task-list">
<li><label><input type="checkbox" / />Provide logo files
package</label></li>
<li><label><input type="checkbox" / />Provide logo usage
guidelines</label></li>
<li><label><input type="checkbox" / />Provide brand color codes (if
applicable)</label></li>
</ul></li>
</ul>
<p><strong>Deliverables</strong>: - Final logo package (all formats) -
Logo usage guidelines document - Brand color document (if
applicable)</p>
<hr />
<h2 id="success-metrics">Success Metrics</h2>
<ul>
<li><strong>Client Satisfaction</strong>: 4.8/5.0</li>
<li><strong>Design Quality</strong>: Professional, scalable,
versatile</li>
<li><strong>Timeline Adherence</strong>: On-time delivery</li>
<li><strong>Revision Cycles</strong>: Maximum 2 revision cycles</li>
</ul>
<h2 id="review-continuous-improvement">Review & Continuous
Improvement</h2>
<ul>
<li>Post-project review</li>
<li>Client feedback integration</li>
<li>Design process refinement</li>
<li>Tool and technique updates</li>
</ul>
<hr />
<h2 id="related-processes">Related Processes</h2>
<ul>
<li><a href="01_Branding_Strategy.md">Branding Strategy</a> - Logo
integration into brand identity</li>
<li><a href="../02_PLATFORM_PRESENCE/01_Website_Development.md">Website
Development</a> - Logo usage on website</li>
</ul>
<hr />
<p><em>Part of the Kaizen Digital Strategy Blueprint -
Branding/Positioning Category</em></p>

`;

const mermaidDiagrams: Record<string, string> = {
  "mermaid-1": `flowchart TD
    A[Start: Client Engagement] --> B[Phase 1: Discovery Session]
    B --> B1[Client Preference Discovery]
    B1 --> B2[Lookbook Creation]
    B2 --> B3[Concept Vertical Planning]
    B3 --> B4[Client Confidence Check]
    B4 --> C{Client Approval}
    C -->|Approved| D[Phase 2: Creative Session 1]
    C -->|Revisions| B
    D --> D1[Inspiration Gathering<br>1 hour max]
    D1 --> D2[Drawing/Sketching Session<br>4 hours]
    D2 --> D3[Mockup Creation<br>2-3 designs]
    D3 --> E{Client Approval<br>48 hours max}
    E -->|Approved| F[Phase 3: Refinement]
    E -->|Revisions| D
    F --> F1[Drawing with Grid<br>4 hours]
    F1 --> F2[Digitization<br>2 hours]
    F2 --> G[Phase 4: Final Delivery Session]
    G --> G1[Final Presentation]
    G1 --> G2{Client Approval}
    G2 -->|Approved| H[Final Logo Package]
    G2 -->|Revisions| F
    H --> I[End: Logo Delivered]
    
    style A fill:#D62828,stroke:#1E1E1E,color:#fff
    style I fill:#D62828,stroke:#1E1E1E,color:#fff
    style C fill:#C9C9C9,stroke:#1E1E1E
    style E fill:#C9C9C9,stroke:#1E1E1E
    style G2 fill:#C9C9C9,stroke:#1E1E1E`
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
