const Footer = () => (
  <footer className="w-full py-4 sm:py-6 bg-neutral-900 text-neutral-200 text-center text-xs sm:text-sm mt-8 sm:mt-12">
    <div className="container mx-auto px-2 sm:px-4">
    <div>
      &copy; {new Date().getFullYear()} B Vaishnavi Varma &mdash; Contact: <a href="mailto:vaishnavivarma3938@gmail.com" className="underline hover:text-blue-400">vaishnavivarma3938@gmail.com</a>
    </div>
  </footer>
);

export default Footer;
