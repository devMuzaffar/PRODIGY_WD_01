import { useEffect, useState } from "react";

const Header = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleMenu = () => {
    setIsMenuOpened(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <nav class={`desktop-nav ${scrolled && "scroll"}`}>
        <ul class="links">
          <li>
            <a href="#about">About me</a>
            <div class="line"></div>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#company">Company</a>
          </li>
        </ul>

        <div class="buttons">
          <button class="filled">Sign Up</button>
          <button class="outlined">Login</button>
        </div>
      </nav>

      <nav class="mobile-nav">
        <div>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 22C11.3137 22 14 19.3137 14 16C14 12.6863 11.3137 10 8 10C4.68629 10 2 12.6863 2 16C2 19.3137 4.68629 22 8 22Z"
              fill="#CA4361"
            />
            <path
              d="M24 22C27.3137 22 30 19.3137 30 16C30 12.6863 27.3137 10 24 10C20.6863 10 18 12.6863 18 16C18 19.3137 20.6863 22 24 22Z"
              fill="#CA4361"
            />
          </svg>
        </div>

        {/* Menu Icon */}
        <div onClick={handleMenu}>
          <svg
            class="menu-icon visible"
            id="menuIcon"
            width="25"
            height="17"
            viewBox="0 0 25 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.38889 9.91668C2.15595 9.91668 2.77778 9.28241 2.77778 8.50001C2.77778 7.71761 2.15595 7.08334 1.38889 7.08334C0.621827 7.08334 0 7.71761 0 8.50001C0 9.28241 0.621827 9.91668 1.38889 9.91668Z"
              fill="black"
            />
            <path
              d="M23.6944 7.08334H6.8611C6.14006 7.08334 5.55554 7.67955 5.55554 8.41501V8.58501C5.55554 9.32047 6.14006 9.91668 6.8611 9.91668H23.6944C24.4155 9.91668 25 9.32047 25 8.58501V8.41501C25 7.67955 24.4155 7.08334 23.6944 7.08334Z"
              fill="black"
            />
            <path
              d="M23.6944 14.1667H1.30556C0.584517 14.1667 0 14.7629 0 15.4983V15.6683C0 16.4038 0.584517 17 1.30556 17H23.6944C24.4155 17 25 16.4038 25 15.6683V15.4983C25 14.7629 24.4155 14.1667 23.6944 14.1667Z"
              fill="black"
            />
            <path
              d="M23.6944 0H1.30556C0.584517 0 0 0.596207 0 1.33167V1.50167C0 2.23713 0.584517 2.83333 1.30556 2.83333H23.6944C24.4155 2.83333 25 2.23713 25 1.50167V1.33167C25 0.596207 24.4155 0 23.6944 0Z"
              fill="black"
            />
          </svg>
        </div>
      </nav>

      <div class={`menu ${isMenuOpened ? "visible" : "hidden"}`} id="menu">
        <div>
          <svg
            class="close-icon"
            id="closeIcon"
            width="20"
            height="20"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => {
              setIsMenuOpened(false);
            }}
          >
            <path
              d="M1 1L13.5938 13.5938M13.5938 1L1 13.5938L13.5938 1Z"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <div class="divider"></div>

        <div class="buttons">
          <button class="filled">Sign Up</button>
          <button class="outlined">Login</button>
        </div>

        <ul class="links">
          <li>
            <a href="#about">About me</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#company">Company</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
