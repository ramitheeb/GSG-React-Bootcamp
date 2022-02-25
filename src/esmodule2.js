import { sum } from "./esmodule"


const findResult = (a, b) => {
    const sum = sum(a, b)
    return sum * 2
};

export default findResult