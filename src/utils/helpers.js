export function formatAmount(value) {
	if (typeof value !== "string") return value;
	return value.replace(/([\d.]+)\s*([a-zA-Z]+)/, "$1 $2");
}
