import Switch from "react-switch";
import SwitchProps from "../props/SwitchProps";

export function SwitchBtn({ checked, onChange }: SwitchProps) {
    return (
        <>
            <Switch
                className="switch"
                checked={checked}
                onChange={onChange}
                uncheckedIcon={false}
                checkedIcon={false}
                onColor="#375fff"
                height={23}
                width={45}
                handleDiameter={18}
            />
        </>
    );
}
