/* tslint:disable */
/* eslint-disable */
/**
 * VideoSync API
 * API v2 for VideoSync
 *
 * The version of the OpenAPI document: 2.0
 * Contact: markku.virtanen@flik.fi
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface InlineResponse200
 */
export interface InlineResponse200 {
    /**
     * 
     * @type {Set<InlineResponse200Categories>}
     * @memberof InlineResponse200
     */
    categories: Set<InlineResponse200Categories>;
    /**
     * 
     * @type {Set<InlineResponse200BaseCategories>}
     * @memberof InlineResponse200
     */
    baseCategories: Set<InlineResponse200BaseCategories>;
}
/**
 * 
 * @export
 * @interface InlineResponse2001
 */
export interface InlineResponse2001 {
    /**
     * 
     * @type {Set<InlineResponse2001Categories>}
     * @memberof InlineResponse2001
     */
    categories: Set<InlineResponse2001Categories>;
    /**
     * 
     * @type {Set<InlineResponse2001BaseCategories>}
     * @memberof InlineResponse2001
     */
    baseCategories: Set<InlineResponse2001BaseCategories>;
}
/**
 * 
 * @export
 * @interface InlineResponse2001BaseCategories
 */
export interface InlineResponse2001BaseCategories {
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2001BaseCategories
     */
    description: string;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2001BaseCategories
     */
    _id: string;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2001BaseCategories
     */
    name: string;
    /**
     * 
     * @type {InlineResponse200Account1}
     * @memberof InlineResponse2001BaseCategories
     */
    account?: InlineResponse200Account1;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2001BaseCategories
     */
    slug: string;
    /**
     * 
     * @type {InlineResponse2001DescriptionParsed}
     * @memberof InlineResponse2001BaseCategories
     */
    descriptionParsed?: InlineResponse2001DescriptionParsed;
}
/**
 * 
 * @export
 * @interface InlineResponse2001Categories
 */
export interface InlineResponse2001Categories {
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2001Categories
     */
    description: string;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2001Categories
     */
    _id: string;
    /**
     * 
     * @type {InlineResponse200Account}
     * @memberof InlineResponse2001Categories
     */
    account?: InlineResponse200Account;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2001Categories
     */
    slug: string;
    /**
     * 
     * @type {InlineResponse200DescriptionParsed}
     * @memberof InlineResponse2001Categories
     */
    descriptionParsed?: InlineResponse200DescriptionParsed;
}
/**
 * 
 * @export
 * @interface InlineResponse2001DescriptionParsed
 */
export interface InlineResponse2001DescriptionParsed {
    /**
     * 
     * @type {InlineResponse2001DescriptionParsedData}
     * @memberof InlineResponse2001DescriptionParsed
     */
    data: InlineResponse2001DescriptionParsedData;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2001DescriptionParsed
     */
    content: string;
}
/**
 * 
 * @export
 * @interface InlineResponse2001DescriptionParsedData
 */
export interface InlineResponse2001DescriptionParsedData {
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2001DescriptionParsedData
     */
    image?: string;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2001DescriptionParsedData
     */
    location?: string;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2001DescriptionParsedData
     */
    address?: string;
}
/**
 * 
 * @export
 * @interface InlineResponse200Account
 */
export interface InlineResponse200Account {
    /**
     * 
     * @type {string}
     * @memberof InlineResponse200Account
     */
    _id: string;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse200Account
     */
    urlName: string;
}
/**
 * 
 * @export
 * @interface InlineResponse200Account1
 */
export interface InlineResponse200Account1 {
    /**
     * 
     * @type {string}
     * @memberof InlineResponse200Account1
     */
    _id: string;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse200Account1
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse200Account1
     */
    urlName: string;
}
/**
 * 
 * @export
 * @interface InlineResponse200BaseCategories
 */
export interface InlineResponse200BaseCategories {
    /**
     * 
     * @type {string}
     * @memberof InlineResponse200BaseCategories
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse200BaseCategories
     */
    _id: string;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse200BaseCategories
     */
    name: string;
    /**
     * 
     * @type {InlineResponse200Account1}
     * @memberof InlineResponse200BaseCategories
     */
    account?: InlineResponse200Account1;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse200BaseCategories
     */
    slug: string;
    /**
     * 
     * @type {InlineResponse200DescriptionParsed1}
     * @memberof InlineResponse200BaseCategories
     */
    descriptionParsed?: InlineResponse200DescriptionParsed1;
}
/**
 * 
 * @export
 * @interface InlineResponse200Categories
 */
export interface InlineResponse200Categories {
    /**
     * 
     * @type {string}
     * @memberof InlineResponse200Categories
     */
    description?: string;
    /**
     * 
     * @type {Set<InlineResponse200Events>}
     * @memberof InlineResponse200Categories
     */
    events?: Set<InlineResponse200Events>;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse200Categories
     */
    _id: string;
    /**
     * 
     * @type {InlineResponse200Account}
     * @memberof InlineResponse200Categories
     */
    account?: InlineResponse200Account;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse200Categories
     */
    slug: string;
    /**
     * 
     * @type {InlineResponse200Events}
     * @memberof InlineResponse200Categories
     */
    featuredEvent?: InlineResponse200Events;
    /**
     * 
     * @type {InlineResponse200DescriptionParsed}
     * @memberof InlineResponse200Categories
     */
    descriptionParsed?: InlineResponse200DescriptionParsed;
}
/**
 * 
 * @export
 * @interface InlineResponse200DescriptionParsed
 */
export interface InlineResponse200DescriptionParsed {
    /**
     * 
     * @type {string}
     * @memberof InlineResponse200DescriptionParsed
     */
    content: string;
    /**
     * 
     * @type {object}
     * @memberof InlineResponse200DescriptionParsed
     */
    data: object;
}
/**
 * 
 * @export
 * @interface InlineResponse200DescriptionParsed1
 */
export interface InlineResponse200DescriptionParsed1 {
    /**
     * 
     * @type {InlineResponse200DescriptionParsed1Data}
     * @memberof InlineResponse200DescriptionParsed1
     */
    data: InlineResponse200DescriptionParsed1Data;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse200DescriptionParsed1
     */
    content: string;
}
/**
 * 
 * @export
 * @interface InlineResponse200DescriptionParsed1Data
 */
export interface InlineResponse200DescriptionParsed1Data {
    /**
     * 
     * @type {string}
     * @memberof InlineResponse200DescriptionParsed1Data
     */
    image: string;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse200DescriptionParsed1Data
     */
    location: string;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse200DescriptionParsed1Data
     */
    address: string;
}
/**
 * 
 * @export
 * @interface InlineResponse200Events
 */
export interface InlineResponse200Events {
    /**
     * 
     * @type {number}
     * @memberof InlineResponse200Events
     */
    state: number;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse200Events
     */
    _id: string;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse200Events
     */
    publishingDate: string;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse200Events
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse200Events
     */
    urlName: string;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse200Events
     */
    previewImg?: string;
}
/**
 * 
 * @export
 * @interface InlineResponse400
 */
export interface InlineResponse400 {
    /**
     * 
     * @type {string}
     * @memberof InlineResponse400
     */
    message: string;
    /**
     * 
     * @type {Set<object>}
     * @memberof InlineResponse400
     */
    errors: Set<object>;
}
/**
 * 
 * @export
 * @interface InlineResponse404
 */
export interface InlineResponse404 {
    /**
     * 
     * @type {string}
     * @memberof InlineResponse404
     */
    message: string;
}

/**
 * CategoriesApi - axios parameter creator
 * @export
 */
export const CategoriesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get basecategories
         * @summary Get categories (without events)
         * @param {Array<'virtuaalikirkko'>} accountTags Account tag. Currently only virtuaalikirkko
         * @param {string} baseCategorySlug Slug of the base category
         * @param {Array<string>} [categorySlugs] Category slugs to search from
         * @param {Set<string>} [accountUrls] Besides the account tag, account urlname
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAccountTagsAccountTagsBaseCategorySlug: async (accountTags: Array<'virtuaalikirkko'>, baseCategorySlug: string, categorySlugs?: Array<string>, accountUrls?: Set<string>, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'accountTags' is not null or undefined
            assertParamExists('getAccountTagsAccountTagsBaseCategorySlug', 'accountTags', accountTags)
            // verify required parameter 'baseCategorySlug' is not null or undefined
            assertParamExists('getAccountTagsAccountTagsBaseCategorySlug', 'baseCategorySlug', baseCategorySlug)
            const localVarPath = `/account-tags/{accountTags}/{baseCategorySlug}`
                .replace(`{${"accountTags"}}`, encodeURIComponent(String(accountTags)))
                .replace(`{${"baseCategorySlug"}}`, encodeURIComponent(String(baseCategorySlug)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (categorySlugs) {
                localVarQueryParameter['categorySlugs'] = categorySlugs.join(COLLECTION_FORMATS.csv);
            }

            if (accountUrls) {
                localVarQueryParameter['accountUrls'] = Array.from(accountUrls);
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * CategoriesApi - functional programming interface
 * @export
 */
export const CategoriesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = CategoriesApiAxiosParamCreator(configuration)
    return {
        /**
         * Get basecategories
         * @summary Get categories (without events)
         * @param {Array<'virtuaalikirkko'>} accountTags Account tag. Currently only virtuaalikirkko
         * @param {string} baseCategorySlug Slug of the base category
         * @param {Array<string>} [categorySlugs] Category slugs to search from
         * @param {Set<string>} [accountUrls] Besides the account tag, account urlname
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAccountTagsAccountTagsBaseCategorySlug(accountTags: Array<'virtuaalikirkko'>, baseCategorySlug: string, categorySlugs?: Array<string>, accountUrls?: Set<string>, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse2001>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAccountTagsAccountTagsBaseCategorySlug(accountTags, baseCategorySlug, categorySlugs, accountUrls, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * CategoriesApi - factory interface
 * @export
 */
export const CategoriesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = CategoriesApiFp(configuration)
    return {
        /**
         * Get basecategories
         * @summary Get categories (without events)
         * @param {Array<'virtuaalikirkko'>} accountTags Account tag. Currently only virtuaalikirkko
         * @param {string} baseCategorySlug Slug of the base category
         * @param {Array<string>} [categorySlugs] Category slugs to search from
         * @param {Set<string>} [accountUrls] Besides the account tag, account urlname
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAccountTagsAccountTagsBaseCategorySlug(accountTags: Array<'virtuaalikirkko'>, baseCategorySlug: string, categorySlugs?: Array<string>, accountUrls?: Set<string>, options?: any): AxiosPromise<InlineResponse2001> {
            return localVarFp.getAccountTagsAccountTagsBaseCategorySlug(accountTags, baseCategorySlug, categorySlugs, accountUrls, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * CategoriesApi - object-oriented interface
 * @export
 * @class CategoriesApi
 * @extends {BaseAPI}
 */
export class CategoriesApi extends BaseAPI {
    /**
     * Get basecategories
     * @summary Get categories (without events)
     * @param {Array<'virtuaalikirkko'>} accountTags Account tag. Currently only virtuaalikirkko
     * @param {string} baseCategorySlug Slug of the base category
     * @param {Array<string>} [categorySlugs] Category slugs to search from
     * @param {Set<string>} [accountUrls] Besides the account tag, account urlname
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CategoriesApi
     */
    public getAccountTagsAccountTagsBaseCategorySlug(accountTags: Array<'virtuaalikirkko'>, baseCategorySlug: string, categorySlugs?: Array<string>, accountUrls?: Set<string>, options?: any) {
        return CategoriesApiFp(this.configuration).getAccountTagsAccountTagsBaseCategorySlug(accountTags, baseCategorySlug, categorySlugs, accountUrls, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * CategoriesWithEventsApi - axios parameter creator
 * @export
 */
export const CategoriesWithEventsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get events filtered by account-tags, category slugs etc.
         * @summary Get categories with events
         * @param {Array<'virtuaalikirkko'>} accountTags Account tag. Currently only virtuaalikirkko
         * @param {string} baseCategorySlug Slug of the base category
         * @param {string} [startDate] PublishingDate start
         * @param {string} [endDate] PublishingDate end
         * @param {Array<string>} [categorySlugs] Category slugs to search from
         * @param {Set<string>} [accountUrls] Besides the account tag, account urlname
         * @param {Array<0 | 1 | 2 | 3 | 6>} [states] States separated by comma (0&#x3D;PUBLIC_LIVE, 1&#x3D;PUBLIC_ONDEMAND, 2&#x3D;HIDDEN_ONDEMAND, 3&#x3D;HIDDEN_LIVE, 6&#x3D;PAUSED_LIVE)
         * @param {string} [eventTitle] Search event by title (this is regex so finds partial matches also)
         * @param {string} [sort] Sort by for the events (mongodb sort style)
         * @param {number} [page] When using limit, the page to request
         * @param {number} [limit] Limit how many events per category we are getting
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getEventSearchAccountTagsAccountTag: async (accountTags: Array<'virtuaalikirkko'>, baseCategorySlug: string, startDate?: string, endDate?: string, categorySlugs?: Array<string>, accountUrls?: Set<string>, states?: Array<0 | 1 | 2 | 3 | 6>, eventTitle?: string, sort?: string, page?: number, limit?: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'accountTags' is not null or undefined
            assertParamExists('getEventSearchAccountTagsAccountTag', 'accountTags', accountTags)
            // verify required parameter 'baseCategorySlug' is not null or undefined
            assertParamExists('getEventSearchAccountTagsAccountTag', 'baseCategorySlug', baseCategorySlug)
            const localVarPath = `/account-tags/{accountTags}/{baseCategorySlug}/events`
                .replace(`{${"accountTags"}}`, encodeURIComponent(String(accountTags)))
                .replace(`{${"baseCategorySlug"}}`, encodeURIComponent(String(baseCategorySlug)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (startDate !== undefined) {
                localVarQueryParameter['startDate'] = (startDate as any instanceof Date) ?
                    (startDate as any).toISOString().substr(0,10) :
                    startDate;
            }

            if (endDate !== undefined) {
                localVarQueryParameter['endDate'] = (endDate as any instanceof Date) ?
                    (endDate as any).toISOString().substr(0,10) :
                    endDate;
            }

            if (categorySlugs) {
                localVarQueryParameter['categorySlugs'] = categorySlugs.join(COLLECTION_FORMATS.csv);
            }

            if (accountUrls) {
                localVarQueryParameter['accountUrls'] = Array.from(accountUrls);
            }

            if (states) {
                localVarQueryParameter['states'] = states.join(COLLECTION_FORMATS.csv);
            }

            if (eventTitle !== undefined) {
                localVarQueryParameter['eventTitle'] = eventTitle;
            }

            if (sort !== undefined) {
                localVarQueryParameter['sort'] = sort;
            }

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * CategoriesWithEventsApi - functional programming interface
 * @export
 */
export const CategoriesWithEventsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = CategoriesWithEventsApiAxiosParamCreator(configuration)
    return {
        /**
         * Get events filtered by account-tags, category slugs etc.
         * @summary Get categories with events
         * @param {Array<'virtuaalikirkko'>} accountTags Account tag. Currently only virtuaalikirkko
         * @param {string} baseCategorySlug Slug of the base category
         * @param {string} [startDate] PublishingDate start
         * @param {string} [endDate] PublishingDate end
         * @param {Array<string>} [categorySlugs] Category slugs to search from
         * @param {Set<string>} [accountUrls] Besides the account tag, account urlname
         * @param {Array<0 | 1 | 2 | 3 | 6>} [states] States separated by comma (0&#x3D;PUBLIC_LIVE, 1&#x3D;PUBLIC_ONDEMAND, 2&#x3D;HIDDEN_ONDEMAND, 3&#x3D;HIDDEN_LIVE, 6&#x3D;PAUSED_LIVE)
         * @param {string} [eventTitle] Search event by title (this is regex so finds partial matches also)
         * @param {string} [sort] Sort by for the events (mongodb sort style)
         * @param {number} [page] When using limit, the page to request
         * @param {number} [limit] Limit how many events per category we are getting
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getEventSearchAccountTagsAccountTag(accountTags: Array<'virtuaalikirkko'>, baseCategorySlug: string, startDate?: string, endDate?: string, categorySlugs?: Array<string>, accountUrls?: Set<string>, states?: Array<0 | 1 | 2 | 3 | 6>, eventTitle?: string, sort?: string, page?: number, limit?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse200>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getEventSearchAccountTagsAccountTag(accountTags, baseCategorySlug, startDate, endDate, categorySlugs, accountUrls, states, eventTitle, sort, page, limit, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * CategoriesWithEventsApi - factory interface
 * @export
 */
export const CategoriesWithEventsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = CategoriesWithEventsApiFp(configuration)
    return {
        /**
         * Get events filtered by account-tags, category slugs etc.
         * @summary Get categories with events
         * @param {Array<'virtuaalikirkko'>} accountTags Account tag. Currently only virtuaalikirkko
         * @param {string} baseCategorySlug Slug of the base category
         * @param {string} [startDate] PublishingDate start
         * @param {string} [endDate] PublishingDate end
         * @param {Array<string>} [categorySlugs] Category slugs to search from
         * @param {Set<string>} [accountUrls] Besides the account tag, account urlname
         * @param {Array<0 | 1 | 2 | 3 | 6>} [states] States separated by comma (0&#x3D;PUBLIC_LIVE, 1&#x3D;PUBLIC_ONDEMAND, 2&#x3D;HIDDEN_ONDEMAND, 3&#x3D;HIDDEN_LIVE, 6&#x3D;PAUSED_LIVE)
         * @param {string} [eventTitle] Search event by title (this is regex so finds partial matches also)
         * @param {string} [sort] Sort by for the events (mongodb sort style)
         * @param {number} [page] When using limit, the page to request
         * @param {number} [limit] Limit how many events per category we are getting
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getEventSearchAccountTagsAccountTag(accountTags: Array<'virtuaalikirkko'>, baseCategorySlug: string, startDate?: string, endDate?: string, categorySlugs?: Array<string>, accountUrls?: Set<string>, states?: Array<0 | 1 | 2 | 3 | 6>, eventTitle?: string, sort?: string, page?: number, limit?: number, options?: any): AxiosPromise<InlineResponse200> {
            return localVarFp.getEventSearchAccountTagsAccountTag(accountTags, baseCategorySlug, startDate, endDate, categorySlugs, accountUrls, states, eventTitle, sort, page, limit, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * CategoriesWithEventsApi - object-oriented interface
 * @export
 * @class CategoriesWithEventsApi
 * @extends {BaseAPI}
 */
export class CategoriesWithEventsApi extends BaseAPI {
    /**
     * Get events filtered by account-tags, category slugs etc.
     * @summary Get categories with events
     * @param {Array<'virtuaalikirkko'>} accountTags Account tag. Currently only virtuaalikirkko
     * @param {string} baseCategorySlug Slug of the base category
     * @param {string} [startDate] PublishingDate start
     * @param {string} [endDate] PublishingDate end
     * @param {Array<string>} [categorySlugs] Category slugs to search from
     * @param {Set<string>} [accountUrls] Besides the account tag, account urlname
     * @param {Array<0 | 1 | 2 | 3 | 6>} [states] States separated by comma (0&#x3D;PUBLIC_LIVE, 1&#x3D;PUBLIC_ONDEMAND, 2&#x3D;HIDDEN_ONDEMAND, 3&#x3D;HIDDEN_LIVE, 6&#x3D;PAUSED_LIVE)
     * @param {string} [eventTitle] Search event by title (this is regex so finds partial matches also)
     * @param {string} [sort] Sort by for the events (mongodb sort style)
     * @param {number} [page] When using limit, the page to request
     * @param {number} [limit] Limit how many events per category we are getting
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CategoriesWithEventsApi
     */
    public getEventSearchAccountTagsAccountTag(accountTags: Array<'virtuaalikirkko'>, baseCategorySlug: string, startDate?: string, endDate?: string, categorySlugs?: Array<string>, accountUrls?: Set<string>, states?: Array<0 | 1 | 2 | 3 | 6>, eventTitle?: string, sort?: string, page?: number, limit?: number, options?: any) {
        return CategoriesWithEventsApiFp(this.configuration).getEventSearchAccountTagsAccountTag(accountTags, baseCategorySlug, startDate, endDate, categorySlugs, accountUrls, states, eventTitle, sort, page, limit, options).then((request) => request(this.axios, this.basePath));
    }
}


