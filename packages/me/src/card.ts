#!/usr/bin/env node

import * as os from "os";
import { bicstone } from "./index.js";

const output = bicstone.name;

process.stdout.write(output + os.EOL);
process.exitCode = 0;
