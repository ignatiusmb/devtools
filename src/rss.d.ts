export function RSS(channel: RSSChannel, items: RSSItem[]): string;

interface RSSChannel {
	domain: string;
	image?: string;
	title: string;
	slug: string;
	description: string;
	language?: string;
}
interface RSSItem {
	title: string;
	slug: string;
	description: string;
	date: string;
}
