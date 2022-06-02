import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import isMatchLocation from "../../hooks/isMatchLocation";
import mic_logo from '../../assets/logo-mic.png'

const Anchor = ({ menu, badge }) => {
  if (menu.externalLink) {
    return (
      <a href={menu.href}>
        {menu.label} {badge}
      </a>
    );
  }
  return (
    <Link to={menu.href}>
      {menu.label} {badge}
    </Link>
  );
};

const ChildLink = ({ menu }) => {
  return (
    <li className={menu.active ? "active" : ""}>
      <Anchor menu={menu} />
    </li>
  );
};

const ChildMenu = ({ child }) => {
  return (
    <ul className="menu-sub">
      {child.map((value, index) => (
        <ChildLink menu={value} key={index} />
      ))}
    </ul>
  );
};

const MenuItem = ({ menu }) => {
  const [toggleDropdown, setToggleDropdown] = useState(menu.active);
  const badge = menu.badge && (
    <span className={`badge bg-${menu.badge.colorTheme} label-right`}>
      {menu.badge.label}
    </span>
  );

  const toggleSidebar = () => {
    const sidebar = document.querySelector(".sidebar-wrapper");
    if (!sidebar) {
      return;
    }
    if (window.innerWidth < 768) {
      if (sidebar.style.display === "block") {
        sidebar.style.display = "none";
      }
    }
  };

  const dropdownClass = () => {
    let dropdownClass = "";
    if (toggleDropdown) {
      dropdownClass = "open";
    }
    if (menu.active) {
      dropdownClass += " active";
    }
    return dropdownClass;
  };

  useEffect(() => {
    if (menu.active) {
      setToggleDropdown(true);
    }
  }, [menu.active]);

  if (!menu.href && !menu.child) {
    return (
      <li className="menu-link menu-heading">
        <span>{menu.label}</span>
      </li>
    );
  }

  if (menu.child) {
    return (
      <li className={`menu-link dropdown ${dropdownClass()}`}>
        <button
          type="button"
          className="btn btn-anchor"
          onClick={() => setToggleDropdown(!toggleDropdown)}
        >
          {menu.label} {badge}{` `}
          {toggleDropdown ? `<` : `>`}
        </button>
        <ChildMenu child={menu.child} />
      </li>
    );
  }

  return (
    <li className={`menu-link ${menu.active ? "active" : ""}`}
      onClick={toggleSidebar}
    >
      <Anchor menu={menu} badge={badge} />
    </li>
  );
};

const Sidebar = ({ menuItems, autoActiveMenu }) => {
  const sidebarWrapper = useRef();
  const location = useLocation();
  const { pathname } = location;

  const setActiveMenu = (menu) => {
    menu.active = false;

    if (menu.child) {
      for (let index = 0; index < menu.child.length; index++) {
        const menuChild = menu.child[index];
        setActiveMenu(menuChild);
        if (menuChild.active) {
          menu.active = true;
        }
      }
    }

    if (menu.href && isMatchLocation(menu.href, pathname)) {
      menu.active = true;
    }
  };

  const menuList = () => {
    if (!autoActiveMenu) {
      return menuItems;
    }
    for (let index = 0; index < menuItems.length; index++) {
      const menu = menuItems[index];
      setActiveMenu(menu);
    }
    return menuItems;
  };

  return (
    <nav ref={sidebarWrapper} className={`sidebar-wrapper no-print`}>
      <div className="sidebar-logo">
        <img src={mic_logo} alt='' />
      </div>
      <ul className="sidebar-menu">
        {menuList().map((menu, index) => (
          <MenuItem menu={menu} key={index} />
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
