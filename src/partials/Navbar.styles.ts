import { IconButton } from "@mui/material"
import styled from "styled-components"

export const Wrapper = styled.nav`

        position: sticky;
        top: 0;
        background-color: white;
        border-bottom: 1px solid orange;
        text-decoration: none;
        z-index: 50;
        nav, nav a:link, nav a:visited, nav a:active {
            display: flex;
            justify-content: space-between;
            gap: 5px;
            color: orange;
            text-decoration: none;
            font-size: 1rem;
            text-transform: uppercase;
        }
        nav a:hover {
            color: rgba(255, 166, 0, 0.678);
        }
`

export const StyledButton = styled(IconButton)`
    /* z-index: 100; */
    /* right: 500px; */
    /* top: 500px; */
    /* bottom: 50px; */
`