export interface iApiEndpoint {
    httpMethod : APIHttpMethods,
    endpoint: string
};

export interface iParameters{}

export enum APIHttpMethods
{
    GET = 'GET',
    PUT = 'PUT',
    POST = 'POST',
    DELETE = 'DELETE'
}

export function ConvertEndpoint(endpoint: iApiEndpoint)
{
    return endpoint.endpoint;
}