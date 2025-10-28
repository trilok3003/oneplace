#!/bin/bash
set -e

read -p "Enter repo name (e.g. repo-b): " reponame
remote_url="git@github.com:trilok3003/$reponame.git"

if ! git remote | grep -q "^$reponame$"; then
  echo "🔗 Adding remote '$reponame'..."
  git remote add "$reponame" "$remote_url"
else
  echo "✅ Remote '$reponame' already exists."
fi

# Detect whether remote has master or main
if git ls-remote --exit-code --heads "$reponame" master &>/dev/null; then
  branch="master"
elif git ls-remote --exit-code --heads "$reponame" main &>/dev/null; then
  branch="main"
else
  echo "❌ Remote '$reponame' has neither 'master' nor 'main' branch."
  exit 1
fi

echo "📦 Found remote branch: $branch"
git fetch "$reponame" "$branch"

# Ensure local main exists
if ! git show-ref --verify --quiet refs/heads/main; then
  echo "❌ Local branch 'main' does not exist."
  exit 1
fi

git checkout main
echo "🔀 Merging '$reponame/$branch' into local 'main'..."
git merge "$reponame/$branch" --allow-unrelated-histories

echo "✅ Merge complete."

