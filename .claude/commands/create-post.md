Create a new blog post branch and file.

The post name is: $ARGUMENTS

Follow these steps exactly:

1. Run `git fetch origin main` to get the latest main branch.
2. Run `git checkout -b post/$ARGUMENTS origin/main` to create a new branch from main.
3. Create the file `posts/$ARGUMENTS.md` with the following contents (replace `<current_date>` with today's date in YYYY-MM-DD format):

```
---
title: $ARGUMENTS
date: <current_date>
summary: TODO
---

Fill content here
```

4. Stage and commit the new file with the message: "Add new post: $ARGUMENTS"
