type ButtonVariant = "base" | "outline";
export type ButtonProps = {
    text: string;
    onClick: () => void;
    variant?: ButtonVariant;
}
