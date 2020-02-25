import {fetchUtils} from "react-admin";
import {stringify} from 'query-string';
import simpleRestProvider from "ra-data-simple-rest";

const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({Accept: 'application/json'});
    }
    const token = localStorage.getItem('token');
    options.headers.set('Authorization', `Bearer ${token}`);
    return fetchUtils.fetchJson(url, options);
};

const simpleDataProvider = simpleRestProvider('https://api.vavf.fr', httpClient);

const dataProvider = (function (apiUrl, httpClient) {
    return ({
        getList: function (resource, params) {
            var _a = params.pagination, page = _a.page, perPage = _a.perPage;
            var _b = params.sort, field = _b.field, order = _b.order;

            var rangeStart = (page - 1) * perPage;
            var rangeEnd = page * perPage - 1;

            var query = {
                sort: JSON.stringify([field, order]),
                range: JSON.stringify([rangeStart, rangeEnd]),
                filter: JSON.stringify(params.filter),
            };
            var url = apiUrl + "/" + resource + "?" + stringify(query);
            return httpClient(url).then(function (_a) {
                var json = _a.json;
                // We set the total to the range start plus length of the array returned from the API
                var total = rangeStart + (json.length || perPage);
                var id = rangeStart;
                return {
                    // We set the ID field to be the returned UUID until the API returns the actual ID
                    data: json.map(x => {
                        x.id = ++id;
                        return x;
                    }),
                    total: total
                };
            });
        },
        getOne: simpleDataProvider.getOne,
        getMany: function (resource, params) {
            return simpleDataProvider.getMany(resource, params).then(function (_a) {
                _a.json = _a.json.map(x => x.id = x.uuid);
                return _a;
            });
        },
        getManyReference: simpleDataProvider.getManyReference,
        update: simpleDataProvider.update,
        updateMany: simpleDataProvider.updateMany,
        create: simpleDataProvider.create,
        delete: simpleDataProvider.delete,
        deleteMany: simpleDataProvider.deleteMany
    });
})('https://api.vavf.fr', httpClient);

export default dataProvider;
