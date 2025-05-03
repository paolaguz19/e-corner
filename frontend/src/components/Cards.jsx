
import categories from "../assets/categories.png"
import compras from "../assets/compras.png"
import ventas from "../assets/ventas.png"
import envios from "../assets/envios.png"
import ofertas_del_dia from "../assets/ofertas_del_dia.png"
import Historial from "../assets/Historial.png"
import { NavLink } from "react-router-dom"

function Cards() {

    return (
        <>
            <div className="bg-indigo-500 p-8 grid grid-cols-6 gap-4">
                <div
                    className="block max-w-[18rem] rounded-lg bg-indigo-200 text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-blue-800">
                    <div className="p-6">
                        <h2 className="text-base">
                            Categorias
                        </h2>
                    </div>
                    <div className="relative overflow-hidden bg-cover bg-no-repeat">
                        <img
                            className="rounded-b-lg"
                            src={categories}
                            alt=""/>
                    </div>
                    
                </div>
                <div
                    className="block max-w-[18rem] rounded-lg text-center bg-indigo-200 text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-blue-800">
                    <div className="p-6">
                        <h2 className="text-base">
                            Comprar
                        </h2>
                    </div>
                    <div className="relative overflow-hidden bg-cover bg-no-repeat">
                        <img
                            className="rounded-b-lg"
                            src={compras}
                            alt="" />
                    </div>
                    
                </div>
                <div>
                    <NavLink
                        to="/crear-publicacion"
                        className="block max-w-[18rem] rounded-lg text-center bg-indigo-200 text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-blue-800">
                        <div className="p-6">
                            <h2 className="text-base">
                                Vender
                            </h2>
                        </div>
                        
                        <div className="relative overflow-hidden bg-cover bg-no-repeat">
                            <img
                                className="rounded-b-lg"
                                src={ventas}
                                alt="" />
                        </div>
                    </NavLink>
                </div>
                <div
                    className="block max-w-[18rem] rounded-lg text-center  bg-indigo-200 text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-blue-800">
                   <div className="p-6">
                        <h2 className="text-base">
                            Enviar
                        </h2>
                    </div>
                   
                    <div className="relative overflow-hidden bg-cover bg-no-repeat">
                        <img
                            className="rounded-b-lg"
                            src={envios}
                            alt="" />
                    </div>
                    
                </div>
                <div
                    className="block max-w-[18rem] rounded-lg  bg-indigo-200 text-center text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-blue-800">
                    <div className="p-6">
                        <h2 className="text-base">
                            Ofertas del día
                        </h2>
                    </div>
                    <div className="relative overflow-hidden bg-cover bg-no-repeat">
                        <img
                            className="rounded-b-lg"
                            src={ofertas_del_dia}
                            alt="" />
                    </div>
                   
                </div>
                <div
                    className="block max-w-[18rem] rounded-lg  bg-indigo-200 text-center text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-blue-800">
                    <div className="p-6">
                        <h2 className="text-base">
                            Historial
                        </h2>
                    </div>
                    
                    <div className="relative overflow-hidden bg-cover bg-no-repeat">
                        <img
                            className="rounded-b-lg"
                            src={Historial}
                            alt="" />
                    </div>
                    
                </div>

            </div>
        </>

    )
}

export default Cards