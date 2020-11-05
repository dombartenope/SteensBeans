import styled from 'styled-components';

const MenuItemStyles = styled.div`
    display: grid;
    grid-template-columns: 100px 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 0.13rem;
    align-content: center;
    align-items: center;
    position: relative;
    .gatsby-image-wrapper {
        grid-row: span 2;
        height: 100%;
    }
    p {
        margin: 0;
    }
    button {
            color: var(--white);
            font-size: 2.5rem;
            letter-spacing: 0.3rem;
    }
    button + button {
        margin-left: 0.25rem;
    }
    .remove {
        background: none;
        color: var(--red);
        font-size: 3rem;
        position: absolute;
        top: 0;
        right: 0;
        box-shadow: none;
        line-height: 1rem;
    }
    @media (max-width: 1000px) {
        .sizes{
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
        }
    }
`;

export default MenuItemStyles;