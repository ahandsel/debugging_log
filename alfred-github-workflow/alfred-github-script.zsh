#!/bin/zsh

# Assign the first command line argument to input, trimming leading and trailing spaces
input="${1// /%20}"

# Ensure github_repo_url is provided without leading/trailing spaces
# and ends with a '/'
github_repo_url="${github_repo_url%/}/"  # Trim any trailing slash and then add one back

# Check if the input is empty
if [[ -z $input ]]; then
  echo -n "${github_repo_url}"

# Check if the input is only a number
elif [[ $input =~ '^[0-9]+$' ]]; then
  echo -n "${github_repo_url}issues/$input"

# If the input is text
else
  echo -n "${github_repo_url}issues?q=is%3Aissue+$input"
fi