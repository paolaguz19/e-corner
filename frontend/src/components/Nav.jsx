import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom'; //Importacion de NavLink
import { initTWE, Collapse, Ripple } from 'tw-elements'; // Importacion de tw-elements
import Avatar from './Avatar'; // Link de Avatar
import Search from './Search'; // Link de Search
import ecorner from '../assets/ecorner.png'; // Link del logo

function Nav() {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    const response = await getUsers(); // función getUsers en api/Users.js
    setUsers(response.data);
  };

  useEffect(() => {
    loadUsers();
    initTWE({ Collapse, Ripple });
  }, []);

  return (
    <header>
      <nav className="relative flex w-full items-center justify-between bg-indigo-500 py-2 shadow-dark-mild dark:bg-body-dark lg:flex-wrap lg:justify-start lg:py-4 mx-0 px-0" data-twe-navbar-ref>
        <div className="flex w-full flex-wrap items-center justify-between px-3 mx-0">
          <div className="flex items-center">
            <button className="border-0 bg-transparent px-2 text-xl leading-none transition-shadow duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:hidden"
              type="button" data-twe-collapse-init data-twe-target="#navbarSupportedContentX" aria-controls="navbarSupportedContentX"
              aria-expanded="false" aria-label="Toggle navigation">
              <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:stroke-black/50 dark:[&>svg]:stroke-neutral-200">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </span>
            </button>
          </div>

          <div className="relative overflow-hidden bg-cover bg-no-repeat size-20">
            <img className="rounded" src={ecorner} alt="e-corner" />
          </div>

          <div className="!visible hidden grow basis-[100%] items-center text-center lg:!flex lg:basis-auto lg:text-left" id="navbarSupportedContentX" data-twe-collapse-item>
            <ul className="me-auto flex flex-col lg:flex-row" data-twe-navbar-nav-ref>
              <li className="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
                <NavLink to="/" className="block text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2">
                  Inicio
                </NavLink>
              </li>
              <li className="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
                <NavLink to="/publicaciones" className="block text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2">
                  Publicar
                </NavLink>
              </li>
              <li className="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
                <NavLink to="/comprar" className="block text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2">
                  Comprar
                </NavLink>
              </li>
              <li className="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
                <NavLink to="/registrar" className="block text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2">
                  Crear cuenta
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="flex flex-row-reverse">
            <Avatar />
            <Search />
          </div>
        </div>
      </nav>
      
      <div
                class="relative h-[350px] overflow-hidden bg-[url('/Users/paolaguzman/Documents/Paola/PROGRAMACION/ecornerweb/frontend/econerweb/src/assets/Head.jpeg')] bg-cover bg-[50%] bg-no-repeat">
                <div
                    class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black/60 bg-fixed">
                    <div class="flex h-full items-center justify-center">
                        <div class="px-6 text-center text-white md:px-12">
                            <h1 class="mb-6 text-5xl font-bold">e-corner</h1>
                            <h3 class="mb-8 text-3xl font-bold">Tu compra online de confianza!!! </h3>
                            <button
                                type="button"
                                class="inline-block rounded border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-300 hover:text-neutral-200 focus:border-neutral-300 focus:text-neutral-200 focus:outline-none focus:ring-0 active:border-neutral-300 active:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600"
                                data-twe-ripple-init
                                data-twe-ripple-color="light">
                                Habla con un asesor
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    </header>
  );
}

export default Nav;
