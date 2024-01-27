import { seaon, temperature } from "./names-exports.mjs";
import {isRaining} from "./inline-exports.mjs";
import DEFAULT_SERVER, { USERNAME as MY_USERNAME, PASSWORD } from "./mixed-exports.mjs";

console.log(isRaining)
console.log(seaon, temperature)

console.log(DEFAULT_SERVER, MY_USERNAME, PASSWORD)