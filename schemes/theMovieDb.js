import LocalScheme from '@nuxtjs/auth/lib/schemes/local';

export default class TheMovieDb extends LocalScheme {
  async login(endpoint) {
    if (!this.options.endpoints.login) {
      return
    }

    const requestToken = await this._getRequestTokenRequest();
    if (!requestToken) {
      return
    }

    // Ditch any leftover local tokens before attempting to log in
    await this.$auth.reset()

    const validatedToken = await this._validateTokenWithLogin(endpoint, requestToken);
    const sessionId = await this._getSessionIdPassingValidatedToken(validatedToken);

    if (this.options.tokenRequired) {
      this.$auth.setToken(this.name, sessionId)
      this._setToken(sessionId)
    }

    if (this.options.autoFetchUser) {
      await this.fetchUser()
    }

    return sessionId
  }

  async fetchUser(endpoint) {
    endpoint = endpoint || this.options.endpoints.user;
    endpoint.url = this.$auth.authenticatedUrl(endpoint.url);

    return super.fetchUser(endpoint);
  }

  async logout(endpoint) {
    // Only connect to logout endpoint if it's configured
    if (this.options.endpoints.logout) {
      this.options.endpoints.logout.url = this.$auth.authenticatedUrl(this.options.endpoints.logout.url);
      await this.$auth
        .requestWith(this.name, endpoint, this.options.endpoints.logout)
        .catch(() => {
        })
    }

    // But reset regardless
    return this.$auth.reset()
  }

  async _getRequestTokenRequest() {
    const endpoint = this._appendsApiKey(this.options.endpoints.requestToken.url)

    let result = await this.$auth.request(
      endpoint,
      endpoint,
      true
    ).then((response) => response.result)

    if (!result) {
      return;
    }

    return result.request_token;
  }

  _appendsApiKey(endpoint) {
    if (endpoint.includes('api_key')) {
      return endpoint;
    }

    return endpoint + '?api_key=' + process.env.apiKey;
  }

  async _validateTokenWithLogin(payload, requestToken) {
    payload.data.request_token = requestToken;
    this.options.endpoints.validateTokenWithLogin.url = this._appendsApiKey(this.options.endpoints.validateTokenWithLogin.url)
    const {response, result} = await this.$auth.request(
      payload,
      this.options.endpoints.validateTokenWithLogin,
      true
    );

    return result;
  }

  async _getSessionIdPassingValidatedToken(requestToken) {
    let payload = {
      data: {
        request_token: requestToken
      }
    }
    this.options.endpoints.login.url = this._appendsApiKey(this.options.endpoints.login.url)
    const {response, result} = await this.$auth.request(
      payload,
      this.options.endpoints.login,
      true
    );

    return result;
  }
}
