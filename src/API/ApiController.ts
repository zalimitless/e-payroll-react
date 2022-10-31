import { iApiEndpoint, ConvertEndpoint, APIHttpMethods, iParameters } from "./iApiEndpoint.tsx";
const axios = require('axios');

const proxyServer = "http://localhost:8080/";

const CallApi = async ( endpoint : iApiEndpoint, retFunction : Function, parameters?: iParameters) => {
    switch(endpoint.httpMethod)
    {
        case APIHttpMethods.GET:
            {
                await axios.get(proxyServer + ConvertEndpoint(endpoint), parameters).then((res) => {
                    retFunction(res.data)
                });
                break;
            }
        case APIHttpMethods.PUT:
            {
                await axios.put(proxyServer + ConvertEndpoint(endpoint), parameters).then((res) => {
                    retFunction(res.data)
                });
                break;
            }
        case APIHttpMethods.POST:
            {
                await axios.post(proxyServer + ConvertEndpoint(endpoint), parameters).then((res) => {
                    retFunction(res.data)
                });
                break;
            }
        case APIHttpMethods.DELETE:
            {
                await axios.delete(proxyServer + ConvertEndpoint(endpoint), parameters).then((res) => {
                    retFunction(res.data)
                });
                break;
            }
    }
}

const ApiController = {
    CallApi
}

export default ApiController;