import iconsSprite from "../../assets/sprite.svg";

export const Icon = ({ iconName, width, height, fill, style }) => {
  return (
		<svg fill={fill} width={width} height={height} style={style}>
			<use href={`${iconsSprite}#icon-${iconName}`} />
		</svg>
	);
};
