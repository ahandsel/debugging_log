# Debugging Log for GitHub Actions

## Action failed with exit code 128

```shell
Action failed with "The process '/usr/bin/git' failed with exit code 128"
```

Cause:
* Executing GitHub Actions for the first time
* New repositories do not have proper workflow permissions by default.

Solution:
* Go to the following GitHub Repo settings:
  * Settings > Actions > General > Workflow permissions
  * `https://github.com/{USERNAME}/{REPO_NAME}/settings/actions`
* Change the `Workflow permissions` to `Read and write permissions`
* Ref: <https://github.com/JamesIves/github-pages-deploy-action/issues/1110#issuecomment-1117481234>
