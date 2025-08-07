import { useState, type ReactElement, type ReactEventHandler } from "react";
import { PiEyeClosedBold } from "react-icons/pi";
import { PiEyeBold } from "react-icons/pi";

interface passwordProps {
    inputType: string,
    clearable: boolean,
    labelValue: string
}

const PasswordCo: React.FC<passwordProps> = ({inputType = "text", clearable, labelValue, ...props}) => {
    const [show, setShow] = useState(false);
    const [value, setValue] = useState("");

    const type = inputType === "password" && !show ? "password" : "text";
    const handleNewValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value
        if(inputType === "number"){
            if (/^-?\d*\.?\d*$/.test(newValue) || newValue === "") {
        setValue(newValue);
      }
      return;
        }

        setValue(newValue)
    }

    return <div>
        <label htmlFor={labelValue}>{labelValue}</label>
        <input id={labelValue} type={type} value={value} onChange={handleNewValue} />
        {inputType === "password" && <div onClick={() => setShow(!show)}>{show ? <PiEyeBold />: <PiEyeClosedBold />}</div>}
        {clearable && <button onClick={() => setValue("")}>X</button> }
        

    </div>
}

export default PasswordCo;