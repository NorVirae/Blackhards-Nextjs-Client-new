import useStickyMenu from "@/hook/useStickyMenu";

import MobileNavigation2 from "./MobileNavigation2";
import Link from "next/link";
import { links } from "@/data/links";
import { useAppSelector } from "@/redux/app/hooks";

export default function HeaderEarly() {
  const sticky = useStickyMenu(50);
  const user = useAppSelector(state => state.auth.user)
  return (
    <>
      <header
        className={`header-nav nav-homepage-style at-home18 stricky main-menu border-0 animated 
    ${sticky ? "slideInDown stricky-fixed" : "slideIn"}
    `}
      >
        <nav className="posr">
          <div className="container posr">
            <div className="row align-items-center justify-content-between">
              <div className="col-auto px-0 px-xl-3">
                <div className="d-flex align-items-center justify-content-between gap-4">
                  <div className="logos">
                    <Link className="header-logo logo1" href="/">
                      <img
                        src="/images/Blackhards-white-logo.svg"
                        alt="Header Logo"
                      />
                    </Link>
                    <Link className="header-logo logo2" href="/">
                      <img src="/images/Blackhards-white-logo-2.svg" alt="Header Logo" />
                    </Link>

                  </div>

                  <Link
                    className="login-info ml-6 d-flex align-items-center gap-2"
                    href={"/games"}
                  >
                    <i className="fas fa-store"></i>
                    Games
                  </Link>
                  {/* <div className="home1_style at-home18 mx20">
                    <Mega
                      staticMenuClass={
                        "text-white d-flex justify-content-center align-items-center"
                      }
                    />
                  </div> */}

                  {/* <Navigation /> */}
                </div>
              </div>
              <div className="col-auto pe-0 pe-xl-3">
                {user ? <div className="d-flex gap-2 justify-content-center align-items-center">
                  <Link className="btn" href="/user/library" >
                    <img
                      className="border rounded-circle"
                      style={{ width: "30px", height: "30px", objectFit: "cover" }}
                      src="/images/resource/user-50by50.png" alt="user.png" />
                  </Link>
                  <Link className="login-info d-flex gap-1 justify-content-center align-items-center"
                    data-bs-toggle="modal"
                    href="#logoutModalToggle">
                    <i className="fas fa-sign-out"></i>
                    <span className="d-none d-xl-inline-block">Logout</span>
                  </Link>
                </div> : <div className="d-flex align-items-center">

                  <Link
                    className="login-info mr15-xl mr10 ud-btn btn-dark add-joining bdrs12 dark-color bg-transparent"
                    href={links.login}
                  >
                    Sign in
                  </Link>
                  <Link
                    className="ud-btn btn-dark add-joining bdrs12 text-white"
                    href={links.register}
                  >
                    Join & Create Studio
                  </Link>
                </div>
                }
              </div>
            </div>
          </div>
        </nav>
      </header>
      <MobileNavigation2 />
    </>
  );
}
