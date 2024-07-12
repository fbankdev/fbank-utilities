import { BigNumber as BigNumberJs } from 'bignumber.js';
import { BigNumber, constants } from 'ethers';
import { ProtocolAction, } from './types';
export const valueToWei = (value, decimals) => {
    return new BigNumberJs(value).shiftedBy(decimals).toFixed(0);
};
export const canBeEnsAddress = (ensAddress) => {
    return ensAddress.toLowerCase().endsWith('.eth');
};
export const decimalsToCurrencyUnits = (value, decimals) => new BigNumberJs(value).shiftedBy(decimals * -1).toFixed();
// .div(new BigNumberJs(10).pow(decimals)).toFixed();
export const getTxValue = (reserve, amount) => {
    return reserve.toLowerCase() === API_ETH_MOCK_ADDRESS.toLowerCase()
        ? amount
        : DEFAULT_NULL_VALUE_ON_TX;
};
export const DEFAULT_NULL_VALUE_ON_TX = BigNumber.from(0).toHexString();
export const DEFAULT_APPROVE_AMOUNT = constants.MaxUint256.toString();
export const MAX_UINT_AMOUNT = '115792089237316195423570985008687907853269984665640564039457584007913129639935';
export const SUPER_BIG_ALLOWANCE_NUMBER = '11579208923731619542357098500868790785326998466564056403945758400791';
export const API_ETH_MOCK_ADDRESS = '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE';
export const uniswapEthAmount = '0.1';
export const SURPLUS = '0.05';
export const gasLimitRecommendations = {
    [ProtocolAction.default]: {
        limit: '210000',
        recommended: '210000',
    },
    [ProtocolAction.approval]: {
        limit: '65000',
        recommended: '65000',
    },
    [ProtocolAction.creditDelegationApproval]: {
        limit: '55000',
        recommended: '55000',
    },
    [ProtocolAction.supply]: {
        limit: '300000',
        recommended: '300000',
    },
    [ProtocolAction.deposit]: {
        limit: '300000',
        recommended: '300000',
    },
    [ProtocolAction.borrow]: {
        limit: '400000',
        recommended: '400000',
    },
    [ProtocolAction.withdraw]: {
        limit: '230000',
        recommended: '300000',
    },
    [ProtocolAction.liquidationCall]: {
        limit: '700000',
        recommended: '700000',
    },
    [ProtocolAction.liquidationFlash]: {
        limit: '995000',
        recommended: '995000',
    },
    [ProtocolAction.repay]: {
        limit: '300000',
        recommended: '300000',
    },
    [ProtocolAction.repayETH]: {
        limit: '350000',
        recommended: '300000',
    },
    [ProtocolAction.borrowETH]: {
        limit: '450000',
        recommended: '450000',
    },
    [ProtocolAction.withdrawETH]: {
        limit: '640000',
        recommended: '640000',
    },
    [ProtocolAction.swapCollateral]: {
        limit: '1000000',
        recommended: '1000000',
    },
    [ProtocolAction.repayCollateral]: {
        limit: '700000',
        recommended: '700000',
    },
    [ProtocolAction.migrateV3]: {
        limit: '700000',
        recommended: '700000',
    },
    [ProtocolAction.supplyWithPermit]: {
        limit: '350000',
        recommended: '350000',
    },
    [ProtocolAction.repayWithPermit]: {
        limit: '350000',
        recommended: '350000',
    },
    [ProtocolAction.stake]: {
        limit: '350000',
        recommended: '350000',
    },
    [ProtocolAction.stakeWithPermit]: {
        limit: '400000',
        recommended: '400000',
    },
    [ProtocolAction.vote]: {
        limit: '125000',
        recommended: '125000',
    },
    [ProtocolAction.claimRewards]: {
        limit: '275000',
        recommended: '275000',
    },
    [ProtocolAction.setUsageAsCollateral]: {
        limit: '138000',
        recommended: '138000',
    },
    [ProtocolAction.repayWithATokens]: {
        limit: '300000',
        recommended: '300000',
    },
    [ProtocolAction.withdrawAndSwitch]: {
        limit: '1000000',
        recommended: '1000000',
    },
    [ProtocolAction.batchMetaDelegate]: {
        limit: '200000',
        recommended: '200000',
    },
    [ProtocolAction.updateRepresentatives]: {
        limit: '60000',
        recommended: '60000',
    },
    [ProtocolAction.migrateABPT]: {
        limit: '750000',
        recommended: '750000',
    },
};
export const mintAmountsPerToken = {
    AAVE: valueToWei('100', 18),
    BAT: valueToWei('100000', 18),
    BUSD: valueToWei('10000', 18),
    DAI: valueToWei('10000', 18),
    ENJ: valueToWei('100000', 18),
    KNC: valueToWei('10000', 18),
    LEND: valueToWei('1000', 18),
    LINK: valueToWei('400', 18),
    MANA: valueToWei('100000', 18),
    MKR: valueToWei('10', 18),
    WETH: valueToWei('1.5', 18),
    REN: valueToWei('10000', 18),
    REP: valueToWei('1000', 18),
    SNX: valueToWei('100', 18),
    SUSD: valueToWei('10000', 18),
    TUSD: '0',
    UNI: valueToWei('1000', 18),
    USDC: valueToWei('5000', 6),
    USDT: valueToWei('5000', 6),
    WBTC: valueToWei('0.1', 8),
    YFI: valueToWei('1', 18),
    ZRX: valueToWei('100000', 18),
    WFTM: valueToWei('10000', 18),
    UNIUSDC: valueToWei(uniswapEthAmount, 6),
    UNIDAI: valueToWei(uniswapEthAmount, 18),
    UNIUSDT: valueToWei(uniswapEthAmount, 6),
    UNIDAIETH: valueToWei(uniswapEthAmount, 18),
    UNIUSDCETH: valueToWei(uniswapEthAmount, 18),
    UNISETHETH: valueToWei(uniswapEthAmount, 18),
    UNILENDETH: valueToWei(uniswapEthAmount, 18),
    UNILINKETH: valueToWei(uniswapEthAmount, 18),
    UNIMKRETH: valueToWei(uniswapEthAmount, 18),
    EURS: valueToWei('10000', 2),
    AGEUR: valueToWei('10000', 18),
    BAL: valueToWei('10000', 18),
    CRV: valueToWei('10000', 18),
    DPI: valueToWei('10000', 18),
    GHST: valueToWei('10000', 18),
    JEUR: valueToWei('10000', 18),
    SUSHI: valueToWei('10000', 18),
};
export const augustusToAmountOffsetFromCalldata = (calldata) => {
    switch (calldata.slice(0, 10)) {
        case '0x935fb84b': // Augustus V5 buyOnUniswap
            return 36; // 4 + 1 * 32
        case '0xc03786b0': // Augustus V5 buyOnUniswapFork
            return 100; // 4 + 3 * 32
        case '0xb2f1e6db': // Augustus V5 buyOnUniswapV2Fork
            return 68; // 4 + 2 * 32
        case '0xb66bcbac': // Augustus V5 buy (old)
        case '0x35326910': // Augustus V5 buy
            return 164; // 4 + 5 * 32
        case '0x87a63926': // directUniV3Buy
            return 68; // 4 + 2 * 32
        default:
            throw new Error('Unrecognized function selector for Augustus');
    }
};
export const convertPopulatedTx = (tx) => {
    return Object.assign(Object.assign({}, tx), { value: tx.value ? BigNumber.from(tx.value) : BigNumber.from('0') });
};
//# sourceMappingURL=utils.js.map