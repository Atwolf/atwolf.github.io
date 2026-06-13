---
name: create-post
description: Use when the user wants to create a new post draft in this repository by creating a post branch from origin/main, adding a markdown file under posts/, staging it, and committing it with the repository's post scaffold.
metadata:
  short-description: Create a post branch and markdown draft
---

# Create Post

Use this skill for the mechanical post-creation workflow that was previously encoded in `.claude/commands/create-post.md`.

This skill owns the post lifecycle contract: branch source, markdown path, frontmatter schema, staging, and commit message. It does not own editorial judgment; use the `linkedin-editorial-voice` skill for persona, tone, narrative structure, review criteria, and durable post-writing preferences.

## Input Contract

- Required input: `post_name`.
- Treat `post_name` as the exact user-provided post argument for the branch suffix, markdown filename, frontmatter title, and commit message.
- Do not silently slugify, title-case, or normalize the value. If the user wants a display title that differs from the branch or file name, ask for both values before running git commands.

## Workflow

1. Fetch the current main branch:

   ```bash
   git fetch origin main
   ```

2. Create a new post branch from `origin/main`:

   ```bash
   git checkout -b "post/<post_name>" origin/main
   ```

3. Create `posts/<post_name>.md` with this scaffold, replacing `<current_date>` with today's local date in `YYYY-MM-DD` format:

   ```markdown
   ---
   title: <post_name>
   date: <current_date>
   summary: TODO
   ---

   Fill content here
   ```

4. Stage the new file:

   ```bash
   git add "posts/<post_name>.md"
   ```

5. Commit the scaffold:

   ```bash
   git commit -m "Add new post: <post_name>"
   ```

## Execution Rules

- Preserve the branch boundary: every new post starts from `origin/main` unless the user explicitly changes the base.
- Preserve the content boundary: generated post artifacts live under `posts/`.
- Preserve the frontmatter schema: `title`, `date`, and `summary`.
- Preserve the commit contract: `Add new post: <post_name>`.
- If git network access or sandboxing blocks `git fetch`, request the required approval rather than inventing an offline fallback.
- After the commit, verify the working tree with `git status --short` and report any remaining changes.
