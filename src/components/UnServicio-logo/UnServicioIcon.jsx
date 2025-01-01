import React from 'react';
import './UnServicioLogo.css';


const UnServicioIcon = ({ color }) => {

    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="logo-unservicio-svg" viewBox="0 0 800 1200" width="80pt" height="120pt" fill={color || 'black'} preserveAspectRatio="xMidYMid meet">
            <g transform="translate(-200,1200) scale(0.1,-0.1)" stroke="none">
                <path d="M5645 11235c-712-71-1365-336-1930-786-164-130-431-396-561-559-440-553-695-1163-786-1880-8-65-13-209-13-375 0-309 11-388 91-715 281-1142 1211-2977 2654-5235 345-539 474-727 542-791 167-155 391-188 595-88 130 63 183 133 620 812 1587 2467 2568 4460 2764 5612 43 255 37 637-16 960-252 1536-1459 2752-2987 3009-294 50-686 64-973 36zm830-364c377-59 691-158 1016-322 894-451 1545-1299 1743-2271 51-250 60-346 61-633 0-304-8-364-86-677-285-1138-1317-3109-2909-5558-159-245-187-283-232-306-58-30-160-12-204 37-44 48-612 947-946 1494-1167 1916-1902 3418-2134 4360-72 292-79 352-79 650 1 287 10 383 61 633 276 1350 1394 2399 2764 2591 208 30 198 29 515 26 237-2 315-7 430-24z" />
                <path d="M5777 10200c-915-83-1719-631-2117-1445-352-720-359-1538-21-2270 245-528 726-1007 1256-1250 838-384 1798-310 2557 197 381 254 717 643 905 1047 471 1011 268 2185-512 2966-397 396-906 653-1461 735-160 23-459 33-607 20zm563-365c237-36 442-101 665-210 498-245 893-674 1099-1195 105-268 150-516 150-830 0-245-14-365-70-578-74-287-197-540-377-782-86-114-272-308-382-397-831-671-2021-671-2850 0-97 79-264 247-340 342-247 310-410 686-472 1085-24 160-24 501 0 660 115 743 571 1370 1232 1695 266 130 498 195 820 229 84 9 424-4 525-19z" />
                <path d="M5944 9506c-45-20-1793-1420-1821-1458-48-66-39-149 24-218 20-23 50-44 71-50 21-5 117-10 215-10l177 0 0-795c0-646 3-802 14-828 17-43 76-93 123-106 53-15 2453-15 2506 0 47 13 106 63 123 106 11 26 14 182 14 828l0 795 178 0c97 0 193 5 212 10 92 25 157 161 118 247-8 17-346 293-909 744-493 394-906 722-917 728-35 18-95 22-128 7zm686-891l619-490-620-3c-340-1-898-1-1240 0l-620 3 613 492c337 271 616 492 621 490 4-1 286-223 627-492zm410-1540l0-695-260 0-260 0 0 450c0 356-3 457-14 483-16 39-76 94-114 104-35 10-749 10-784 0-38-10-98-65-114-104-11-26-14-127-14-483l0-450-260 0-260 0 0 695 0 695 1040 0 1040 0 0-695zm-870-345l0-350-170 0-170 0 0 350 0 350 170 0 170 0 0-350z" />
            </g>
        </svg>
    );
};

export default UnServicioIcon;