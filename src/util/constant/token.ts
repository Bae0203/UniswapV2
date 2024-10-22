export interface ITokenInfo {
  name: string;
  id: string;
  amount: string;
}

export const TokenId = {
  ETH: { id: "ethereum" },
  USDT: { id: "tether" },
  USDC: { id: "usd-coin" },
  DAI: { id: "dai" },
  AAVE: { id: "aave" },
  WBTC: { id: "bitcoin" },
  AXS: { id: "axie-infinity" },
  COMP: { id: "compound-coin" },
  CRV: { id: "curve-dao-token" },
  ENS: { id: "ethereum-name-service" },
} as const;

export const TokenInfo = [
  { name: "ETH", id: "ethereum", amount: "0" },
  { name: "USDT", id: "tether", amount: "0" },
  { name: "USDC", id: "usd-coin", amount: "0" },
  { name: "DAI", id: "dai", amount: "0" },
  { name: "AAVE", id: "aave", amount: "0" },
  { name: "WBTC", id: "bitcoin", amount: "0" },
  { name: "AXS", id: "axie-infinity", amount: "0" },
  { name: "COMP", id: "compound-coin", amount: "0" },
  { name: "CRV", id: "curve-dao-token", amount: "0" },
  { name: "ENS", id: "ethereum-name-service", amount: "0" },
] as const;
