import Switch from "react-switch";
import { useState } from "react";

export function SwitchBtn() {
    const [checked, setChecked] = useState(false);

    const handleChange = (nextChecked: boolean) => {
        setChecked(nextChecked);
    };

    return (
        <>
            <Switch
                className="switch"
                checked={checked}
                onChange={handleChange}
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
