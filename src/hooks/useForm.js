import {useState} from "react";

const useForm = (defaultValues) => {
    const [values, setValues] = useState(defaultValues);
    const handleChange = (evt) => {
        const {value, name} = evt.target;
        setValues({...values, [name]:value});
    };

    return {values, handleChange, setValues};
}