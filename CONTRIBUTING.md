<!-- @format -->

# How to Contribute to this project

**Table of Contents**

- [Review Branching](#review-branching)
- [Creating Branches](#creating-branches)
- [Commit Changes](#commit-changes)
- [Merge before you push](#merge-before-you-push)
- [Push and make a PR](#push-and-make-a-pr)

## Review Branching

<details><summary>When should we create a new branch?</summary><br>

Branches are used to diverge from the main code base. They are useful because they create a copy of existing code without modifying the existing code. Think of it as your very own sandbox where you can create anything new.

Therefore, a new branch should be created for any new change to any of the files in the project. This includes but is not limited to creating a new feature in the repo and/or fixing a bug in the repo.

</details>

<details><summary>When do merge conflicts occur?</summary><br>

Merge conflicts occur when we have code that could possibly overwrite code that was already there. They are bound to happen if multiple people are working on the same file.

</details>

<details><summary>Things to avoid</summary><br>

The `main` branch should always have working code so as a best practice...

- Don't work off of the `main` branch.
- Avoid merging code that hasn't been tested or reviewed into the `main` branch.

</details>

## Creating Branches

Each team member should own their own branch and work exclusively on that branch.

```
git branch typeOfBranch-featureName
git checkout typeOfBranch-featureName
```

Or, create a branch and switch to it in one command:

```
git checkout -b typeOfBranch-featureName
```

Then see all branches:

```sh
git branch
```

You should then see: (the `*` indicates the current branch)

```
  main
* typeOfBranch-featureName
```

> TIP: Always check to make sure that you are NOT working in the `main` branch

To switch back and forth between `main` and your branch, run:

```sh
git checkout main
git checkout typeOfBranch-featureName
```

## Commit Changes

When you're ready to save your current changes, create a _local commit_.

In your feature branch, run:

```sh
git add -A
git commit -m 'message'
```

### Commit Message Conventions

1. Where the change was made: `Frontend`, `Backend`, `Fullstack`, or `___` (for other)
2. What feature was changed: Ex. `User Login`, `Officers Table`
3. What type of change was made: Ex. `Bug Fix`, `Implementation`, `Styling`

Full Ex. `Frontend - User Post - Implementation`

> If you want to add a more detailed message to your commit add a second `-m` to the command

> Full Ex. `git commit -m 'message' -m 'details'`

## Merge before you push

While you have been working on your code, your teammates may have pushed changes.

First, switch to the `main` branch and `pull` the changes:

```sh
git checkout main
git pull
```

Then, switch back to your feature branch and merge the changes from `main` _into your branch_.

```sh
git checkout typeOfBranch-featureName
git merge main
```

You may need to resolve merge conflicts at this point. To resolve a conflict, delete the `<<<<<<< HEAD`, `=======`, and `>>>>>>> main` markers and keep the code that you want.

![](./merge-conflict.png)

Finally, make a new commit to finish resolving these conflicts:

```
git add -A
git commit -m 'merging main into my branch'
git push
```

## Push and make a PR

Once you have merged `main` into your branch, go ahead and `git push`.

> When pushing from your branch, you will be told to use the `--set-upstream` flag.

- Go to Github.com and open up your repository.
- Then, click on the <kbd>Pull Requests</kbd> tab to create a new pull request to merge your branch into `main`.
- Ask your teammates to review & accept your pull request!
- After each branch has been successfully merged, delete the branch.

Your teammates can then follow the steps listed in [merge before you push](#merge-before-you-push) to update their local repositories.
