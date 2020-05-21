# EAUDITNOPJSON Error & Solution
  * Source: http://www.programmersought.com/article/57071092772/
      ```
      npm ERR! code EAUDITNOPJSON
      npm ERR! audit No package.json found: Cannot audit a project without a package.json

      npm ERR! A complete log of this run can be found in:
      npm ERR! .../.npm/_logs/2020-05-21T13_37_13_051Z-debug.log
      ```
  * The error means that a `package.json` file is missing
  * Solution: Create a `package.json` file in the directory
    * `npm init --yes`

# EAUDITNOLOCK Error & Solution
  * Source: http://www.programmersought.com/article/57071092772/
      ```
      npm ERR! code EAUDITNOLOCK
      npm ERR! audit Neither npm-shrinkwrap.json nor package-lock.json found: Cannot audit a project without a lockfile
      npm ERR! audit Try creating one first with: npm i --package-lock-only
      ```
  * Solution: `npm i --package-lock-only` 

`npm audit fix`
