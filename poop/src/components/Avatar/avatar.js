import React from 'react';
import anime from 'animejs';
import AvatarStyle from './avatarStyle';
import me from './me.jpg';

const Avatar = () => (
    <AvatarStyle
        className="item item--style-1"
        animatioPathDuration="800"
        animatioPathEasing="easeInOutCubic"
        pathElasticity="300"
        morpPath="M 189,80.37 C 232.6,46.67 352.5,67.06 350.9,124.1 349.5,173.4 311.7,168 312.4,248.1 312.9,301.1 382.5,319.2 368.5,379.1 349.4,460.6 137.7,467.5 117.6,386.3 98.68,309.7 171.5,292.2 183.6,240.1 195.7,188.2 123.8,130.7 189,80.37 Z"
        pathScaleX="0.8"
        pathScaleY="1.1"
        pathTranslateX="0"
        pathTranslateY="30"
        pathRotate="5"
        animation-imageDuration="800"
        animation-imageEasing="easeInOutQuart"
        imageElasticity="300"
        imageScaleX="1.2"
        imageScaleY="1.2"
        imageTranslateX="-20"
        imageTranslateY="-45"
        imageRotate="-5"
        animationDecoDuration="1300"
        animationDecoEasing="easeOutQuad"
        decoElasticity="300"
        decoScaleX="0.8"
        decoScaleY="0.9"
        decoTranslateX="-5"
        decoTranslateY="-5"
        decoRotate="2"
    >
        <svg className="item__svg" width="500px" height="500px" viewBox="0 0 500 500">
            <clipPath id="clipShape1">
                <path
                    className="item__clippath"
                    d="M 189,80.37 C 243,66.12 307.3,87.28 350.9,124.1 389.3,156.6 417,211.2 418.1,263.4 419.1,305.7 401.8,355.6 368.5,379.1 298.8,428 179.2,446.4 117.6,386.3 65.4,335.3 78.55,230.3 105.5,160.5 119.7,123.6 152.6,89.85 189,80.37 Z"
                />
            </clipPath>
            <g className="item__deco">
                <path
                    id="deco1"
                    d="M 161,54.69 C 230.4,4.986 303.7,8.661 414.4,92.19 465.7,130.9 432.3,211.4 460,279.5 481,331.2 449.7,430.4 381.1,427 287.1,422.3 172.4,503.8 99.27,444.6 21.03,381.1 10.32,258.3 55.25,145.6 73.73,99.3 129.3,77.36 161,54.69 Z"
                />
            </g>
            <g clipPath="url(#clipShape1)">
                <image
                    className="item__img"
                    src={me}
                    x="0"
                    y="0"
                    height="500px"
                    width="500px"
                />
            </g>
        </svg>
        <div className="item__meta">
            <div className="item__number">
                <span className="item__specimen">21</span>
                <span className="item__reference">BX3</span>
            </div>
            <h2 className="item__title">Codium fasciculatus</h2>
            <h3 className="item__subtitle">Exoplanet Gliese 180 b</h3>
        </div>
    </AvatarStyle>
);

export default Avatar;