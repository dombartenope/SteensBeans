import styled from 'styled-components';

const OrderStyles = styled.form`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    fieldset {
        grid-column: span 2;
        max-height: 600px;
        overflow: auto;
        display: grid;
        gap: 1rem;
        align-content: flex-start;
        &.order, &.menu {
            grid-column: span 1;
        }
        @media (max-width: 900px) {
            fieldset.menu,
            fieldset.order {
                grid-column: span 2;
            }
        }
        button {
            color: var(--white);
            font-size: 2.5rem;
            letter-spacing: 0.3rem;
        }
    }
`;

export default OrderStyles;