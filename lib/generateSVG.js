const generateSVG = (letter1, letter2, letter3, textColor, shapeColor) => {
    const svgContent = `
    <svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
    <polygon points="150,10 290,290 10,290" fill=${shapeColor} />
    <text x="50" y="100" font-size="80" fill=${textColor}>${letter1}</text>
    <text x="140" y="220" font-size="80" fill=${textColor}>${letter2}</text>
    <text x="230" y="100" font-size="80" fill=${textColor}>${letter3}</text>
    </svg>
    `

    return svgContent;
};

module.exports(generateSVG);