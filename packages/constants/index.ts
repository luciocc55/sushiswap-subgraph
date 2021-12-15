import { Address, BigDecimal, BigInt } from '@graphprotocol/graph-ts'

export const NULL_CALL_RESULT_VALUE = '0x0000000000000000000000000000000000000000000000000000000000000001'

export const ADDRESS_ZERO = Address.fromString('0x0000000000000000000000000000000000000000')

export const BIG_DECIMAL_1E6 = BigDecimal.fromString('1e6')

export const BIG_DECIMAL_1E12 = BigDecimal.fromString('1e12')

export const BIG_DECIMAL_1E18 = BigDecimal.fromString('1e18')

export const BIG_DECIMAL_ZERO = BigDecimal.fromString('0')

export const BIG_DECIMAL_ONE = BigDecimal.fromString('1')

export const BIG_INT_ONE = BigInt.fromI32(1)

export const BIG_INT_TWO = BigInt.fromI32(2)

export const BIG_INT_ONE_HUNDRED = BigInt.fromI32(100)

export const BIG_INT_ONE_DAY_SECONDS = BigInt.fromI32(86400)

export const BIG_INT_ZERO = BigInt.fromI32(0)

export const LOCKUP_POOL_NUMBER = BigInt.fromI32(29)

export const LOCKUP_BLOCK_NUMBER = BigInt.fromI32(10959148)

export const MASTER_CHEF_START_BLOCK = BigInt.fromI32(10750000)

export const UNISWAP_SUSHI_ETH_PAIR_FIRST_LIQUDITY_BLOCK = BigInt.fromI32(10750005)

export const ACC_SUSHI_PRECISION = BigInt.fromString('1000000000000')

export const BENTOBOX_DEPOSIT = 'deposit'

export const BENTOBOX_TRANSFER = 'transfer'

export const BENTOBOX_WITHDRAW = 'withdraw'

export const KASHI_PAIR_MEDIUM_RISK_TYPE = 'medium'

export const PAIR_ADD_COLLATERAL = 'addCollateral'

export const PAIR_REMOVE_COLLATERAL = 'removeCollateral'

export const PAIR_ADD_ASSET = 'addAsset'

export const PAIR_REMOVE_ASSET = 'removeAsset'

export const PAIR_BORROW = 'borrow'

export const PAIR_REPAY = 'repay'

export const FACTORY_ADDRESS = Address.fromString(
  '0x5d2F9817303b940C9bB4F47C8C566c5C034d9848'
)

export const MASTER_CHEF_ADDRESS = Address.fromString(
  '0xb2E9B85FB43082F3148B0D13450E8BEB5C9B63f2'
)

export const OPENX_MAKER_ADDRESS = Address.fromString(
  '0xff819FcdACf0bb69Cf4621340F85D7f20744d450'
)

export const OPENX_TOKEN_ADDRESS = Address.fromString(
  '0x01a4b054110d57069c1658afbc46730529a3e326'
)

// minimum liquidity required to count towards tracked volume for pairs with small # of Lps
export const MINIMUM_USD_THRESHOLD_NEW_PAIRS = BigDecimal.fromString(
  '500'
)

// minimum liquidity for price to get tracked
export const MINIMUM_LIQUIDITY_THRESHOLD_ETH = BigDecimal.fromString('3')

export const WETH_ADDRESS = Address.fromString(
  '0x63b44405ce864a489a6244c912415d9e75144e73'
)

export const UNISWAP_FACTORY_ADDRESS = Address.fromString(
  '0x5d2F9817303b940C9bB4F47C8C566c5C034d9848'
)

export const NATIVE = Address.fromString(
  '0x63b44405ce864a489a6244c912415d9e75144e73'
)

export const USDT_ADDRESS = Address.fromString(
  '0x3c2b8be99c50593081eaa2a724f0b8285f5aba8f'
)
export const USDC = '0x985458e523db3d53125813ed68c274899e9dfab4'

export const USDT = '0x3c2b8be99c50593081eaa2a724f0b8285f5aba8f'

export const DAI = '0xef977d2f931c1978db5f6747666fa1eacb0d0339'

export const WHITELIST: string[] = '0x63b44405ce864a489a6244c912415d9e75144e73,0x2260fac5e5542a773aa44fbcfedf7c193bc2c599,0xef977d2f931c1978db5f6747666fa1eacb0d0339,0x985458e523db3d53125813ed68c274899e9dfab4,0x383518188c0c6d7730d91b2c03a03c837814a899,0x3c2b8be99c50593081eaa2a724f0b8285f5aba8f,0x0000000000085d4780b73119b644ae5ecd22b376,0x5d3a536e4d6dbd6114cc1ead35777bab948e3643,0x57ab1ec28d129707052df4df418d58a2d46d5f51,0x514910771af9ca656af840dff83e8264ecf986ca,0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e,0x8798249c2e607446efb7ad49ec89dd1865ff4272,0x1456688345527be1f37e9e627da0837d6f08c925,0x3449fc1cd036255ba1eb19d65ff4ba2b8903a69a,0x2ba592f78db6436527729929aaf6c908497cb200,0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0,0xa1faa113cbe53436df28ff0aee54275c13b40975,0xdb0f18081b505a7de20b18ac41856bcb4ba86a1a,0x04fa0d235c4abf4bcf4787af4cf447de572ef828,0x3155ba85d5f96b2d030a4966af206230e46849cb,0x87d73e916d7057945c9bcd8cdd94e42a6f47f776,0xdfe66b14d37c77f4e9b180ceb433d1b164f0281d,0xad32a8e6220741182940c5abf610bde99e737b2d,0xafcE9B78D409bF74980CACF610AFB851BF02F257,0x6b3595068778dd592e39a122f4f5a5cf09c90fe2'.split(',')

// export const WHITELIST: string[] = [
//   "0xcf664087a5bb0237a0bad6742852ec6c8d69a27a",
//   "0x6983d1e6def3690c4d616b13597a09e6193ea013",
//   "0x3095c7557bcb296ccc6e363de01b760ba031f2d9",
//   "0x985458e523db3d53125813ed68c274899e9dfab4",
//   "0x3c2b8be99c50593081eaa2a724f0b8285f5aba8f",
//   "0xe176ebe47d621b984a73036b9da5d834411ef734",
// ]

// export const WHITELIST: string[] = [
//   "0x471ece3750da237f93b8e339c536989b8978a438",
//   "0xd629eb00deced2a080b7ec630ef6ac117e614f1b",
//   "0x765de816845861e75a25fca122bb6898b8b1282a",
//   "0xd8763cba276a3738e6de85b4b3bf5fded6d6ca73"
// ];

const CUSTOM_BASES = new Map<string, string>()
