export interface Link {
	isActive: boolean;
	screenName: string | null;
	siteName: string;
	url: string;
}

interface _Bicstone {
	familyName: string;
	givenName: string;
	links: Record<string, Link>;
	name: string;
	work: string;
}

export const bicstone = {
	familyName: "Oishi",
	givenName: "Takanori",
	links: {
		bluesky: {
			isActive: true,
			screenName: "bicstone.me",
			siteName: "Bluesky",
			url: "https://bsky.app/profile/bicstone.me",
		},
		connpass: {
			isActive: true,
			screenName: "bicstone",
			siteName: "connpass",
			url: "https://connpass.com/user/bicstone",
		},
		facebook: {
			isActive: true,
			screenName: "oishi.takanori",
			siteName: "Facebook",
			url: "https://www.facebook.com/oishi.takanori",
		},
		findy: {
			isActive: true,
			screenName: "AKvsozgldUI4i",
			siteName: "Findy",
			url: "https://findy-code.io/share_profiles/AKvsozgldUI4i",
		},
		forkwell: {
			isActive: true,
			screenName: "bicstone",
			siteName: "Forkwell",
			url: "https://portfolio.forkwell.com/@bicstone",
		},
		github: {
			isActive: true,
			screenName: "bicstone",
			siteName: "GitHub",
			url: "https://github.com/bicstone",
		},
		instagram: {
			isActive: true,
			screenName: "bicstone_me",
			siteName: "Instagram",
			url: "https://www.instagram.com/bicstone_me",
		},
		lapras: {
			isActive: true,
			screenName: "bicstone",
			siteName: "LAPRAS",
			url: "https://lapras.com/public/bicstone",
		},
		linkedin: {
			isActive: true,
			screenName: "bicstone",
			siteName: "LinkedIn",
			url: "https://www.linkedin.com/in/bicstone",
		},
		mixi2: {
			isActive: true,
			screenName: "bicstone",
			siteName: "mixi",
			url: "https://mixi.social/@bicstone",
		},
		misskey: {
			isActive: false,
			screenName: "bicstone",
			siteName: "Misskey",
			url: "https://misskey.io/@bicstone",
		},
		mstdn: {
			isActive: false,
			screenName: "bicstone",
			siteName: "mstdn.jp",
			url: "https://mstdn.jp/@bicstone",
		},
		note: {
			isActive: false,
			screenName: "bicstone",
			siteName: "note",
			url: "https://note.com/bicstone",
		},
		npm: {
			isActive: true,
			screenName: "bicstone",
			siteName: "npm",
			url: "https://www.npmjs.com/~bicstone",
		},
		portfolio: {
			isActive: true,
			screenName: null,
			siteName: "Portfolio",
			url: "https://bicstone.me",
		},
		qiita: {
			isActive: true,
			screenName: "bicstone",
			siteName: "Qiita",
			url: "https://qiita.com/bicstone",
		},
		speakerdeck: {
			isActive: true,
			screenName: "bicstone",
			siteName: "Speaker Deck",
			url: "https://speakerdeck.com/bicstone",
		},
		threads: {
			isActive: false,
			screenName: "bicstone_me",
			siteName: "Threads",
			url: "https://www.threads.net/@bicstone_me",
		},
		x: {
			isActive: true,
			screenName: "bicstone_me",
			siteName: "X",
			url: "https://x.com/bicstone_me",
		},
		youtrust: {
			isActive: true,
			screenName: "bicstone",
			siteName: "YouTrust",
			url: "https://youtrust.jp/users/bicstone",
		},
		wantedly: {
			isActive: true,
			screenName: "bicstone",
			siteName: "Wantedly",
			url: "https://www.wantedly.com/id/bicstone",
		},
		zenn: {
			isActive: true,
			screenName: "bicstone",
			siteName: "Zenn",
			url: "https://zenn.dev/bicstone",
		},
	},
	name: "Oishi Takanori",
	work: "Web Developer",
} as const satisfies _Bicstone;

export type Bicstone = typeof bicstone;

export type LinkKeys = keyof Bicstone["links"];
