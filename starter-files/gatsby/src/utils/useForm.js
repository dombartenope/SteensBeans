import { useState } from 'react';

const useForm = (defaults) => {
    const [values, setValues] = useState(defaults);

    const updateValue = e => {
        //If number, convert it
    let {value} = e.target;
        if(e.target.type === Number) {
            value = parseInt(e.target.value);
        }
        setValues({
            ...values,
            [e.target.name] : value,
        })
    };

    return { values, updateValue };
};

export default useForm;
