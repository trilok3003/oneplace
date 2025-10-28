#!/bin/bash

# Exit on error
set -e

# Ask user for repo name
read -p "Enter repo name (e.g. repo-b): " reponame

# Define remote URL
remote_url="git@github.com:trilok3003/$reponame.git"

# Add remote if it doesn't exist
if ! git remote | grep -q "^$reponame$"; then
  echo "🔗 Adding remote '$reponame'..."
  git remote add "$reponame" "$remote_url"
else
  echo "✅ Remote '$reponame' already exists."
fi

# Check if remote has a 'master' branch
if ! git ls-remote --exit-code --heads "$reponame" master &>/dev/null; then
  echo "❌ The remote '$reponame' does not have a 'master' branch."
  exit 1
fi

# Fetch only the master branch from remote
echo "📥 Fetching 'master' branch from '$reponame'..."
git fetch "$reponame" master

# Ensure local 'main' branch exists
if ! git show-ref --verify --quiet refs/heads/main; then
  echo "❌ Local branch 'main' does not exist."
  exit 1
fi

# Switch to local main branch
echo "🔄 Checking out local 'main' branch..."
git checkout main

# Merge the remote's master into local main
echo "🔀 Merging '$reponame/master' into local 'main'..."
git merge "$reponame/master" --allow-unrelated-histories

echo "✅ Merge complete. Local 'main' now includes changes from '$reponame/master'."

