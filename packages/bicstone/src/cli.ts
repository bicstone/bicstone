#!/usr/bin/env node

import { EOL } from "os";
import f from "chalk";
import { type Link, bicstone } from "./index.js";

const LINK_TITLE_LENGTH = 9;

const formatLink = (link: Link) => {
	const title = f.bold(link.siteName.padEnd(LINK_TITLE_LENGTH, " "));

	const parts = link.url.split("/");
	parts[parts.length - 1] = f.bold(f.green(parts[parts.length - 1]));

	const url = f.underline(f.gray(parts.join("/")));

	return `${title}: ${url}`;
};

const name = f.bold(f.bgGreen(`${bicstone.name} (${bicstone.work})`));
const portfolio = f.bold(f.bgGreen(bicstone.links.portfolio.url));
const links: Link[] = [
	bicstone.links.x,
	bicstone.links.facebook,
	bicstone.links.linkedin,
	bicstone.links.bluesky,
	bicstone.links.youtrust,
	bicstone.links.github,
	bicstone.links.zenn,
];

const formattedLinks = links.map((link) => formatLink(link));

const output =
	EOL +
	name +
	EOL +
	portfolio +
	EOL +
	EOL +
	formattedLinks.join(EOL) +
	EOL +
	EOL;

process.stdout.write(output);
process.exitCode = 0;
