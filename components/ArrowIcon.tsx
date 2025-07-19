const ArrowIcon = ({color = "#0033E5", size = 21, height = 0, width = 0}) => (


    <svg
        width={width == 0 ? size : width}
        height={height == 0 ? size : height}

        viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="guidance:down-arrow" clipPath="url(#clip0_85_371)">
            <path id="Vector"
                  d="M14.0013 15.8336C14.0013 15.2152 14.6121 14.2919 15.2305 13.5169C16.0255 12.5169 16.9755 11.6444 18.0646 10.9786C18.8813 10.4794 19.8713 10.0002 20.668 10.0002M20.668 10.0002C19.8713 10.0002 18.8805 9.52107 18.0646 9.02191C16.9755 8.35524 16.0255 7.48274 15.2305 6.48441C14.6121 5.70857 14.0013 4.78357 14.0013 4.16691M20.668 10.0002H0.667961"
                  stroke={color}/>
        </g>
        <defs>
            <clipPath id="clip0_85_371">
                <rect width="20" height="20" fill="white" transform="translate(0.666656)"/>
            </clipPath>
        </defs>
    </svg>
);

export default ArrowIcon;
