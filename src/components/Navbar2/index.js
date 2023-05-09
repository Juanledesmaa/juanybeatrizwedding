import React from "react";
import Header2 from "../header2/header2";

export default function Navbar2(props) {
  const [scroll, setScroll] = React.useState(0);

  const handleScroll = () => setScroll(document.documentElement.scrollTop);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed-navbar">
        <Header2 Logo={props.Logo} topbarBlock={props.topbarBlock} hclass={props.hclass} />
    </div>
  ); 
}