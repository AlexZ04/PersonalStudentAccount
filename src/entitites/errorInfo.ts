import ERROR_TITLES from "../constants/errorTitles";
import ERROR_MESSAGES from "../constants/errorMessages";

const errorInfo = {
    pageNotFound: {
        title: ERROR_TITLES.NOT_FOUND,
        message: ERROR_MESSAGES.NOT_FOUND,
        code: 404,
    },
};

export default errorInfo;
