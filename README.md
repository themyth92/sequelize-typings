## Sequelize Typing
- V5 sequelize typing, which mirrors [sequelize](https://github.com/sequelize/sequelize/tree/master/types).
- This repository is here as I dont want to install the whole sequelize library to get the typing and the typing from DefinitelyTyped only supports v4.

## Command
- `npm install @ts-typings/sequelize`
- Include custom types in your tsconfig. I.e:

```
"compilerOptions": {
  ...
  "baseUrl": "./",
  "paths": {
    "*": ["node_modules/@ts-typings/*"]
  }
}
```
