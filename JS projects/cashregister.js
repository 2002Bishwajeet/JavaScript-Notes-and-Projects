//  design a cash register  

const REGISTER_STATUS = {
    closed: 'CLOSED',
    insufficientFunds: 'INSUFFICIENT_FUNDS',
    open: 'OPEN'
}

function checkCashRegister(price,cash,cid)
{
    // cid is a 2D array Listing available currency
    // price is the price of the item
    // cash is the the payment 
    let cashRegister = {status: '', change: cid};
    //  Js is very bad with dealing numbers so we are parsing it to float and keeping it to fixed to 2 decimal places
    const changeNeeded = parseFloat(cash - price).toFixed(2);
    const changeAvailable = getTotalCashRegisterChange(cid);
    cashRegister.status= getTotalCashRegisterstatus(changeNeeded,changeAvailable);

    
    if(cashRegister.status === REGISTER_STATUS.insufficientFunds) {
        cashRegister.change = [];
        return cashRegister;
    }
    
    cashRegister.change = getCustomerChange(changeNeeded,cid);

    if(changeNeeded > getTotalCashRegisterChange(cashRegister.change)){
        cashRegister.status = REGISTER_STATUS.insufficientFunds;
        cashRegister.change = [];
    }
    if(cashRegister.status === REGISTER_STATUS.closed) {
        cashRegister.change = [...cid];
    }
    // console.log(cashRegister);
    
    return cashRegister;
}

function getCustomerChange(changeNeeded,changeInDrawer) {
    const change = [];
    const currentDictionary = {
        'PENNY': 0.01,
        'NICKEL': 0.05,
        'DIME': 0.10,
        'QUARTER': 0.25,
        'ONE': 1.00,
        'FIVE': 5.00,
        'TEN': 10.00,
        'TWENTY': 20.00,
        'ONE HUNDRED': 100.00
    };

    for(let i = changeInDrawer.length - 1; i >= 0; i--)
    {
        const coinName = changeInDrawer[i][0];
        const coinTotal = changeInDrawer[i][1];
        const coinValue = currentDictionary[coinName];
        const coinChange = coinTotal / coinValue;
        let coinChangeFloat = parseFloat(coinChange).toFixed(2);
        let coinsToReturn = 0;


        while(changeNeeded >= coinValue && coinChangeFloat > 0)
        {
            changeNeeded -= coinValue;
            changeNeeded = changeNeeded.toFixed(2);
            coinChangeFloat--;
            coinsToReturn++;
        }
        if(coinsToReturn > 0){
            change.push([coinName,coinsToReturn*coinValue]);
        }
    }
    return change;

}

function getTotalCashRegisterstatus(changeNeeded,changeAvailable)
{
    if(Number(changeNeeded) > Number(changeAvailable))
    {
        return REGISTER_STATUS.insufficientFunds;
    }
    else if(Number(changeNeeded) < Number(changeAvailable))
    {
        return REGISTER_STATUS.open;
    }
    else
    return REGISTER_STATUS.closed;
}

function getTotalCashRegisterChange(changeInDrawer){
    console.log(changeInDrawer.length)
    let total = 0;
    for(let change of changeInDrawer)
    {
        let changeValue = change[1];
        total += changeValue;
    }
    return total.toFixed(2);
}


checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);