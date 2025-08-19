import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export function SocialMedia() {
    return (
        <div className="social-media">
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/benjamin-tousifar-44054a112" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/BeTous8" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </li>
                <li>
                    <a href="https://instagram.com/your-username" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                </li>
                <li>
                    <a href="mailto:bn.tousifar86@gmail.com">
                        <FontAwesomeIcon icon={faEnvelope}/>
                    </a>
                </li>
            </ul>
        </div>
    );
}