import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    /* Global Reset */
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
        background-color: var(--black-200);
    }

    /* Root Variables */
    :root {
        --black-200: #02000E;
        --black-100: #181D26;
        
        --gray-300: #67666E;
        --gray-200: #828282;
        --gray-100: #A3A5A8;

        --white-blue: #8C92AB;
        --white: #F7F7F8;

        --coralpink: #F96D69;
        --hotpink: #FE5493;
        
        /* Breakpoints */
        --breakpoint-sm: 576px;
        --breakpoint-md: 768px;
        --breakpoint-lg: 1024px;
    }

    /* Button Styles */
    button {
        width: 100%;
        height: 40px; 
        border: none;
        border-radius: 3px;
        background: linear-gradient(90deg, var(--coralpink) 0%, var(--hotpink) 100%);
        color: #ffffff; 
        font-weight: bold;
        cursor: pointer;

        &:hover {
            background: var(--gray-200);
        }

        &:focus {
            background: var(--gray-200);
        }
    }

    /* Media Queries for Responsive Design */
    @media (max-width: var(--breakpoint-sm)) {
        /* small screens */
        body {
            
        }
    }

    @media (max-width: var(--breakpoint-md)) {
        /* medium screens */
        body {
            
        }
    }

    @media (max-width: var(--breakpoint-lg)) {
        /* large screens */
        body {
            
        }
    }
`;

export default GlobalStyle;

