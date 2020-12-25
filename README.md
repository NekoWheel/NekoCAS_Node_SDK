# NekoCAS_Node_SDK
NekoCAS SDK for Node

## Installation
```
npm install nekocas
```

## Begin to use
```javascript
var NekoCAS = require('nekocas');

// Input the NekoCAS URL and the service secret.
var cas = new NekoCAS("https://cas.n3ko.co", "1aa05ba333b469f580a0577b1a86a5af")

// Validate the ticket.
cas.validate("ST-YEQLkc9WQCDRoo7Io9lKPOZY5uyptzkY").then((data) => {
    console.log(`usertoken: ${data.token}`)
}).catch(console.log)
```

