import { useTranslation } from "react-i18next";
import InputFieldProps from "../../entities/InputFieldProps";

export function InputField({ name, value, onChange }: InputFieldProps) {
    const { t } = useTranslation();

    return (
        <>
            <fieldset className="input-fieldset">
                <legend>{t(name)}</legend>
                <input
                    type={name === "password" ? "password" : "text"}
                    className="input-field"
                    value={value}
                    onChange={(e) => onChange(name, e.target.value)}
                />
            </fieldset>
        </>
    );
}
