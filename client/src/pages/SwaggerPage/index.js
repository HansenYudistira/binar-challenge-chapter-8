import React from "react";
import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"

import swaggerJson from './openapi.json'

function SwaggerPage() {
    return (
        <div>
            <SwaggerUI 
            spec={swaggerJson}
            />
        </div>
    )
}

export default SwaggerPage;