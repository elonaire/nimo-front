import React from 'react';
import MaterialTable from 'material-table';
import { tableIcons } from './MatTableIcons';

export default function MatTable(props) {
    console.log('props', props);
    
    const [state, setState] = React.useState({
        columns: props.columns,
        data: props.data,
    });

    return (
        <MaterialTable
            // style={
            //     {
            //         backgroundColor: '#323741',
            //         color: 'white',
            //     }
            // }
            icons={tableIcons}
            title={props.title}
            columns={state.columns}
            data={state.data}
            editable={{
                // onRowAdd: newData =>
                //     new Promise(resolve => {
                //         setTimeout(() => {
                //             resolve();
                //             setState(prevState => {
                //                 const data = [...prevState.data];
                //                 data.push(newData);
                //                 return { ...prevState, data };
                //             });
                //         }, 600);
                //     })
                onRowAdd: undefined,
                onRowUpdate: (newData, oldData) =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            if (oldData) {
                                setState(prevState => {
                                    const data = [...prevState.data];
                                    data[data.indexOf(oldData)] = newData;
                                    return { ...prevState, data };
                                });
                            }
                        }, 600);
                    }),
                onRowDelete: oldData =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            setState(prevState => {
                                const data = [...prevState.data];
                                data.splice(data.indexOf(oldData), 1);
                                return { ...prevState, data };
                            });
                        }, 600);
                    }),
            }}
        />
    );
}
