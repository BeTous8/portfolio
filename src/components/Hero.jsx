import heroImage from '../assets/IMG_4830.PNG'

export default function Hero () {
    return (
        <div className="hero">
            <div className="hero-image">
                <img src={heroImage} alt="Hero" />
            </div>
            <div className="hero-content">
                <h1>I'm Ben</h1>
                <p>A passionate web developer learning through hands-on projects</p>
            </div>
            

            
        </div>
    );
}