import "./PageNotFound.css";
import pageNotFound from "../../../Assets/Images/page-not-found-image.png";
import useTitle from "../../../Utils/UseTitle";

function PageNotFound(): JSX.Element {

    useTitle("TurboTexter | 404");

    return (
        <div className="PageNotFound">
            <img src={pageNotFound} />
        </div>
    );
}

export default PageNotFound;
