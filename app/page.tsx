import Image from "next/image";
import styles from "./page.module.css";

const socials = [
	{
		name: "GitHub",
		url: "https://github.com/alula",
	},
	{
		name: "Twitter",
		url: "https://twitter.com/__alula",
	},
	{
		name: "Telegram",
		url: "https://t.me/aluuula",
	},
	{
		name: "Discord",
		url: "https://discord.com/users/219067402174988290",
	},
];

const webring = [
	{
		name: "alula",
		url: "https://alula.me",
	},
	{
		name: "espi",
		url: "https://espi.me",
	},
	{
		name: "adryd",
		url: "https://adryd.com",
	},
	{
		name: "megu",
		url: "https://megu.dev",
	},
	{
		name: "pala",
		url: "https://palaiologos.rocks",
	},
	{
		name: "ven",
		url: "https://vendicated.dev",
	},
	{
		name: "chloe",
		url: "https://arciniega.one",
	},
	{
		name: "fleepy",
		url: "https://fleepy.tv",
	},
	{
		name: "kot",
		url: "https://yukata.tech",
	},
	{
		name: "colepaws",
		url: "https://colepaws.pet",
	},
];

export default function Home() {
	return (
		<main className={styles.container}>
			<h1>hello world</h1>
			<p>{"My name's Laura, I go by Alula online."}</p>
			<p>
				Dump of my relevant socials:{" "}
				{socials.map(({ name, url }, idx) => (
					<>
						{idx > 0 && ", "}
						<a href={url} target="_blank" rel="noreferrer">
							{name}
						</a>
					</>
				))}
			</p>
			<p>
				{
					"I'm too lazy to make a proper website (this was made within 20 minutes), here's my bunny fursona instead."
				}
			</p>
			<div style={{ position: "relative", height: "60vh" }}>
				<Image
					src="/alula.png"
					alt="alula"
					unoptimized={true}
					fill={true}
					objectFit="contain"
				/>
			</div>

			<div className={styles.webring}>
				<p>Friends</p>
				{webring.map(({ name, url }) => (
					<a href={url} key={name} target="_blank" rel="noreferrer">
						<Image
							src={`/webring/${name}.png`}
							alt={name}
							width={88}
							height={31}
						/>
					</a>
				))}
			</div>
		</main>
	);
}
