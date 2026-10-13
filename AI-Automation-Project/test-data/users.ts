import { requiredEnvironmentValue } from '../utils/env';

export interface TestUser {
  readonly username: string;
  readonly password: string;
}

function readUser(environmentKey: string): TestUser {
  return {
    username: requiredEnvironmentValue(`${environmentKey}_USERNAME`),
    password: requiredEnvironmentValue(`${environmentKey}_PASSWORD`),
  };
}

export const users = {
  standard: readUser('STANDARD_USER'),
  lockedOut: readUser('LOCKED_OUT_USER'),
  problem: readUser('PROBLEM_USER'),
  performanceGlitch: readUser('PERFORMANCE_GLITCH_USER'),
  error: readUser('ERROR_USER'),
  visual: readUser('VISUAL_USER'),
} as const satisfies Record<string, TestUser>;

export interface Product {
  readonly name: string;
  readonly price: string;
}

export const productCatalog: readonly Product[] = [
  { name: 'Sauce Labs Backpack', price: '$29.99' },
  { name: 'Sauce Labs Bike Light', price: '$9.99' },
  { name: 'Sauce Labs Bolt T-Shirt', price: '$15.99' },
  { name: 'Sauce Labs Fleece Jacket', price: '$49.99' },
  { name: 'Sauce Labs Onesie', price: '$7.99' },
  { name: 'Test.allTheThings() T-Shirt (Red)', price: '$15.99' },
];