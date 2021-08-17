# IDS Web Component Scaffolding Tools
Tools to scaffold web components on `infor-design/enterprise-wc`.

## Installation

1. Git checkout this repo to a directory
2. Visit the local repo's root and in cmd/terminal:
```shell
npm i && npm link
```
3. Visit your `enterprise-wc` repo installation root in cmd/terminal and enter:
```shell
npm link ids-wc-tools
```
Now, `ids-wc-scaffold` should be available as a command to run in the project


## Usage

### `ids-wc-scaffold`

In your working directory root:

```shell
ids-wc-scaffold --namespace="ids-my-component-name"
```
Output should be similar to the following:
```shell
> <root>/src/ids-xyz not found; created directory.
> <root>/app/ids-xyz not found; created directory.
> <root>/src/ids-xyz/ids-xyz.js not found; created file.
> <root>/src/ids-xyz/ids-xyz.d.ts not found; created file.
> <root>/src/ids-xyz/ids-xyz.scss not found; created file.
> <root>/app/ids-xyz/README.md not found; created file.
> <root>/app/ids-xyz/example.html not found; created file.
> <root>/app/ids-xyz/index.html not found; created file.
> <root>/app/ids-xyz/index.js not found; created file.
> <root>/app/ids-xyz/index.yaml not found; created file.
```

## How It Works

### `ids-wc-scaffold`
Generates the runs through `mappings` files of a given type (mixins/components) and:
  1. adds directories from `srcDirs.js` if they don't exist,
  2. adds files from `srcFiles.js` if they don't exist
  3. replaces all instances of patterns found in files using Regexp, and replaces the groups found in `replacement.js`  *(note: recursive patterns for capture groups are not tested/supported)*


  ## TODO
  - add `mixins` cmd param to work with entries which can use regexp group to capture/transform;  can be done with approach similar to existing `[namespace]/replacements.js`
  - basic eslinting

## Notes
- mixins are already just about supported but waiting on a directory structure to input the structure within the `mappings` files.


- This project aims to eventually support validation but is *not meant as a code analysis tool or tokenizer* due to simple limitations of regex capture (not a substitute for proper tokenization) and time constraints;

  For certain tasks of that nature to be done effectively, we would need to either import a solution-for or build a lexer/parser for ES7 which is not pragmatic in short term with scope/low priority of these tools.

  Change requests are welcome but before introducing complexity, please keep the above in mind.
