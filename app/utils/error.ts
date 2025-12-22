/**
 * Formats a single error message string
 */
const formatErrorMessage = (message: string) => {
    return message.charAt(0).toUpperCase() + message.slice(1).toLowerCase();
};

/**
 * Extracts and formats error message from API response object
 * Used in server actions
 */
export const getErrorMessage = (response: any) => {
    if (response.message) {
        if (Array.isArray(response.message)) {
            return formatErrorMessage(response.message[0]);
        }
        return formatErrorMessage(response.message);
    }
    return "Unknown error occurred.";
};

/**
 * Formats error message for display in UI components
 * Handles error objects with message, statusCode, and error properties
 */
export const formatErrorForDisplay = (error: any): string => {
    if (!error) return "";

    if (error.message) {
        if (Array.isArray(error.message)) {
            return error.message.join(", ");
        }
        return error.message;
    }

    if (error.error && error.statusCode) {
        return `${error.statusCode} ${error.error}`;
    }

    return "An error occurred. Please try again.";
};