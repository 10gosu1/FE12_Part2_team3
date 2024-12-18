import { createGlobalStyle } from 'styled-components';
import bg from './../assets/header/bg.png';

const GlobalStyle = createGlobalStyle`

/* Root Variables */
:root {
        --black-200: #02000e;
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
        --breakpoint-lg: 1200px;
    }
    /* Global Reset */
    html {}

    body {
        margin: 0;
        padding: 0;
        font-size: 16px;
        background: #fff;
        color: var(--white);
        background: url(${bg}) no-repeat 0% 0%;
        background-color: var(--black-200);
        padding-top: 80px;
    }

    body {
        font-family: Pretendard Variable,Pretendard,-apple-system,BlinkMacSystemFont,system-ui,Roboto,Helvetica Neue,Segoe UI,Apple SD Gothic Neo,Noto Sans KR,Malgun Gothic,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,sans-serif
    }

    html,h1,h2,h3,h4,h5,h6,form,fieldset,img {
        margin: 0;
        padding: 0;
        border: 0;
        font-weight: 400
    }

    h1,h2,h3,h4,h5,h6 {
        font-size: 16px;
        font-family: Pretendard Variable,Pretendard,-apple-system,BlinkMacSystemFont,system-ui,Roboto,Helvetica Neue,Segoe UI,Apple SD Gothic Neo,Noto Sans KR,Malgun Gothic,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,sans-serif
    }

    article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section {
        display: block
    }

    ul,dl,dt,dd {
        margin: 0;
        padding: 0;
        list-style: none
    }

    legend {
        position: absolute;
        margin: 0;
        padding: 0;
        font-size: 0;
        line-height: 0;
        text-indent: -9999em;
        overflow: hidden
    }

    label,input,button,select,img {
        vertical-align: middle;
        font-size: 16px;
    }

    input,button {
        margin: 0;
        padding: 0;
        font-family: Pretendard Variable,Pretendard,-apple-system,BlinkMacSystemFont,system-ui,Roboto,Helvetica Neue,Segoe UI,Apple SD Gothic Neo,Noto Sans KR,Malgun Gothic,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,sans-serif;
        font-size: 16px;
    }

    input[type=submit],button {
        cursor: pointer
    }

    textarea,select {
        font-family: Pretendard Variable,Pretendard,-apple-system,BlinkMacSystemFont,system-ui,Roboto,Helvetica Neue,Segoe UI,Apple SD Gothic Neo,Noto Sans KR,Malgun Gothic,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,sans-serif;
        font-size: 16px;
    }

    select {
        margin: 0
    }

    p {
        margin: 0;
        padding: 0;
        word-break: break-all
    }

    hr {
        display: none
    }

    pre {
        overflow-x: scroll;
        font-size: 1.6rem
    }

    a {
        color: var(--white);
        text-decoration: none
    }

    *,:after,:before {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box
    }

    input[type=text],input[type=password],textarea {
        outline: none
    }

    input[type=text]:focus,input[type=password]:focus,textarea:focus,select:focus {
        box-shadow: none
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
        transition: all 0.2s;
    }

    /* 버튼 */
    .btn {
        display: flex;
        align-items: center;
        justify-content: center;
        background: inherit; 
        border:none; 
        box-shadow:none; 
        border-radius:0; 
        padding:0; 
        overflow:visible; 
        cursor:pointer;
    }
    .btn {
        width: 100%;
        height: 42px;
        border-radius: 3px;
        background: linear-gradient(90deg, var(--coralpink) 0%, var(--hotpink) 100%);
        color: #ffffff;
        font-size: 14px;
        font-weight: 700;
        transition: all 0.2s;
    }
    /* 버튼 오버 스타일 */
    .btn:hover {
        opacity: 0.8;
    }
    /* 버튼 라인 스타일 */
    .btn.line {
        border: 1px solid rgba(241, 238, 249, 0.80);
        background: rgba(255, 255, 255, 0.10);;
    }
    /* 버튼 큰 스타일 */
    .btn.lg {
        height: 48px;
    }
    /* 버튼 둥근 스타일 */
    .btn.radius {
        border-radius: 999px;
    }
    /* 버튼 비활성화 스타일 */
    .btn:disabled {
        background: var(--gray-200);
        cursor: no-drop;
        opacity: 1 !important;
    }
    


    /* layout */

    .inner {
        max-width: 1200px;
        width: 100%;
        margin: 0 auto;
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

        .inner {
            padding-left: 24px;
            padding-right: 24px;
        }
    }

`;

export default GlobalStyle;
