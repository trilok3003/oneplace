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
  git remote add -f "$reponame" "$remote_url"
else
  echo "✅ Remote '$reponame' already exists. Fetching..."
fi

# Merge the remote's master branch
echo "🔀 Merging '$reponame/master' into current branch..."
git merge "$reponame/master" --allow-unrelated-histories

echo "✅ Merge complete."
