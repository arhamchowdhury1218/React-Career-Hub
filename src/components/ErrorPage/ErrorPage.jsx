import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h4>404 - Page Not Found</h4>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/">Go back to Home</Link>
    </div>
  );
};

export default ErrorPage;
