import "./globals.css";

export const metadata = {
  title: "14U Capital",
  icons: {
    icon: '/tabicon.png', 
  },
  description: "Turn Vision into Velocity",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-black text-white selection:bg-pink-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}