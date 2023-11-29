import * as esbuild from "esbuild";
import esbuildPluginLicense from "esbuild-plugin-license";

esbuild.build({
	entryPoints: ["./src/*.ts"],
	outdir: "dist",
	plugins: [
		esbuildPluginLicense({
			banner: "/*! For license information please see LEGAL.txt */",
			thirdParty: {
				includePrivate: true,
				output: {
					file: "LEGAL.txt",
					template: (deps) =>
						deps
							.map((dep) => {
								const title = `${dep.packageJson.name} ${dep.packageJson.version}`;
								const license = dep.licenseText;
								return `${title}\n${license}\n`;
							})
							.join(""),
				},
			},
		}),
	],
	bundle: true,
	platform: "node",
	format: "esm",
	allowOverwrite: true,
	target: "node16",
});
