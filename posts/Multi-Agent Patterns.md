---
title: Multi-Agent Patterns
date: 2026-06-03
summary: A practical breakdown of agentic system patterns and when each abstraction earns its complexity.
---

**Most teams do not need a multi-agent system first. They need a sharper escalation boundary.**

That was my main takeaway rereading Anthropic's ["Building effective agents"](https://www.anthropic.com/engineering/building-effective-agents).

The useful framing is not "single agent vs. multi-agent."

It is: what failure mode justifies the next abstraction layer?

Here is how I think about the patterns.

![Agentic abstraction ladder](/diagrams/multi-agent-escalation-ladder.svg)

**Augmented LLM**

Start with one model call plus the right context surface: retrieval, tools, memory, and a clear agent-computer interface.

If the task can be solved with a well-scoped prompt and a documented tool boundary, adding more agents usually just adds latency, cost, and places to debug.

**Prompt chaining**

Use this when the work decomposes into a fixed sequence.

Each step should reduce ambiguity for the next step. The service boundary is the intermediate artifact: outline, plan, extraction result, draft, validation result.

The key is the gate between steps. If you cannot define what "good enough to continue" means, the chain is probably hiding uncertainty instead of managing it.

**Routing**

Use routing when one prompt is trying to serve too many problem classes.

The router owns classification. The downstream path owns specialization.

This is where a lot of production systems get cleaner: refunds should not share the same policy surface as general FAQs, and easy requests do not need the same model path as ambiguous ones.

![Five canonical agent workflow patterns](/diagrams/multi-agent-canonical-patterns.svg)

**Parallelization**

Use parallelization when work can be split into independent dimensions.

Sectioning improves throughput when subtasks do not depend on each other. Voting improves confidence when multiple independent judgments reduce risk.

The boundary that matters is aggregation. If the merge logic is vague, parallel workers just produce more ambiguity faster.

**Orchestrator-workers**

Use this when the subtasks cannot be known ahead of time.

The orchestrator owns decomposition, delegation, and synthesis. Workers should own bounded execution surfaces.

This pattern is powerful for coding, research, and operational workflows where the shape of the task emerges only after inspecting the environment.

It also needs discipline. Without clear ownership boundaries, the orchestrator becomes a traffic cop for overlapping agents.

**Evaluator-optimizer**

Use this when quality improves through an explicit feedback loop.

The evaluator needs criteria, not vibes. The optimizer needs a constrained revision target, not an invitation to rewrite everything.

This pattern works best when feedback can be converted into measurable improvement: correctness, tone, compliance, completeness, or test pass rate.

**Autonomous agents**

Use autonomy when the path cannot be hardcoded and the system can safely learn from environment feedback over multiple turns.

That means tool results, test outputs, checkpoints, guardrails, and stopping conditions become part of the architecture.

The agent is not just "thinking longer." It is operating inside a control loop.

The throughline across all of these patterns is simplicity.

Add an abstraction only when it resolves a real failure mode:

- The task is too ambiguous for one pass.
- The input classes need different handling.
- Independent checks reduce risk.
- Dynamic decomposition creates leverage.
- Iterative feedback measurably improves output.
- The environment needs to drive the next action.

The production question is not: "How many agents can we add?"

It is: "Which boundary makes the system easier to reason about, test, and operate?"

That is the difference between multi-agent architecture and multi-agent theater.

Where have you seen agent systems get cleaner because the team removed an abstraction layer instead of adding one?

Editable source: [Multi-agent patterns Excalidraw board](/diagrams/multi-agent-patterns.excalidraw)

Thoughts and opinions are my own.
