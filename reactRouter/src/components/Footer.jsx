import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-y border-gray-200 bg-white">
      <div className="mx-auto w-full max-w-7xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center" aria-label="Go to homepage">
              <img
                src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                className="mr-3 h-16 w-auto"
                alt="Logo"
              />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900">
                Resources
              </h2>
              <ul className="font-medium text-gray-500">
                <li className="mb-4">
                  <Link to="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:underline">
                    About
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900">
                Follow us
              </h2>
              <ul className="font-medium text-gray-500">
                <li>
                  <a
                    href="https://github.com/yashgarg05"
                    className="hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900">
                Legal
              </h2>
              <ul className="font-medium text-gray-500">
                <li className="mb-4">
                  <span>Privacy Policy</span>
                </li>
                <li>
                  <span>Terms &amp; Conditions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />

        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center">
            © {currentYear}{" "}
            <a
              href="https://hiteshchoudhary.com/"
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              hiteshchoudhary
            </a>
            . All Rights Reserved.
          </span>

          <a
            href="https://github.com/yashgarg05"
            className="mt-4 inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 sm:mt-0"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit GitHub profile"
          >
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 .5a11.5 11.5 0 0 0-3.636 22.41c.575.106.786-.25.786-.554v-2.03c-3.2.696-3.877-1.356-3.877-1.356-.523-1.33-1.277-1.684-1.277-1.684-1.044-.714.08-.7.08-.7 1.154.082 1.761 1.185 1.761 1.185 1.026 1.758 2.69 1.25 3.346.956.104-.744.402-1.252.73-1.54-2.555-.29-5.242-1.278-5.242-5.69 0-1.257.45-2.284 1.185-3.09-.119-.291-.514-1.462.112-3.048 0 0 .967-.31 3.168 1.18a11 11 0 0 1 5.764 0c2.2-1.49 3.166-1.18 3.166-1.18.627 1.586.232 2.757.114 3.048.738.806 1.183 1.833 1.183 3.09 0 4.423-2.69 5.396-5.253 5.68.413.356.78 1.056.78 2.13v3.149c0 .306.208.664.792.552A11.5 11.5 0 0 0 12 .5Z"
              />
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
