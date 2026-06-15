import { motion } from 'framer-motion'

const flowTiming = {
  chain: 4.8,
  branch: 5.2,
  ladder: 6.4,
  loop: 5.8,
}

const escalationLadder = {
  ariaLabel: 'Escalation boundary',
  className: 'agent-diagram-ladder',
  height: 300,
  width: 1040,
  title: { x: 520, y: 48, text: 'Escalation Boundary' },
  subtitle: {
    x: 520,
    y: 84,
    text: 'Add the next abstraction only when the current boundary fails.',
  },
  lines: [{ x1: 140, y1: 150, x2: 900, y2: 150 }],
  nodes: [
    { x: 140, y: 150, r: 27 },
    { x: 330, y: 150, r: 27 },
    { x: 520, y: 150, r: 27 },
    { x: 710, y: 150, r: 27 },
    { x: 900, y: 150, r: 27 },
  ],
  flows: [
    {
      duration: flowTiming.ladder,
      points: [
        { x: 140, y: 150 },
        { x: 900, y: 150 },
      ],
      radius: 16,
    },
  ],
  labels: [
    { x: 140, y: 230, text: 'Prompt' },
    { x: 330, y: 230, text: 'Tools' },
    { x: 520, y: 230, text: 'Workflow' },
    { x: 710, y: 230, text: 'Workers' },
    { x: 900, y: 230, text: 'Autonomy' },
  ],
}

const canonicalPatterns = {
  ariaLabel: 'Five canonical agent workflow patterns',
  className: 'agent-diagram-patterns',
  height: 610,
  width: 1200,
  title: { x: 600, y: 54, text: '5 Canonical Agent Workflow Patterns' },
  groups: [
    {
      origin: { x: 80, y: 115 },
      lines: [{ x1: 20, y1: 55, x2: 320, y2: 55 }],
      nodes: [
        { x: 20, y: 55, r: 25 },
        { x: 170, y: 55, r: 25 },
        { x: 320, y: 55, r: 25 },
      ],
      flows: [
        {
          duration: flowTiming.chain,
          points: [
            { x: 20, y: 55 },
            { x: 320, y: 55 },
          ],
        },
      ],
      labels: [{ kind: 'pattern', x: 170, y: 145, text: 'Prompt Chaining' }],
    },
    {
      origin: { x: 455, y: 115 },
      lines: [
        { x1: 30, y1: 60, x2: 290, y2: 0 },
        { x1: 30, y1: 60, x2: 290, y2: 60 },
        { x1: 30, y1: 60, x2: 290, y2: 120 },
      ],
      nodes: [
        { x: 30, y: 60, r: 25 },
        { x: 290, y: 0, r: 25 },
        { x: 290, y: 60, r: 25 },
        { x: 290, y: 120, r: 25 },
      ],
      flows: [
        {
          points: [
            { x: 30, y: 60 },
            { x: 290, y: 0 },
          ],
        },
        {
          delay: 0.45,
          points: [
            { x: 30, y: 60 },
            { x: 290, y: 60 },
          ],
        },
        {
          delay: 0.9,
          points: [
            { x: 30, y: 60 },
            { x: 290, y: 120 },
          ],
        },
      ],
      labels: [{ kind: 'pattern', x: 160, y: 172, text: 'Routing' }],
    },
    {
      origin: { x: 850, y: 115 },
      lines: [
        { x1: 30, y1: 60, x2: 160, y2: 0 },
        { x1: 30, y1: 60, x2: 160, y2: 60 },
        { x1: 30, y1: 60, x2: 160, y2: 120 },
        { x1: 160, y1: 0, x2: 310, y2: 60 },
        { x1: 160, y1: 60, x2: 310, y2: 60 },
        { x1: 160, y1: 120, x2: 310, y2: 60 },
      ],
      nodes: [
        { x: 30, y: 60, r: 25 },
        { x: 160, y: 0, r: 25 },
        { x: 160, y: 60, r: 25 },
        { x: 160, y: 120, r: 25 },
        { x: 310, y: 60, r: 25 },
      ],
      flows: [
        {
          points: [
            { x: 30, y: 60 },
            { x: 160, y: 0 },
            { x: 310, y: 60 },
          ],
        },
        {
          delay: 0.4,
          points: [
            { x: 30, y: 60 },
            { x: 160, y: 60 },
            { x: 310, y: 60 },
          ],
        },
        {
          delay: 0.8,
          points: [
            { x: 30, y: 60 },
            { x: 160, y: 120 },
            { x: 310, y: 60 },
          ],
        },
      ],
      labels: [{ kind: 'pattern', x: 170, y: 172, text: 'Parallelization' }],
    },
    {
      origin: { x: 240, y: 300 },
      lines: [
        { x1: 69, y1: 38, x2: 165, y2: 110 },
        { x1: 165, y1: 110, x2: 261, y2: 38 },
        { x1: 165, y1: 110, x2: 165, y2: 230 },
      ],
      nodes: [
        { x: 69, y: 38, r: 25 },
        { x: 165, y: 110, r: 25 },
        { x: 261, y: 38, r: 25 },
        { x: 165, y: 230, r: 25 },
      ],
      flows: [
        {
          points: [
            { x: 69, y: 38 },
            { x: 165, y: 110 },
          ],
        },
        {
          delay: 0.35,
          points: [
            { x: 261, y: 38 },
            { x: 165, y: 110 },
          ],
        },
        {
          delay: 0.7,
          points: [
            { x: 165, y: 230 },
            { x: 165, y: 110 },
          ],
        },
      ],
      labels: [{ kind: 'pattern', x: 165, y: 286, text: 'Orch-Workers' }],
    },
    {
      origin: { x: 720, y: 365 },
      lines: [
        { d: 'M35 60 H250 V122 H35 V60' },
      ],
      nodes: [
        { x: 35, y: 60, r: 25 },
        { x: 250, y: 60, r: 25 },
      ],
      flows: [
        {
          duration: flowTiming.loop,
          closed: true,
          points: [
            { x: 35, y: 60 },
            { x: 250, y: 60 },
            { x: 250, y: 122 },
            { x: 35, y: 122 },
            { x: 35, y: 60 },
          ],
        },
      ],
      labels: [{ kind: 'pattern', x: 145, y: 155, text: 'Eval-Optimizer' }],
    },
  ],
}

function getSegmentTimes(points) {
  const segmentLengths = points.slice(1).map((point, index) => {
    const previous = points[index]
    return Math.hypot(point.x - previous.x, point.y - previous.y)
  })
  const totalLength = segmentLengths.reduce((sum, length) => sum + length, 0)

  if (totalLength === 0) {
    return points.map((_, index) => index / Math.max(points.length - 1, 1))
  }

  let traveled = 0
  return [
    0,
    ...segmentLengths.map((length) => {
      traveled += length
      return traveled / totalLength
    }),
  ]
}

function getRoundTrip(points) {
  return [
    ...points,
    ...points.slice(0, -1).reverse(),
  ]
}

function DiagramCanvas({ children, diagram }) {
  return (
    <svg
      className={`agent-diagram ${diagram.className}`}
      xmlns="http://www.w3.org/2000/svg"
      width={diagram.width}
      height={diagram.height}
      viewBox={`0 0 ${diagram.width} ${diagram.height}`}
      role="img"
      aria-label={diagram.ariaLabel}
    >
      <rect className="diagram-canvas-bg" width="100%" height="100%" />
      {children}
    </svg>
  )
}

function DiagramLabel({ kind = 'label', text, x, y }) {
  return (
    <text x={x} y={y} textAnchor="middle" className={`diagram-${kind}`}>
      {text}
    </text>
  )
}

function DiagramLine({ d, x1, x2, y1, y2 }) {
  if (d) return <path d={d} className="diagram-line" />
  return <line x1={x1} y1={y1} x2={x2} y2={y2} className="diagram-line" />
}

function DiagramNode({ r, x, y }) {
  return <circle cx={x} cy={y} r={r} className="diagram-node" />
}

function MovingBubble({ closed = false, delay = 0, duration = flowTiming.branch, points, radius = 15 }) {
  const cyclePoints = closed ? points : getRoundTrip(points)
  const [origin] = cyclePoints
  const x = cyclePoints.map((point) => point.x - origin.x)
  const y = cyclePoints.map((point) => point.y - origin.y)

  return (
    <motion.circle
      cx={origin.x}
      cy={origin.y}
      r={radius}
      className="diagram-bubble"
      animate={{ x, y }}
      transition={{
        delay,
        duration,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'loop',
        times: getSegmentTimes(cyclePoints),
      }}
    />
  )
}

function DiagramGroup({ group }) {
  return (
    <g transform={`translate(${group.origin.x} ${group.origin.y})`}>
      {group.lines.map((line, index) => (
        <DiagramLine key={`line-${index}`} {...line} />
      ))}
      {group.nodes.map((node, index) => (
        <DiagramNode key={`node-${index}`} {...node} />
      ))}
      {group.flows.map((flow, index) => (
        <MovingBubble key={`flow-${index}`} {...flow} />
      ))}
      {group.labels.map((label) => (
        <DiagramLabel key={label.text} {...label} />
      ))}
    </g>
  )
}

function EscalationLadderDiagram() {
  return (
    <DiagramCanvas diagram={escalationLadder}>
      <DiagramLabel kind="title" {...escalationLadder.title} />
      <DiagramLabel kind="subtitle" {...escalationLadder.subtitle} />
      {escalationLadder.lines.map((line, index) => (
        <DiagramLine key={`line-${index}`} {...line} />
      ))}
      {escalationLadder.nodes.map((node, index) => (
        <DiagramNode key={`node-${index}`} {...node} />
      ))}
      {escalationLadder.flows.map((flow, index) => (
        <MovingBubble key={`flow-${index}`} {...flow} />
      ))}
      {escalationLadder.labels.map((label) => (
        <DiagramLabel key={label.text} {...label} />
      ))}
    </DiagramCanvas>
  )
}

function CanonicalPatternsDiagram() {
  return (
    <DiagramCanvas diagram={canonicalPatterns}>
      <DiagramLabel kind="title" {...canonicalPatterns.title} />
      {canonicalPatterns.groups.map((group, index) => (
        <DiagramGroup key={`group-${index}`} group={group} />
      ))}
    </DiagramCanvas>
  )
}

function AgentDiagram({ src }) {
  if (src === '/diagrams/multi-agent-escalation-ladder.svg') {
    return <EscalationLadderDiagram />
  }

  if (src === '/diagrams/multi-agent-canonical-patterns.svg') {
    return <CanonicalPatternsDiagram />
  }

  return null
}

export default AgentDiagram
