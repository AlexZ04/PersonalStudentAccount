import STRINGS from "../../constants/strings";
import RotationProps from "../../entitites/RotationProps";
import "./style.css";

export function ErrorLine({ rotation }: RotationProps) {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const listItems = numbers.map((number) => (
        <span key={number}>{STRINGS.ERROR + ""}</span>
    ));

    return <div className={`error-line ${rotation}`}>{listItems}</div>;
}
