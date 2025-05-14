const cmbSDK = require('cmb-sdk'); // 招商银行SDK

async function bankTransfer(amount, accountInfo) {
    try {
        const result = await cmbSDK.transfer({
            amount,
            payee_account: accountInfo.accountNo,
            payee_name: accountInfo.accountName
        });
        return result;
    } catch (error) {
        console.error('银行转账失败:', error);
        throw error;
    }
}