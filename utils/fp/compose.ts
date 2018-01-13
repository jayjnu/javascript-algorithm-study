import { pipeline } from "./pipeline";

type unaryFn = <T, U>(arg:T) => T|U

export const compose = (...fns:unaryFn[]) => fns.reduceRight(pipeline)