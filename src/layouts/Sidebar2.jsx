import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { IoIosArrowBack } from "react-icons/io";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { MdMenu } from "react-icons/md";
import {
  IoSettingsOutline,
  IoLogOutOutline,
  IoDocumentTextOutline,
} from "react-icons/io5";

import { BsCalendar2Date } from "react-icons/bs";
import { GrDocumentConfig } from "react-icons/gr";
import UserSubMenu from "./Submenu";
import { useAuth } from "../context/AuthProvider";
import { LuHome } from "react-icons/lu";
const Sidebar = () => {
  let isTabletMid = useMediaQuery({ query: "(max-width: 768px)" });
  const [isOpen, setIsOpen] = useState(true);
  const sidebarRef = useRef();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { user, isSuperAdmin, logOut } = useAuth();

  useEffect(() => {
    isTabletMid && setIsOpen(false);
  }, [pathname]);

  const sidebar_animation = isTabletMid
    ? {
        open: {
          x: 0,
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          x: -250,
          width: 0,
          transition: {
            damping: 40,
            delay: 0.15,
          },
        },
      }
    : {
        open: {
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          width: 0,
          transition: {
            damping: 40,
          },
        },
      };

  const settingLinks = {
    name: "settings",
    icon: IoSettingsOutline,
    menus: ["profile", "company"],
  };

  const configurations = [
    {
      name: "config",
      icon: GrDocumentConfig,
      menus: ["fiscal year", "file types", "branch"],
    },
  ];

  return (
    <>
      <motion.div
        ref={sidebarRef}
        variants={sidebar_animation}
        initial={{ x: isTabletMid ? -250 : 0 }}
        animate={isOpen ? "open" : "closed"}
        className={`md:block hidden  bg-white text-gray-700 flex-none shadow-xl   w-[16rem] max-w-[16rem] h-[90vh] overflow-hidden md:relative fixed`}
      >
        <div className="text-center p-5 ">
          <span className="font-bold text-2xl text-primary">DMS</span>
        </div>
        {/* menus */}

        <div className="flex flex-col h-full ">
          <ul className="whitespace-pre ps-2.5 text-[0.9rem] pb-3 flex flex-col gap-1 font-medium overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100 h-[80%] md:max-h-[78%] ">
            {/* <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? " link active " : "link"
                }
                to={"/"}
              >
                <LuHome size={23} className="min-w-max" />
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active link " : "link"
                }
                to={"/data-entry"}
              >
                <IoDocumentTextOutline size={23} className="min-w-max" />
                Data Entry
              </NavLink>
            </li> */}

            {(isOpen || isTabletMid) && (
              <div className=" my-3 border-secondary">
                <small className="pl-3  inline-block mb-2">Settings</small>
                <ul>
                  {settingLinks.menus?.map((menu, i) => (
                    <li key={i} className="pl-8">
                      <NavLink
                        to={`/dashboard/settings/${menu
                          .split(` `)
                          .join(`-`)
                          .toLowerCase()}`}
                        className={({ isActive }) =>
                          isActive
                            ? "link  active  capitalize "
                            : "link  !bg-transparent capitalize"
                        }
                      >
                        {menu}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {(isOpen || isTabletMid) && isSuperAdmin && (
              <div className="border-t my-3 border-secondary">
                <small className="pl-3  inline-block mb-2">
                  Configurations
                </small>
                <div>
                  {configurations.map((menu) => (
                    <div key={menu.name} className="flex flex-col gap-1">
                      {" "}
                      <UserSubMenu data={menu} />
                    </div>
                  ))}
                </div>
              </div>
            )}

            <li className="border-t border-secondary">
              <div className="  link" onClick={logOut}>
                <IoLogOutOutline size={23} className="min-w-max" />
                Log Out
              </div>
            </li>
          </ul>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
