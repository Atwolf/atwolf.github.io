# AGENTS.md

## Purpose

This file is the governance layer for agents working on posts in this repository. It routes work to the correct skill, defines maintenance expectations, and preserves service boundaries between provisioning, editorial judgment, and repository state.

It is not a project architecture document and it is not the canonical store for detailed voice rules.

## Skill Boundaries

- Treat `.agents/skills/create-post/SKILL.md` as the operational source of truth for post provisioning: branch creation, markdown scaffold, frontmatter, staging, and commit behavior.
- Treat `.agents/skills/linkedin-editorial-voice/SKILL.md` as the living source of truth for persona, tone, narrative structure, editorial heuristics, review criteria, and durable voice preferences.
- Do not duplicate detailed editorial rules in `AGENTS.md`. Keep them in the editorial skill so the voice system evolves as a reusable agent capability.
- `AGENTS.md` owns orchestration policy: which skill to use, when to update a skill, and what boundaries agents must preserve.

## Skill Maintenance

- If the post creation lifecycle changes, update `create-post` and its `agents/openai.yaml` metadata in the same change.
- If the voice, tonality, persona, or post-review rubric changes, update `linkedin-editorial-voice` and its `agents/openai.yaml` metadata when the interface text becomes stale.
- Keep `.claude/commands/create-post.md` and the `create-post` skill behavior aligned while both exist.
- Preserve the post data contract unless the user explicitly changes it: branch `post/<post_name>` from `origin/main`, file `posts/<post_name>.md`, frontmatter fields `title`, `date`, and `summary`, and commit message `Add new post: <post_name>`.
- Do not silently normalize post names. If title, filename, branch suffix, and slug need different values, ask for the contract explicitly.
- Use `uv` for Python package management when Python tooling is needed.

## Editorial Skill Maintenance

- After drafting, revising, or reviewing a post, decide whether the user revealed a durable editorial preference.
- Durable preferences include repeated tone corrections, preferred narrative structures, phrases to avoid, stronger framing patterns, disclosure rules, or examples that should guide future posts.
- Update `.agents/skills/linkedin-editorial-voice/SKILL.md` when the preference should carry forward to future posts.
- Do not update the editorial skill for one-off wording changes unless the user explicitly says the preference should become standing guidance.
- Keep the editorial skill concise. Move examples, before-after rewrites, and longer voice notes into `references/` if they start to crowd the main `SKILL.md`.

## Agent Orchestration

- Use task-specific subagents for decomposable work such as read-only exploration, implementation in a disjoint write set, or validation of a changed skill.
- The central orchestrator owns the data contracts, service boundaries, and final integration decisions.
- Subagent prompts must be bounded, explicit about ownership, and biased toward simplicity over complexity.
- Do not delegate the immediate critical-path task when the next local step depends on its result.
