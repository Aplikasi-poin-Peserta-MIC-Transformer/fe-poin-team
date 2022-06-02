import React from 'react'

const Navbar = () => {
  const toggleSidebar = () => {
    const sidebar = document.querySelector(".sidebar-wrapper");
    if (!sidebar) {
      return;
    }
    if (sidebar.style.display === "none") {
      sidebar.style.display = "block";
    } else {
      sidebar.style.display = "none";
    }
  };

  React.useEffect(() => {
  if (window !== 'undefined') {
    if (window.innerWidth < 768) {
      document.querySelector(".sidebar-wrapper").style.display = "none";
    }
    }
  }, [])
  return (
    <header className="navbar navbar-expand-lg no-print">
      <div className="navbar-block-content">
        <button
          type="button"
          className="btn btn-anchor text-light burger-menu"
          onClick={toggleSidebar}
        ><svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" /></svg>
        </button>
      </div>
    </header>
  )
}

export default Navbar