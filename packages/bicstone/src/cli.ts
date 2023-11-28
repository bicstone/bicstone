#!/usr/bin/env node

import { EOL } from "os";
import { bicstone } from "./index";

const output = bicstone.name;

process.stdout.write(output + EOL);
process.exitCode = 0;
