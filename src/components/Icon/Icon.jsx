import iconsSprite from "../../assets/sprite.svg";

export const Icon = ({ iconName, width, height, fill }) => {
  return (
		<svg fill={fill} width={width} height={height}>
			<use href={`${iconsSprite}#icon-${iconName}`} />
		</svg>
	);
};
