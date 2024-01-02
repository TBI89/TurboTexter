import "./PostTest.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import firstFeedbackImage from "../../../Assets/Images/first-feedback-image.jpg";
import secondFeedbackImage from "../../../Assets/Images/second-feedback-image.png";
import thirdFeedbackImage from "../../../Assets/Images/third-feedback-image.png";
import defaultImageFeedback from "../../../Assets/Images/default-feedback-image.png";
import { useLocation, useNavigate } from "react-router-dom";
import notifyService from "../../../Services/NotifyService";

function PostTest(): JSX.Element {

    const location = useLocation();
    const navigate = useNavigate();
    const { charsPerMin, wordsPerMin, accuracy } = location.state || {};
    const currentUrl = window.location.href;

    if (typeof charsPerMin !== "number" || typeof wordsPerMin !== "number" || typeof accuracy !== "number") {
        notifyService.error("Error displaying your result \n Please try again.");
    }

    let personalTitle: string;
    let personalImage: string;
    let personalFeedback: string;

    switch (true) {
        case (charsPerMin > 120 && accuracy > 85):
            personalTitle = "You Are The Flash!";
            personalImage = firstFeedbackImage;
            personalFeedback = `Zooming at the speed of light! You typed with the velocity of ${wordsPerMin} WPM (${charsPerMin} CPM) and achieved an accuracy of ${accuracy.toFixed(1)}%. Impressive, just like The Flash! ⚡`;
            break;

        case (charsPerMin < 120 && charsPerMin > 90 && accuracy < 85 && accuracy > 60):
            personalTitle = "You Are Spiderman!";
            personalImage = secondFeedbackImage;
            personalFeedback = `Swinging through your typing! At a moderate pace, you reached ${wordsPerMin} WPM (300 ${charsPerMin}) with an accuracy of ${accuracy.toFixed(1)}%. Keep up the agility, just like Spider-Man! 🕷️`;
            break;

        case (charsPerMin < 90 && accuracy < 60):
            personalTitle = "You Are The Hulk!";
            personalImage = thirdFeedbackImage;
            personalFeedback = `Channeling your inner Hulk – slow and powerful! You typed at ${wordsPerMin} WPM (${charsPerMin} CPM) with an accuracy of ${accuracy.toFixed(1)}%. Take your time to smash those keys! 💪🏽`;
            break;

        default:
            personalTitle = "You Are Batman!";
            personalImage = defaultImageFeedback;
            personalFeedback = `Silent, vigilant, and precise – just like Batman! Your typing skills are unique, and your accuracy (${accuracy.toFixed(1)}%) and speed (${wordsPerMin} WPM, ${charsPerMin} CPM) don't fit the typical profiles. Embrace your inner Dark Knight! 🦇`;
            break;
    }

    function shareOnFacebook() {
        const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
        window.open(facebookShareUrl, '_blank');
    }

    function shareOnLinkedIn() {
        const linkedInShareUrl = `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(currentUrl)}&title=${encodeURIComponent('Check out my typing skills!')}`;
        window.open(linkedInShareUrl, '_blank');
    }

    function shareOnWhatsApp() {
        const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(`Check out my typing skills!: ${currentUrl}`)}`;
        window.open(whatsappShareUrl, '_blank');
    }

    return (
        <div className="PostTest">
            <h2>{personalTitle}</h2>
            <img src={personalImage} />
            <p>{personalFeedback}</p>

            <div className="LinkContainer">
                <button onClick={shareOnFacebook}><FacebookIcon fontSize="large" htmlColor="blue" /></button>
                <button onClick={shareOnLinkedIn}><LinkedInIcon fontSize="large" htmlColor="#0A66C2" /></button>
                <button onClick={shareOnWhatsApp}><WhatsAppIcon fontSize="large" htmlColor="lightGreen" /></button>
            </div>

            <br />
            <button onClick={() => navigate("/home")} className="btn">Try Again!</button>
        </div>
    );
}

export default PostTest;
