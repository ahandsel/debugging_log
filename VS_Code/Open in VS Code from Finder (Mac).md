# How to Create a Finder Action to Open a Folder in VS Code

Credit:
This is completely a copy off of Michal Tynior's tutorial, ["How to add Open in VS Code option to Finder"](https://brainarchives.com/how-to-add-open-in-vscode-option-to-finder/)!
Thank you so much for the perfect tutorial. I am writing it here just for my own note taking.

## 1. Open Automator
  - Open from terminal: `~/Applications/Automator.app`

## 2. Select Quick Action template
  - Select `Create New Document`
  - Select `Quick Action` type.

## 3. Get Selected Files/Folders from Finder
  - We need to get the selected files or folders to pass onto VS Code
  - Select `Files & Folders` group from the library
  - Select `Get Specified Finder Items` Action
  - Drag-&-drop the Action to the workflow area

## 4. Open the Selected Items in VSCode
  - The last step is to open those files in the VSCode.
  - Select `Files & Folders` group from the library
  - Select `Open Finder Items` Action
  - Drag-&-drop the Action to the workflow area, below the "Get Specified Finder Items" Action
  - In the "Open Finder Items" Action, there is open with option.  Just select the VSCode.

## 5. Save the Action
  - Save the Action as `Open in VSCode`
  - This Action will be displayed from Finder with a Right-Click, under `Services`

## Screenshots
| Step 1 | Step 2 | Step 3 | Step 4 |
| ------ | ------ | ------ | ------ |
| ![Step 1](https://brainarchives.com/content/images/2019/05/automator_0.png) | ![Step 2](https://brainarchives.com/content/images/2019/05/automator_1.png) | ![Step 3](https://brainarchives.com/content/images/2019/05/automator_2.png) | ![Step 4](https://brainarchives.com/content/images/2019/05/automator_3.png) |

## Demo Gif

![Gif going through steps 1 through 5](img/Open%20in%20VS%20Code.gif)
