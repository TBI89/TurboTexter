import "./PageNotFound.css";
import pageNotFound from "../../../Assets/Images/page-not-found-image.png";

function PageNotFound(): JSX.Element {
    return (
        <div className="PageNotFound">
            <img src={pageNotFound} />
        </div>
    );
}

export default PageNotFound;
