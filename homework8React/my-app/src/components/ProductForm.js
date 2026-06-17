import { useState, useContext } from "react";
import { ProductContext } from "../context/ProductContext";


const ProductForm = () =>{
    const {addProduct} = useContext(ProductContext)
    const [isFormValid, setIsFormValid] = useState(false)
    const [formControls, setFormControls] = useState({
        name: {
            value: '',
            type: 'text',
            label: 'Name',
            errorMessage: 'Must be at least 7 character',
            valid: false,
            touched: false,
            validation: {
                required: true,
                minLength: 7
            }
        },
        brand: {
            value: '',
            type : 'text',
            label: 'Brand',
            errorMessage: 'Must be at least 5 characters',
            valid: false,
            touched: false,
            validation: {
                required: true,
                minLength: 5
            }
        },
        type: {
            value: '',
            type: 'text',
            label: 'Type',
            errorMessage: 'Must be at least 6 characters',
            valid: false,
            touched: false,
            validation: {
                required: true,
                minLength: 6
            }
        },
        price: {
            value: '',
            type: 'text',
            label: 'Price',
            errorMessage: 'Price must be a number > 0',
            valid: false,
            touched: false,
            validation:{
                required: true,
                number: true
            }
        },
        description:{
            value: '',
            type: 'text',
            label: 'Description',
            valid: true
        }

    })

    const validateControl = (value, validation) =>{
        if(!validation){
            return true
        }

        let isValid = true;

        if(validation.required){
            isValid = value.toString().trim() !== '' && isValid;
        }

        if(validation.minLength){
            isValid = value.length >= validation.minLength && isValid
        }
           if (validation.number) {
            isValid = !isNaN(value) && Number(value) > 0 && isValid;
    }

        return isValid;
    }

const onChangeHandler = (e, controlName) => {
    const updatedFormControls = { ...formControls };
    const control = { ...updatedFormControls[controlName] };

    control.value = e.target.value;
    control.valid = validateControl(control.value, control.validation);
    control.touched = true;

    updatedFormControls[controlName] = control;

    let isFormValid = true;

    Object.keys(updatedFormControls).forEach(name => {
        isFormValid = updatedFormControls[name].valid && isFormValid;
    });

    setFormControls(updatedFormControls);
    setIsFormValid(isFormValid);
};

    const submitHandler =(e) =>{
        const resetFormControls = { ...formControls };

        e.preventDefault()

        if(!isFormValid) return;

      const data = {
      name: formControls.name.value,
      brand: formControls.brand.value,
      type: formControls.type.value,
      price: formControls.price.value,
      description: formControls.description.value,
    };

    addProduct(
      data.name,
      data.brand,
      data.type,
      data.price,
      data.description
    );


Object.keys(resetFormControls).forEach(key => {
    resetFormControls[key] = {
        ...resetFormControls[key],
        value: '',
        valid: key === 'description' ? true : false,
        touched: false
    };
});

setFormControls(resetFormControls);
setIsFormValid(false);

    }
     return (
    <form onSubmit={submitHandler}>
      {Object.keys(formControls).map((key, index) => {
        const control = formControls[key];

        return (
          <div key={index} className="input-field">
            <input
              type={control.type}
              value={control.value}
              onChange={(e) => onChangeHandler(e, key)}
              placeholder={control.label}
            />

            <label className="active">{control.label}</label>

            {control.touched && !control.valid && (
              <span style={{ color: "red", fontSize: "12px" }}>
                {control.errorMessage}
              </span>
            )}
          </div>
        );
      })}

      <button className="btn" type="submit" disabled={!isFormValid}>
        Add Product
      </button>
    </form>
  );

}
export default ProductForm











