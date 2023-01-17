import "dotenv/config";

export default {
  port: process.env.PORT,
  dbUri: process.env.DB_URI,
  saltWorkFactor: process.env.SALT_WORK_FACTOR,
  accessTokenTtl: "15m",
  refreshTokenTtl: "1y",
  publicKey: `-----BEGIN PUBLIC KEY-----
  MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCGWKK5fhRHxkPhSgcKDl3N9OdW
  Zl/xdyWNadWZsI8b1Py4Ie8vN5s+SDXQkaiKAGOG3hSeHhN5Gs2dhpbDfBALxykk
  +8+EO0zQTZBlilUIMXqW7FDEo1U0hkCxPXzgpRvcYdlUp84lTfEUs6bE6W+OjPak
  33AuaLjEQJ2++X+AswIDAQAB
  -----END PUBLIC KEY-----`,
  privateKey: process.env.PRIVATE_KEY,
};
