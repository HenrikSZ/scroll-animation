/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    files: ["./src/**/*.{html,js,pug}"],
    extract: {
      pug: (content) => {
        let matches = content.match(/[^<>"'`\s]*/g);
        matches = matches.map(match => {
          if (match.startsWith("scroll:") || match.startsWith("-scroll:")) {
            return match.substring(match.indexOf(":") + 1);
          } else {
            return match;
          }
        });

        return matches;
      },
    }
  },
  theme: {},
  plugins: [],
}
    