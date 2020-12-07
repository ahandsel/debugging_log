# How to Create a Finder Action to Open a Folder in VS Code

Credit:
This is completely a copy off of Michal Tynior's tutorial, ["How to add Open in VS Code option to Finder"](https://brainarchives.com/how-to-add-open-in-vscode-option-to-finder/)!
Thank you so much for the perfect tutorial. I am writing it here just for my own note taking.

## 1. Open Automator
* Open from terminal: `~/Applications/Automator.app`

## 2. Select Quick Action template
* Select `Create New Document`
* Select `Quick Action` type.

## 3. Get Selected Files/Folders from Finder
* We need to get the selected files or folders to pass onto VS Code
* Select `Files & Folders` group from the library
* Select `Get Specified Finder Items` action
* Drag-&-drop the action to the workflow area

## 4. Open the Selected Items in VSCode
* The last step is to open those files in the VSCode.
* Select `Files & Folders` group from the library
* Select `Open Finder Items` action
* Drag-&-drop the action to the workflow area, below the "Get Specified Finder Items" action
* In the "Open Finder Items" action, there is open with option.  Just select the VSCode.

## 5. Save the Action
* Save the Action as `Open in VSCode`
* This Action . The name is important as it will be displayed in Finder!

6. Use it
Once the action is saved, it should be automatically added to Finder's Services list. You can access it by right-clicking on a file or folder:
