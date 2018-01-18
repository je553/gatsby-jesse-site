import styled from 'styled-components';

const AvatarStyle = styled.div`
    .item {
        position: relative;
        width: 500px;
        max-width: 100%;
        margin: 0 0 0 auto;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        grid-column: span 2;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
    }
    .item--style-1 .item__deco {
        fill: #dcdcde;
    }
    .item__svg {

    }
    .item__clippath,
    .item__deco,
    .item__img {
        transform-origin: 50% 50%;
    }
    .item__meta {
        position: absolute;
        top: 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
    }
    .item__number {
        position: absolute;
        top: 0;
        width: 100%;
        padding: 12.5% 0 0 3em;
        letter-spacing: 0.5em;
        text-transform: uppercase;
    }
    .item__specimen {
        font-size: 5em;
        font-weight: 500;
        line-height: 0.9;
        vertical-align: text-bottom;
        letter-spacing: -0.025em;
    }
    .item__reference {
        font-size: 1.25em;
        -webkit-writing-mode: vertical-rl;
        writing-mode: vertical-rl;
    }
    .item__title {
        font-size: 1.165em;
        font-weight: 600;
        width: 100%;
        margin: 1em 0 0 0;
        text-align: center;
        letter-spacing: 0.125em;
        color: #fff;
    }
    .item__subtitle {
        font-size: 1em;
        font-weight: 500;
        margin: 0.5em 0 0;
        text-align: center;
        letter-spacing: 0.15em;
        opacity: 0;
    }
    @media screen and (max-width: 40em) {
        .item__number {
            font-size: 0.75em;
        }
        .item__svg {
            min-height: 360px;
        }
    }
`;

export default AvatarStyle;