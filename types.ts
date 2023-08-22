interface Idd {
	root: string;
	suffixes: string[];
}

interface Demonyms {
	eng: {
		f: string;
		m: string;
	};
	fra: {
		f: string;
		m: string;
	};
}

interface Maps {
	googleMaps: string;
	openStreetMaps: string;
}

interface Flags {
	png: string;
	svg: string;
	alt: string;
}
interface CoatOfArms {
	png: string;
	svg: string;
}

interface CapitalInfo {
	latlng: number[];
}

interface PostalCode {
	format: string;
	regex: string;
}
export interface CountryData {
	name: {
		common: string;
		official: string;
		nativeName: {};
	};
	tld: string[];
	cca2: string;
	ccn3: string;
	cca3: string;
	cioc: string;
	independent: boolean;
	status: string;
	unMember: boolean;
	currencies: {};
	idd: Idd;
	capital: string[];
	region: string;
	subregion: string;
	languages: {};
	translations: {};
	latlng: number[];
	landlocked: boolean;
	borders: string[];
	area: number;
	demonyms: Demonyms;
	flag: string;
	maps: Maps;
	population: number;
	gini: {
		[year: number]: number;
	};
	fifa: string;
	car: {
		signs: string[];
		side: string;
	};
	timezones: string[];
	continents: string[];
	flags: Flags;
	coatOfArms: CoatOfArms;
	startOfWeek: string;
	capitalInfo: CapitalInfo;
	postalCode: PostalCode;
}
