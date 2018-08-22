# VSCode Theme Generator

## Instructions

* Navigate to your vscode extensions directory:
    * Windows:  %USERPROFILE%\.vscode\extensions
    * Mac: $HOME/.vscode/extensions
    * Linux: $HOME/.vscode/extensions

* git clone https://github.com/internetirl/vscode-theme-from-image.git
* Replace `image` at the top of index.ts with your desired image
* Run build task 
    * npm run prestart && npm run start
    * or ctrl + shift + B on Windows (look for workbench.action.tasks.build in your keybinds to find out what it is)
* Reload VSCode
    * ctrl/cmd + shift + P, then type "Reload" and you'll see it.
* Apply theme
    * ctrl/cmd + shift + P, then type "Theme"
        * You should see 2 new thems, "theme gen" and "theme gen 1". Swap back and forth to see them applied.

