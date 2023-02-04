export enum AppleCredentialState {
    /**
     * The Opaque user ID was revoked by the user.
     */
    REVOKED = 0,

    /**
     * The Opaque user ID is in good state.
     */
    AUTHORIZED = 1,

    /**
     * The Opaque user ID was not found.
     */
    NOT_FOUND = 2,

    /**
     * N/A
     *
     * @url https://developer.apple.com/documentation/authenticationservices/asauthorizationappleidprovidercredentialstate/asauthorizationappleidprovidercredentialtransferred?language=objc
     */
    TRANSFERRED = 3
}

export enum AppleRequestScope {
    /**
     * A scope that includes the user’s email address.
     */
    EMAIL = 0,

    /**
     * A scope that includes the user’s full name.
     */
    FULL_NAME = 1
}

export enum AppleRequestOperation {
    /**
     * An operation that depends on the particular kind of credential provider.
     */
    IMPLICIT = 0,

    /**
     * An operation used to authenticate a user.
     */
    LOGIN = 1,

    /**
     * An operation that refreshes the logged-in user’s credentials.
     */
    REFRESH = 2,

    /**
     * An operation that ends an authenticated session.
     */
    LOGOUT = 3
}
