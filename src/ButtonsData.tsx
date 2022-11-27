interface IButton {
    name: string,
    primary?: boolean
}
const Buttons: IButton[] = [
    { name: "AC" },
    { name: "DEL" },
    { name: "%", primary: true },
    { name: "/", primary: true },
    { name: "7" },
    { name: "8" },
    { name: "9" },
    { name: "*", primary: true },
    { name: "4" },
    { name: "5" },
    { name: "6" },
    { name: "-", primary: true },
    { name: "1" },
    { name: "2" },
    { name: "3" },
    { name: "+", primary: true },
    { name: "0" },
    { name: "00" },
    { name: ".", primary: true },
    { name: "=", primary: true },
]
export default Buttons;