const canSum = (target : number, numbers : number[]) : boolean => {
    if (target === 0) return true;
    if (target < 0) return false;
    return canSum(target - numbers.pop(), numbers);
}
