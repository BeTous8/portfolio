import { SocialMedia } from "./SocialMedia";

export default function Footer() {
    return (
        <footer>
            <SocialMedia />
            <p>&copy; {new Date().getFullYear()} Benjamin Tousifar - Frontend Developer. All rights reserved.</p>
        </footer>
    );
}