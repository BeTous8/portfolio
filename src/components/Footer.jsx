import { SocialMedia } from "./SocialMedia";

export default function Footer() {
    return (
        <footer>
            <SocialMedia />
            <p>&copy; {new Date().getFullYear()} Your Portfolio. All rights reserved.</p>
        </footer>
    );
}