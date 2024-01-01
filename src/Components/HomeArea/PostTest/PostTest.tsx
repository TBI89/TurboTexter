import "./PostTest.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import firstFeedbackImage from "../../../Assets/Images/first-feedback-image.jpg";
import secondFeedbackImage from "../../../Assets/Images/second-feedback-image.png";
import thirdFeedbackImage from "../../../Assets/Images/third-feedback-image.png";
import { useLocation } from "react-router-dom";
import notifyService from "../../../Services/NotifyService";

function PostTest(): JSX.Element {

    const location = useLocation();
    const { charsPerMin, wordsPerMin, accuracy } = location.state || {};

    if (typeof charsPerMin !== "number" || typeof wordsPerMin !== "number" || typeof accuracy !== "number") {
        notifyService.error("Error displaying your result \n Please try again.");
    }

    console.log("charsPerMin: ", charsPerMin);
    console.log("wordsPerMin: ", wordsPerMin);
    console.log("accuracy: ", accuracy);

    return (
        <div className="PostTest">
            <h2>Test Result</h2>
            <img src={thirdFeedbackImage} />
            <p>Personal Feedback</p>

            <div className="LinkContainer">
                <a href="*"><FacebookIcon fontSize="large" htmlColor="blue" /></a>
                <a href="*"><LinkedInIcon fontSize="large" htmlColor="#0A66C2" /></a>
                <a href="*"><WhatsAppIcon fontSize="large" htmlColor="lightGreen" /></a>
            </div>

            <br />
            <button className="btn">Try Again!</button>
        </div>
    );
}

export default PostTest;
