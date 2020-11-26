import LocalScheme from '@nuxtjs/auth/lib/schemes/local';

export default class TheMovieDb extends LocalScheme {
  async login(endpoint) {
    if (!this.options.endpoints.login) {
      return
    }

    let requestTokenResponse = await this._getRequestTokenRequest();
    if (!requestTokenResponse) {
      return
    }

    let requestToken = requestTokenResponse.request_token;

    // Ditch any leftover local tokens before attempting to log in
    await this.$auth.reset()

    endpoint.data.request_token = requestToken;
    this.options.endpoints.login.url = this._appendsApiKey(this.options.endpoints.login.url)
    const {response, result} = await this.$auth.request(
      endpoint,
      this.options.endpoints.login,
      true
    )

    if (this.options.tokenRequired) {
      const token = this.options.tokenType
        ? this.options.tokenType + ' ' + result
        : result

      this.$auth.setToken(this.name, token)
      this._setToken(token)
    }

    if (this.options.autoFetchUser) {
      await this.fetchUser()
    }

    return response
  }

  async _getRequestTokenRequest() {
    const endpoint = this._appendsApiKey(this.options.endpoints.requestToken.url)

    return this.$auth.request(
      endpoint,
      endpoint,
      true
    ).then((response) => response.result)
  }

  _appendsApiKey(endpoint) {
    if (endpoint.includes('api_key')) {
      return endpoint;
    }

    return endpoint + '?api_key=' + this.options.apiKey;
  }
}
