import { ERC20Token } from "./constants/addresses";

export const renderInterval = 1 * 1000;

// interval of price check (ms)
export const interval = 4 * 1000;

export const loanAmount = 100;
export const diffAmount = 1; // Not enough amount to return loan

//export const chainId = 1;// Ethereum
//export const chainId = 56;// Binance Smart Chain
export const chainId = 137; // Polygon

export const explorerURL = "https://polygonscan.com";

/**
 * Token pair the bot trading
 * baseToken -> tradingToken -> baseToken (ex: DAI -> WETH -> DAI)
 * profits are sent in baseToken if a transaction is successful.
 */

export const baseTokens = [
  ERC20Token.DAI,
  // ERC20Token.WETH,
  // ERC20Token.USDC,
  // ERC20Token.USDT,
  // ERC20Token.WMATIC,
];

export const tradingTokens = [
  // ERC20Token.DAI,
  // ERC20Token.WETH,
  // ERC20Token.USDC,
  // ERC20Token.USDT,
  ERC20Token.WMATIC,
];

/**
 * @type {string} public flashloan contract address
 * Polyscan: https://polygonscan.com/address/0x568a23ad22041683468cd1d3a6968d7e7dc20d40
 * if you have deployed your own contract, you can use it instead of the default one
 */
export const flashloanAddress: string = process.env.CONTRACT_ADDRESS!;

/**
 * The bot can trade on UniswapV2 fork dexes(ex. SushiSwap) and UniswapV3
 * For UniswapV2, you can trade between any token pair, but for UniswapV3, you have to check their pool fees and list them on src/price/uniswap/v3/fee.ts.
 */
// protocols the bot will use
export const protocols =
  "POLYGON_SUSHISWAP,POLYGON_QUICKSWAP,POLYGON_APESWAP,POLYGON_JETSWAP,POLYGON_WAULTSWAP,POLYGON_UNISWAP_V3";

export const gasLimit = 15000000;
export const gasPrice = 100; // gwei

export const routeParts = [
  [10000],
  [8000, 2000],
  [5000, 4000, 1000],
  [5000, 3000, 1000, 1000],
  [3000, 2000, 2000, 2000, 1000],
  [2000, 2000, 2000, 2000, 1000, 1000],
];
