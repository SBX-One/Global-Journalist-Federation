export type HighlightProps = {
    date: string;
    country: string;
    desc: string;
    image: string;
}

export type JournalistButtonProps = {
    title: string;
    icon: boolean
}

export type ActNowCardProps = {
    CardType: "button" | "link" | "social" | string;
    title: string;
    desc: string;
    icon: string;
}

export type LatestFromUsCardProps = {
    title: string;
    desc: string;
    image: string;
    date: string;
    name: string;
    jabatan: string;
}

export type LatestNewsCardProps = {
    image: string;
    title: string;
    desc: string;
    name: string;
    theme: string;
    location: string;
}