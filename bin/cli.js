#!/usr/bin/env node

import minimist from 'minimist'
import { roll } from '../lib/roll.js'

var args = minimist(process.argv.slice(2))

const sides = args.sides;
const dice = args.dice;
const rolls = args.rolls;

console.log(roll(sides, dice, rolls))