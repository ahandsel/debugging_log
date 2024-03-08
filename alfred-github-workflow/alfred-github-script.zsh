#!/bin/zsh

# Variables
query=$input
github_repo_url="${github_repo_url}"

# Use the first command line argument as input
input=$1

# Check if the URL ends with a '/'
if [[ $github_repo_url != */ ]]; then
    # If not, add '/'
    github_repo_url="${github_repo_url}/"
fi

# Check if the input is empty
if [[ -z $input ]]; then
  echo "${github_repo_url}"

# Check if the input is only a number
elif [[ $input =~ '^[0-9]+$' ]]; then
  echo "${github_repo_url}issues/$input"

# If the input is text
else
  echo "${github_repo_url}issues?q=is%3Aissue+$input"
fi