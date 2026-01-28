import styled from 'styled-components';

export const Container = styled.div`
    background-color: #181f36;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 20px;
`;

export const Title = styled.h2`
    color: #fff;
    text-align: center;
    font-size: 38px;
    font-style: normal;
    font-weight: 600;
    margin-top: 20px;
`;

export const ContainerUsers = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    margin: 40px 0;

    @media (max-width: 1090px) {
        grid-template-columns: 1fr 1fr;
    }


    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }

`;

export const CardUsers = styled.div`
    background-color: #252d48;
    padding: 16px;
    border-radius: 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    max-width: 350px;

    > div {
        min-width: 0;
        flex: 1;
    }

    p {
        color: #fff;
        font-size: 15px;
        font-weight: 200;
        
    }
    h3 {
        color: #fff;
        font-size: 22px;
        margin-bottom: 3px;
    }
`;

export const TrashIcon = styled.img`
    cursor: pointer;
    flex-shrink: 0;
    width: 22px;
    height: 22px;

    &:hover {
        opacity: 0.7;
    }
    &:active {
        opacity: 0.4;
    }
`;

export const AvatarUser = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
    flex-shrink: 0;
`;