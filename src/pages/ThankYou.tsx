import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-6">
      <div className="max-w-xl text-center">
        <h1 className="text-4xl font-bold mb-4">Thank you!</h1>
        <p className="text-lg text-muted-foreground mb-6">
          We received your submission. We'll be in touch shortly.
        </p>
        <div>
          <Link
            to="/"
            className="inline-block rounded-md bg-primary px-4 py-2 text-white hover:opacity-90"
          >
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
