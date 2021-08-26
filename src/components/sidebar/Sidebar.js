import React, { useState, useEffect } from 'react';

import { MiddleSquare } from '../methods/middle-square/MiddleSquare';
import { MiddleProduct } from '../methods/middle-product/MiddleProduct';
import { LinealAlgorithm } from '../methods/lineal-algorithm/LinealAlgorithm';
import { MultiplicativeAlgorithm } from '../methods/multiplicative-algorithm/MultiplicativeAlgorithm';

import './sidebar.css';

export const Sidebar = () => {

    const [ currentPage, setCurrentPage ] = useState( "middle-square" );

    const handleClick = ({ target }) => {
        setCurrentPage( target.name.toString() );
        console.log( target.name );
        console.log( currentPage );
    };

    const pages = {
        "middle-square": <MiddleSquare />,
        "middle-product": <MiddleProduct />,
        "lineal-algorithm": <LinealAlgorithm />,
        "multiplicative-algorithm": <MultiplicativeAlgorithm />,
    };

    return (
        <>
            <div className="sidebar-container">
                <div className="sidebar-logo">
                    Algoritmos de Numeros Pseudo Aleatorios
                </div>
                <ul className="sidebar-navigation">
                    <li className="header"> No congruenciales </li>
                    <li>
                        <button name="middle-square" onClick={ handleClick }>
                            <i className="fa fa-home" aria-hidden="true"></i> Algoritmo de los cuadrados medios
                        </button>
                    </li>
                    <li>
                        <button name="middle-product" onClick={ handleClick }>
                            <i className="fa fa-tachometer" aria-hidden="true"></i> Algoritmo de los productos medios
                        </button>
                    </li>
                    <li className="header"> Congruenciales </li>
                    <li>
                        <button name="lineal-algorithm" onClick={ handleClick }>
                            <i className="fa fa-users" aria-hidden="true"></i> Algoritmo lineal
                        </button>
                    </li>
                    <li>
                        <button name="multiplicative-algorithm" onClick={ handleClick }>
                            <i className="fa fa-cog" aria-hidden="true"></i> Algoritmo Multiplicativo
                        </button>
                    </li>
                    <li className="header"> Marlene </li>
                    <li>
                        <button name="about" onClick={ handleClick }>
                            <i className="fa fa-info-circle" aria-hidden="true"></i> Acerca de Nosotros
                        </button>
                    </li>
                </ul>
            </div>
            <div className="content-container">
                <div className="container-fluid">
                    {
                        pages[ currentPage ]
                    }
                </div>
            </div>
        </>
    );
};
