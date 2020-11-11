import styled from 'styled-components';

export const HomePageGrid = styled.div`
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(2, minmax(auto, 1fr));
    .brown {
        background: var(--brown);
        color: white;
        letter-spacing: .3rem;
        font-weight: 300;
    }
`;

export const ItemsGrid = styled.div`
    display: grid;
    gap: 20px;
    grid-template-columns: 1fr 1fr;
`;

//Single grid item for homepage
export const ItemStyles = styled.div`
    text-align: center;
    position: relative;
    img {
        height: auto;
        font-size: 0;
    }
    p {
        transform: rotate(-2deg) translateY(-140%);
        position: absolute;
        width: 100%;
        left: 0;
    }
    img.loading {
        --shine: white;
        --background: var(--grey);
        background-image: linear-gradient(
            90deg, 
            var(--background) 0px, 
            var(--shine) 40px, 
            var(--background) 80px
        );
        background-size: 500px;
        animation: shine 1s infinite linear;
    }
    @keyframes shine {
        from {
            background-position: 200%;
        }
        to {
            background-position: -40px;
        }
    }
`;