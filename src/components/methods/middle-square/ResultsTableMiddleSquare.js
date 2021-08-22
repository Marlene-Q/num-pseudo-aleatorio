import React, { useEffect } from 'react';

export const ResultsTableMiddleSquare = ({ resultsTable }) => {

    useEffect( () => {
        console.log( resultsTable );
    }, [ resultsTable ]);

    return (
        <>
            <div className="d-flex justify-content-center">
                <div className="mt-5 p-5 d-inline-flex flex-column">
                    <table className="table table-bordered">
                        <thead className="bg-success">
                            <tr>
                                <th scope="col"> i </th>
                                <th scope="col"> Yi </th>
                                <th scope="col"> Operaciones </th>
                                <th scope="col"> Xi </th>
                                <th scope="col"> ri </th>
                            </tr>
                        </thead>
                    <tbody>
                            {
                                resultsTable.map( row => (
                                    <tr class="table-success text-center">
                                        <th scope="row">{ row.i }</th>
                                        <td>{ row.yi }</td>
                                            <td><p className="text-primary d-inline">{ row.operaciones.left }</p><p className="text-danger d-inline">{ row.operaciones.center }</p><p className="text-primary d-inline">{ row.operaciones.right }</p></td>
                                        <td>{ row.xi }</td>
                                        <td>{ row.ri }</td>
                                    </tr>
                                ))
                            }
                           
                        </tbody>
                        
                    </table>
                </div>
            </div>
        </>
    );
};
