/**
 * A collection of classed error types.
 *
 * Author: Kevin Nielsen <knielsen@alertlogic.com>
 * Copyright 2019 Alert Logic, Inc.
 */

/**
 * @public
 *
 * A base error class used only to provide consistent prototype chaining.
 */
export class AlBaseError extends Error
{
    /* tslint:disable:variable-name */
    __proto__: Error;

    constructor( message?:string) {
        const trueProto = new.target.prototype;
        super(message);

        this.__proto__ = trueProto;
    }
}

/**
 * @public
 *
 * This error should be used when an HTTP 5xx response (or other general error) is received
 * from an internal API.
 */

export class AlAPIServerError extends AlBaseError
{
    constructor( message:string,
                 public serviceName:string,
                 public statusCode:number ) {
        super( message );
    }
}

/**
 * @public
 *
 * The AlResponseValidationError is intended to alert of unexpected responses from an internal API.
 * These responses need to be identified separately from other errors so that the relevant
 * system health checks or communication with an appropriate backend team can be organized in response.
 * Please note that this should NOT be used to handler general server-side failures; please see AlAPIServerError
 * for that error condition.
 *
 * @param message - Descriptive error text
 * @param errors - Unstructured information about specific response validation issues
 */
export class AlResponseValidationError extends AlBaseError
{
    constructor( message:string, public errors:any[] = [] ) {
        super( message );
    }
}

/**
 * @public
 *
 * Used to indicate an invalid request to a service or API.
 *
 * @param message - The description of the error
 * @param inputType - Which type of input was malformed (e.g., query parameter, header, data)
 * @param inputProperty - Which data element was malformed (e.g., "filter", "X-AIMS-Auth-Token", ".data.accounts.id")
 * @param description - Additional descriptive content.
 */
export class AlBadRequestError extends AlBaseError
{
    public httpResponseCode:number = 400;
    constructor( message:string,
                 public inputType?:string,
                 public inputProperty?:string,
                 public description?:string ) {
        super( message );
    }
}

/**
 * @public
 *
 * Used to indicate that the current actor is not authenticated.
 *
 * @param message - The description of the error
 * @param authority - Which authentication authority made the authentication state claim.  Typically, this will be AIMS.
 */
export class AlUnauthenticatedRequestError extends AlBaseError
{
    public httpResponseCode:number = 401;
    constructor( message: string,
                 public authority:string ) {
        super( message );
    }
}

/**
 * @public
 *
 * Used to indicate that the current actor is not authorized to perform a given action.
 *
 * @param message - A general description of the error or error context.
 * @param resource - The resource that the actor is not authorized to access, e.g., "endpoints" or "deployments"
 */
export class AlUnauthorizedRequestError extends AlBaseError
{
    public httpResponseCode:number = 403;
    constructor( message: string,
                 public resource:string ) {
        super( message );
    }
}

/**
 * @public
 *
 * Used to indicate that the request cannot be completed because the underlying functionality is incomplete or unimplemented.
 *
 * @param message - A general description of the error or error context.
 */
export class AlUnimplementedMethodError extends AlBaseError
{
    public httpResponseCode:number = 501;
    constructor( message:string ) {
        super( message );
    }
}

/**
 * @public
 *
 * Used to indicate that a resource does not exist.
 *
 * @param message - A general description of the error and error context.
 */
export class AlNotFoundError extends AlBaseError
{
    public httpResponseCode:number = 404;
    constructor( message:string ) {
        super( message );
    }
}
