import React from "react";
// styles globaux importés via src/styles/main.scss
import { colors } from "../styles/theme";

// Hypothèse simplification : on garde seulement personnalisation valeur / label / unité / icône / couleur.
function CardInfo({
    value = 1930,
    unit = "kCal",
    label = "Calories",
    iconSrc,
    icon, // ReactNode prioritaire
    color = colors.primary,
    className = "",
}) {
    const displayValue = typeof value === "number" ? value.toLocaleString("fr-FR") : value;

    // Génère un fond translucide simple si couleur hex.
    const bg = /^#?[0-9A-Fa-f]{6}$/.test(color)
        ? (() => {
                const hex = color.replace('#','');
                const r = parseInt(hex.slice(0,2),16);
                const g = parseInt(hex.slice(2,4),16);
                const b = parseInt(hex.slice(4,6),16);
                return `rgba(${r},${g},${b},0.1)`;
            })()
        : color;

    return (
        <div className={`infoCard ${className}`.trim()} role="group" aria-label={`${displayValue}${unit} ${label}`}>
            <div className="infoCard__icon" style={{ backgroundColor: bg }}>
                {icon ? icon : iconSrc && <img src={iconSrc} alt="" aria-hidden="true" />}
            </div>
            <div className="infoCard__texts">
                <div className="infoCard__value">{displayValue}{unit}</div>
                <div className="infoCard__label">{label}</div>
            </div>
        </div>
    );
}

export default CardInfo;