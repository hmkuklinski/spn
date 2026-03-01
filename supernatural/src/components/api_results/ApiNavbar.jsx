import { apiPreviews } from "../data/apiInfo";

export default function ApiNavbar({ setActiveTab }) {
  const mainSections = ["API Overview", "Introduction", "Getting Started", "Output"]
  const handleNavClick = (key) => {
    setActiveTab(key);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <nav className="api-navbar open-sans-regular">
      <div className="api-seasons">
        <h3 className="api-section-title">About API</h3>
        {mainSections.map((item, index)=>(
            <div key={index} className="api-seasons-links" style={{ cursor: "pointer" }}
               onClick={() => handleNavClick("home")}>
            <div className="div-home sidebar"><h3>Home</h3></div>
            <h5>{item}</h5>
        </div>
        ))}
        <h3 className="api-section-title">Season Endpoints</h3>
        {apiPreviews.slice(0, 11).map((navlink, key) => (
          <div key={key} className="api-seasons-links" style={{ cursor: "pointer" }}
              onClick={() => handleNavClick(navlink.key)}>
            {navlink.methodType === "GET" && <div className="div-get sidebar"><h3>GET</h3></div>}
            {navlink.methodType === "POST" && <div className="div-post sidebar"><h3>POST</h3></div>}
            {navlink.methodType === "DELETE" && <div className="div-delete sidebar"><h3>DELETE</h3></div>}
            {navlink.methodType === "PUT" && <div className="div-put sidebar"><h3>PUT</h3></div>}
            <h5>{navlink.sideTitle}</h5>
          </div>
        ))}

        <h3 className="api-section-title">Episode Endpoints</h3>
        {apiPreviews.slice(11,19).map((navlink, key) => (
          <div key={key} className="api-seasons-links" style={{ cursor: "pointer" }}
              onClick={() => handleNavClick(navlink.key)}>
            {navlink.methodType === "GET" && <div className="div-get sidebar"><h3>GET</h3></div>}
            {navlink.methodType === "POST" && <div className="div-post sidebar"><h3>POST</h3></div>}
            {navlink.methodType === "DELETE" && <div className="div-delete sidebar"><h3>DELETE</h3></div>}
            {navlink.methodType === "PUT" && <div className="div-put sidebar"><h3>PUT</h3></div>}
            <h5>{navlink.sideTitle}</h5>
          </div>
        ))}
        <h3 className="api-section-title">Character Endpoints</h3>
        {apiPreviews.slice(19).map((navlink, key) => (
          <div key={key} className="api-seasons-links" style={{ cursor: "pointer" }}
              onClick={() => handleNavClick(navlink.key)}>
            {navlink.methodType === "GET" && <div className="div-get sidebar"><h3>GET</h3></div>}
            {navlink.methodType === "POST" && <div className="div-post sidebar"><h3>POST</h3></div>}
            {navlink.methodType === "DELETE" && <div className="div-delete sidebar"><h3>DELETE</h3></div>}
            {navlink.methodType === "PUT" && <div className="div-put sidebar"><h3>PUT</h3></div>}
            <h5>{navlink.sideTitle}</h5>
          </div>
        ))}
      </div>
    </nav>
  );
}
