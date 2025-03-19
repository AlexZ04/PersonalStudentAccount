import Switch from "react-switch";
import { useState } from "react";
import SwitchProps from "../entities/SwitchProps";

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
