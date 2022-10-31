import {iApiEndpoint, APIHttpMethods, iParameters} from '../iApiEndpoint.tsx';

const GetTable:iApiEndpoint =
{
    httpMethod : APIHttpMethods.GET,
    endpoint : 'employeetable'
}

const GetEmployee:iApiEndpoint = (id) =>
{
    return {httpMethod : APIHttpMethods.GET,
    endpoint : 'employeeinformation' + '/' + id}
}

const UpdateOrAddEmployee:iApiEndpoint =
{
    httpMethod : APIHttpMethods.PUT,
    endpoint : 'addorupdateemployee'
}

export const API =
{
    GetEmployee,
    GetTable,
    UpdateOrAddEmployee
}