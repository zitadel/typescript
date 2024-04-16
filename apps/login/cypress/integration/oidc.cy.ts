describe("oidc", () => {
  beforeEach(() => {});
  describe("oidc", () => {
    it("should proxy the well-known/openid-connect endpoint", () => {
      const req = cy.request("/.well-known/openid-connect");
      req.its("body").should("include", "authorization_endpoint");
    });

    it("should redirect to /loginname if a authorize request is made", () => {
      cy.request(
        "/oauth/v2/authorize?client_id=111222333%40zitadel&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcallback&response_type=code&scope=openid%20email%20profile&prompt=none&code_challenge=9az09PjcfuENS7oDK7jUd2xAWRb-B3N7Sr3kDoWECOY&code_challenge_method=S256"
      );
      cy.location("pathname", { timeout: 10_000 }).should("eq", "/loginname");
    });
  });
});
