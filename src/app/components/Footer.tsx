import { MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-8 px-6 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6 text-center">
        
        {/* Location */}
        <p className="flex items-center gap-2 text-blue-900 text-lg font-semibold">
          <MapPin className="w-5 h-5 text-blue-900" />
          Phoenix, AZ
        </p>

        {/* Call to Action */}
        <a
          href="tel:+16316171415"
          className="flex items-center gap-2 bg-blue-900 text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-blue-950 transition transform hover:scale-105"
        >
          <Phone className="w-5 h-5 text-white" />
          Call Now: (631) 617-1415
        </a>

        {/* Social Links */}
        <div className="flex gap-6 mt-2">
          <a
            href="https://www.facebook.com/mjrsquaredllc"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Facebook Page"
            className="transition transform hover:scale-110"
          >
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7 fill-blue-600 hover:fill-blue-900"
            >
              <title>Facebook</title>
              <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"/>
            </svg>
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-blue-900 font-medium mt-4">
          © {new Date().getFullYear()} MJR² Handyman Services. All Rights Reserved.
        </p>

        {/* Site Credit */}
        <p className="text-xs text-gray-500">
          Website by{" "}
          <a
            href="https://middlepathdigital.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-blue-900 transition"
          >
            Middle Path Digital
          </a>
        </p>
      </div>
    </footer>
  );
}