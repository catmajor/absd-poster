const FISH_SVG = `
<svg fill=_INSERT_COLOR_ 
    version="1.1" id="Capa_1" 
    xmlns="http://www.w3.org/2000/svg" 
    xmlns:xlink="http://www.w3.org/1999/xlink" 
    viewBox="0 0 612 612"
    xml:space="preserve">
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
    <g id="SVGRepo_iconCarrier"> 
        <g> 
            <g> 
                <path d="M488.375,349.528c21.16,0,38.375-17.215,38.375-38.375s-17.215-38.375-38.375-38.375S450,289.993,450,311.153 S467.215,349.528,488.375,349.528z M488.375,301.817c5.147,0,9.336,4.188,9.336,9.336c0,5.148-4.188,9.337-9.336,9.337 s-9.336-4.188-9.336-9.337C479.039,306.005,483.228,301.817,488.375,301.817z"></path> <path d="M500.495,208.99c-21.551-13.459-44.423-23.837-67.994-30.845c-11.587-3.448-23.363-6.072-35.259-7.885 c-24.874-24.134-56.709-40.608-92.365-47.734c-28.032-5.604-48.765-3.513-49.636-3.424l-16.089,1.694l14.691,67.875 c-5.077,2.174-10.124,4.502-15.124,7.008c-32.569,16.285-62.242,38.878-88.366,67.271L0,160.254l45.347,149.779 c3.323,10.971,3.323,22.57,0,33.541L0,493.353l150.359-102.695c26.125,28.387,55.797,50.986,88.366,67.271 c37.729,18.867,77.774,28.428,119.017,28.428c19.495,0,39.032-2.197,58.071-6.527l21.693-4.935l-13.258-17.866 c-19.893-26.812-33.618-54.021-40.81-80.867c-5.675-21.207-7.315-42.284-4.875-62.65c4.117-34.324,18.648-55.389,19.246-56.242 l17.162-23.002l-28.879-0.053c-0.16,0-0.32,0-0.486,0c-41.923,0-84.101,9.78-122.013,28.298 c-19.199,9.378-35.543,19.584-49.98,31.207c-11.723,9.443-21.711,20.207-31.367,30.615c-3.584,3.862-7.292,7.855-10.971,11.652 c-7.695,7.933-16.468,15.675-26.177,23.109l-93.437,63.812l21.468-70.92c4.988-16.475,4.988-33.891,0-50.366l-21.468-70.92 l79.895,54.571l-18.358,22.736l22.587,18.246l28.097-34.792c52.402-61.371,121.244-95.173,193.853-95.173 c44.861,0,87.714,12.559,127.369,37.332c35.851,22.398,67.78,54.5,92.755,93.189c-15.68,24.312-33.961,45.898-54.428,64.268 c-19.738,17.713-41.177,32.119-63.871,42.937c-2.115-3.016-4.307-6.345-6.652-10.082c-28.5-45.431-37.735-84.463-29.062-122.856 l-28.322-6.397c-5.616,24.863-4.964,50.662,1.931,76.697c5.794,21.883,15.889,44.121,30.857,67.981 c5.545,8.833,10.444,15.775,15.432,21.848l6.884,8.376l9.988-4.218c29.465-12.445,57.123-30.17,82.211-52.681 c24.679-22.144,46.401-48.498,64.576-78.325l4.597-7.553l-4.597-7.553C579.442,273.341,542.472,235.215,500.495,208.99z M192.128,356.193c3.904-4.022,7.719-8.14,11.41-12.115c9.365-10.094,18.21-19.625,28.292-27.747 c12.725-10.249,27.286-19.318,44.512-27.73c26.699-13.038,55.744-21.243,85.179-24.157c-4.608,11.196-9.235,25.982-11.552,43.754 c-3.157,24.234-1.445,49.209,5.095,74.231c6.374,24.389,17.375,48.842,32.776,72.935c-9.981,1.304-20.046,1.961-30.099,1.961 c-68.113,0-132.902-29.744-183.924-84.077C180.381,367.697,186.501,361.998,192.128,356.193z M281.377,178.612l-6.646-30.721 c16.545,0.883,43.41,4.864,70.405,19.662C323.461,168.583,302.152,172.28,281.377,178.612z">
                </path> 
            </g> 
        </g> 
    </g>
</svg>
`
const BUBBLE_SVG1 = `
<svg fill=_INSERT_COLOR_ 
    viewBox="0 0 750 750" 
    id="Layer_1" 
    xmlns="http://www.w3.org/2000/svg">
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
        <path d="M302.89,571.85c-37.81,.96-70.04-12.93-97.47-38.25-25.25-23.31-42.99-51.83-54.5-84-8.28-23.15-9-47.03-3.47-71.13,10.19-44.45,31.86-82.09,66.09-112.34,12.29-10.86,26.41-18.65,41.95-23.8,11.08-3.67,22.04-3.77,33.44-.29,13.76,4.21,28.08,6.58,41.84,10.78,34.27,10.47,65.67,26.59,92.71,50.36,27.52,24.2,46.34,53.37,50.23,90.77,2.7,26.01-2.75,50.79-13.63,73.95-27.71,59.01-74.45,93.49-138.84,103.82-5.97,.96-12.23,.13-18.35,.13Zm19.72-42.99c44.32,1.1,77.29-21.54,98.66-62.93,8.1-15.68,13.47-32.35,15.38-49.85,1.31-12.06,3.35-24.72,1.1-36.35-8.98-46.41-37.84-77.05-81.34-93.3-18.68-6.98-38.79-10.15-58.27-14.98-1.63-.4-4.02-.97-5.03-.16-9.22,7.27-20.82,5.82-31.18,8.8-22.29,6.42-39.83,19.73-54.18,37.43-18.44,22.73-30.98,48.59-38.84,76.69-7.61,27.21-2.03,51.68,15.38,73.96,17.45,22.33,39.18,38.38,65.72,48.23,22.38,8.31,45.46,12.32,72.61,12.46Z">
        </path>
        <path d="M499.55,511.24c.1-28.09,20.36-54.84,45.73-59.75,4.54-.88,9.68-.87,14.1,.33,15.4,4.17,29.06,11.61,39.33,24.19,2.74,3.35,5.37,7.01,7.07,10.95,13.33,30.87-5.34,72.07-37.39,82.67-19.31,6.38-36.34,1.67-50.59-12.22-12.83-12.51-18.41-28.32-18.26-46.17Zm84.21-3.62c.14-9.85-7.15-17.23-16.09-17.51-3.85-.12-7.67-.92-11.5-1.4-10.2-1.28-23.16,7.71-27.14,18.83-2.92,8.17,1.69,19.17,10.5,24.56,9.38,5.73,18.91,5.93,28.52,.39,9.94-5.73,14.54-14.66,15.71-24.87Z">
        </path>
        <path d="M533.41,239c-27.59-.31-48.28-14.07-55.13-37.73-5.34-18.44-3.23-36.36,7.37-52.7,9.74-15.01,22.87-19.71,40.49-16.77,24.77,4.13,40.29,20.7,51.39,40.52,17.72,31.63-6.74,69-44.13,66.68Zm4.97-35.8c1.15-.25,5.56-.68,9.54-2.21,9.36-3.59,11.28-9.23,5.46-17.16-3.57-4.86-8.18-9.06-12.77-13.05-7.63-6.64-26.5-4.71-32.94,3.03-5.17,6.22-4.89,13.83,1.19,20,7.19,7.3,16.34,9.64,29.52,9.39Z">
        </path>
        <path d="M271.69,340.67c-3.11,5.93-4.76,11.64-8.36,15.54-18.48,20-21.84,37.24-10.65,61.95,3.24,7.15,7.7,13.73,11.13,20.8,2.85,5.86,5.38,11.94,7.39,18.13,2.05,6.32-.13,12.16-4.26,17.05-4.38,5.19-11.15,5.4-16.19,.87-.97-.87-1.89-1.87-2.56-2.97-17.02-28.31-32.79-56.98-29.78-91.84,1.43-16.61,6.59-31.6,17.7-44.22,2.58-2.93,5.6-5.54,8.7-7.94,5.09-3.93,11.39-6.99,16.78-2.57,4.31,3.53,6.54,9.61,10.09,15.2Z">
        </path>
    </g>
</svg>
`

const BUBBLE_SVG2 = `
<svg fill=_INSERT_COLOR_ 
    viewBox="0 0 750 750" 
    id="Layer_1" 
    xmlns="http://www.w3.org/2000/svg">
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
        <path d="M302.89,571.85c-37.81,.96-70.04-12.93-97.47-38.25-25.25-23.31-42.99-51.83-54.5-84-8.28-23.15-9-47.03-3.47-71.13,10.19-44.45,31.86-82.09,66.09-112.34,12.29-10.86,26.41-18.65,41.95-23.8,11.08-3.67,22.04-3.77,33.44-.29,13.76,4.21,28.08,6.58,41.84,10.78,34.27,10.47,65.67,26.59,92.71,50.36,27.52,24.2,46.34,53.37,50.23,90.77,2.7,26.01-2.75,50.79-13.63,73.95-27.71,59.01-74.45,93.49-138.84,103.82-5.97,.96-12.23,.13-18.35,.13Zm19.72-42.99c44.32,1.1,77.29-21.54,98.66-62.93,8.1-15.68,13.47-32.35,15.38-49.85,1.31-12.06,3.35-24.72,1.1-36.35-8.98-46.41-37.84-77.05-81.34-93.3-18.68-6.98-38.79-10.15-58.27-14.98-1.63-.4-4.02-.97-5.03-.16-9.22,7.27-20.82,5.82-31.18,8.8-22.29,6.42-39.83,19.73-54.18,37.43-18.44,22.73-30.98,48.59-38.84,76.69-7.61,27.21-2.03,51.68,15.38,73.96,17.45,22.33,39.18,38.38,65.72,48.23,22.38,8.31,45.46,12.32,72.61,12.46Z">
        </path>
        <path d="M499.55,511.24c.1-28.09,20.36-54.84,45.73-59.75,4.54-.88,9.68-.87,14.1,.33,15.4,4.17,29.06,11.61,39.33,24.19,2.74,3.35,5.37,7.01,7.07,10.95,13.33,30.87-5.34,72.07-37.39,82.67-19.31,6.38-36.34,1.67-50.59-12.22-12.83-12.51-18.41-28.32-18.26-46.17Zm84.21-3.62c.14-9.85-7.15-17.23-16.09-17.51-3.85-.12-7.67-.92-11.5-1.4-10.2-1.28-23.16,7.71-27.14,18.83-2.92,8.17,1.69,19.17,10.5,24.56,9.38,5.73,18.91,5.93,28.52,.39,9.94-5.73,14.54-14.66,15.71-24.87Z">
        </path>
        <path d="M271.69,340.67c-3.11,5.93-4.76,11.64-8.36,15.54-18.48,20-21.84,37.24-10.65,61.95,3.24,7.15,7.7,13.73,11.13,20.8,2.85,5.86,5.38,11.94,7.39,18.13,2.05,6.32-.13,12.16-4.26,17.05-4.38,5.19-11.15,5.4-16.19,.87-.97-.87-1.89-1.87-2.56-2.97-17.02-28.31-32.79-56.98-29.78-91.84,1.43-16.61,6.59-31.6,17.7-44.22,2.58-2.93,5.6-5.54,8.7-7.94,5.09-3.93,11.39-6.99,16.78-2.57,4.31,3.53,6.54,9.61,10.09,15.2Z">
        </path>
    </g>
</svg>
`

const BUBBLE_SVG3 = `
<svg fill=_INSERT_COLOR_ 
    viewBox="0 0 750 750" 
    id="Layer_1" 
    xmlns="http://www.w3.org/2000/svg">
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
        <path d="M302.89,571.85c-37.81,.96-70.04-12.93-97.47-38.25-25.25-23.31-42.99-51.83-54.5-84-8.28-23.15-9-47.03-3.47-71.13,10.19-44.45,31.86-82.09,66.09-112.34,12.29-10.86,26.41-18.65,41.95-23.8,11.08-3.67,22.04-3.77,33.44-.29,13.76,4.21,28.08,6.58,41.84,10.78,34.27,10.47,65.67,26.59,92.71,50.36,27.52,24.2,46.34,53.37,50.23,90.77,2.7,26.01-2.75,50.79-13.63,73.95-27.71,59.01-74.45,93.49-138.84,103.82-5.97,.96-12.23,.13-18.35,.13Zm19.72-42.99c44.32,1.1,77.29-21.54,98.66-62.93,8.1-15.68,13.47-32.35,15.38-49.85,1.31-12.06,3.35-24.72,1.1-36.35-8.98-46.41-37.84-77.05-81.34-93.3-18.68-6.98-38.79-10.15-58.27-14.98-1.63-.4-4.02-.97-5.03-.16-9.22,7.27-20.82,5.82-31.18,8.8-22.29,6.42-39.83,19.73-54.18,37.43-18.44,22.73-30.98,48.59-38.84,76.69-7.61,27.21-2.03,51.68,15.38,73.96,17.45,22.33,39.18,38.38,65.72,48.23,22.38,8.31,45.46,12.32,72.61,12.46Z">
        </path>
        <path d="M533.41,239c-27.59-.31-48.28-14.07-55.13-37.73-5.34-18.44-3.23-36.36,7.37-52.7,9.74-15.01,22.87-19.71,40.49-16.77,24.77,4.13,40.29,20.7,51.39,40.52,17.72,31.63-6.74,69-44.13,66.68Zm4.97-35.8c1.15-.25,5.56-.68,9.54-2.21,9.36-3.59,11.28-9.23,5.46-17.16-3.57-4.86-8.18-9.06-12.77-13.05-7.63-6.64-26.5-4.71-32.94,3.03-5.17,6.22-4.89,13.83,1.19,20,7.19,7.3,16.34,9.64,29.52,9.39Z">
        </path>
        <path d="M271.69,340.67c-3.11,5.93-4.76,11.64-8.36,15.54-18.48,20-21.84,37.24-10.65,61.95,3.24,7.15,7.7,13.73,11.13,20.8,2.85,5.86,5.38,11.94,7.39,18.13,2.05,6.32-.13,12.16-4.26,17.05-4.38,5.19-11.15,5.4-16.19,.87-.97-.87-1.89-1.87-2.56-2.97-17.02-28.31-32.79-56.98-29.78-91.84,1.43-16.61,6.59-31.6,17.7-44.22,2.58-2.93,5.6-5.54,8.7-7.94,5.09-3.93,11.39-6.99,16.78-2.57,4.31,3.53,6.54,9.61,10.09,15.2Z">
        </path>
    </g>
</svg>
`
const BUBBLE_SVG4 = `
<svg fill=_INSERT_COLOR_ 
    viewBox="0 0 750 750" 
    id="Layer_1" 
    xmlns="http://www.w3.org/2000/svg">
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
        <path d="M499.55,511.24c.1-28.09,20.36-54.84,45.73-59.75,4.54-.88,9.68-.87,14.1,.33,15.4,4.17,29.06,11.61,39.33,24.19,2.74,3.35,5.37,7.01,7.07,10.95,13.33,30.87-5.34,72.07-37.39,82.67-19.31,6.38-36.34,1.67-50.59-12.22-12.83-12.51-18.41-28.32-18.26-46.17Zm84.21-3.62c.14-9.85-7.15-17.23-16.09-17.51-3.85-.12-7.67-.92-11.5-1.4-10.2-1.28-23.16,7.71-27.14,18.83-2.92,8.17,1.69,19.17,10.5,24.56,9.38,5.73,18.91,5.93,28.52,.39,9.94-5.73,14.54-14.66,15.71-24.87Z">
        </path>
        <path d="M533.41,239c-27.59-.31-48.28-14.07-55.13-37.73-5.34-18.44-3.23-36.36,7.37-52.7,9.74-15.01,22.87-19.71,40.49-16.77,24.77,4.13,40.29,20.7,51.39,40.52,17.72,31.63-6.74,69-44.13,66.68Zm4.97-35.8c1.15-.25,5.56-.68,9.54-2.21,9.36-3.59,11.28-9.23,5.46-17.16-3.57-4.86-8.18-9.06-12.77-13.05-7.63-6.64-26.5-4.71-32.94,3.03-5.17,6.22-4.89,13.83,1.19,20,7.19,7.3,16.34,9.64,29.52,9.39Z">
        </path>
    </g>
</svg>
`
const BUBBLE_SVG5 = `
<svg fill=_INSERT_COLOR_ 
    viewBox="0 0 750 750" 
    id="Layer_1" 
    xmlns="http://www.w3.org/2000/svg">
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
        <path d="M302.89,571.85c-37.81,.96-70.04-12.93-97.47-38.25-25.25-23.31-42.99-51.83-54.5-84-8.28-23.15-9-47.03-3.47-71.13,10.19-44.45,31.86-82.09,66.09-112.34,12.29-10.86,26.41-18.65,41.95-23.8,11.08-3.67,22.04-3.77,33.44-.29,13.76,4.21,28.08,6.58,41.84,10.78,34.27,10.47,65.67,26.59,92.71,50.36,27.52,24.2,46.34,53.37,50.23,90.77,2.7,26.01-2.75,50.79-13.63,73.95-27.71,59.01-74.45,93.49-138.84,103.82-5.97,.96-12.23,.13-18.35,.13Zm19.72-42.99c44.32,1.1,77.29-21.54,98.66-62.93,8.1-15.68,13.47-32.35,15.38-49.85,1.31-12.06,3.35-24.72,1.1-36.35-8.98-46.41-37.84-77.05-81.34-93.3-18.68-6.98-38.79-10.15-58.27-14.98-1.63-.4-4.02-.97-5.03-.16-9.22,7.27-20.82,5.82-31.18,8.8-22.29,6.42-39.83,19.73-54.18,37.43-18.44,22.73-30.98,48.59-38.84,76.69-7.61,27.21-2.03,51.68,15.38,73.96,17.45,22.33,39.18,38.38,65.72,48.23,22.38,8.31,45.46,12.32,72.61,12.46Z">
        </path>
        <path d="M271.69,340.67c-3.11,5.93-4.76,11.64-8.36,15.54-18.48,20-21.84,37.24-10.65,61.95,3.24,7.15,7.7,13.73,11.13,20.8,2.85,5.86,5.38,11.94,7.39,18.13,2.05,6.32-.13,12.16-4.26,17.05-4.38,5.19-11.15,5.4-16.19,.87-.97-.87-1.89-1.87-2.56-2.97-17.02-28.31-32.79-56.98-29.78-91.84,1.43-16.61,6.59-31.6,17.7-44.22,2.58-2.93,5.6-5.54,8.7-7.94,5.09-3.93,11.39-6.99,16.78-2.57,4.31,3.53,6.54,9.61,10.09,15.2Z">
        </path>
    </g>
</svg>
`
CAR_SVG = `
<svg fill="#000000"
    height="200px"
    width="200px"
    version="1.1"
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg" 
    xmlns:xlink="http://www.w3.org/1999/xlink" 
    viewBox="0 0 460.384 460.384" xml:space="preserve">
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
    <g id="SVGRepo_iconCarrier"> 
        <g> 
            <path d="M95.252,283.11c-13.807,0-25.039,11.232-25.039,25.039s11.232,25.039,25.039,25.039s25.039-11.233,25.039-25.039 S109.059,283.11,95.252,283.11z M95.252,318.188c-5.536,0-10.039-4.504-10.039-10.039s4.503-10.039,10.039-10.039 s10.039,4.503,10.039,10.039S100.788,318.188,95.252,318.188z"></path> 
            <path d="M357.012,283.11c-13.807,0-25.04,11.232-25.04,25.039s11.233,25.039,25.04,25.039c13.806,0,25.038-11.233,25.038-25.039 S370.818,283.11,357.012,283.11z M357.012,318.188c-5.536,0-10.04-4.504-10.04-10.039s4.504-10.039,10.04-10.039 c5.535,0,10.038,4.503,10.038,10.039S362.547,318.188,357.012,318.188z"></path> 
            <path d="M409.227,196.421l-66.917-7.645l-35.714-58.056c-10.905-17.728-30.61-28.741-51.424-28.741H133.676 c-34.925,0-65.792,23.518-75.063,57.193l-0.948,3.445c-4.607,16.733-17.845,30.052-34.549,34.762 C9.506,201.217,0,213.773,0,227.914v83.012c0,4.142,3.358,7.5,7.5,7.5h38.557c4.757,22.798,25.006,39.978,49.195,39.978 s44.438-17.18,49.195-39.978h163.37c4.757,22.798,25.006,39.978,49.195,39.978s44.438-17.18,49.195-39.978h40.477 c3.813,0,7.02-2.861,7.452-6.65l5.874-51.483C463.614,228.69,440.834,200.037,409.227,196.421z M15,294.313h31.949 c-0.843,2.938-1.43,5.983-1.724,9.113H15V294.313z M95.252,343.404c-19.44,0-35.255-15.815-35.255-35.255 s15.815-35.256,35.255-35.256s35.255,15.816,35.255,35.256S114.692,343.404,95.252,343.404z M357.012,343.404 c-19.44,0-35.255-15.815-35.255-35.255s15.815-35.256,35.255-35.256s35.255,15.816,35.255,35.256S376.452,343.404,357.012,343.404z M357.012,257.893c-16.987,0-32.021,8.48-41.122,21.42H182.425c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5h126.284 c-0.843,2.938-1.43,5.983-1.724,9.113H145.279c-2.389-25.504-23.909-45.533-50.027-45.533c-16.987,0-32.021,8.48-41.122,21.42H15 v-51.399c0-7.455,5.012-14.075,12.187-16.098c21.728-6.126,38.947-23.452,44.94-45.218l0.948-3.445 c7.484-27.186,32.405-46.174,60.601-46.174h121.496c15.643,0,30.452,8.277,38.647,21.6l37.626,61.164 c1.207,1.962,3.249,3.26,5.537,3.522l70.541,8.059c16.002,1.831,28.943,12.335,34.67,26.276h-23.413c-4.142,0-7.5,3.358-7.5,7.5 s3.358,7.5,7.5,7.5h26.578c0.052,1.975-0.023,3.975-0.253,5.993l-2.364,20.72h-44.608 C389.033,266.373,373.998,257.893,357.012,257.893z M407.038,303.426c-0.293-3.13-0.881-6.175-1.724-9.113h35.716l-1.04,9.113 H407.038z"></path> 
            <path d="M255.565,215.222h-15.76c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5h15.76c4.142,0,7.5-3.358,7.5-7.5 S259.708,215.222,255.565,215.222z"></path> <path d="M154.846,222.722c0-4.142-3.358-7.5-7.5-7.5h-15.76c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5h15.76 C151.488,230.222,154.846,226.864,154.846,222.722z"></path> <path d="M164.136,283.941c-1.314-3.113-4.658-5.069-8.025-4.546c-3.049,0.474-5.522,2.768-6.213,5.776 c-1.496,6.51,6.051,11.564,11.54,7.829C164.343,291.024,165.476,287.186,164.136,283.941 C163.946,283.491,164.326,284.401,164.136,283.941z"></path> 
            <path d="M286.014,143.391c-6.531-10.637-18.348-17.245-30.841-17.245h-121.5c-24.087,0-45.371,16.217-51.761,39.443l-0.943,3.438 c-2.468,8.956-6.268,24.34-6.429,24.991c-0.553,2.238-0.045,4.606,1.376,6.422c1.422,1.815,3.599,2.876,5.905,2.876h227.64 c2.717,0,5.222-1.469,6.547-3.841c1.326-2.372,1.265-5.275-0.159-7.589L286.014,143.391z M199.352,141.145v47.169h-69.054v-47.018 c1.115-0.098,2.24-0.151,3.375-0.151H199.352z M95.432,173.002l0.944-3.441c2.86-10.395,9.865-18.839,18.922-23.747v42.499H91.432 C92.697,183.321,94.242,177.323,95.432,173.002z M214.352,188.314v-47.169h40.821c7.316,0,14.235,3.868,18.062,10.1l22.807,37.069 H214.352z"></path> 
        </g> 
    </g>
</svg>
`

const SWIMMER_SVG = `<svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="800px" height="800px" viewBox="0 0 32 32">
    <path d="M 23.5 11 C 21.578125 11 20 12.578125 20 14.5 C 20 16.421875 21.578125 18 23.5 18 C 25.421875 18 27 16.421875 27 14.5 C 27 12.578125 25.421875 11 23.5 11 Z M 13.71875 11.03125 C 13.355469 11.054688 13.003906 11.175781 12.6875 11.40625 L 7.40625 15.1875 L 8.59375 16.8125 L 13.84375 13.03125 L 16.125 15.65625 L 8.71875 21.9375 C 9.125 21.972656 9.558594 22 10 22 C 10.675781 22 11.324219 21.929688 11.96875 21.8125 L 17.40625 17.15625 L 19.4375 19.5 C 20.175781 19.308594 20.933594 19.144531 21.71875 19.0625 L 15.34375 11.71875 C 14.917969 11.222656 14.324219 10.992188 13.71875 11.03125 Z M 23.5 13 C 24.339844 13 25 13.660156 25 14.5 C 25 15.34375 24.339844 16 23.5 16 C 22.65625 16 22 15.34375 22 14.5 C 22 13.660156 22.65625 13 23.5 13 Z M 23 20 C 20.5625 20 18.425781 20.816406 16.34375 21.5625 C 14.261719 22.308594 12.234375 23 10 23 C 4.503906 23 1.6875 20.28125 1.6875 20.28125 L 0.3125 21.71875 C 0.3125 21.71875 3.816406 25 10 25 C 12.644531 25 14.90625 24.191406 17 23.4375 C 19.09375 22.683594 21.015625 22 23 22 C 26.96875 22 30.34375 24.78125 30.34375 24.78125 L 31.65625 23.21875 C 31.65625 23.21875 27.875 20 23 20 Z"/>
</svg>`


class Animatable {
    constructor(DOM_LIST, DOM = null) {
        this.DOM_LIST = DOM_LIST
        this.DOM = DOM ?? this.createDOMElement()
        this.posTop = 0
        this.posLeft = 0
        this.eleWidth = 100
        this.eleHeight = 100
        this.actionList = []
        this.actionsRequested = {}
        this.top = 0
        this.left = 0
    }
    callAnimationFrame() {
        this.actionList.forEach(ele => ele(this))
        this.actionList = []   
    }
    load () {
        this.DOM.style.position = "fixed"
        this.DOM.style.display = "block"
        this.DOM.style.width = `${this.width}px`
        this.DOM.style.height = `${this.height}px`
    }
    unload () {
        this.DOM.style.display = "none"
    }
    createDOMElement() {
        let element = document.createElement("div");
        this.DOM = element
        this.DOM_LIST.main.appendChild(this.DOM)
        return element
    }
    set left (px) {
        this.posLeft = px
        if (!this.actionsRequested.updatePosition) {
            this.actionsRequested.updatePosition = true
            this.actionList.push(this.updatePosition)
        }
        return this.posLeft
    }
    get left () {
        return this.posLeft
    }
    set top (px) {
        this.posTop = px
        if (!this.actionsRequested.updatePosition) {
            this.actionsRequested.updatePosition = true
            this.actionList.push(this.updatePosition)
        }
        return this.posTop
    }
    get top () {
        return this.posTop
    }
    set bottom (px) {
        this.top = 1080 - (px + this.height)
        return (px + this.height)
    }
    get bottom () {
        return 1080 - this.top
    }
    set right (px) {
        this.left = 1080 - (px + this.width)
        return (px + this.width)
    }
    get right () {
        return 1080 - this.left
    }
    set width (px) {
        this.eleWidth = px
        if (!this.actionsRequested.updateSize) {
            this.actionsRequested.updateSize = true
            this.actionList.push(this.updateSize)
        }
        return px
    }
    get width () {
        return this.eleWidth
    }
    set height (px) {
        this.eleHeight = px
        if (!this.actionsRequested.updateSize) {
            this.actionsRequested.updateSize = true
            this.actionList.push(this.updateSize)
        }
        return px
    }
    get height () {
        return this.eleHeight
    }
    appendChild(element) {
        this.DOM.appendChild(element)
    }
    updatePosition(thisObject) {
        thisObject.DOM.style.left = `${thisObject.left}px`
        thisObject.DOM.style.top = `${thisObject.top}px`
        thisObject.actionsRequested.updatePosition = false
    }
    updateSize(thisObject) {
        thisObject.DOM.style.height = `${thisObject.height}px`
        thisObject.DOM.style.width = `${thisObject.width}px`
    }
}

class AnimatableWithSVG extends Animatable {
    constructor(DOM_LIST, svgHTML) {
        super(DOM_LIST)
        this.eleYTransform = 1
        this.eleRotation = 0
        this.svg = new SVG(svgHTML, this)   
    }
    callAnimationFrame () {
        super.callAnimationFrame()
    }
    set yTransform (yTransform) {
        this.eleYTransform = yTransform
        if (!this.actionsRequested.updateTransform) {
            this.actionsRequested.updateTransform = true
            this.actionList.push(this.updateTransform)
        }
    }
    get yTransform () {
        return this.eleYTransform
    }
    set rotation (rotation) {
        this.eleRotation = rotation
        if (!this.actionsRequested.updateTransform) {
            this.actionsRequested.updateTransform = true
            this.actionList.push(this.updateTransform)
        }
    }
    get rotation () {
        return this.eleRotation
    }
    updateTransform(thisObject) {
        thisObject.svg.updateTransform()
        thisObject.actionsRequested.updateTransform = false
    }
    updateSize(thisObject) {
        super.updateSize(thisObject)
        thisObject.svg.style.width = `${thisObject.width}px`
        thisObject.svg.style.height = `${thisObject.height}px`
    }
}
class Fish extends AnimatableWithSVG {
    constructor(DOM_LIST) {
        super(DOM_LIST, FISH_SVG)
        this.svg.color = "yellow"
        this.DOM.setAttribute("class", "fish")
    }
}
class Bubble extends AnimatableWithSVG {
    constructor (DOM_LIST, BUBBLE_SVG) {
        super(DOM_LIST, BUBBLE_SVG)
        this.svg.color = "yellow"
        this.DOM.setAttribute("class", "bubble")
    }
}
class Car extends AnimatableWithSVG {
    constructor (DOM_LIST) {
        super(DOM_LIST, CAR_SVG)
        this.svg.color = "yellow"
        this.DOM.setAttribute("class", "car")
    }
}
class Swimmer extends AnimatableWithSVG {
    constructor (DOM_LIST, color = "yellow") {
        super(DOM_LIST, SWIMMER_SVG)
        this.svg.color = color
        this.DOM.classList.add("swimmer")
    }
}

const DOM_LIST = {
    main: document.querySelector("main"),
    root: document.querySelector(":root")
}

class SVG {
    constructor(innerHTML, parent) {
        this.parent = parent
        parent.DOM.innerHTML = innerHTML
        this.DOM = parent.DOM.children[0]
        this.pathColor = null
        this.rotation = "rotate(0deg)"
    }
    set color (color) {
        this.pathColor = color
        this.DOM.setAttribute("fill", color)
    }
    get color () {
        return this.pathColor
    }
    get style () {
        return this.DOM.style
    }
    updateYTransform() {
        this.yTransform = `scale(${this.parent.yTransform}, 1)`
        this.flipped = !this.flipped
    }
    updateRotation() {
        this.rotation = `rotate(${this.parent.rotation}deg)`
    }
    updateTransform() {
        this.updateYTransform()
        this.updateRotation()
        this.DOM.style.transform = `${this.yTransform} ${this.rotation}`
    }
}

var linearPath = (fish, durationOffset, animationFrames) => {
    let cycleMult = Math.asin(Math.sin((durationOffset)/100*Math.PI))/Math.PI + 0.5
    let cycleNext = Math.asin(Math.sin((durationOffset+1)/100*Math.PI))/Math.PI + 0.5
    var turned
    if (cycleNext-cycleMult<0) {
        turned = true
        fish.yTransform = -1
    } else {
        turned = false
        fish.yTransform = 1
    }
    var prevCycle = 0
    this.load = () => {
        fish.load()
    }
    this.callAnimationFrame = () => {
        onAnimationFrame(animationFrames.count.frame)
        fish.callAnimationFrame()
    }
    function pathDecision (cycleMult) {
        if (cycleMult <= 0.1) {
            let cycleTotal = prevCycle-cycleMult
            if (cycleTotal<=0) turned = false
            fish.yTransform = turned?-cycleMult*10:cycleMult*10
            prevCycle = cycleMult
        } else if (cycleMult >= 0.9) {
            let cycleTotal = cycleMult-prevCycle
            if (cycleTotal<=0) turned = true
            fish.yTransform = turned?(cycleMult-1)*10:-(cycleMult-1)*10
            prevCycle = cycleMult
        } else {
            const fishPath = (1080 - fish.width)
            fish.left = ((cycleMult-0.1) * fishPath) * 1.25
        }
    }
    function onAnimationFrame (frame) {
        cycleMult = Math.asin(Math.sin((frame+durationOffset)/100*Math.PI))/Math.PI + 0.5
        pathDecision(cycleMult)
    }
    return {load, callAnimationFrame}
}

var verticalPathReset = (bubble, durationOffset, animationFrames) => {
    let cycleMult = Math.asin(Math.sin((durationOffset)/100*Math.PI))/Math.PI + 0.5
    let cycleNext = Math.asin(Math.sin((durationOffset+1)/100*Math.PI))/Math.PI + 0.5
    var turned
    var prevCycle
    if (cycleNext-cycleMult<0) {
        turned = false
        bubble.bottom = -bubble.height
    } else turned = true
    this.load = () => {
        bubble.load()
    }
    this.callAnimationFrame = () => {
        onAnimationFrame(animationFrames.count.frame)
        bubble.callAnimationFrame()
    }
    function onAnimationFrame (frame) {
        cycleMult = Math.asin(Math.sin((frame+durationOffset)/100*Math.PI))/Math.PI + 0.5
        let cycleTotal = prevCycle-cycleMult
        if (cycleTotal<=0) turned = false
        else turned = true
        prevCycle = cycleMult
        if (!turned) {
            var bubbleHeight = -bubble.height + cycleMult * (1080+2*bubble.height)
            bubble.bottom = bubbleHeight
        }
        
        
    }
    return {load, callAnimationFrame}
}

var recordingHelp = (DOM_LIST, durationOffset, animationFrames) => {
    var green = false;
    this.load = () => {}
    this.callAnimationFrame = (frame) => {
        if (frame%200===0) {
            DOM_LIST.root.style.setProperty("--recording-help", "#0f0")
            green = true
        } else if (green) {
            DOM_LIST.root.style.setProperty("--recording-help", "red")
            green = false
        }
    }
    return {load, callAnimationFrame}
}

var animationFrames = () => {
    var list = []
    var count = {frame: 0}
    this.timer = setInterval(() => {
        list.forEach(ele => {
            ele.callAnimationFrame(count.frame)
        }) 
        count.frame++
    }, 50)
    var addToList = (obj) => {
        obj.load()
        list.push(obj)
    }
    return {addToList, list, count}
}

