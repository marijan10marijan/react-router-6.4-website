import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer__description">
                    <h1>Find Us on Social Media</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, provident!</p>
                </div>
                <div className="footer__icons">
                    <a href="https://facebook.com" target='_blank' rel='noreferrer'><FacebookIcon /></a>
                    <a href="https://twitter.com" target='_blank' rel='noreferrer'><TwitterIcon /></a>
                    <a href="https://github.com" target='_blank' rel='noreferrer'><GitHubIcon /></a>
                    <a href="https://linkedin.com" target='_blank' rel='noreferrer'><LinkedInIcon /></a>
                </div>
                <div className="footer__copy">
                    <p>&copy; {new Date().getFullYear()} Eat IT</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;