export interface UrlMetadata {
  faviconUrl: string;
  siteName: string;
  title: string;
  url: string;
}

export interface Bicstone {
  familyName: string;
  givenName: string;
  name: string;
  urls: UrlMetadata[];
}

export const bicstone: Bicstone = {
  familyName: "Oishi",
  givenName: "Takanori",
  name: "Oishi Takanori",
  urls: [
    {
      faviconUrl: "",
      siteName: "Portfolio",
      title: "Portfolio",
      url: "https://bicstone.me",
    },
  ],
};
