import Colors from 'material-ui/lib/styles/colors';
import ColorManipulator from 'material-ui/lib/utils/color-manipulator';
import Spacing from 'material-ui/lib/styles/spacing';
import zIndex from 'material-ui/lib/styles/zIndex';

export default {
	zIndex,
	spacing: Spacing,
	fontFamily: 'Open Sans, sans-serif',
	palette: {
		primary1Color: '#F8B000',
		primary2Color: Colors.cyan700,
		primary3Color: Colors.lightBlack,
		accent1Color: '#F8B000',
		accent2Color: Colors.grey100,
		accent3Color: Colors.grey500,
		textColor: Colors.darkBlack,
		alternateTextColor: Colors.white,
		canvasColor: Colors.white,
		borderColor: Colors.grey300,
		disabledColor: ColorManipulator.fade(Colors.darkBlack, 0.3),
		pickerHeaderColor: Colors.cyan500,
	},
};
