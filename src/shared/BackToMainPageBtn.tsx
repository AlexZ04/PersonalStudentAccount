import STRINGS from "../constants/strings.ts";

export function BackToMainPageBtn() {
    return (
        <button
            className="blue btn"
            onClick={() => (window.location.href = "/")}
        >
            {STRINGS.BACK_TO_MAIN_PAGE}
        </button>
    );
}
