export const randomColor = () => {
	const descriptions = [
	  "Easy",
	  "Noticable",
	  "Boring",
	  "Interesting"
	]
	const elements = [
	  "Foreground",
	  "Background",
	  "Accent",
	  "Text",
	  "Border"
	]
	return {
	  name: descriptions[Math.floor(Math.random() * descriptions.length)] + ' ' + elements[Math.floor(Math.random() * elements.length)],
	  hex: `#${Math.floor(Math.random()*16777215).toString(16)}`
	}
}