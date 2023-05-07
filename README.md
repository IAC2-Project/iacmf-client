# iacmf-client

Angular client library to communicate with the backend. Based on OpenAPI Client generator.

To update the client do the following:
- ensure `Node.js` and `npm` are installed.
- ensure [@openapitools/openapi-generator-cli is installed globally](https://openapi-generator.tech/docs/installation#npm).
- generate a new api documentation (see https://github.com/IAC2-Project/iacmf).
- copy the contents of the generated files and replace the contents of the file `api-docs.json` with them.
- update the version of the library in the file `openapitools.json`.
- run the command `npx @openapitools/openapi-generator-cli generate`.
- (optional) update the license and git repo information in the `package.json` file.
- run the command `npm install`.
- run the command `npm run build`.
- run the command `npm login` to login to your npm repository.
- run the command `npm publish ./dist` to publish the contents of the `dist` folder.
- commit and push changes
- go to the `iacmf-ui` project update the version of the `iacmf-client` dependency and run `npm install`.
