import { ChangeEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import StringProps from "../../entities/stringProps";

export function InputField({ string }: StringProps) {
    const [value, setValue] = useState("");

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    const { t } = useTranslation();

    return (
        <>
            <fieldset className="input-fieldset">
                <legend>{t(string)}</legend>
                <input
                    type={string === "password" ? "password" : "text"}
                    className="input-field"
                    value={value}
                    onChange={handleChange}
                />
            </fieldset>
        </>
    );
}
