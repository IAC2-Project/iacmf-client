# iacmf-client

Angular client library to communicate with the backend. Based on OpenAPI Client generator.

To update the client do the following:
- ensure `Node.js` and `npm` are installed.
- ensure [@openapitools/openapi-generator-cli is installed globally](https://openapi-generator.tech/docs/installation#npm).
- generate a new api documentation (see https://github.com/IAC2-Project/iacmf).
- copy the contents of the generated files and replace the contents of the file `api-docs.json` with them.
- run the command `npx @openapitools/openapi-generator-cli generate`.
- run the command `npm install`.
- commit and push changes