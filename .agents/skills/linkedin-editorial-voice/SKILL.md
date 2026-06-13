---
name: linkedin-editorial-voice
description: Use when drafting, revising, reviewing, or maintaining LinkedIn posts for this repository, especially when the work involves persona, tone, narrative structure, editorial standards, or durable voice preferences.
metadata:
  short-description: Maintain the LinkedIn editorial voice
---

# LinkedIn Editorial Voice

This skill is the living editorial system for LinkedIn posts in this repository. Use it whenever the work touches voice, tonality, persona, post structure, revision, or review.

The skill owns editorial judgment. The `create-post` skill owns the mechanical provisioning workflow for branches, markdown scaffolds, staging, and commits.

## Persona

- Write from the voice of a principal engineer: precise, production-aware, systems-oriented, and comfortable with implementation detail.
- The persona is a builder-operator explaining what it took to move a system from ambiguous request to production-grade capability.
- Use first person when it clarifies ownership, judgment, or learning. Keep the emphasis on the system, the operating constraints, and the decisions that mattered.
- The tone should be confident, direct, and grounded. Avoid self-congratulation, vague inspiration, and generic AI hype.

## Technical Voice

- Prefer concrete systems language: service boundaries, abstraction layers, data contracts, identity propagation, observability, reliability, runtime constraints, governance, and operational tradeoffs.
- Anchor claims in shipped outcomes, measurable impact, production pressure, or hard constraints.
- Explain architecture as a set of decisions under constraints, not as a catalog of technologies.
- Make tradeoffs explicit. A strong post should clarify what was optimized, what was constrained, and why the chosen boundary held.

## Engagement Directives

- Treat the first line as the reader contract, not an introduction. It must create enough specificity, tension, or payoff that a technical reader wants the next paragraph.
- Draft multiple hooks before choosing one. Prefer hooks that make a precise claim, challenge a common abstraction, expose a production failure mode, or name a tradeoff.
- Use high-signal opening verbiage: `Most teams...`, `The hard part is not X; it is Y`, `The production question is...`, `I changed my mind about...`, `The mistake is treating...`, `A useful boundary is...`.
- Avoid low-signal openers: `Excited to share`, `In this post`, `I wanted to talk about`, `AI is changing everything`, `Here are my thoughts`, and vague future-of-work framing.
- The hook must pay off quickly. By the second or third paragraph, the reader should know why the claim matters and what system lesson they will get.
- Keep curiosity grounded in credibility. Do not use clickbait, false contrarianism, or suspense that the body cannot resolve.
- Prefer one strong point of view over a neutral survey. Reader engagement comes from earned judgment, not comprehensive coverage.
- If a post uses overloaded terms, define them early and then move into the point of view. Do not make the reader infer the abstraction boundary.
- Close with a specific technical question about a boundary, tradeoff, failure mode, or pattern-selection decision. Avoid generic `thoughts?` endings.

## Post Structure

- Start with a concrete outcome, tension, or production lesson.
- Establish context quickly: what changed, why it mattered, and what made it hard.
- Explain two to four architectural or operational decisions that created leverage.
- For pattern breakdowns, separate `when to use` from `when not to use` or `failure mode` so the post reads like engineering judgment rather than a taxonomy.
- Keep paragraphs short enough for LinkedIn scanning. Use whitespace as a comprehension boundary, not decoration.
- Front-load the important nouns and verbs in paragraphs, bullets, and section leads so the post still works for readers who scan.
- Close with a grounded reflection, an open technical question, or a forward-looking note.
- Use formatting sparingly. Bold key claims or section leads only when it improves scanability.
- Include a personal-opinions disclaimer when the post references workplace experience, enterprise delivery, or regulated environments.

## Review Criteria

When reviewing a draft, check for:

- Clear opening signal: the first line should make the reader understand the technical stakes.
- Specificity: replace broad claims with concrete boundaries, constraints, or decisions.
- Credibility: avoid claims that sound larger than the evidence provided.
- Confidentiality: remove internal names, customer data, proprietary incidents, or employer-sensitive specifics.
- Voice consistency: maintain the principal-engineer builder-operator persona.
- Engagement integrity: verify the hook creates a clear reader promise and the body delivers on it without drifting into generic advice.
- CTA quality: prefer a concrete engineering question over a generic engagement prompt.
- Scanability: shorten dense paragraphs and remove filler.

## Durable Learning Loop

- After drafting, revising, or reviewing a post, decide whether the user revealed a durable editorial preference.
- Durable preferences include repeated tone corrections, preferred narrative structures, phrases to avoid, disclosure rules, stronger framing patterns, or examples that should guide future posts.
- Update this skill when the preference should carry forward to future posts.
- Do not update this skill for one-off wording changes unless the user explicitly says the preference should become part of the standing voice system.
- Keep this skill concise. If examples or before-after rewrites become substantial, move them into a `references/` file and link to it from this skill.
