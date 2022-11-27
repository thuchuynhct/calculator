import { useState } from 'react'
import Buttons from '../../ButtonsData';
import "./Calculator.scss"

function Calculator() {
    const [calc, setCalc] = useState<string>("");

    function isValidButton(char: string): boolean {
        const lastChar = calc[calc.length - 1];

        const currentIs00 = (char === "00");
        const currentIsButton = Buttons.some(s => s.name === char && s.primary);
        const lastIsButton = Buttons.some(s => s.name === lastChar && s.primary);

        return (currentIsButton || currentIs00) && (calc.length === 0 || lastIsButton);
    }

    const clickHandler = function (e: any) {
        const value = e.target.value;
        const isValid = isValidButton(value);

        if (isValid) return;

        switch (value) {
            case "AC":
                setCalc("");
                break;

            case "DEL":
                setCalc(calc.slice(0, -1));
                break;

            case "=":
                setCalc(() => eval(calc).toString());
                break;
                
            default:
                setCalc(calc + value);
                break;
        }
    }

    const buttons = Buttons.map((item, index) => {
        return <input key={index} onClick={clickHandler} type="button" value={item.name} />
    })
    return (
        <div className='container'>
            <form action="#" name="forms">
                <input type="text" defaultValue={calc} />
                <div className='buttons'>
                    {buttons}
                </div>
            </form>
        </div>
    )
}

export default Calculator
