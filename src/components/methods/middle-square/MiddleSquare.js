import React from 'react';
import { useCounter } from '../../../hooks/useCounter';
import { useForm } from '../../../hooks/useForm';
import { getMiddleSquare } from '../../../helpers/methods/middleSquare';

export const MiddleSquare = () => {

    const [ { semilla, cantidad }, handleInputChange ] = useForm({
        semilla: "",
        cantidad: "",
    });

    const handleSubmit = ( event ) => {
        event.preventDefault();
        // getMiddleSquare(  );
    }

    return (
        <div className="d-flex justify-content-center">
            <div className="mt-5 jumbotron p-5 text-secondary d-inline-flex flex-column">
                <h3 className="font-weight-bold text-center display-5"> Cuadrados Medios </h3>
                <hr />
                <div className="">
                    <form onSubmit={ handleSubmit }>
                        <div className="form-group">
                            <label> Semilla </label>
                            <input
                                name="semilla"
                                type="text"
                                className="form-control"
                                placeholder="6345"
                                onChange={ handleInputChange }
                            />
                            <small className="form-text text-muted"> Debe introducir un numero mayor a 9 </small>
                        </div>
                        <div className="form-group">
                            <label> Cantidad </label>
                            <input
                                name="cantidad"
                                type="text"
                                className="form-control"
                                placeholder="5"
                                onChange={ handleInputChange }
                            />
                        </div>
                        <button type="submit" className="btn btn-success"> Generar </button>
                    </form>
                </div>
            </div>
        </div>
    );

};
