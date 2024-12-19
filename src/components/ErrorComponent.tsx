import React from "react";
import { ErrorComponentProps } from "../constants/typeIndex";

const ErrorComponent = (props: ErrorComponentProps) => {
    return (
        <div className="error-block">
            {`Error: ` + props.message}
        </div>
    )
}

export default ErrorComponent