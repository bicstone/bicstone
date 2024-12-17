#!/usr/bin/env node

import { EOL } from "node:os";
import f from "chalk";
import { type Link, bicstone } from "./index.js";

const LINK_TITLE_LENGTH = 9;

const formatLink = (link: Link) => {
	const parts = link.url.split("/");
	const styledParts = parts.map((part, index) =>
		index === parts.length - 1 ? f.green(part) : f.gray(part),
	);

	const title = f.bold(link.siteName.padEnd(LINK_TITLE_LENGTH, " "));
	const url = f.underline(f.gray(styledParts.join("/")));

	return `${title}: ${url}`;
};

const name = f.bold(f.bgGreen(`${bicstone.name} (${bicstone.work})`));
const portfolio = f.bold(f.bgGreen(bicstone.links.portfolio.url));
const links: Link[] = [
	bicstone.links.x,
	bicstone.links.facebook,
	bicstone.links.linkedin,
	bicstone.links.youtrust,
	bicstone.links.instagram,
	bicstone.links.mixi2,
	bicstone.links.github,
	bicstone.links.npm,
	bicstone.links.zenn,
	bicstone.links.note,
	bicstone.links.qiita,
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
